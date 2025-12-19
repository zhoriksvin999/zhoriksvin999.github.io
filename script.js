// ============== ОСНОВНЫЕ ДАННЫЕ ==============

// 23 товара
const products = {
  1: {
    id: 1,
    title: "Лампочка светодиодная Е27 20 ВТ дневной свет 💡",
    price: 170,
    image: "https://avatars.mds.yandex.net/get-mpic/16067753/2a000001983c472228918dcc6534e0e7e25d/orig",
    category: "электроника",
    rating: 4.5,
    badge: "хит",
    tags: "лампочка светодиодная освещение свет дом офис энергосбережение",
    description: "Энергосберегающая светодиодная лампа для дома и офиса. Срок службы до 25,000 часов. Экономия электроэнергии до 85% по сравнению с лампами накаливания.",
    features: ["Энергосбережение", "Долгий срок службы", "Яркий свет"]
  },
  2: {
    id: 2,
    title: "Угловой диван, светло-бежевый 🛋️",
    price: 27986,
    image: "https://ir.ozone.ru/s3/multimedia-1-z/wc1000/8117429255.jpg",
    category: "мебель",
    rating: 4,
    badge: "новинка",
    tags: "диван угловой мебель гостиная комфорт отдых",
    description: "Просторный угловой диван для вашей гостиной. Изготовлен из экологичных материалов, с ортопедическим основанием и мягкими подушками.",
    features: ["Ортопедическое основание", "Экоматериалы", "Разборная конструкция"]
  },
  3: {
    id: 3,
    title: "Малиновое дерево морозостойкое Таруса саженец 🌳",
    price: 475,
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/186/969/784/032/518/600011043018b0.jpeg",
    category: "растения",
    rating: 5,
    badge: "акция",
    tags: "дерево малина растение саженец сад огород фрукты",
    description: "Морозостойкий саженец малинового дерева. Выдерживает температуры до -30°C. Высокая урожайность - до 4 кг с куста.",
    features: ["Морозостойкость", "Высокая урожайность", "Крупные ягоды"]
  },
  4: {
    id: 4,
    title: "Смартфон Xiaomi Redmi Note 13 Pro 📱",
    price: 24990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id5575787011966879919.jpeg/orig",
    category: "электроника",
    rating: 4.7,
    badge: "хит",
    tags: "смартфон xiaomi телефон мобильный гаджет android камера",
    description: "Мощный смартфон с AMOLED дисплеем 120 Гц и камерой 200 Мп. Процессор Snapdragon, батарея 5000 мАч с быстрой зарядкой 67 Вт.",
    features: ["Камера 200 Мп", "AMOLED 120 Гц", "Быстрая зарядка 67 Вт"]
  },
  5: {
    id: 5,
    title: "Робот-пылесос Xiaomi Vacuum Mop 2 Pro 🧹",
    price: 18990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id3569950693451441534.jpeg/orig",
    category: "бытовая техника",
    rating: 4.8,
    badge: "новинка",
    tags: "пылесос робот уборка техника дом чистота автоматизация",
    description: "Умный робот-пылесос с функцией влажной уборки. Навигация LIDAR, управление через приложение, автоматическая зарядка.",
    features: ["Навигация LIDAR", "Влажная уборка", "Управление через приложение"]
  },
  6: {
    id: 6,
    title: "Беговая дорожка электрическая складная 🏃‍♂️",
    price: 8490,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id3040167314553316243.jpeg/orig",
    category: "спорт",
    rating: 4.6,
    badge: "акция",
    tags: "бег дорожка тренажер спорт фитнес здоровье тренировка",
    description: "Компактная электрическая беговая дорожка для домашних тренировок. Складная конструкция, 12 программ тренировок, максимальная скорость 12 км/ч.",
    features: ["Складная конструкция", "12 программ", "Макс. скорость 12 км/ч"]
  },
  7: {
    id: 7,
    title: "Компьютерный стол с полками 🖥️",
    price: 12490,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id3296949718102363720.jpeg/orig",
    category: "мебель",
    rating: 4.3,
    badge: "хит",
    tags: "стол компьютерный офис работа мебель эргономика",
    description: "Эргономичный компьютерный стол с регулируемой высотой, полками для техники и отделением для проводов. Размеры: 120x60x75 см.",
    features: ["Регулируемая высота", "Встроенные полки", "Отделение для проводов"]
  },
  8: {
    id: 8,
    title: "Зимняя куртка пуховая с капюшоном 🧥",
    price: 2990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id7346364501757172217.jpeg/orig",
    category: "одежда",
    rating: 4.9,
    badge: "новинка",
    tags: "куртка зимняя одежда пуховая тепло мороз зима",
    description: "Теплая зимняя куртка с натуральным пуховым наполнителем. Водоотталкивающая ткань, удобный капюшон, несколько карманов.",
    features: ["Натуральный пух", "Водоотталкивающая ткань", "Утепленный капюшон"]
  },
  9: {
    id: 9,
    title: "Орхидея фаленопсис в горшке 🌸",
    price: 890,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id2529514383083455258.jpeg/orig",
    category: "растения",
    rating: 4.7,
    badge: "акция",
    tags: "орхидея цветок растение комнатное декор интерьер",
    description: "Цветущая орхидея фаленопсис в керамическом горшке. Неприхотливое комнатное растение с длительным цветением до 6 месяцев.",
    features: ["Длительное цветение", "Керамический горшок", "Неприхотлива в уходе"]
  },
  10: {
    id: 10,
    title: "Наушники Sony WH-CH720N беспроводные 🎧",
    price: 5490,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id4357082560697745323.jpeg/orig",
    category: "электроника",
    rating: 4.4,
    badge: "распродажа",
    tags: "наушники sony беспроводные музыка звук шумоподавление",
    description: "Беспроводные наушники с активным шумоподавлением. Время работы до 50 часов, поддержка Bluetooth 5.2, складная конструкция.",
    features: ["Шумоподавление", "50 часов работы", "Складная конструкция"]
  },
  11: {
    id: 11,
    title: "Мышь Logitech G Pro X Superlight 🖱️",
    price: 8000,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id9153764782923478293.jpeg/orig",
    category: "электроника",
    rating: 4.9,
    badge: "топ",
    tags: "мышь logitech игровая g pro superlight беспроводная gaming",
    description: "Профессиональная беспроводная игровая мышь. Вес всего 63 грамма, сенсор HERO 25K, время отклика 1 мс, автономность до 70 часов.",
    features: ["Вес 63г", "Сенсор HERO 25K", "Автономность 70ч", "Беспроводная"]
  },
  12: {
    id: 12,
    title: "Кофемашина автоматическая De'Longhi ☕",
    price: 32990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id8086408122718397299.jpeg/orig",
    category: "бытовая техника",
    rating: 4.8,
    badge: "новинка",
    tags: "кофемашина кофе делонги техника кухня напитки",
    description: "Автоматическая кофемашина профессионального уровня с капучинатором, 13 степенями помола и функцией приготовления двух чашек одновременно.",
    features: ["Капучинатор", "13 степеней помола", "Профессиональный уровень"]
  },
  13: {
    id: 13,
    title: "Набор гантелей разборных 20 кг 🏋️‍♂️",
    price: 2490,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id4372008676743360406.jpeg/orig",
    category: "спорт",
    rating: 4.5,
    badge: "акция",
    tags: "гантели спорт тренажеры фитнес мышцы тренировка",
    description: "Набор разборных гантелей общим весом до 20 кг. Резиновые диски, металлические грифы, удобный ключ для сборки.",
    features: ["Резиновые диски", "Металлические грифы", "Разборная конструкция"]
  },
  14: {
    id: 14,
    title: "Умная колонка Яндекс Станция Мини 2 🔊",
    price: 6990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id6123456789012345678.jpeg/orig",
    category: "электроника",
    rating: 4.6,
    badge: "новинка",
    tags: "колонка умная яндекс алиса голосовой помощник музыка",
    description: "Компактная умная колонка с голосовым помощником Алиса. Управление умным домом, стереозвук, поддержка потоковой музыки.",
    features: ["Голосовой помощник", "Управление умным домом", "Стереозвук"]
  },
  15: {
    id: 15,
    title: "Электрический самокат Xiaomi Mi Scooter 4 Pro 🛴",
    price: 45990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id7234567890123456789.jpeg/orig",
    category: "спорт",
    rating: 4.8,
    badge: "хит",
    tags: "самокат электрический xiaomi транспорт городской",
    description: "Мощный электрический самокат с запасом хода до 55 км. Максимальная скорость 25 км/ч, складная конструкция, яркие фары.",
    features: ["Запас хода 55км", "Складная конструкция", "Мощный двигатель"]
  },
  16: {
    id: 16,
    title: "Набор ножей профессиональных 8 предметов 🔪",
    price: 12990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id8345678901234567890.jpeg/orig",
    category: "бытовая техника",
    rating: 4.7,
    badge: "акция",
    tags: "ножи набор кухня профессиональный сталь",
    description: "Профессиональный набор ножей из высокоуглеродистой стали. Включает шеф-нож, хлебный, универсальный, овощной и точилку.",
    features: ["Высокоуглеродистая сталь", "8 предметов", "Профессиональное качество"]
  },
  17: {
    id: 17,
    title: "Беспроводная колонка JBL Charge 5 🔊",
    price: 11990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id2123456789012345678.jpeg/orig",
    category: "электроника",
    rating: 4.9,
    badge: "топ",
    tags: "колонка беспроводная jbl bluetooth музыка портативная",
    description: "Водонепроницаемая портативная колонка с мощным звуком. Работает до 20 часов, защита IP67, можно заряжать устройства через USB.",
    features: ["Защита IP67", "20 часов работы", "Портативный дизайн"]
  },
  18: {
    id: 18,
    title: "Электрический гриль Tefal OptiGrill+ 🍖",
    price: 8990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id3234567890123456789.jpeg/orig",
    category: "бытовая техника",
    rating: 4.7,
    badge: "хит",
    tags: "гриль тефаль электрический кухня приготовление еда",
    description: "Умный электрический гриль с автоматическим определением толщины продуктов. 6 программ приготовления, съемные пластины.",
    features: ["Автоопределение толщины", "6 программ", "Съемные пластины"]
  },
  19: {
    id: 19,
    title: "Набор LEGO Technic Lamborghini 🏎️",
    price: 24990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id4345678901234567890.jpeg/orig",
    category: "детские товары",
    rating: 4.8,
    badge: "новинка",
    tags: "лего конструктор техник ламборджини игрушка",
    description: "Конструктор LEGO Technic Lamborghini Sián FKP 37. 3696 деталей, работающая коробка передач, открывающиеся двери.",
    features: ["3696 деталей", "Работающая КПП", "Масштаб 1:8"]
  },
  20: {
    id: 20,
    title: "Моноблок Acer Aspire C24 🖥️",
    price: 54990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id5456789012345678901.jpeg/orig",
    category: "электроника",
    rating: 4.6,
    badge: "акция",
    tags: "моноблок компьютер acer рабочий стол офис",
    description: "Стильный моноблок с процессором Intel Core i5, 16 ГБ RAM, SSD 512 ГБ. Дисплей 23.8 дюйма Full HD, веб-камера.",
    features: ["Intel Core i5", "16 ГБ RAM", "SSD 512 ГБ"]
  },
  21: {
    id: 21,
    title: "Набор посуды Tefal Ingenio 🔪",
    price: 15990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id6567890123456789012.jpeg/orig",
    category: "бытовая техника",
    rating: 4.5,
    badge: "распродажа",
    tags: "посуда тефаль сковорода кастрюля кухня",
    description: "Набор посуды 10 предметов с антипригарным покрытием. Съемные ручки, можно использовать в духовке и хранить в стопке.",
    features: ["10 предметов", "Съемные ручки", "Для духовки до 260°C"]
  },
  22: {
    id: 22,
    title: "Беспроводной пылесос Dyson V15 Detect 🧹",
    price: 65990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id7678901234567890123.jpeg/orig",
    category: "бытовая техника",
    rating: 4.9,
    badge: "топ",
    tags: "пылесос дайсон беспроводной уборка дом",
    description: "Мощный беспроводной пылесос с лазерным обнаружением пыли. До 60 минут работы, HEPA-фильтр, насадки для всех поверхностей.",
    features: ["Лазерное обнаружение", "60 минут работы", "HEPA-фильтр"]
  },
  23: {
    id: 23,
    title: "Умные часы Apple Watch Series 9 ⌚",
    price: 39990,
    image: "https://avatars.mds.yandex.net/get-mpic/5233304/img_id8789012345678901234.jpeg/orig",
    category: "электроника",
    rating: 4.8,
    badge: "новинка",
    tags: "часы apple watch умные гаджет здоровье",
    description: "Умные часы с новым процессором S9, всегда включенным дисплеем, измерением ЭКГ и уровня кислорода в крови.",
    features: ["Процессор S9", "ЭКГ и SpO₂", "Водонепроницаемые"]
  }
};

