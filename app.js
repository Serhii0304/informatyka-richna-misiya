const TESTS = {
  "6": {
    className: "6 клас",
    timeMinutes: 60,
    topic: "Безпека, таблиці, презентації, діаграми, MakeCode",
    variants: {
      "1": [
        item("Яке твердження найточніше описує роботу з інформацією?", ["Інформацію можна лише зберігати на носії, але не змінювати", "Інформацію можна зберігати, передавати й опрацьовувати", "Інформацією вважають тільки текст у підручнику", "Інформація зникає після передавання іншій людині"], 1),
        item("Що з переліченого є саме пристроєм комп'ютера?", ["Браузер Chrome", "Пароль до пошти", "Миша", "Вебсайт школи"], 2),
        item("Який пароль можна вважати надійнішим?", ["ivan2014", "12345678", "qwerty", "Mriya_27!Lis"], 3),
        item("Перед використанням матеріалу з вебсайту насамперед потрібно:", ["Перевірити автора, дату й надійність джерела", "Скопіювати текст, якщо він добре оформлений", "Довіряти сайту, якщо там багато картинок", "Видалити посилання, щоб відповідь виглядала охайно"], 0),
        item("Електронна таблиця в Excel або Google Таблицях складається переважно з:", ["Абзаців і заголовків", "Слайдів і макетів", "Клітинок на перетині рядків і стовпців", "Паперових сторінок документа"], 2),
        item("Який запис правильно починає формулу в Excel або Google Таблицях?", ["+A1+A2", ".A1+A2", ":A1+A2", "=A1+A2"], 3),
        item("Навіщо в таблицях використовують діаграму?", ["Щоб автоматично захистити файл паролем", "Щоб наочно порівняти або показати числові дані", "Щоб замінити формули в усіх клітинках", "Щоб перетворити таблицю на презентацію"], 1),
        item("Цикл у MakeCode для Micro:Bit потрібен, коли команда має:", ["Отримати нову назву", "Зберегти файл на комп'ютері", "Повторюватися кілька разів або постійно", "Відкрити адресу сайту"], 2),
        item("Яка пара дій справді допомагає безпечно працювати в інтернеті?", ["Публікувати особисті дані й відкривати скорочені посилання", "Не повідомляти паролі та перевіряти підозрілі повідомлення", "Завантажувати файл, якщо його надіслав незнайомець", "Використовувати один пароль для всіх сервісів"], 1),
        item("У клітинках A1=5 і A2=7. Яка формула знайде суму й правильний результат?", ["=A1+A2, результат 12", "=A1+A2, результат 57", "=A1*A2, результат 12", "=A2-A1, результат 12"], 0),
        item("Який приклад правильно називає об'єкт MakeCode і його властивість?", ["Кнопка A, властивість стан натискання", "Вебсайт, властивість пароль", "Папка, властивість формула", "Слайд, властивість адреса клітинки"], 0),
        item("Для чого найчастіше використовують діаграми в електронних таблицях?", ["Щоб приховати помилки у формулах", "Щоб зберегти таблицю у хмарі", "Щоб замінити дані малюнком", "Щоб візуально показати співвідношення або зміну даних"], 3)
      ],
      "2": [
        item("Що з переліченого є програмою?", ["Монітор", "Текстовий редактор", "Клавіатура", "Миша"], 1),
        item("Для чого зручно використовувати хмарний сервіс?", ["Щоб змінити колір корпусу комп'ютера", "Щоб зарядити телефон через браузер", "Щоб зберігати файли онлайн і відкривати їх з різних пристроїв", "Щоб друкувати без підключеного принтера"], 2),
        item("Цифровий слід - це:", ["Позначка олівцем у зошиті", "Подряпина на екрані після роботи", "Назва папки з фотографіями", "Дані, які залишаються після дій людини в інтернеті"], 3),
        item("Що можна додати до слайда презентації?", ["Текст, зображення, звук або відео", "Тільки пароль до файлу", "Лише формулу з таблиці", "Тільки папку з комп'ютера"], 0),
        item("Який запис є правильною адресою клітинки в таблиці?", ["3B", "B:3", "рядок B", "B3"], 3),
        item("Стовпчаста діаграма найкраще підходить, коли потрібно:", ["Зберегти пароль у таблиці", "Порівняти кілька числових значень", "Видалити помилки з комп'ютера", "Відкрити електронну пошту"], 1),
        item("Розгалуження в алгоритмі обов'язково пов'язане з:", ["Назвою проєкту", "Умовою, від якої залежить дія", "Картинкою на екрані", "Адресою збереженого файла"], 1),
        item("Модель у навчанні інформатики - це:", ["Оригінальний предмет без змін", "Помилка в програмі", "Спрощене подання об'єкта або явища", "Тип складного пароля"], 2),
        item("Яке пояснення правильно розрізняє пристрій і програму?", ["Пристрій можна фізично побачити або торкнутися, програма виконує команди", "Пристрій завжди має розширення .exe", "Програма - це будь-який предмет на столі", "Клавіатура є програмою для введення тексту"], 0),
        item("Яка ознака найкраще вказує на підозріле повідомлення?", ["Є ввічливе звертання і зрозуміла тема", "Адреса відправника збігається з офіційною", "Повідомлення містить підпис учителя", "Є термінова вимога перейти за невідомим посиланням"], 3),
        item("У B1=10 і B2=15. Який результат формули =B1+B2?", ["10", "15", "25", "150"], 2),
        item("Який приклад є умовою для розгалуження в MakeCode?", ["Якщо натиснуто кнопку A, то показати значок", "Зберегти проєкт у папку", "Відкрити сайт у браузері", "Додати новий слайд"], 0)
      ]
    }
  },
  "7": {
    className: "7 клас",
    timeMinutes: 60,
    topic: "ШІ, авторське право, пошта, таблиці, графіка, Python",
    variants: {
      "1": [
        item("Як доцільно використовувати ШІ під час навчання?", ["Довіряти кожній відповіді без перевірки", "Отримувати пояснення й перевіряти їх за надійними джерелами", "Просити готові відповіді замість виконання роботи", "Використовувати для отримання чужих паролів"], 1),
        item("Що вимагає дотримання авторського права?", ["Копіювати матеріали без посилання, якщо вони в інтернеті", "Видаляти ім'я автора з презентації", "Поважати працю автора й указувати джерело", "Не звертати уваги на ліцензію"], 2),
        item("Який елемент допомагає адресату зрозуміти зміст електронного листа ще до відкриття?", ["Смайлик у кінці листа", "Порожній текст листа", "Випадкова назва вкладення", "Тема повідомлення"], 3),
        item("Інформаційне сміття - це:", ["Непотрібні, сумнівні або повторювані повідомлення", "Будь-який підручник в електронному вигляді", "Перевірена інструкція з офіційного сайту", "Корисний навчальний матеріал"], 0),
        item("Скільки байтів містить 1 Кбайт у шкільному курсі інформатики?", ["1000 байтів", "100 байтів", "1024 байти", "8 бітів"], 2),
        item("Який запис є абсолютним посиланням у таблиці?", ["A1", "1A", "$A$1", "A:1"], 2),
        item("Для чого особливо зручна векторна графіка?", ["Для запису голосового повідомлення", "Для логотипів і значків, які треба масштабувати", "Для зберігання паролів", "Для підрахунку оцінок у таблиці"], 1),
        item("У Python змінна призначена для зберігання:", ["Папки на диску", "Зображення екрана", "Клавіатури", "Значення, з яким працює програма"], 3),
        item("Який варіант відповідає правилам ввічливого електронного листування?", ["Писати без теми й без привітання", "Вітатися, указувати тему, писати зрозуміло й ввічливо", "Надсилати порожні листи з вкладенням", "Писати весь текст великими літерами"], 1),
        item("2 Кбайт - це:", ["2048 байтів", "1024 байти", "2000 бітів", "200 байтів"], 0),
        item("Для чого в таблицях використовують посилання $A$1?", ["Щоб адреса клітинки не змінювалася під час копіювання формули", "Щоб автоматично очистити клітинку", "Щоб зробити текст у клітинці жирним", "Щоб створити пароль до таблиці"], 0),
        item("Налагодження програми - це процес, під час якого:", ["Змінюють тему електронного листа", "Друкують готовий документ", "Створюють нову папку", "Знаходять і виправляють помилки в коді"], 3)
      ],
      "2": [
        item("Яка ознака найбільше підвищує надійність джерела інформації?", ["Яскраве оформлення без підпису автора", "Велика кількість рекламних банерів", "Наявність автора або організації та дати публікації", "Невідоме походження матеріалу"], 2),
        item("Двійкове кодування ґрунтується на використанні:", ["Літер А і Б", "Символів 0 і 1", "Знаків + і -", "Літер X і Y"], 1),
        item("Функція в Excel або Google Таблицях - це:", ["Назва комп'ютера в мережі", "Тип електронного листа", "Адреса вебсайту", "Готова формула для обчислення"], 3),
        item("Для чого в текстових документах використовують стилі?", ["Щоб однаково й швидко оформлювати заголовки та текст", "Щоб під'єднати принтер", "Щоб змінити пароль облікового запису", "Щоб створити комп'ютерну мережу"], 0),
        item("Яка ознака робить сайт зручним для користувача?", ["Меню без логіки й випадкові розділи", "Дуже дрібний текст на всіх сторінках", "Зрозуміла структура й передбачувана навігація", "Анімації, які заважають читати"], 2),
        item("Цикл у Python використовують, коли потрібно:", ["Зберегти електронний лист", "Надрукувати сторінку документа", "Змінити тему листа", "Повторити команди кілька разів"], 3),
        item("Що є графічним примітивом?", ["Пароль користувача", "Лінія, прямокутник або коло", "Адреса поштової скриньки", "Папка на диску"], 1),
        item("Помилка в програмі - це:", ["Назва сайту", "Тип документа", "Те, що заважає програмі працювати правильно", "Адреса клітинки таблиці"], 2),
        item("Векторна графіка - це:", ["Зображення, побудоване з об'єктів, ліній і фігур", "Звуковий файл у форматі mp3", "Пароль до поштової скриньки", "Таблиця без формул"], 0),
        item("Який запит до ШІ справді допомагає навчанню?", ["Напиши готову контрольну замість мене", "Поясни тему простими словами й дай приклад для самоперевірки", "Знайди пароль до чужої пошти", "Заміни всі уроки короткими відповідями"], 1),
        item("Яка функція знаходить середнє значення оцінок?", ["MAX", "SUM", "COUNT", "AVERAGE"], 3),
        item("Який набір сторінок доречний для сайту «Безпечний інтернет»?", ["Правила, загрози, корисні ресурси", "Паролі учнів, випадкові фото, реклама", "Порожня сторінка, хаотичне меню, дрібний текст", "Одна кнопка без пояснення змісту"], 0)
      ]
    }
  },
  "9": {
    className: "9 клас",
    timeMinutes: 60,
    topic: "Інтернет, безпека, моделювання, масиви, публікації, онлайн-форми",
    variants: {
      "1": [
        item("ІКТ-компетентність - це здатність:", ["Лише швидко друкувати текст", "Назвати всі моделі комп'ютерів", "Безпечно, відповідально й доречно використовувати цифрові технології", "Працювати без жодних програм"], 2),
        item("Що показує URL-адреса?", ["Роздільну здатність екрана", "Пароль користувача", "Температуру процесора", "Місце розташування ресурсу в інтернеті"], 3),
        item("Яка ознака найкраще характеризує якісну презентацію?", ["Дуже дрібний текст на кожному слайді", "Чітка структура, читабельність і небагато тексту", "Багато різних шрифтів без системи", "Анімація кожного слова"], 1),
        item("Для чого потрібна резервна копія?", ["Щоб збільшити монітор", "Щоб відновити дані у разі втрати або пошкодження", "Щоб створити шкідливу програму", "Щоб видалити браузер"], 1),
        item("Модель у задачах інформатики - це:", ["Будь-який складний пароль", "Помилка в алгоритмі", "Звичайна фотографія без пояснення", "Спрощене подання об'єкта, явища або процесу"], 3),
        item("Масив у Python - це:", ["Набір значень, з якими можна працювати як з однією структурою", "Стиль оформлення презентації", "Адреса сайту в інтернеті", "Вид антивірусної програми"], 0),
        item("Якими мають бути буклет або публікація?", ["Без заголовків і структури", "З випадковим текстом без перевірки", "Читабельними, охайними й логічно впорядкованими", "Складатися лише з паролів"], 2),
        item("Онлайн-форма Google Forms або Microsoft Forms призначена для:", ["Очищення диска", "Ремонту комп'ютера", "Шифрування монітора", "Збирання відповідей користувачів"], 3),
        item("Доменне ім'я - це:", ["Зручна текстова назва адреси сайту", "Показник температури процесора", "Назва клавіатури", "Помилка в програмному коді"], 0),
        item("Які дії є правильними для безпечного зберігання файлів?", ["Робити резервні копії й обмежувати доступ", "Зберігати паролі у відкритому текстовому файлі", "Видаляти всі копії одразу після створення", "Надсилати особисті файли незнайомим"], 0),
        item("У масиві 3, 8, 4, 6 найбільшим елементом є:", ["3", "6", "8", "4"], 2),
        item("Який набір ознак відповідає гарній презентації?", ["Дрібний текст, багато шрифтів, випадкова анімація", "Читабельний текст, єдиний стиль, доречні зображення", "Відсутність заголовків і структури", "Тільки випадкові картинки без пояснень"], 1)
      ],
      "2": [
        item("Інформаційна культура передбачає:", ["Копіювання чужих матеріалів без посилань", "Етичне, критичне й відповідальне використання інформації", "Ігнорування правил безпеки", "Збереження паролів у відкритому файлі"], 1),
        item("Мережевий протокол - це:", ["Назва слайда презентації", "Вид клавіатури", "Правила обміну даними між пристроями", "Формат оформлення шрифту"], 2),
        item("Гіперпосилання в документі, презентації або на сайті дає змогу:", ["Відремонтувати диск", "Перейти до іншого ресурсу, сторінки або слайда", "Змінити корпус комп'ютера", "Автоматично видалити вірус"], 1),
        item("Шкідлива програма може:", ["Завжди покращувати роботу файлу", "Працювати лише на папері", "Пошкодити, заблокувати або викрасти дані", "Бути тільки зображенням"], 2),
        item("Комп'ютерний експеримент проводять, щоб:", ["Прикрасити документ", "Перевірити модель або спрогнозувати результат", "Перейменувати папку", "Створити пароль"], 1),
        item("Алгоритм пошуку в масиві у Python зазвичай:", ["Видаляє всі елементи без перевірки", "Створює презентацію з даних", "Працює без жодних значень", "Перевіряє елементи й знаходить потрібний за умовою"], 3),
        item("Для чого найкраще підходить векторна графіка?", ["Для запису звуку", "Для зберігання паролів", "Для надсилання листів", "Для логотипів, схем і значків"], 3),
        item("Чим корисний спільний документ?", ["Кілька користувачів можуть працювати над ним разом", "Його ніхто не може переглянути", "У ньому немає налаштувань доступу", "Його неможливо редагувати"], 0),
        item("Резервне копіювання - це:", ["Видалення оригінальних файлів", "Зміна шрифту документа", "Вимкнення інтернету", "Створення копій даних для подальшого відновлення"], 3),
        item("Що є прикладом розрахункової моделі?", ["Малюнок без чисел і формул", "Випадкова папка на диску", "Таблиця бюджету з формулами обчислення", "Пароль до сайту"], 2),
        item("Який запис найточніше описує алгоритм знаходження суми трьох чисел?", ["Ввести a, b, c; обчислити s=a+b+c; вивести s", "Видалити a, b, c; закрити програму", "Створити слайд і змінити тему", "Відкрити браузер без обчислень"], 0),
        item("Які елементи доречні в буклеті або публікації?", ["Заголовок, основний текст, зображення або контакти", "Пароль, вірус, повідомлення про помилку", "Лише порожні поля", "Клавіатура, миша, монітор"], 0)
      ]
    }
  }
};

