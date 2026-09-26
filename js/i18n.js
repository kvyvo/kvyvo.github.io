// Two languages, like kalka. Russian first; the choice is remembered per browser.
const RU = {
  title: 'kvyvo — маленькие вещи всерьёз',
  description: 'Открытые проекты kvyvo: kalka — световой стол из экрана, nickcheck — поиск свободного ника на 20 сервисах, whoami-bot и books-scraper.',
  langBtn: 'EN',
  langAria: 'Switch to English',
  eyebrow: 'Открытый код · MIT · 4 проекта',
  heroTitle: 'Маленькие вещи всерьёз',
  heroLead: 'Световой стол из экрана ноутбука, генератор ников с проверкой на 20 сервисах, телеграм-бот и скрапер. Статика без сборки, Python без лишнего, тесты без сети.',
  heroOpen: 'Открыть kalka',
  heroAll: 'Все проекты',
  heroAria: 'Лист из четырёх частей: экран под листом подсвечивает по очереди каждый проект',
  heroPart: '{name} · проект {n} из {N}',
  hp0: 'световой стол', hp1: '20 сервисов', hp2: 'что видит бот', hp3: '1000 книг',
  hRows: '1 000 строк · books.xlsx',
  secWork: '01 — проекты',
  workTitle: 'Что сделано',
  workLead: 'Каждый проект решает одну задачу до конца: с тестами, README на двух языках там, где это нужно, и без лишних зависимостей.',
  kTag: 'Веб · PWA',
  kTitle: 'Световой стол из экрана',
  kText: 'Любая картинка переносится на бумагу в натуральную величину: экран показывает её по частям, ты кладёшь лист сверху и обводишь. Экран определяется сам, масштаб проверяется банковской картой.',
  kF1: 'JPG · PNG · SVG · PDF',
  kF2: 'A4…A0 и свой размер',
  kF3: 'офлайн · RU/EN · ⌘K',
  kF4: '25 unit + 15 e2e',
  kOpen: 'Открыть kalka',
  source: 'Исходники',
  kAlt: 'Kalka: настройка картинки и план листа A3 из частей',
  nTag: 'Python · CLI',
  nTitle: 'Свободный ник за минуту',
  nText: 'Генерирует короткие произносимые псевдонимы и параллельно проверяет их на GitHub, npm, PyPI, Docker Hub, Telegram и ещё 15 сервисах. Свободные домены ищет через RDAP.',
  nF: '20 сервисов · RDAP · 31 тест',
  wTag: 'Python · Telegram',
  wTitle: 'Что телеграм рассказывает о тебе боту',
  wText: 'Команда /me собирает карточку: id, имя, username, язык, premium, био, фото — и отдельно то, чего бот не видит. Плюс кубики и печенье с предсказанием.',
  wF: 'aiogram 3.31 · rich messages · 11 тестов',
  bTag: 'Python · данные',
  bTitle: 'Каталог в Excel',
  bText: 'Проходит все страницы books.toscrape.com и собирает 1000 книг: название, цена, наличие. Результат — одна таблица.',
  bF: 'requests · BeautifulSoup · pandas',
  secHow: '02 — подход',
  howTitle: 'Как это сделано',
  howLead: 'Несколько правил, которые повторяются от проекта к проекту.',
  t1: 'Без сборки',
  t1x: 'ES-модули как есть. В kalka ~2 200 строк JS и одна зависимость, только для разработки. Этот сайт устроен так же.',
  t2: 'Тесты без сети',
  t2x: 'У nickcheck 31 тест, у whoami-bot 11: все HTTP-ответы подменены, токен не нужен. Kalka гоняет 15 сценариев в Chromium и WebKit.',
  t3: 'Данные остаются у тебя',
  t3x: 'Kalka работает в браузере и офлайн: файл не покидает устройство, прогресс лежит в IndexedDB. Регистрации нет нигде.',
  t4: 'Движение на пружинах',
  t4x: 'Пружины в замкнутой форме, как duration и bounce в SwiftUI. Прерываются без рывков; при «уменьшить движение» всё встаёт на место сразу.',
  s1: 'открытых проекта',
  s2: 'автотеста',
  s3: 'сервисов в nickcheck',
  s4: 'фреймворков на фронтенде',
  wc1: 'что бот обо мне знает', wc2: 'бросить кубик', wc3: 'печенье с предсказанием',
  stackLabel: 'Стек',
  foot: 'kvyvo — открытый код, MIT.',
  footNote: 'Сайт без сборки и фреймворков, как kalka.',
  islTop: '4 проекта',
  islWork: 'Проекты',
  islHow: 'Подход',
  palPh: 'Куда перейти?',
  palAria: 'Команды',
  cmdNothing: 'Ничего не нашлось',
  cmdOpenKalka: 'Открыть kalka',
  cmdRepo: '{name} на GitHub',
  cmdProfile: 'Профиль на GitHub',
  cmdWork: 'К проектам',
  cmdHow: 'К подходу',
  cmdTop: 'Наверх',
  cmdLang: 'English',
  cmdTheme: 'Тема: {mode}',
  themeLight: 'светлая', themeDark: 'тёмная', themeAuto: 'как в системе',
  toastLang: 'Русский',
  nfEyebrow: 'Ошибка 404',
  nfTitle: 'Такой страницы нет',
  nfLead: 'Адрес мог устареть или в нём опечатка. Проекты — на главной.',
  nfHome: 'На главную',
};

