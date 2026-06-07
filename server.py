#!/usr/bin/env python3
import argparse
import hashlib
import hmac
import json
import secrets
import socket
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "attempts"
DATA_FILE = DATA_DIR / "attempts.json"
HISTORY_FILE = DATA_DIR / "history.json"
ADMIN_EMAIL = "sergeymusic0304@gmail.com"
ADMIN_PASSWORD_SALT = "informatics-admin-v1"
ADMIN_PASSWORD_HASH = "dd0dfdf7c2f5e871487e1251a51840d85f6e22962f293f8d94b2e22251e3809e"
SESSIONS = {}


def now_iso():
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def read_attempts():
    if not DATA_FILE.exists():
      return {}
    try:
        return json.loads(DATA_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}


def write_attempts(data):
    DATA_DIR.mkdir(exist_ok=True)
    tmp = DATA_FILE.with_suffix(".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.replace(DATA_FILE)


def read_history():
    if not HISTORY_FILE.exists():
        return []
    try:
        data = json.loads(HISTORY_FILE.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except json.JSONDecodeError:
        return []


def write_history(data):
    DATA_DIR.mkdir(exist_ok=True)
    tmp = HISTORY_FILE.with_suffix(".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.replace(HISTORY_FILE)


def save_history_attempt(attempt):
    if not attempt:
        return
    if not attempt.get("id"):
        attempt["id"] = f"{attempt.get('ip', 'attempt')}-{datetime.now(timezone.utc).timestamp()}-{secrets.token_hex(4)}"
    history = read_history()
    attempt_id = attempt.get("id")
    if attempt_id:
        for index, row in enumerate(history):
            if row.get("id") == attempt_id:
                history[index] = attempt
                write_history(history)
                return
    history.insert(0, attempt)
    write_history(history)


def local_addresses(port):
    addresses = [f"http://127.0.0.1:{port}/"]
    try:
        host = socket.gethostname()
        for addr in socket.gethostbyname_ex(host)[2]:
            if not addr.startswith("127."):
                addresses.append(f"http://{addr}:{port}/")
    except OSError:
        pass
    return addresses


class Handler(SimpleHTTPRequestHandler):
    server_version = "InformaticsQuizServer/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format, *args):
        print("%s - %s" % (self.client_address[0], format % args))

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/attempt-status":
            self.send_json(self.status_payload())
            return
        if parsed.path == "/api/server-info":
            self.send_json({"serverMode": True, "ip": self.client_ip()})
            return
        if parsed.path == "/api/admin/session":
            self.send_json({"authenticated": self.is_admin()})
            return
        if parsed.path == "/api/admin/attempts":
            if not self.require_admin():
                return
            self.send_json({"attempts": self.admin_attempts()})
            return
        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/start-attempt":
            self.start_attempt()
            return
        if parsed.path == "/api/finish-attempt":
            self.finish_attempt()
            return
        if parsed.path == "/api/admin/login":
            self.admin_login()
            return
        if parsed.path == "/api/admin/logout":
            self.admin_logout()
            return
        if parsed.path == "/api/admin/clear-all":
            if not self.require_admin():
                return
            write_attempts({})
            write_history([])
            self.send_json({"ok": True})
            return
        self.send_error(HTTPStatus.NOT_FOUND)

    def do_DELETE(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/admin/attempt":
            if not self.require_admin():
                return
            params = parse_qs(parsed.query)
            ip = params.get("ip", [""])[0].strip()
            attempts = read_attempts()
            removed = attempts.pop(ip, None)
            if removed:
                removed["unlockedForRetake"] = True
                removed["unlockedAt"] = now_iso()
                save_history_attempt(removed)
            write_attempts(attempts)
            self.send_json({"ok": True, "removed": bool(removed)})
            return
        self.send_error(HTTPStatus.NOT_FOUND)

    def client_ip(self):
        forwarded = self.headers.get("X-Forwarded-For", "").split(",")[0].strip()
        return forwarded or self.client_address[0]

    def read_json_body(self):
        length = int(self.headers.get("Content-Length", "0") or "0")
        raw = self.rfile.read(length).decode("utf-8") if length else "{}"
        try:
            return json.loads(raw)
        except json.JSONDecodeError:
            return {}

    def cookie_value(self, name):
        raw = self.headers.get("Cookie", "")
        for part in raw.split(";"):
            if "=" not in part:
                continue
            key, value = part.strip().split("=", 1)
            if key == name:
                return value
        return ""

    def is_admin(self):
        token = self.cookie_value("admin_session")
        return bool(token and SESSIONS.get(token) == ADMIN_EMAIL)

    def require_admin(self):
        if self.is_admin():
            return True
        self.send_json({"ok": False, "message": "Потрібен вхід адміністратора."}, status=HTTPStatus.UNAUTHORIZED)
        return False

    def admin_login(self):
        body = self.read_json_body()
        email = str(body.get("email", "")).strip().lower()
        password = str(body.get("password", ""))
        password_hash = hashlib.sha256((ADMIN_PASSWORD_SALT + password).encode("utf-8")).hexdigest()
        email_ok = hmac.compare_digest(email, ADMIN_EMAIL)
        password_ok = hmac.compare_digest(password_hash, ADMIN_PASSWORD_HASH)
        if not (email_ok and password_ok):
            self.send_json({"ok": False, "message": "Неправильна адреса або пароль."}, status=HTTPStatus.UNAUTHORIZED)
            return
        token = secrets.token_urlsafe(32)
        SESSIONS[token] = ADMIN_EMAIL
        self.send_json(
            {"ok": True, "email": ADMIN_EMAIL},
            headers={"Set-Cookie": f"admin_session={token}; Path=/; HttpOnly; SameSite=Strict"},
        )

    def admin_logout(self):
        token = self.cookie_value("admin_session")
        if token:
            SESSIONS.pop(token, None)
        self.send_json(
            {"ok": True},
            headers={"Set-Cookie": "admin_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict"},
        )

    def admin_attempts(self):
        attempts = read_attempts()
        rows = read_history()
        known_ids = {row.get("id") for row in rows if row.get("id")}
        for attempt in attempts.values():
            if attempt.get("id") not in known_ids:
                rows.append(attempt)
        rows.sort(key=lambda row: row.get("startedAt") or "", reverse=True)
        return rows

    def status_payload(self):
        attempts = read_attempts()
        ip = self.client_ip()
        attempt = attempts.get(ip)
        return {
            "serverMode": True,
            "ip": ip,
            "locked": bool(attempt),
            "attempt": attempt,
        }

    def start_attempt(self):
        attempts = read_attempts()
        ip = self.client_ip()
        existing = attempts.get(ip)
        if existing:
            self.send_json({
                "ok": False,
                "locked": True,
                "ip": ip,
                "attempt": existing,
                "message": "З цієї IP-адреси тест уже запускався.",
            }, status=HTTPStatus.LOCKED)
            return

        body = self.read_json_body()
        student_name = str(body.get("studentName", "")).strip()
        class_id = str(body.get("classId", "")).strip()
        variant = str(body.get("variant", "")).strip()
        attempts[ip] = {
            "id": f"{ip}-{datetime.now(timezone.utc).timestamp()}-{secrets.token_hex(4)}",
            "ip": ip,
            "studentName": student_name,
            "classId": class_id,
            "variant": variant,
            "startedAt": now_iso(),
            "finishedAt": None,
            "score": None,
            "status": "started",
        }
        write_attempts(attempts)
        self.send_json({"ok": True, "locked": False, "ip": ip, "attempt": attempts[ip]})

    def finish_attempt(self):
        attempts = read_attempts()
        ip = self.client_ip()
        body = self.read_json_body()
        attempt = attempts.get(ip)
        if not attempt:
            attempt = {
                "id": f"{ip}-{datetime.now(timezone.utc).timestamp()}-{secrets.token_hex(4)}",
                "ip": ip,
                "studentName": str(body.get("studentName", "")).strip(),
                "classId": str(body.get("classId", "")).strip(),
                "variant": str(body.get("variant", "")).strip(),
                "startedAt": None,
            }
        attempt.update({
            "finishedAt": now_iso(),
            "score": body.get("score"),
            "status": "finished",
            "summary": body.get("summary", {}),
            "review": body.get("review", []),
        })
        attempts[ip] = attempt
        write_attempts(attempts)
        save_history_attempt(attempt)
        self.send_json({"ok": True, "ip": ip, "attempt": attempt})

    def send_json(self, data, status=HTTPStatus.OK, headers=None):
        raw = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(raw)))
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(raw)


def main():
    parser = argparse.ArgumentParser(description="Serve the informatics quiz with IP attempt locking.")
    parser.add_argument("--host", default="0.0.0.0")
    parser.add_argument("--port", default=8765, type=int)
    args = parser.parse_args()
    server = ThreadingHTTPServer((args.host, args.port), Handler)
    print("Сайт тестування запущено.")
    print("Адреси для відкриття:")
    for address in local_addresses(args.port):
        print("  " + address)
    print("Повторний запуск блокується за IP-адресою у файлі attempts/attempts.json.")
    print("Щоб зупинити сервер, натисніть Ctrl+C у цьому вікні.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