const LETTERS = ["А", "Б", "В", "Г"];
const PASS_SCORE = 7;
const TOTAL_SCORE = 12;
const TOTAL_QUESTIONS = 24;
const QUESTION_POINTS = 0.5;
const LOCAL_ATTEMPTS_KEY = "informatics_quiz_attempts_v1";
let selectedClass = "6";
let secondsLeft = 0;
let timerId = null;
let latestResult = null;
let student = { lastName: "", firstName: "" };
let serverAvailable = false;
let standaloneMode = isStandalone();
let attemptLocked = false;
let lockedAttempt = null;
let currentAttemptStarted = false;
let currentLocalAttemptId = null;

const screens = {
  setup: document.querySelector("#setup-screen"),
  test: document.querySelector("#test-screen"),
  result: document.querySelector("#result-screen"),
  admin: document.querySelector("#admin-screen")
};

const classGrid = document.querySelector("#class-grid");
const quiz = document.querySelector("#quiz");
const lastNameInput = document.querySelector("#student-last-name");
const firstNameInput = document.querySelector("#student-first-name");
const studentError = document.querySelector("#student-error");
const startButton = document.querySelector("#start-btn");
const retryButton = document.querySelector("#retry-btn");

function item(text, options, answer) {
  return { text, options, answer };
}