// Категории товаров
const categories = {
  'электроника': { icon: '📱', color: '#2196F3' },
  'мебель': { icon: '🛋️', color: '#795548' },
  'растения': { icon: '🌿', color: '#4CAF50' },
  'бытовая техника': { icon: '🔌', color: '#FF9800' },
  'спорт': { icon: '🏋️‍♂️', color: '#F44336' },
  'одежда': { icon: '👕', color: '#9C27B0' },
  'книги': { icon: '📚', color: '#607D8B' },
  'косметика': { icon: '💄', color: '#E91E63' },
  'детские товары': { icon: '🧸', color: '#00BCD4' }
};

// ============== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==============

let searchHistory = JSON.parse(localStorage.getItem('buyday_search_history')) || [];
let viewHistory = JSON.parse(localStorage.getItem('buyday_view_history')) || [];
let cartHistory = JSON.parse(localStorage.getItem('buyday_cart_history')) || [];
let cart = JSON.parse(localStorage.getItem('buyday_cart')) || {};
let currentProductModal = null;

// ============== СИСТЕМА АККАУНТОВ ==============

// Массив пользователей
let users = JSON.parse(localStorage.getItem('buyday_users')) || [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivan@example.com',
    password: '123456',
    phone: '+7 (999) 999-99-99',
    birthDate: '1990-01-01',
    bonuses: 1500,
    level: 'premium',
    registrationDate: '2023-01-15',
    settings: {
      emailNotifications: true,
      smsNotifications: true,
      twoFactorAuth: false
    },
    addresses: [
      {
        id: 1,
        title: 'Домашний адрес',
        address: 'ул. Пушкина, д. 10, кв. 5',
        city: 'Москва',
        postalCode: '123456',
        isDefault: true
      }
    ]
  }
];

