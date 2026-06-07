const loginCard = document.querySelector("#login-card");
const dashboard = document.querySelector("#dashboard");
const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");
const attemptList = document.querySelector("#attempt-list");
const dashboardSummary = document.querySelector("#dashboard-summary");
const studentResultDetail = document.querySelector("#student-result-detail");
const ADMIN_EMAIL = "sergeymusic0304@gmail.com";
const ADMIN_PASSWORD = "WeraMore0304";
const ADMIN_LOCAL_ATTEMPTS_KEY = "informatics_quiz_attempts_v1";
let localAdminMode = isStandalone();

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginMessage.textContent = "";
  const email = document.querySelector("#admin-email").value.trim();
  const password = document.querySelector("#admin-password").value;
  if (!isValidAdminCredentials(email, password)) {
    loginMessage.textContent = "Неправильна адреса або пароль.";
    return;
  }
  if (isLocalAdminMode()) {
    showDashboard();
    return;
  }
  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      loginMessage.textContent = data.message || "Вхід не виконано.";
      return;
    }
    showDashboard();
  } catch (error) {
    enableLocalAdminMode();
    showDashboard();
  }
});

document.querySelector("#refresh-btn").addEventListener("click", loadAttempts);
document.querySelector("#admin-home-btn")?.addEventListener("click", () => {
  if (typeof showScreen === "function") showScreen("setup");
});
document.querySelector("#logout-btn").addEventListener("click", async () => {
  if (!isLocalAdminMode()) {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
  }
  requireAdminLogin();
});

document.querySelector("#clear-all-btn").addEventListener("click", async () => {
  if (!confirm("Очистити всі записи проходжень і всі IP-блокування?")) return;
  if (isLocalAdminMode()) {
    localStorage.removeItem(ADMIN_LOCAL_ATTEMPTS_KEY);
  } else {
    try {
      const response = await fetch("/api/admin/clear-all", { method: "POST" });
      if (!response.ok) throw new Error("Admin API unavailable");
    } catch (error) {
      enableLocalAdminMode();
      localStorage.removeItem(ADMIN_LOCAL_ATTEMPTS_KEY);
    }
  }
  await loadAttempts();
});

async function checkSession() {
  requireAdminLogin();
}

async function requireAdminLogin() {
  loginCard.classList.remove("hidden");
  dashboard.classList.add("hidden");
  hideStudentDetail();
  attemptList.innerHTML = "";
  dashboardSummary.textContent = "";
  loginMessage.textContent = "";
  document.querySelector("#admin-email").value = "";
  document.querySelector("#admin-password").value = "";
  if (!isLocalAdminMode()) {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
  }
}

function showDashboard() {
  loginCard.classList.add("hidden");
  dashboard.classList.remove("hidden");
  loadAttempts();
}

async function loadAttempts() {
  attemptList.innerHTML = "";
  hideStudentDetail();
  dashboardSummary.textContent = "Завантаження...";
  if (isLocalAdminMode()) {
    const attempts = readLocalAttempts();
    renderAttempts(attempts);
    return;
  }
  try {
    const response = await fetch("/api/admin/attempts", { cache: "no-store" });
    if (!response.ok) throw new Error("Admin API unavailable");
    const data = await response.json();
    renderAttempts(data.attempts || []);
  } catch (error) {
    enableLocalAdminMode();
    const attempts = readLocalAttempts();
    renderAttempts(attempts);
    return;
  }
}

function renderAttempts(attempts) {
  sessionStorage.setItem("admin_last_attempts", JSON.stringify(attempts));
  const finished = attempts.filter((attempt) => attempt.status === "finished");
  dashboardSummary.textContent = `Усього записів: ${attempts.length}. Завершено: ${finished.length}. Незавершено: ${attempts.length - finished.length}.`;
  attemptList.innerHTML = attempts.length
    ? attempts.map(renderAttempt).join("")
    : `<article class="panel">Записів проходження ще немає.</article>`;
  bindAttemptActions();
}