function testItems() {
  return Object.values(TESTS[selectedClass].variants).flat();
}

function meta() {
  return TESTS[selectedClass];
}

function questionArt(text) {
  const value = String(text || "").toLowerCase();
  const rules = [
    ["ai", "ілюстрація штучного інтелекту", ["ші", "штуч"]],
    ["python", "ілюстрація програмування Python", ["python", "масив", "програм", "код", "налагод"]],
    ["security", "ілюстрація цифрової безпеки", ["парол", "безпеч", "шкідлив", "резерв", "підозр", "зберіган"]],
    ["cloud", "ілюстрація хмарного сервісу", ["хмар"]],
    ["mail", "ілюстрація електронної пошти", ["лист", "поштов", "листування"]],
    ["spreadsheet", "ілюстрація електронної таблиці", ["таблиц", "клітин", "формул", "excel", "google таблиц", "середн", "$a$1", "кбайт"]],
    ["chart", "ілюстрація діаграми даних", ["діаграм", "числов", "значен", "порівня"]],
    ["presentation", "ілюстрація презентації", ["презентац", "слайд"]],
    ["web", "ілюстрація вебсайту та інтернету", ["url", "домен", "сайт", "веб", "інтернет", "джерел", "гіперпосил"]],
    ["graphics", "ілюстрація комп'ютерної графіки", ["графік", "вектор", "логотип", "зображ", "примітив"]],
    ["model", "ілюстрація моделювання", ["модель", "експеримент"]],
    ["forms", "ілюстрація онлайн-форми", ["форма", "відповід"]],
    ["publication", "ілюстрація буклета або публікації", ["буклет", "публікац"]],
    ["algorithm", "ілюстрація алгоритму", ["цикл", "розгалуж", "умов", "алгоритм", "makecode", "micro:bit"]],
    ["device", "ілюстрація пристроїв комп'ютера", ["пристр", "комп'ютер", "миша", "клавіат", "монітор"]],
  ];
  const found = rules.find(([, , words]) => words.some((word) => value.includes(word)));
  if (!found) return { slug: "info", alt: "ілюстрація інформації та даних" };
  return { slug: found[0], alt: found[1] };
}