const EN = {
  title: 'kvyvo — small things, seriously',
  description: 'Open source by kvyvo: kalka turns a screen into a light table, nickcheck finds a free handle across 20 services, plus whoami-bot and books-scraper.',
  langBtn: 'RU',
  langAria: 'Переключить на русский',
  eyebrow: 'Open source · MIT · 4 projects',
  heroTitle: 'Small things, seriously',
  heroLead: 'A light table made from a laptop screen, a handle generator that checks 20 services, a Telegram bot and a scraper. Static pages with no build step, plain Python, tests that never touch the network.',
  heroOpen: 'Open kalka',
  heroAll: 'All projects',
  heroAria: 'A sheet of four parts: the screen under the paper lights up each project in turn',
  heroPart: '{name} · project {n} of {N}',
  hp0: 'light table', hp1: '20 services', hp2: 'what a bot sees', hp3: '1000 books',
  hRows: '1,000 rows · books.xlsx',
  secWork: '01 — work',
  workTitle: 'What’s built',
  workLead: 'Each project does one job all the way: with tests, a README in two languages where it matters, and no dependencies it can live without.',
  kTag: 'Web · PWA',
  kTitle: 'A light table from your screen',
  kText: 'Any picture goes onto paper at true size: the screen shows it part by part, you lay a sheet on top and trace. The screen is detected on its own, and the scale is checked with a bank card.',
  kF1: 'JPG · PNG · SVG · PDF',
  kF2: 'A4…A0 or custom',
  kF3: 'offline · RU/EN · ⌘K',
  kF4: '25 unit + 15 e2e',
  kOpen: 'Open kalka',
  source: 'Source',
  kAlt: 'Kalka: picture setup and an A3 sheet plan split into parts',
  nTag: 'Python · CLI',
  nTitle: 'A free handle in a minute',
  nText: 'Generates short pronounceable handles and checks them in parallel on GitHub, npm, PyPI, Docker Hub, Telegram and 15 more services. Finds free domains over RDAP.',
  nF: '20 services · RDAP · 31 tests',
  wTag: 'Python · Telegram',
  wTitle: 'What Telegram tells a bot about you',
  wText: 'The /me command builds a card: id, name, username, language, premium, bio, photo — and, separately, what the bot can’t see. Plus dice and a fortune cookie.',
  wF: 'aiogram 3.31 · rich messages · 11 tests',
  bTag: 'Python · data',
  bTitle: 'A catalogue into Excel',
  bText: 'Walks every page of books.toscrape.com and collects 1,000 books: title, price, availability. The result is one spreadsheet.',
  bF: 'requests · BeautifulSoup · pandas',
  secHow: '02 — approach',
  howTitle: 'How it’s made',
  howLead: 'A few rules that repeat from project to project.',
  t1: 'No build step',
  t1x: 'ES modules as they are. Kalka is ~2,200 lines of JS with one dependency, for development only. This site works the same way.',
  t2: 'Tests without network',
  t2x: 'nickcheck has 31 tests, whoami-bot has 11: every HTTP response is stubbed, no token needed. Kalka runs 15 scenarios in Chromium and WebKit.',
  t3: 'Your data stays yours',
  t3x: 'Kalka runs in the browser and offline: the file never leaves the device, progress lives in IndexedDB. No sign-up anywhere.',
  t4: 'Motion on springs',
  t4x: 'Closed-form springs, like duration and bounce in SwiftUI. They interrupt without jumps; with Reduce Motion everything lands at once.',
  s1: 'open projects',
  s2: 'automated tests',
  s3: 'services in nickcheck',
  s4: 'front-end frameworks',
  wc1: 'what the bot knows about me', wc2: 'roll a die', wc3: 'a fortune cookie',
  stackLabel: 'Stack',
  foot: 'kvyvo — open source, MIT.',
  footNote: 'No build step and no framework, same as kalka.',
  islTop: '4 projects',
  islWork: 'Work',
  islHow: 'Approach',
  palPh: 'Where to?',
  palAria: 'Commands',
  cmdNothing: 'Nothing found',
  cmdOpenKalka: 'Open kalka',
  cmdRepo: '{name} on GitHub',
  cmdProfile: 'GitHub profile',
  cmdWork: 'Go to work',
  cmdHow: 'Go to approach',
  cmdTop: 'Back to top',
  cmdLang: 'Русский',
  cmdTheme: 'Theme: {mode}',
  themeLight: 'light', themeDark: 'dark', themeAuto: 'system',
  toastLang: 'English',
  nfEyebrow: 'Error 404',
  nfTitle: 'No such page',
  nfLead: 'The address may be old or mistyped. The projects are on the home page.',
  nfHome: 'Home page',
};