function renderAttempt(attempt) {
  const review = attempt.review || [];
  const wrong = review.filter((row) => !row.ok).length;
  const score = formatScore(attempt.score);
  const scoreClass = attempt.score === null || attempt.score === undefined ? "score-pill pending" : "score-pill";
  const key = attempt.id || attempt.ip || "";
  return `
    <article class="attempt-card" data-key="${escapeAttr(key)}" data-ip="${escapeAttr(attempt.ip || "")}">
      <div class="attempt-head">
        <div>
          <p class="kicker">${escapeHtml(formatStatus(attempt.status))}</p>
          <h3>${escapeHtml(attempt.studentName || "Без імені")}</h3>
        </div>
        <div class="${scoreClass}">${escapeHtml(score)} / 12</div>
      </div>
      <div class="meta-grid">
        <span>Клас і тест <b>${escapeHtml(formatTest(attempt))}</b></span>
        <span>IP <b>${escapeHtml(attempt.ip || "-")}</b></span>
        <span>Початок <b>${escapeHtml(formatDate(attempt.startedAt))}</b></span>
        <span>Помилки <b>${attempt.status === "finished" ? wrong : "-"}</b></span>
        <span>Повтор <b>${attempt.unlockedForRetake ? "дозволено" : "заблоковано"}</b></span>
      </div>
      <details>
        <summary>Переглянути відповіді учня</summary>
        <div class="review-table">
          ${review.length ? review.map(renderReviewRow).join("") : "<p>Результат ще не збережено.</p>"}
        </div>
      </details>
      <div class="attempt-actions">
        <button class="plain-btn open-result" type="button">Відкрити підсумок учня</button>
        <button class="danger-btn reset-ip" type="button">Дозволити повторне проходження</button>
      </div>
    </article>
  `;
}

function renderReviewRow(row) {
  return `
    <div class="review-row">
      <span class="mark ${row.ok ? "ok" : "bad"}">${row.ok ? "✓" : "×"}</span>
      <div>
        <strong>${escapeHtml(row.number)}. ${escapeHtml(row.text)}</strong>
        <p><b>Відповідь учня:</b> ${escapeHtml(row.chosenText)}</p>
        <p><b>Правильна відповідь:</b> ${escapeHtml(row.correctText)}</p>
      </div>
    </div>
  `;
}

function bindAttemptActions() {
  document.querySelectorAll(".open-result").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".attempt-card");
      const key = card.dataset.key;
      const attempt = getRenderedAttempts().find((row) => (row.id || row.ip || "") === key);
      if (attempt) showStudentDetail(attempt);
    });
  });

  document.querySelectorAll(".reset-ip").forEach((button) => {
    button.addEventListener("click", async () => {
      const card = button.closest(".attempt-card");
      const key = card.dataset.key;
      const ip = card.dataset.ip;
      if (!confirm(`Дозволити повторне проходження для ${ip || key}? Старий результат залишиться в журналі.`)) return;
      if (isLocalAdminMode()) {
        const attempts = readLocalAttempts().map((attempt) => {
          if ((attempt.id || attempt.ip || "") === key) {
            return {
              ...attempt,
              unlockedForRetake: true,
              unlockedAt: new Date().toISOString()
            };
          }
          return attempt;
        });
        writeLocalAttempts(attempts);
      } else {
        try {
          const response = await fetch(`/api/admin/attempt?ip=${encodeURIComponent(ip)}`, { method: "DELETE" });
          if (!response.ok) throw new Error("Admin API unavailable");
        } catch (error) {
          enableLocalAdminMode();
          const attempts = readLocalAttempts().map((attempt) => {
            if ((attempt.id || attempt.ip || "") === key) {
              return {
                ...attempt,
                unlockedForRetake: true,
                unlockedAt: new Date().toISOString()
              };
            }
            return attempt;
          });
          writeLocalAttempts(attempts);
        }
      }
      await loadAttempts();
    });
  });
}

function getRenderedAttempts() {
  try {
    return JSON.parse(sessionStorage.getItem("admin_last_attempts") || "[]");
  } catch (error) {
    return [];
  }
}