// Текущий авторизованный пользователь
let currentUser = JSON.parse(localStorage.getItem('buyday_current_user')) || null;

// Данные пользователя для личного кабинета
let user = JSON.parse(localStorage.getItem('buyday_user')) || {
  id: Date.now(),
  firstName: 'Иван',
  lastName: 'Иванов',
  email: 'ivan@example.com',
  phone: '+7 (999) 999-99-99',
  birthDate: '1990-01-01',
  bonuses: 1500,
  level: 'premium',
  registrationDate: new Date().toISOString(),
  settings: {
    emailNotifications: true,
    smsNotifications: true,
    twoFactorAuth: false
  },
  addresses: [
    {
      id: 1,
      title: 'Домашний адрес',
      address: 'ул. Пушкина, д. 10, кв. 5',
      city: 'Москва',
      postalCode: '123456',
      isDefault: true
    }
  ]
};

// История заказов
let orders = JSON.parse(localStorage.getItem('buyday_orders')) || [
  {
    id: 'BYD-20240115-001',
    date: '2024-01-15',
    status: 'delivered',
    items: [
      { id: 4, title: 'Смартфон Xiaomi Redmi Note 13 Pro', price: 24990, quantity: 1, image: products[4].image },
      { id: 10, title: 'Наушники Sony WH-CH720N', price: 5490, quantity: 1, image: products[10].image }
    ],
    total: 30480,
    address: 'ул. Пушкина, д. 10, кв. 5, Москва'
  },
  {
    id: 'BYD-20231220-002',
    date: '2023-12-20',
    status: 'delivered',
    items: [
      { id: 2, title: 'Угловой диван', price: 27986, quantity: 1, image: products[2].image }
    ],
    total: 27986,
    address: 'ул. Пушкина, д. 10, кв. 5, Москва'
  }
];

