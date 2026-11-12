// My S-Pen website: language by region (time zone) → browser language → English, a globe menu to change it,
// and the visitor's own platform highlighted. No cookies, no trackers, nothing is sent anywhere.
(function () {
  'use strict';

  var S = {
    en: {
      _name: 'English', meta_desc: "Use your phone or tablet pen as a pressure-sensitive pen for Windows, macOS and Linux.",
      hero_title: "Your phone's pen, on your computer",
      hero_sub: 'My S-Pen turns the stylus of your phone or tablet into a pressure-sensitive pen for Windows, macOS and Linux.',
      desktop_title: 'Computer app', desktop_sub: 'Install this on the computer you want to draw on.',
      recommended: 'For this device', btn_download: 'Download',
      win_note: 'Windows 10 (1809+) and 11 · x64 and ARM', win_hint: 'If SmartScreen appears: More info → Run anyway.',
      mac_note: 'macOS 12+ · Apple Silicon and Intel', mac_hint: 'If macOS blocks it: System Settings → Privacy & Security → Open Anyway.',
      linux_note: 'x64 and ARM64 · most distributions', linux_hint: 'Extract, run ./install.sh once, then start My S-Pen.',
      mobile_title: 'Phone and tablet app', mobile_sub: 'Install this on the phone or tablet whose pen you want to use.',
      android_note: 'Android 8+ · Samsung S Pen and other styluses', ios_note: 'iOS / iPadOS 16+ · Apple Pencil',
      gp: 'Google Play', as: 'App Store', soon: 'coming soon', apk_direct: 'or download the APK directly',
      features_title: 'What it does',
      f_pressure_t: 'Real pressure', f_pressure: 'Pressure levels, tilt and the pen button — drawing apps see a real pen tablet.',
      f_hover_t: 'Hover', f_hover: 'The cursor follows the pen before it touches the screen.',
      f_touch_t: 'Multi-touch', f_touch: 'Fingers work as a touchscreen, with palm rejection while you draw.',
      f_conn_t: 'Wi-Fi, USB or Bluetooth', f_conn: 'Connect the way you like — the connection stays stable.',
      f_secure_t: 'Private', f_secure: 'Optional password and hidden mode. Your pen data never leaves your local network.',
      f_lang_t: 'Your language', f_lang: 'English is built in; other languages download automatically inside the apps.',
      steps_title: 'Get started',
      s1: 'Install My S-Pen on your computer and open it.', s2: 'Install the app on your phone or tablet.',
      s3: 'Join the same Wi-Fi and pick your computer in the app — done.'
    },
    fa: {
      _name: 'فارسی', _rtl: true, meta_desc: 'قلم گوشی یا تبلت خود را به قلم حساس به فشار برای ویندوز، مک و لینوکس تبدیل کنید.',
      hero_title: 'قلم گوشی شما، روی کامپیوتر',
      hero_sub: 'My S-Pen قلم گوشی یا تبلت شما را به یک قلم حساس به فشار برای ویندوز، macOS و لینوکس تبدیل می‌کند.',
      desktop_title: 'برنامه کامپیوتر', desktop_sub: 'این را روی کامپیوتری نصب کنید که می‌خواهید روی آن طراحی کنید.',
      recommended: 'برای این دستگاه', btn_download: 'دانلود',
      win_note: 'ویندوز ۱۰ (1809 به بعد) و ۱۱ · x64 و ARM', win_hint: 'اگر SmartScreen ظاهر شد: More info ← Run anyway.',
      mac_note: 'macOS 12 به بعد · Apple Silicon و Intel', mac_hint: 'اگر macOS اجرا را مسدود کرد: System Settings ← Privacy & Security ← Open Anyway.',
      linux_note: 'x64 و ARM64 · بیشتر توزیع‌ها', linux_hint: 'فایل را باز کنید، یک بار ./install.sh را اجرا کنید و سپس My S-Pen را باز کنید.',
      mobile_title: 'برنامه گوشی و تبلت', mobile_sub: 'این را روی گوشی یا تبلتی نصب کنید که می‌خواهید از قلم آن استفاده کنید.',
      android_note: 'اندروید ۸ به بعد · S Pen سامسونگ و قلم‌های دیگر', ios_note: 'iOS / iPadOS 16 به بعد · Apple Pencil',
      gp: 'Google Play', as: 'App Store', soon: 'به‌زودی', apk_direct: 'یا فایل APK را مستقیم دانلود کنید',
      features_title: 'چه کارهایی انجام می‌دهد',
      f_pressure_t: 'فشار واقعی', f_pressure: 'سطوح فشار، زاویه قلم و دکمه قلم — برنامه‌های طراحی آن را یک تبلت طراحی واقعی می‌بینند.',
      f_hover_t: 'حالت شناور', f_hover: 'نشانگر پیش از لمس صفحه، قلم را دنبال می‌کند.',
      f_touch_t: 'چندلمسی', f_touch: 'انگشت‌ها مثل صفحه لمسی کار می‌کنند و هنگام طراحی کف دست نادیده گرفته می‌شود.',
      f_conn_t: 'Wi-Fi، USB یا بلوتوث', f_conn: 'هر طور که دوست دارید وصل شوید — اتصال پایدار می‌ماند.',
      f_secure_t: 'خصوصی', f_secure: 'رمز عبور و حالت مخفی اختیاری. داده‌های قلم هرگز از شبکه محلی شما خارج نمی‌شود.',
      f_lang_t: 'زبان شما', f_lang: 'انگلیسی داخلی است؛ زبان‌های دیگر به‌صورت خودکار داخل برنامه دانلود می‌شوند.',
      steps_title: 'شروع کنید',
      s1: 'My S-Pen را روی کامپیوتر نصب کنید و باز کنید.', s2: 'برنامه را روی گوشی یا تبلت نصب کنید.',
      s3: 'به همان Wi-Fi وصل شوید و کامپیوتر خود را در برنامه انتخاب کنید — تمام.'
    },
    ru: {
      _name: 'Русский', meta_desc: 'Стилус телефона или планшета — перо с нажимом для Windows, macOS и Linux.',
      hero_title: 'Перо вашего телефона — на вашем компьютере',
      hero_sub: 'My S-Pen превращает стилус телефона или планшета в чувствительное к нажиму перо для Windows, macOS и Linux.',
      desktop_title: 'Приложение для компьютера', desktop_sub: 'Установите его на компьютер, на котором хотите рисовать.',
      recommended: 'Для этого устройства', btn_download: 'Скачать',
      win_note: 'Windows 10 (1809+) и 11 · x64 и ARM', win_hint: 'Если появится SmartScreen: Подробнее → Выполнить в любом случае.',
      mac_note: 'macOS 12+ · Apple Silicon и Intel', mac_hint: 'Если macOS блокирует запуск: Системные настройки → Конфиденциальность и безопасность → Всё равно открыть.',
      linux_note: 'x64 и ARM64 · большинство дистрибутивов', linux_hint: 'Распакуйте, один раз выполните ./install.sh и запустите My S-Pen.',
      mobile_title: 'Приложение для телефона и планшета', mobile_sub: 'Установите его на телефон или планшет, стилусом которого хотите пользоваться.',
      android_note: 'Android 8+ · Samsung S Pen и другие стилусы', ios_note: 'iOS / iPadOS 16+ · Apple Pencil',
      gp: 'Google Play', as: 'App Store', soon: 'скоро', apk_direct: 'или скачайте APK напрямую',
      features_title: 'Возможности',
      f_pressure_t: 'Настоящий нажим', f_pressure: 'Уровни нажима, наклон и кнопка пера — графические программы видят настоящий планшет.',
      f_hover_t: 'Наведение', f_hover: 'Курсор следует за пером ещё до касания экрана.',
      f_touch_t: 'Мультитач', f_touch: 'Пальцы работают как сенсорный экран, ладонь игнорируется во время рисования.',
      f_conn_t: 'Wi-Fi, USB или Bluetooth', f_conn: 'Подключайтесь как удобно — соединение остаётся стабильным.',
      f_secure_t: 'Приватно', f_secure: 'Пароль и скрытый режим по желанию. Данные пера не покидают вашу локальную сеть.',
      f_lang_t: 'Ваш язык', f_lang: 'Английский встроен; другие языки загружаются автоматически в приложениях.',
      steps_title: 'Начало работы',
      s1: 'Установите My S-Pen на компьютер и откройте его.', s2: 'Установите приложение на телефон или планшет.',
      s3: 'Подключитесь к той же сети Wi-Fi и выберите компьютер в приложении — готово.'
    },
    es: {
      _name: 'Español', meta_desc: 'Usa el lápiz de tu teléfono o tableta como lápiz sensible a la presión para Windows, macOS y Linux.',
      hero_title: 'El lápiz de tu teléfono, en tu ordenador',
      hero_sub: 'My S-Pen convierte el lápiz de tu teléfono o tableta en un lápiz sensible a la presión para Windows, macOS y Linux.',
      desktop_title: 'Aplicación para ordenador', desktop_sub: 'Instálala en el ordenador en el que quieres dibujar.',
      recommended: 'Para este dispositivo', btn_download: 'Descargar',
      win_note: 'Windows 10 (1809+) y 11 · x64 y ARM', win_hint: 'Si aparece SmartScreen: Más información → Ejecutar de todas formas.',
      mac_note: 'macOS 12+ · Apple Silicon e Intel', mac_hint: 'Si macOS lo bloquea: Ajustes del Sistema → Privacidad y seguridad → Abrir igualmente.',
      linux_note: 'x64 y ARM64 · la mayoría de distribuciones', linux_hint: 'Extrae, ejecuta ./install.sh una vez y abre My S-Pen.',
      mobile_title: 'Aplicación para teléfono y tableta', mobile_sub: 'Instálala en el teléfono o la tableta cuyo lápiz quieres usar.',
      android_note: 'Android 8+ · S Pen de Samsung y otros lápices', ios_note: 'iOS / iPadOS 16+ · Apple Pencil',
      gp: 'Google Play', as: 'App Store', soon: 'próximamente', apk_direct: 'o descarga el APK directamente',
      features_title: 'Qué hace',
      f_pressure_t: 'Presión real', f_pressure: 'Niveles de presión, inclinación y el botón del lápiz: las apps de dibujo ven una tableta real.',
      f_hover_t: 'Modo flotante', f_hover: 'El cursor sigue al lápiz antes de que toque la pantalla.',
      f_touch_t: 'Multitáctil', f_touch: 'Los dedos funcionan como pantalla táctil, con rechazo de la palma al dibujar.',
      f_conn_t: 'Wi-Fi, USB o Bluetooth', f_conn: 'Conéctate como prefieras: la conexión se mantiene estable.',
      f_secure_t: 'Privado', f_secure: 'Contraseña y modo oculto opcionales. Los datos del lápiz nunca salen de tu red local.',
      f_lang_t: 'Tu idioma', f_lang: 'El inglés viene integrado; otros idiomas se descargan automáticamente en las apps.',
      steps_title: 'Primeros pasos',
      s1: 'Instala My S-Pen en tu ordenador y ábrelo.', s2: 'Instala la app en tu teléfono o tableta.',
      s3: 'Conéctate a la misma Wi-Fi y elige tu ordenador en la app: listo.'
    },
    de: {
      _name: 'Deutsch', meta_desc: 'Der Stift deines Handys oder Tablets als drucksensitiver Stift für Windows, macOS und Linux.',
      hero_title: 'Der Stift deines Handys – am Computer',
      hero_sub: 'My S-Pen macht den Stift deines Handys oder Tablets zu einem drucksensitiven Stift für Windows, macOS und Linux.',
      desktop_title: 'Computer-App', desktop_sub: 'Installiere sie auf dem Computer, auf dem du zeichnen möchtest.',
      recommended: 'Für dieses Gerät', btn_download: 'Herunterladen',
      win_note: 'Windows 10 (1809+) und 11 · x64 und ARM', win_hint: 'Falls SmartScreen erscheint: Weitere Informationen → Trotzdem ausführen.',
      mac_note: 'macOS 12+ · Apple Silicon und Intel', mac_hint: 'Falls macOS den Start blockiert: Systemeinstellungen → Datenschutz & Sicherheit → Dennoch öffnen.',
      linux_note: 'x64 und ARM64 · die meisten Distributionen', linux_hint: 'Entpacken, einmal ./install.sh ausführen und My S-Pen starten.',
      mobile_title: 'App für Handy und Tablet', mobile_sub: 'Installiere sie auf dem Handy oder Tablet, dessen Stift du nutzen möchtest.',
      android_note: 'Android 8+ · Samsung S Pen und andere Stifte', ios_note: 'iOS / iPadOS 16+ · Apple Pencil',
      gp: 'Google Play', as: 'App Store', soon: 'demnächst', apk_direct: 'oder die APK direkt herunterladen',
      features_title: 'Was es kann',
      f_pressure_t: 'Echter Druck', f_pressure: 'Druckstufen, Neigung und Stifttaste – Zeichenprogramme sehen ein echtes Grafiktablett.',
      f_hover_t: 'Schweben', f_hover: 'Der Zeiger folgt dem Stift, bevor er den Bildschirm berührt.',
      f_touch_t: 'Multitouch', f_touch: 'Finger funktionieren wie ein Touchscreen, mit Handflächenerkennung beim Zeichnen.',
      f_conn_t: 'WLAN, USB oder Bluetooth', f_conn: 'Verbinde dich, wie du möchtest – die Verbindung bleibt stabil.',
      f_secure_t: 'Privat', f_secure: 'Optionales Passwort und versteckter Modus. Deine Stiftdaten verlassen nie dein lokales Netzwerk.',
      f_lang_t: 'Deine Sprache', f_lang: 'Englisch ist integriert; weitere Sprachen werden in den Apps automatisch geladen.',
      steps_title: 'So geht’s',
      s1: 'Installiere My S-Pen auf deinem Computer und öffne es.', s2: 'Installiere die App auf deinem Handy oder Tablet.',
      s3: 'Verbinde dich mit demselben WLAN und wähle deinen Computer in der App – fertig.'
    },
    fr: {
      _name: 'Français', meta_desc: 'Le stylet de votre téléphone ou tablette, sensible à la pression, pour Windows, macOS et Linux.',
      hero_title: 'Le stylet de votre téléphone, sur votre ordinateur',
      hero_sub: 'My S-Pen transforme le stylet de votre téléphone ou tablette en stylet sensible à la pression pour Windows, macOS et Linux.',
      desktop_title: 'Application pour ordinateur', desktop_sub: "Installez-la sur l'ordinateur sur lequel vous voulez dessiner.",
      recommended: 'Pour cet appareil', btn_download: 'Télécharger',
      win_note: 'Windows 10 (1809+) et 11 · x64 et ARM', win_hint: 'Si SmartScreen apparaît : Informations complémentaires → Exécuter quand même.',
      mac_note: 'macOS 12+ · Apple Silicon et Intel', mac_hint: "Si macOS le bloque : Réglages Système → Confidentialité et sécurité → Ouvrir quand même.",
      linux_note: 'x64 et ARM64 · la plupart des distributions', linux_hint: 'Décompressez, lancez ./install.sh une fois, puis ouvrez My S-Pen.',
      mobile_title: 'Application pour téléphone et tablette', mobile_sub: 'Installez-la sur le téléphone ou la tablette dont vous voulez utiliser le stylet.',
      android_note: 'Android 8+ · S Pen Samsung et autres stylets', ios_note: 'iOS / iPadOS 16+ · Apple Pencil',
      gp: 'Google Play', as: 'App Store', soon: 'bientôt', apk_direct: "ou téléchargez l'APK directement",
      features_title: 'Ce qu’il fait',
      f_pressure_t: 'Vraie pression', f_pressure: 'Niveaux de pression, inclinaison et bouton du stylet : les logiciels de dessin voient une vraie tablette.',
      f_hover_t: 'Survol', f_hover: "Le curseur suit le stylet avant même qu'il touche l'écran.",
      f_touch_t: 'Multipoint', f_touch: 'Les doigts servent d’écran tactile, avec rejet de la paume pendant le dessin.',
      f_conn_t: 'Wi-Fi, USB ou Bluetooth', f_conn: 'Connectez-vous comme vous voulez : la connexion reste stable.',
      f_secure_t: 'Privé', f_secure: 'Mot de passe et mode masqué en option. Les données du stylet ne quittent jamais votre réseau local.',
      f_lang_t: 'Votre langue', f_lang: "L'anglais est intégré ; les autres langues se téléchargent automatiquement dans les applications.",
      steps_title: 'Pour commencer',
      s1: 'Installez My S-Pen sur votre ordinateur et ouvrez-le.', s2: "Installez l'application sur votre téléphone ou tablette.",
      s3: "Rejoignez le même Wi-Fi et choisissez votre ordinateur dans l'application — c'est prêt."
    },
    zh: {
      _name: '中文（简体）', meta_desc: '把手机或平板的手写笔变成 Windows、macOS 和 Linux 上的压感笔。',
      hero_title: '手机的笔，用在电脑上',
      hero_sub: 'My S-Pen 把手机或平板的手写笔变成 Windows、macOS 和 Linux 上的压感手写笔。',
      desktop_title: '电脑端应用', desktop_sub: '安装在你想用来绘画的电脑上。',
      recommended: '适用于此设备', btn_download: '下载',
      win_note: 'Windows 10（1809+）和 11 · x64 与 ARM', win_hint: '如果出现 SmartScreen：更多信息 → 仍要运行。',
      mac_note: 'macOS 12+ · Apple 芯片与 Intel', mac_hint: '如果 macOS 阻止打开：系统设置 → 隐私与安全性 → 仍要打开。',
      linux_note: 'x64 与 ARM64 · 大多数发行版', linux_hint: '解压后运行一次 ./install.sh，然后启动 My S-Pen。',
      mobile_title: '手机与平板应用', mobile_sub: '安装在你想使用其手写笔的手机或平板上。',
      android_note: 'Android 8+ · 三星 S Pen 及其他手写笔', ios_note: 'iOS / iPadOS 16+ · Apple Pencil',
      gp: 'Google Play', as: 'App Store', soon: '即将推出', apk_direct: '或直接下载 APK',
      features_title: '功能',
      f_pressure_t: '真实压感', f_pressure: '压感级别、倾斜和笔侧按钮——绘图软件会把它识别为真正的数位板。',
      f_hover_t: '悬停', f_hover: '笔尖接触屏幕之前，光标就会跟随手写笔移动。',
      f_touch_t: '多点触控', f_touch: '手指可作为触摸屏使用，绘画时自动防误触。',
      f_conn_t: 'Wi-Fi、USB 或蓝牙', f_conn: '按你喜欢的方式连接，连接稳定可靠。',
      f_secure_t: '私密', f_secure: '可选密码和隐藏模式。手写笔数据不会离开你的局域网。',
      f_lang_t: '你的语言', f_lang: '内置英语；其他语言会在应用内自动下载。',
      steps_title: '开始使用',
      s1: '在电脑上安装并打开 My S-Pen。', s2: '在手机或平板上安装应用。',
      s3: '连接同一个 Wi-Fi，在应用中选择你的电脑——完成。'
    }
  };

  // Region from the device's time zone (no IP lookup, nothing sent anywhere).
  var ZONES = [
    [/^Asia\/(Tehran|Kabul|Dushanbe)$/, 'fa'],
    [/^(Europe\/(Moscow|Minsk|Kirov|Volgograd|Samara|Ulyanovsk|Astrakhan|Saratov|Kaliningrad|Simferopol)|Asia\/(Yekaterinburg|Omsk|Novosibirsk|Barnaul|Tomsk|Novokuznetsk|Krasnoyarsk|Irkutsk|Chita|Yakutsk|Khandyga|Vladivostok|Ust-Nera|Magadan|Sakhalin|Srednekolymsk|Kamchatka|Anadyr|Almaty|Qostanay|Bishkek))$/, 'ru'],
    [/^(Europe\/(Madrid)|Atlantic\/Canary|Africa\/Ceuta|America\/(Mexico_City|Cancun|Merida|Monterrey|Matamoros|Chihuahua|Ciudad_Juarez|Ojinaga|Mazatlan|Bahia_Banderas|Hermosillo|Tijuana|Bogota|Lima|Santiago|Punta_Arenas|Buenos_Aires|Argentina\/.*|Caracas|La_Paz|Asuncion|Montevideo|Guayaquil|Panama|Costa_Rica|Managua|Tegucigalpa|El_Salvador|Guatemala|Havana|Santo_Domingo|Puerto_Rico)|Pacific\/Galapagos)$/, 'es'],
    [/^Europe\/(Berlin|Busingen|Vienna|Zurich|Vaduz)$/, 'de'],
    [/^(Europe\/(Paris|Brussels|Luxembourg|Monaco)|America\/(Martinique|Guadeloupe|Cayenne|Port-au-Prince)|Indian\/Reunion|Africa\/(Dakar|Abidjan|Bamako|Conakry|Niamey|Ouagadougou|Lome|Porto-Novo|Douala|Libreville|Brazzaville|Kinshasa|Bangui|Ndjamena))$/, 'fr'],
    [/^Asia\/(Shanghai|Chongqing|Chungking|Harbin|Urumqi|Hong_Kong|Macau|Taipei)$/, 'zh']
  ];

  function fromZone() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      for (var i = 0; i < ZONES.length; i++) if (ZONES[i][0].test(tz)) return ZONES[i][1];
    } catch (e) {}
    return null;
  }

  function fromBrowser() {
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var c = String(list[i]).toLowerCase().split('-')[0];
      if (S[c]) return c;
    }
    return null;
  }

  function saved() { try { return localStorage.getItem('myspen.lang'); } catch (e) { return null; } }
  function save(c) { try { localStorage.setItem('myspen.lang', c); } catch (e) {} }

  var current = 'en';

  function apply(code) {
    var t = S[code] || S.en;
    current = S[code] ? code : 'en';
    document.documentElement.lang = current;
    document.documentElement.dir = t._rtl ? 'rtl' : 'ltr';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      nodes[i].textContent = t[k] || S.en[k] || nodes[i].textContent;
    }
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta_desc || S.en.meta_desc);
    document.getElementById('langName').textContent = t._name;
    buildList();
  }

  var btn = document.getElementById('langBtn');
  var listEl = document.getElementById('langList');

  function buildList() {
    listEl.innerHTML = '';
    Object.keys(S).forEach(function (c) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.tabIndex = 0;
      li.setAttribute('aria-selected', c === current ? 'true' : 'false');
      li.dir = S[c]._rtl ? 'rtl' : 'ltr';
      li.textContent = S[c]._name;
      li.addEventListener('click', function () { choose(c); });
      li.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(c); } });
      listEl.appendChild(li);
    });
  }

  function choose(c) { save(c); apply(c); toggle(false); }
  function toggle(open) {
    listEl.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { var sel = listEl.querySelector('[aria-selected="true"]'); if (sel) sel.focus(); }
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(listEl.hidden); });
  document.addEventListener('click', function (e) { if (!listEl.hidden && !listEl.contains(e.target)) toggle(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });

  // Highlight the visitor's platform.
  function platform() {
    var ua = navigator.userAgent || '';
    var p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';
    if (/android/i.test(ua)) return 'android';
    if (/iPhone|iPad|iPod/.test(ua) || (p === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'ios';
    if (/Win/i.test(p) || /Windows/.test(ua)) return 'windows';
    if (/Mac/i.test(p) || /Mac OS X/.test(ua)) return 'mac';
    if (/Linux|X11|CrOS/i.test(p + ua)) return 'linux';
    return null;
  }
  var mine = platform();
  if (mine) {
    var card = document.querySelector('.dl[data-os="' + mine + '"]');
    if (card) card.classList.add('mine');
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  var q = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
  apply((q && S[q] && q) || saved() || fromZone() || fromBrowser() || 'en');
})();