const DICT = { ru: RU, en: EN };
const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode: fine */ } };

const fromBrowser = () => (/^(ru|uk|be|kk)\b/i.test(navigator.language || '') ? 'ru' : 'en');
let lang = DICT[read('kvyvo.lang')] ? read('kvyvo.lang') : fromBrowser();

export const getLang = () => lang;
export function t(key, vars = {}) {
  const s = DICT[lang][key] ?? RU[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}

/** Fill every [data-i18n] node and [data-i18n-*] attribute on the page. */
export function apply(root = document) {
  document.documentElement.lang = lang;
  root.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  for (const attr of ['aria-label', 'alt', 'placeholder']) {
    root.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`))));
  }
  if (document.body.dataset.page !== '404') document.title = t('title');
  document.querySelector('meta[name=description]')?.setAttribute('content', t('description'));
}

export function setLang(next) {
  lang = DICT[next] ? next : 'ru';
  write('kvyvo.lang', lang);
  apply();
}

/* theme: system by default; the palette can pin light or dark */
const THEMES = ['auto', 'dark', 'light'];
export const getTheme = () => (THEMES.includes(read('kvyvo.theme')) ? read('kvyvo.theme') : 'auto');
export function applyTheme(mode = getTheme()) {
  if (mode === 'auto') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = mode;
}
export function nextTheme() {
  const mode = THEMES[(THEMES.indexOf(getTheme()) + 1) % THEMES.length];
  write('kvyvo.theme', mode);
  applyTheme(mode);
  return mode;
}