// Избранное
let favorites = JSON.parse(localStorage.getItem('buyday_favorites')) || [1, 4, 7, 14, 17, 22];

// История бонусов
let bonusHistory = JSON.parse(localStorage.getItem('buyday_bonus_history')) || [
  { date: '2024-01-15', description: 'Заказ BYD-20240115-001', amount: 304, type: 'earn' },
  { date: '2023-12-25', description: 'Бонусы за отзыв', amount: 500, type: 'earn' },
  { date: '2023-12-20', description: 'Заказ BYD-20231220-002', amount: 279, type: 'earn' }
];

// ============== СИСТЕМА ПОДДЕРЖКИ ==============

// Глобальный объект поддержки
window.BuyDaySupport = {
  isOpen: false,
  messages: [],
  unreadCount: 0,
  
  // Инициализация
  init: function() {
    this.loadMessages();
    this.updateBadge();
    this.renderChat();
    
    // Восстановление из localStorage
    const savedMessages = localStorage.getItem('buyday_support_messages');
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    }
  },
  
  // Открыть модальное окно
  openModal: function(prefilledQuestion = '') {
    const modal = document.getElementById('supportModal');
    const input = document.getElementById('supportInput');
    
    modal.classList.add('active');
    this.isOpen = true;
    
    if (prefilledQuestion) {
      input.value = prefilledQuestion;
    }
    
    // Скрыть непрочитанные сообщения
    this.unreadCount = 0;
    this.updateBadge();
    
    // Прокрутка вниз
    setTimeout(() => {
      const body = document.getElementById('supportBody');
      body.scrollTop = body.scrollHeight;
    }, 100);
  },
  
  // Закрыть модальное окно
  closeModal: function() {
    const modal = document.getElementById('supportModal');
    modal.classList.remove('active');
    this.isOpen = false;
  },
  
  // Открыть с предзаполненным вопросом
  openWithQuestion: function(question) {
    this.openModal(question);
  },
  
  // Отправить сообщение
  sendMessage: function(text) {
    if (!text.trim()) return;
    
    // Добавить сообщение пользователя
    this.addMessage('user', text);
    
    // Очистить поле ввода
    document.getElementById('supportInput').value = '';
    
    // Ответ бота
    setTimeout(() => {
      this.processUserMessage(text);
    }, 1000);
  },
  
  // Обработка сообщения пользователя
  processUserMessage: function(message) {
    const lowerMessage = message.toLowerCase();
    let response = '';
    
    // База знаний
    const knowledgeBase = {
      'привет': 'Привет! 👋 Чем могу помочь?',
      'добрый день': 'Добрый день! ☀️ Рад вас видеть!',
      'помощь': 'Я могу помочь с:\n• Статусом заказа\n• Доставкой\n• Оплатой\n• Возвратом\n• Гарантией\n• Акциями и скидками\n\nЧто вас интересует?',
      'статус заказа': '📦 Чтобы проверить статус заказа, введите номер в формате BYD-XXXXXX',
      'доставка': '🚚 Доставка по России 3-7 дней. Бесплатно от 5000₽!',
      'оплата': '💳 Принимаем карты, электронные кошельки и наложенный платеж',
      'возврат': '🔄 Возврат в течение 14 дней при сохранении товарного вида',
      'гарантия': '🛡️ Гарантия от 12 до 36 месяцев в зависимости от товара',
      'оператор': '👨‍💻 Соединяю с оператором...\n📞 Телефон: 8-800-555-35-35',
      'спасибо': 'Пожалуйста! 😊 Обращайтесь еще!'
    };
    
    // Поиск ответа
    for (const [keyword, answer] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(keyword)) {
        response = answer;
        break;
      }
    }
    
    // Если ответ не найден
    if (!response) {
      response = 'Извините, я не совсем понял вопрос. Попробуйте задать его по-другому или выберите тему:';
    }
    
    // Добавить ответ бота
    this.addMessage('bot', response);
    
    // Сохранить в историю
    this.saveMessages();
  },
  
  // Добавить сообщение в чат
  addMessage: function(sender, text) {
    const message = {
      id: Date.now(),
      sender: sender,
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toISOString()
    };
    
    this.messages.push(message);
    this.renderMessage(message);
    this.saveMessages();
    
    // Если окно закрыто, увеличить счетчик непрочитанных
    if (!this.isOpen && sender === 'bot') {
      this.unreadCount++;
      this.updateBadge();
    }
  },
  
  // Отрисовать сообщение
  renderMessage: function(message) {
    const body = document.getElementById('supportBody');
    const messageDiv = document.createElement('div');
    
    messageDiv.className = `support-message ${message.sender}`;
    messageDiv.innerHTML = `
      <div style="max-width: 70%; padding: 10px 15px; border-radius: 15px; margin-bottom: 10px; 
                  ${message.sender === 'user' ? 
                    'background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; margin-left: auto; border-bottom-right-radius: 5px;' : 
                    'background: #f0f0f0; color: #333; border-bottom-left-radius: 5px;'}">
        <div>${message.text.replace(/\n/g, '<br>')}</div>
        <div style="font-size: 0.7rem; opacity: 0.7; margin-top: 5px; text-align: ${message.sender === 'user' ? 'right' : 'left'}">
          ${message.time}
        </div>
      </div>
    `;
    
    body.appendChild(messageDiv);
    body.scrollTop = body.scrollHeight;
  },
  
  // Отрисовать весь чат
  renderChat: function() {
    const body = document.getElementById('supportBody');
    body.innerHTML = '';
    
    // Приветственное сообщение
    if (this.messages.length === 0) {
      this.addMessage('bot', '👋 Добро пожаловать в поддержку BuyDay! Задайте ваш вопрос или выберите тему:');
    } else {
      this.messages.forEach(msg => this.renderMessage(msg));
    }
  },
  
  // Сохранить сообщения
  saveMessages: function() {
    localStorage.setItem('buyday_support_messages', JSON.stringify(this.messages));
  },
  
  // Загрузить сообщения
  loadMessages: function() {
    const saved = localStorage.getItem('buyday_support_messages');
    if (saved) {
      this.messages = JSON.parse(saved);
    }
  },
  
  // Обновить бейдж
  updateBadge: function() {
    const badge = document.getElementById('unreadBadge');
    const widget = document.getElementById('supportWidget');
    
    if (this.unreadCount > 0) {
      badge.textContent = this.unreadCount;
      widget.classList.add('has-messages');
    } else {
      widget.classList.remove('has-messages');
    }
  },
  
  // Задать быстрый вопрос
  askQuickQuestion: function(question) {
    this.sendMessage(question);
  }
};