function init() {
  renderClassButtons();
  updateMissionInfo();
  [lastNameInput, firstNameInput].forEach((input) => {
    input.addEventListener("input", updateStudentGate);
    input.addEventListener("blur", updateStudentGate);
  });
  startButton.addEventListener("click", startMission);
  document.querySelector("#home-btn").addEventListener("click", () => showScreen("setup"));
  document.querySelector("#home-open").addEventListener("click", () => showScreen("setup"));
  document.querySelector("#admin-open").addEventListener("click", openAdminScreen);
  document.querySelector("#admin-back").addEventListener("click", () => showScreen("setup"));
  document.querySelector("#retry-btn").addEventListener("click", startMission);
  document.querySelector("#another-btn").addEventListener("click", () => showScreen("setup"));
  document.querySelector("#print-btn").addEventListener("click", () => window.print());
  updateStudentGate();
  checkAttemptStatus();
  startArena();
}

function renderClassButtons() {
  classGrid.innerHTML = "";
  Object.entries(TESTS).forEach(([key, value]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.class = key;
    btn.className = `class-btn${key === selectedClass ? " active" : ""}`;
    const icons = {
      "6": { src: "assets/device.svg", alt: "Пристрій" },
      "7": { src: "assets/python.svg", alt: "Код" },
      "9": { src: "assets/web.svg", alt: "Інтернет" }
    };
    const icon = icons[key] || { src: "assets/info.svg", alt: "Інформатика" };
    btn.innerHTML = `
      <span class="class-radio" aria-hidden="true"></span>
      <span class="class-icon" aria-hidden="true"><img src="${icon.src}" alt="${icon.alt}" loading="lazy"></span>
      <strong>${key}</strong>
      <span class="class-topic">${value.topic}</span>
    `;
    btn.addEventListener("click", (event) => {
      selectedClass = key;
      renderClassButtons();
      updateMissionInfo();
      sparks(event.clientX, event.clientY, ["#10a594", "#f6bd3d", "#ff6b55"], 16);
    });
    classGrid.append(btn);
  });
}