function showStudentDetail(attempt) {
  if (!studentResultDetail) return;
  const review = attempt.review || [];
  const wrong = review.filter((row) => !row.ok).length;
  const answered = review.filter((row) => row.chosen !== null && row.chosen !== undefined).length;
  const score = formatScore(attempt.score);
  studentResultDetail.classList.remove("hidden");
  studentResultDetail.innerHTML = `
    <div class="detail-top">
      <div>
        <p class="kicker">Підсумок конкретного учня</p>
        <h2>${escapeHtml(attempt.studentName || "Без імені")}</h2>
      </div>
      <div class="detail-score">
        <strong>${escapeHtml(score)}</strong>
        <span>з 12 балів</span>
      </div>
    </div>
    <div class="detail-summary">
      <span>Тест <b>${escapeHtml(formatTest(attempt))}</b></span>
      <span>IP / режим <b>${escapeHtml(attempt.ip || "-")}</b></span>
      <span>Початок <b>${escapeHtml(formatDate(attempt.startedAt))}</b></span>
      <span>Завершення <b>${escapeHtml(formatDate(attempt.finishedAt))}</b></span>
      <span>Статус <b>${escapeHtml(formatStatus(attempt.status))}</b></span>
      <span>Відповідей <b>${answered} / 24</b></span>
      <span>Правильних <b>${attempt.status === "finished" ? escapeHtml(score) : "-"}</b></span>
      <span>Помилки <b>${attempt.status === "finished" ? wrong : "-"}</b></span>
      <span>Повтор <b>${attempt.unlockedForRetake ? "дозволено" : "заблоковано"}</b></span>
    </div>
    <div class="review-table">
      ${review.length ? review.map(renderReviewRow).join("") : "<p>Учень ще не завершив тест, тому відповідей для підсумку немає.</p>"}
    </div>
    <div class="detail-actions">
      <button class="plain-btn" type="button" id="close-student-detail">Закрити підсумок</button>
      <button class="plain-btn" type="button" id="print-student-detail">Друк підсумку</button>
    </div>
  `;
  document.querySelector("#close-student-detail").addEventListener("click", hideStudentDetail);
  document.querySelector("#print-student-detail").addEventListener("click", () => window.print());
  studentResultDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function hideStudentDetail() {
  if (!studentResultDetail) return;
  studentResultDetail.classList.add("hidden");
  studentResultDetail.innerHTML = "";
}

function isStandalone() {
  return !location.protocol.startsWith("http") || location.hostname.endsWith("github.io");
}

function isLocalAdminMode() {
  return localAdminMode || isStandalone();
}

function enableLocalAdminMode() {
  localAdminMode = true;
}

function isValidAdminCredentials(email, password) {
  return email.toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

function readLocalAttempts() {
  try {
    const attempts = JSON.parse(localStorage.getItem(ADMIN_LOCAL_ATTEMPTS_KEY) || "[]");
    let changed = false;
    attempts.forEach((attempt, index) => {
      if (!attempt.id) {
        attempt.id = `local-migrated-${index}-${attempt.startedAt || Date.now()}`;
        changed = true;
      }
      if (attempt.ip === "local-index-html") {
        attempt.ip = "локально";
        changed = true;
      }
    });
    if (changed) writeLocalAttempts(attempts);
    return attempts;
  } catch (error) {
    return [];
  }
}

function writeLocalAttempts(attempts) {
  localStorage.setItem(ADMIN_LOCAL_ATTEMPTS_KEY, JSON.stringify(attempts));
}

function formatStatus(status) {
  return status === "finished" ? "Завершено" : "Почато";
}

function formatScore(value) {
  if (value === null || value === undefined || value === "") return "-";
  const number = Number(String(value).replace(",", "."));
  return Number.isFinite(number) ? Math.round(number) : value;
}

function formatTest(attempt) {
  const classLabel = attempt.classId ? `${attempt.classId} клас` : "-";
  const variantLabel = attempt.variant && attempt.variant !== "annual"
    ? attempt.variant
    : "річний тест";
  return [classLabel, variantLabel].filter(Boolean).join(", ");
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("uk-UA");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

requireAdminLogin();