// ============== ФУНКЦИИ АВТОРИЗАЦИИ ==============

// Открыть модальное окно авторизации
function openAuthModal() {
  document.getElementById('authModal').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  showLoginForm();
}

// Закрыть модальное окно авторизации
function closeAuthModal() {
  document.getElementById('authModal').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Показать форму входа
function showLoginForm() {
  document.getElementById('authTitle').textContent = 'Вход в аккаунт';
  
  document.querySelectorAll('.auth-form').forEach(form => {
    form.classList.remove('active');
  });
  
  document.getElementById('loginForm').classList.add('active');
}

// Показать форму регистрации
function showRegisterForm() {
  document.getElementById('authTitle').textContent = 'Регистрация';
  
  document.querySelectorAll('.auth-form').forEach(form => {
    form.classList.remove('active');
  });
  
  document.getElementById('registerForm').classList.add('active');
}

// Показать форму восстановления пароля
function showForgotPasswordForm() {
  document.getElementById('authTitle').textContent = 'Восстановление пароля';
  
  document.querySelectorAll('.auth-form').forEach(form => {
    form.classList.remove('active');
  });
  
  document.getElementById('forgotPasswordForm').classList.add('active');
}

// Вход в аккаунт
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  if (!email || !password) {
    showNotification('Пожалуйста, заполните все поля', 'error');
    return;
  }
  
  // Поиск пользователя
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    currentUser = user;
    localStorage.setItem('buyday_current_user', JSON.stringify(currentUser));
    
    closeAuthModal();
    updateUserInterface();
    showNotification(`Добро пожаловать, ${user.firstName}!`, 'success');
    
    // Загружаем данные пользователя
    loadUserData();
  } else {
    showNotification('Неверный email или пароль', 'error');
  }
}