function updateMissionInfo() {
  document.querySelector("#mission-title").textContent = `${meta().className} • Річний тест`;
  document.querySelector("#mission-detail").textContent = `${TOTAL_QUESTIONS} тестових питань по 0,5 бала, ${meta().timeMinutes} хв, максимум ${TOTAL_SCORE} балів. Перемога відкривається з ${PASS_SCORE} балів.`;
}

async function startMission() {
  if (!updateStudentGate(true)) return;
  const allowed = await startAttemptOnServer();
  if (!allowed) return;
  latestResult = null;
  renderQuiz();
  secondsLeft = meta().timeMinutes * 60;
  updateTimer();
  stopTimer();
  timerId = setInterval(() => {
    secondsLeft -= 1;
    updateTimer();
    if (secondsLeft <= 0) finishMission();
  }, 1000);
  document.querySelector("#hud-title").textContent = `${meta().className} • Річний тест`;
  updateProgress();
  showScreen("test");
}

function renderQuiz() {
  quiz.innerHTML = testItems().map((question, index) => {
    const art = questionArt(question.text);
    return `
    <article class="question ${art.slug}-theme" data-index="${index}">
      <div class="question-layout">
        <figure class="question-art">
          <img src="assets/${art.slug}.svg" alt="${escapeHtml(art.alt)}" loading="lazy">
        </figure>
        <div class="question-main">
          <div class="question-head">
            <span class="number">${index + 1}</span>
            <div>
              <h3>${escapeHtml(question.text)}</h3>
            </div>
            <span class="points">0,5 бала</span>
          </div>
          <div class="options">
            ${question.options.map((option, optionIndex) => `
              <label class="option">
                <input type="radio" name="q-${index}" value="${optionIndex}">
                <span class="letter">${LETTERS[optionIndex]}</span>
                <span>${escapeHtml(option)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    </article>
  `}).join("") + `
    <div class="submit-row">
      <button class="primary-btn" type="submit">Фініш: дізнатися результат</button>
      <button id="clear-btn" class="plain-btn" type="button">Очистити місію</button>
    </div>
  `;

  quiz.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (event) => {
      event.target.closest(".question").classList.add("done");
      updateProgress();
      const box = event.target.closest(".option").getBoundingClientRect();
      sparks(box.left + 28, box.top + 28, ["#10a594", "#b9f4d8", "#f6bd3d"], 10);
    });
  });
  quiz.onsubmit = (event) => {
    event.preventDefault();
    finishMission();
  };
  document.querySelector("#clear-btn").addEventListener("click", () => {
    quiz.reset();
    quiz.querySelectorAll(".question").forEach((card) => card.classList.remove("done"));
    updateProgress();
  });
}

function updateProgress() {
  const answers = getAnswers();
  const answered = answers.filter((answer) => answer !== null).length;
  const percent = Math.round((answered / TOTAL_QUESTIONS) * 100);
  document.querySelector("#answered").textContent = answered;
  document.querySelector("#live-score").textContent = answered;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#ring-progress").style.strokeDashoffset = 314 - (314 * percent / 100);
}

function getAnswers() {
  return testItems().map((_, index) => {
    const checked = quiz.querySelector(`input[name="q-${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
}

function scoreAnswers(answers) {
  const review = testItems().map((question, index) => {
    const chosen = answers[index];
    const ok = chosen === question.answer;
    return {
      number: index + 1,
      text: question.text,
      ok,
      chosen,
      chosenText: chosen === null ? "Не вибрано" : `${LETTERS[chosen]}. ${question.options[chosen]}`,
      correctText: `${LETTERS[question.answer]}. ${question.options[question.answer]}`
    };
  });
  return { score: formatNumericScore(review.filter((row) => row.ok).length * QUESTION_POINTS), review };
}

function finishMission() {
  stopTimer();
  latestResult = scoreAnswers(getAnswers());
  renderResult();
  finishAttemptOnServer();
  showScreen("result");
  const win = latestResult.score >= PASS_SCORE;
  const sparkY = window.innerWidth <= 640 ? Math.min(520, window.innerHeight * 0.62) : 160;
  sparks(window.innerWidth / 2, sparkY, win ? ["#28b463", "#f6bd3d", "#10a594"] : ["#ff6b55", "#f6bd3d", "#6557ff"], 46);
}

function renderResult() {
  const score = latestResult.score;
  const win = score >= PASS_SCORE;
  const percent = Math.round(score / TOTAL_SCORE * 100);
  const card = document.querySelector("#result-card");
  card.classList.toggle("win", win);
  card.classList.toggle("lose", !win);
  document.querySelector("#result-heading").textContent = win ? "Перемога!" : "Потрібна ще одна спроба";
  document.querySelector("#trophy-icon").textContent = win ? "★" : "↻";
  document.querySelector("#final-score").textContent = score;
  document.querySelector("#result-student").textContent = getStudentName();
  document.querySelector("#result-test").textContent = `${meta().className}, річний тест, ${new Date().toLocaleDateString("uk-UA")}`;
  retryButton.disabled = true;
  retryButton.textContent = "Повторний запуск заблоковано";
  document.querySelector("#result-message").textContent = win
    ? `Місію виконано: ${score} з 12 балів, успішність ${percent}%.`
    : `Поки що ${score} з 12 балів, успішність ${percent}%. Для перемоги потрібно щонайменше ${PASS_SCORE} балів.`;

  document.querySelector("#review").innerHTML = latestResult.review.map((row) => `
    <article class="review-item">
      <span class="mark ${row.ok ? "ok" : "bad"}">${row.ok ? "✓" : "×"}</span>
      <div>
        <strong>${row.number}. ${escapeHtml(row.text)}</strong>
        <p><b>Обрано:</b> ${escapeHtml(row.chosenText)}</p>
        <p><b>Правильно:</b> ${escapeHtml(row.correctText)}</p>
      </div>
    </article>
  `).join("");
}

function updateStudentGate(forceMessage = false) {
  student = {
    lastName: cleanName(lastNameInput.value),
    firstName: cleanName(firstNameInput.value)
  };
  const ready = Boolean(student.lastName && student.firstName);
  const canStart = ready && (serverAvailable || standaloneMode) && !attemptLocked;
  startButton.disabled = !canStart;
  studentError.classList.toggle("alert", (!ready && forceMessage) || (!serverAvailable && !standaloneMode) || attemptLocked);

  if (!serverAvailable && !standaloneMode) {
    studentError.textContent = "Сервер недоступний. Відкрийте index.html напряму або запустіть сайт через сервер.";
    return false;
  }
  if (attemptLocked) {
    const details = lockedAttempt
      ? `${lockedAttempt.studentName || "учень"}, ${formatLockedTest(lockedAttempt)}`
      : "ця IP-адреса вже використана";
    studentError.textContent = `Повторний запуск заблоковано: ${details}.`;
    return false;
  }
  studentError.textContent = ready
    ? `Доступ відкрито для: ${getStudentName()}${standaloneMode ? " (локальний режим)." : "."}`
    : "Без прізвища та імені доступ до тесту не відкривається.";
  return canStart;
}

function cleanName(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function getStudentName() {
  return `${student.lastName} ${student.firstName}`.trim();
}

function formatNumericScore(value) {
  return Math.round(value);
}

async function checkAttemptStatus() {
  if (isStandalone()) {
    serverAvailable = false;
    standaloneMode = true;
    lockedAttempt = student.lastName && student.firstName ? getLocalCurrentAttempt() : null;
    attemptLocked = Boolean(lockedAttempt);
    updateStudentGate();
    return;
  }
  try {
    const response = await fetch("/api/attempt-status", { cache: "no-store" });
    if (!response.ok) throw new Error("Attempt API unavailable");
    const data = await response.json();
    serverAvailable = Boolean(data.serverMode);
    standaloneMode = !serverAvailable;
    attemptLocked = Boolean(data.locked);
    lockedAttempt = data.attempt || null;
  } catch (error) {
    serverAvailable = false;
    standaloneMode = true;
    lockedAttempt = student.lastName && student.firstName ? getLocalCurrentAttempt() : null;
    attemptLocked = Boolean(lockedAttempt);
    updateStudentGate();
    return;
  }
  updateStudentGate();
}

function isStandalone() {
  return !location.protocol.startsWith("http") || location.hostname.endsWith("github.io");
}

async function startAttemptOnServer() {
  await checkAttemptStatus();
  if (standaloneMode && !serverAvailable) {
    return startLocalAttempt();
  }
  if (attemptLocked || !serverAvailable) return false;
  try {
    const response = await fetch("/api/start-attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentName: getStudentName(),
        classId: selectedClass,
        variant: "Річний тест"
      })
    });
    const data = await response.json();
    if (!response.ok || data.locked) {
      attemptLocked = true;
      lockedAttempt = data.attempt || null;
      updateStudentGate(true);
      return false;
    }
    currentAttemptStarted = true;
    attemptLocked = true;
    lockedAttempt = data.attempt || null;
    updateStudentGate();
    return true;
  } catch (error) {
    serverAvailable = false;
    standaloneMode = true;
    return startLocalAttempt();
  }
}

async function finishAttemptOnServer() {
  if (standaloneMode && !serverAvailable) {
    finishLocalAttempt();
    return;
  }
  if (!serverAvailable || !currentAttemptStarted || !latestResult) return;
  try {
    await fetch("/api/finish-attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentName: getStudentName(),
        classId: selectedClass,
        variant: "Річний тест",
        score: latestResult.score,
        summary: {
          test: `${meta().className}, річний тест`,
          answered: latestResult.review.filter((row) => row.chosen !== null).length,
          correct: latestResult.score,
          total: TOTAL_SCORE
        },
        review: latestResult.review
      })
    });
  } catch (error) {
    // The printed result remains available even if saving the attempt finish fails.
  }
}