// Регистрация нового пользователя
function register() {
  const firstName = document.getElementById('registerFirstName').value;
  const lastName = document.getElementById('registerLastName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
  const agreement = document.getElementById('registerAgreement').checked;
  
  // Проверки
  if (!firstName || !email || !password) {
    showNotification('Пожалуйста, заполните обязательные поля', 'error');
    return;
  }
  
  if (password !== passwordConfirm) {
    showNotification('Пароли не совпадают', 'error');
    return;
  }
  
  if (!agreement) {
    showNotification('Необходимо согласиться с условиями', 'error');
    return;
  }
  
  if (users.find(u => u.email === email)) {
    showNotification('Пользователь с таким email уже существует', 'error');
    return;
  }
  
  // Создание нового пользователя
  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password,
    phone: '',
    birthDate: '',
    bonuses: 500,
    level: 'regular',
    registrationDate: new Date().toISOString(),
    settings: {
      emailNotifications: true,
      smsNotifications: true,
      twoFactorAuth: false
    },
    addresses: []
  };
  
  users.push(newUser);
  localStorage.setItem('buyday_users', JSON.stringify(users));
  
  currentUser = newUser;
  localStorage.setItem('buyday_current_user', JSON.stringify(currentUser));
  
  closeAuthModal();
  updateUserInterface();
  showNotification(`Регистрация успешна! Добро пожаловать, ${firstName}!`, 'success');
  
  // Инициализируем данные пользователя
  user = newUser;
  orders = [];
  favorites = [];
  bonusHistory = [
    { date: new Date().toISOString().split('T')[0], description: 'Бонусы за регистрацию', amount: 500, type: 'earn' }
  ];
  
  saveUserData();
}