function formatLockedTest(attempt) {
  const classLabel = attempt.classId ? `${attempt.classId} клас` : "тест";
  const variantLabel = attempt.variant ? `${attempt.variant}` : "річний тест";
  return [classLabel, variantLabel].filter(Boolean).join(", ");
}

function readLocalAttempts() {
  try {
    const attempts = JSON.parse(localStorage.getItem(LOCAL_ATTEMPTS_KEY) || "[]");
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
  localStorage.setItem(LOCAL_ATTEMPTS_KEY, JSON.stringify(attempts));
}

function getLocalCurrentAttempt() {
  const name = getStudentName().toLowerCase();
  return readLocalAttempts().find((attempt) => {
    return String(attempt.studentName || "").toLowerCase() === name
      && String(attempt.classId || "") === selectedClass
      && !attempt.unlockedForRetake;
  }) || null;
}

function startLocalAttempt() {
  const existing = getLocalCurrentAttempt();
  if (existing) {
    attemptLocked = true;
    lockedAttempt = existing;
    updateStudentGate(true);
    return false;
  }
  currentLocalAttemptId = `local-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const attempt = {
    id: currentLocalAttemptId,
    ip: "локально",
    studentName: getStudentName(),
    classId: selectedClass,
    variant: "Річний тест",
    startedAt: new Date().toISOString(),
    finishedAt: null,
    score: null,
    status: "started",
    localMode: true
  };
  writeLocalAttempts([attempt, ...readLocalAttempts()]);
  currentAttemptStarted = true;
  attemptLocked = true;
  lockedAttempt = attempt;
  updateStudentGate();
  return true;
}

function finishLocalAttempt() {
  if (!currentAttemptStarted || !latestResult) return;
  const attempts = readLocalAttempts();
  const index = attempts.findIndex((attempt) => attempt.id === currentLocalAttemptId);
  const attempt = index >= 0 ? attempts[index] : {
    id: currentLocalAttemptId || `local-${Date.now()}`,
    ip: "локально",
    studentName: getStudentName(),
    classId: selectedClass,
    variant: "Річний тест",
    startedAt: null,
    localMode: true
  };
  Object.assign(attempt, {
    studentName: getStudentName(),
    classId: selectedClass,
    variant: "Річний тест",
    finishedAt: new Date().toISOString(),
    score: latestResult.score,
    status: "finished",
    summary: {
      test: `${meta().className}, річний тест`,
      answered: latestResult.review.filter((row) => row.chosen !== null).length,
      correct: latestResult.score,
      total: TOTAL_SCORE
    },
    review: latestResult.review
  });
  if (index >= 0) attempts[index] = attempt;
  else attempts.unshift(attempt);
  writeLocalAttempts(attempts);
  lockedAttempt = attempt;
}

function updateTimer() {
  const minutes = Math.max(0, Math.floor(secondsLeft / 60));
  const seconds = Math.max(0, secondsLeft % 60);
  document.querySelector("#timer").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  if (name !== "test") stopTimer();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function openAdminScreen() {
  showScreen("admin");
  if (typeof requireAdminLogin === "function") {
    requireAdminLogin();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sparks(x, y, colors, count = 12) {
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 34 + Math.random() * 70;
    spark.className = "spark";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty("--spark-color", colors[i % colors.length]);
    spark.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
    document.body.append(spark);
    setTimeout(() => spark.remove(), 760);
  }
}

function startArena() {
  const canvas = document.querySelector("#arena");
  const ctx = canvas.getContext("2d");
  const nodes = Array.from({ length: 58 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - .5) * .00062,
    vy: (Math.random() - .5) * .00062,
    color: Math.random() > .5 ? "16,165,148" : Math.random() > .5 ? "255,107,85" : "101,87,255"
  }));

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > 1) node.vx *= -1;
      if (node.y < 0 || node.y > 1) node.vy *= -1;
    });
    for (let a = 0; a < nodes.length; a += 1) {
      for (let b = a + 1; b < nodes.length; b += 1) {
        const first = nodes[a];
        const second = nodes[b];
        const dx = (first.x - second.x) * w;
        const dy = (first.y - second.y) * h;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 145) {
          ctx.strokeStyle = `rgba(${first.color}, ${.12 * (1 - distance / 145)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(first.x * w, first.y * h);
          ctx.lineTo(second.x * w, second.y * h);
          ctx.stroke();
        }
      }
    }
    nodes.forEach((node) => {
      ctx.fillStyle = `rgba(${node.color}, .28)`;
      ctx.beginPath();
      ctx.arc(node.x * w, node.y * h, 2.5, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

init();