// Восстановление пароля
function sendPasswordReset() {
  const email = document.getElementById('forgotEmail').value;
  
  if (!email) {
    showNotification('Введите ваш email', 'error');
    return;
  }
  
  const userExists = users.find(u => u.email === email);
  
  if (userExists) {
    showNotification('Ссылка для восстановления пароля отправлена на ваш email', 'success');
    setTimeout(() => {
      showLoginForm();
    }, 2000);
  } else {
    showNotification('Пользователь с таким email не найден', 'error');
  }
}

// Вход как гость
function loginAsGuest() {
  currentUser = {
    id: 'guest',
    firstName: 'Гость',
    lastName: '',
    email: '',
    level: 'guest'
  };
  
  localStorage.setItem('buyday_current_user', JSON.stringify(currentUser));
  
  closeAuthModal();
  updateUserInterface();
  showNotification('Вы вошли как гость', 'info');
}

// Выход из аккаунта
function logout() {
  if (confirm('Вы уверены, что хотите выйти?')) {
    currentUser = null;
    localStorage.removeItem('buyday_current_user');
    
    // Сбрасываем данные для гостя
    user = {
      id: 'guest',
      firstName: 'Гость',
      lastName: '',
      email: '',
      level: 'guest'
    };
    
    updateUserInterface();
    showNotification('Вы вышли из аккаунта', 'info');
    
    if (document.getElementById('accountModal').classList.contains('open')) {
      closeAccountModal();
    }
  }
}

// Обновление интерфейса в зависимости от статуса пользователя
function updateUserInterface() {
  const userIcon = document.getElementById('userName');
  
  if (currentUser) {
    userIcon.textContent = currentUser.firstName || 'Аккаунт';
    
    // Обновляем иконку
    const userIconDiv = document.querySelector('.user-icon');
    userIconDiv.innerHTML = `
      <i class="fas fa-user"></i>
      <span id="userName">${currentUser.firstName || 'Аккаунт'}</span>
    `;
    
    // Обновляем обработчик клика
    userIconDiv.onclick = () => {
      if (currentUser.id === 'guest') {
        openAuthModal();
      } else {
        openAccountModal();
      }
    };
  } else {
    userIcon.textContent = 'Войти';
  }
}

// Показать уведомление
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `account-notification ${type}`;
  notification.innerHTML = `
    <div class="notification-message">${message}</div>
    <button class="notification-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// ============== ФУНКЦИИ ЛИЧНОГО КАБИНЕТА ==============

// Открыть личный кабинет
function openAccountModal() {
  if (!currentUser || currentUser.id === 'guest') {
    openAuthModal();
    return;
  }
  
  document.getElementById('accountModal').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Загружаем данные пользователя
  loadUserData();
  renderProfile();
  renderOrders();
  renderFavorites();
  renderBonuses();
  updateStats();
}

// Закрыть личный кабинет
function closeAccountModal() {
  document.getElementById('accountModal').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Переключение вкладок
function switchAccountTab(tabName) {
  // Убираем активный класс у всех вкладок
  document.querySelectorAll('.account-nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Убираем активный класс у всех секций
  document.querySelectorAll('.account-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Активируем выбранную вкладку
  const tab = document.querySelector(`.account-nav-item[onclick*="${tabName}"]`);
