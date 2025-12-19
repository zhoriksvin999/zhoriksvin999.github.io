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
      // НОВЫЕ ТОВАРЫ (17-23)
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

    // Глобальные переменные
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    let viewHistory = JSON.parse(localStorage.getItem('viewHistory')) || [];
    let cartHistory = JSON.parse(localStorage.getItem('cartHistory')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let currentProductModal = null;

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

    // ============== ИНТЕГРАЦИЯ С САЙТОМ ==============
    
    // Функции для интеграции с товарами
    function askAboutProduct(productId) {
      const product = products[productId];
      if (product) {
        window.BuyDaySupport.openWithQuestion(
          `Вопрос по товару: ${product.title}\n\nМой вопрос:`
        );
      }
    }
    
    // В корзине
    function askAboutOrder() {
      const itemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
      const total = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      window.BuyDaySupport.openWithQuestion(
        `Вопрос по моему заказу в корзине:\n` +
        `• Товаров: ${itemCount}\n` +
        `• Сумма: ${formatPrice(total)}\n\n` +
        `Мой вопрос:`
      );
    }
    
    // Общая поддержка
    function contactSupport() {
      window.BuyDaySupport.openWithQuestion('');
    }
    
    // ============== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==============
    
    // Переключение модального окна поддержки
    function toggleSupportModal() {
      if (window.BuyDaySupport.isOpen) {
        window.BuyDaySupport.closeModal();
      } else {
        window.BuyDaySupport.openModal();
      }
    }
    
    // Открыть поддержку
    function openSupportModal() {
      window.BuyDaySupport.openModal();
    }
    
    // Отправить сообщение поддержки
    function sendSupportMessage() {
      const input = document.getElementById('supportInput');
      const text = input.value.trim();
      
      if (text) {
        window.BuyDaySupport.sendMessage(text);
      }
    }
    
    // Быстрый вопрос
    function askQuickQuestion(question) {
      window.BuyDaySupport.askQuickQuestion(question);
    }
    
    // Обработка Enter в поле ввода
    document.getElementById('supportInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendSupportMessage();
      }
    });

    // Таймер для баннера
    function startCountdown() {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 3);
      endDate.setHours(23, 59, 59, 999);

      function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
          document.getElementById('days').textContent = '00';
          document.getElementById('hours').textContent = '00';
          document.getElementById('minutes').textContent = '00';
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      }

      updateCountdown();
      setInterval(updateCountdown, 60000);
    }

    // Уведомление о распродаже
    function showSaleNotification() {
      showToast('🔥 Распродажа до 70%! Успейте купить товары со скидкой!', 'success');
    }

    // Прокрутка к категории
    function scrollToCategory(category) {
      filterByCategory(category);
      const resultsSection = document.getElementById('resultsInfo');
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Функции для подвала
    function subscribeNewsletter(event) {
      event.preventDefault();
      const emailInput = event.target.querySelector('.newsletter-input');
      const email = emailInput.value;
      
      if (email) {
        showToast('Спасибо за подписку! Скидка 10% уже ждет вас в личном кабинете.', 'success');
        emailInput.value = '';
        
        // Сохраняем email в localStorage
        let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers')) || [];
        if (!subscribers.includes(email)) {
          subscribers.push(email);
          localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
        }
      }
    }

    function showHelp(topic) {
      event.preventDefault();
      const messages = {
        delivery: '🚚 Доставка осуществляется по всей России курьерской службой и почтой. Срок доставки: 2-7 дней.',
        returns: '🔄 Возврат товара возможен в течение 14 дней с момента получения при сохранении товарного вида.',
        guarantee: '🛡️ Гарантия на технику: 12-36 месяцев в зависимости от категории товара.',
        faq: '❓ Частые вопросы: ответы на самые популярные вопросы вы найдете в разделе "Помощь".',
        contacts: '📞 Контакты: 8-800-555-35-35 (бесплатно), поддержка работает 24/7.'
      };
      showToast(messages[topic] || 'Информация об этом разделе скоро появится.', 'success');
    }

    function showPrivacyPolicy() {
      event.preventDefault();
      showToast('Политика конфиденциальности защищает ваши персональные данные.', 'success');
    }

    function showTerms() {
      event.preventDefault();
      showToast('Пользовательское соглашение определяет правила использования сервиса.', 'success');
    }

    // Инициализация
    function initCatalog() {
      startCountdown();
      renderCategories();
      renderFooterCategories();
      renderMobileCategories();
      renderProducts();
      updateCartCount();
      updateRecommendations();
      setupEventListeners();
    }

    // Отрисовка категорий в подвале
    function renderFooterCategories() {
      const footerCategories = document.getElementById('footerCategories');
      let categoriesHTML = '';
      
      const categoryCounts = {};
      Object.values(products).forEach(product => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      });
      
      Object.entries(categories).forEach(([category, data]) => {
        const count = categoryCounts[category] || 0;
        if (count > 0) {
          categoriesHTML += `
            <li><a href="#" onclick="scrollToCategory('${category}'); return false;">
              <i class="fas fa-chevron-right"></i> ${category} (${count})
            </a></li>
          `;
        }
      });
      
      footerCategories.innerHTML = categoriesHTML;
    }

    // Настройка обработчиков событий
    function setupEventListeners() {
      document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          performSearch();
        }
      });

      document.getElementById('overlay').addEventListener('click', function() {
        closeAllModals();
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeAllModals();
        }
      });

      document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !menuBtn.contains(e.target)) {
          mobileNav.classList.remove('active');
        }
      });
    }

    // Отрисовка категорий
    function renderCategories() {
      const categoriesList = document.getElementById('categoriesList');
      let categoriesHTML = '';
      
      categoriesHTML += `
        <li class="category-item active" onclick="filterByCategory('all')">
          Все товары <span class="category-count">${Object.keys(products).length}</span>
        </li>
      `;
      
      const categoryCounts = {};
      Object.values(products).forEach(product => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      });
      
      Object.entries(categories).forEach(([category, data]) => {
        const count = categoryCounts[category] || 0;
        if (count > 0) {
          categoriesHTML += `
            <li class="category-item" onclick="filterByCategory('${category}')">
              ${data.icon} ${category} <span class="category-count">${count}</span>
            </li>
          `;
        }
      });
      
      categoriesList.innerHTML = categoriesHTML;
    }

    // Отрисовка мобильных категорий
    function renderMobileCategories() {
      const mobileCategories = document.getElementById('mobileCategories');
      let categoriesHTML = '';
      
      categoriesHTML += `
        <div class="mobile-category-item active" onclick="filterByCategory('all'); toggleMobileMenu()">
          <i class="fas fa-th"></i> Все товары
        </div>
      `;
      
      const categoryCounts = {};
      Object.values(products).forEach(product => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      });
      
      Object.entries(categories).forEach(([category, data]) => {
        const count = categoryCounts[category] || 0;
        if (count > 0) {
          categoriesHTML += `
            <div class="mobile-category-item" onclick="filterByCategory('${category}'); toggleMobileMenu()">
              <span>${data.icon}</span> ${category}
            </div>
          `;
        }
      });
      
      mobileCategories.innerHTML = categoriesHTML;
    }

    // Отрисовка товаров
    function renderProducts() {
      const productsList = document.getElementById('productsList');
      let productsHTML = '';
      
      Object.values(products).forEach(product => {
        productsHTML += createProductHTML(product);
      });
      
      productsList.innerHTML = productsHTML;
    }

    // Создание HTML для товара
    function createProductHTML(product) {
      const starsHTML = generateStarsHTML(product.rating);
      const reviews = getRandomReviews();
      
      return `
        <li class="design" 
            data-id="${product.id}" 
            data-category="${product.category}" 
            data-price="${product.price}" 
            data-rating="${product.rating}" 
            data-badge="${product.badge}"
            data-tags="${product.tags}"
            onclick="openProductModal(${product.id})">
          <div class="badge ${product.badge}">${product.badge}</div>
          <div class="design-icon">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
          </div>
          <span class="price">${formatPrice(product.price)}</span>
          <div class="rating">
            <div class="stars">
              ${starsHTML}
            </div>
            <span class="rating-count">(${reviews} отзывов)</span>
          </div>
          <h3>${product.title}</h3>
          <p class="design-text">
            ${product.description.substring(0, 100)}...
          </p>
          <div class="design-actions">
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
              <i class="fas fa-cart-plus"></i> В корзину
            </button>
            <button class="view-details" onclick="event.stopPropagation(); openProductModal(${product.id})">
              <i class="fas fa-eye"></i> Подробнее
            </button>
          </div>
          <!-- НОВАЯ КНОПКА ПОДДЕРЖКИ -->
          <button class="support-button" onclick="event.stopPropagation(); askAboutProduct(${product.id})">
            <i class="fas fa-question-circle"></i> Вопрос по товару
          </button>
        </li>
      `;
    }

    // Открытие попапа товара
    function openProductModal(productId) {
      const product = products[productId];
      if (!product) return;
      
      currentProductModal = productId;
      
      const starsHTML = generateStarsHTML(product.rating);
      const featuresHTML = product.features ? 
        product.features.map(feat => `<li>${feat}</li>`).join('') : 
        '';
      
      const modalContent = `
        <img src="${product.image}" alt="${product.title}" class="product-modal-img">
        <div class="product-modal-price">${formatPrice(product.price)}</div>
        <div class="product-modal-rating">
          <div class="product-modal-stars">
            ${starsHTML}
          </div>
          <span>${product.rating}/5 (${getRandomReviews()} отзывов)</span>
        </div>
        <h3 style="margin-bottom: 15px; color: var(--dark);">${product.title}</h3>
        <p class="product-modal-description">
          ${product.description}
        </p>
        ${featuresHTML ? `
          <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: var(--dark);">Особенности:</h4>
            <ul style="color: var(--gray); padding-left: 20px;">
              ${featuresHTML}
            </ul>
          </div>
        ` : ''}
        <!-- НОВАЯ КНОПКА ПОДДЕРЖКИ В ПОПАПЕ -->
        <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 10px; text-align: center;">
          <p style="margin-bottom: 10px; color: var(--gray);">Есть вопросы по этому товару?</p>
          <button class="support-button" onclick="askAboutProduct(${product.id})" style="width: auto; padding: 10px 20px;">
            <i class="fas fa-question-circle"></i> Задать вопрос по товару
          </button>
        </div>
        <div class="product-modal-actions">
          <button class="product-modal-btn secondary" onclick="closeProductModal()">
            <i class="fas fa-times"></i> Закрыть
          </button>
          <button class="product-modal-btn primary" onclick="addToCartFromModal(${product.id})">
            <i class="fas fa-cart-plus"></i> Добавить в корзину
          </button>
        </div>
      `;
      
      document.getElementById('productModalTitle').textContent = product.title;
      document.getElementById('productModalContent').innerHTML = modalContent;
      document.getElementById('productModal').classList.add('open');
      document.getElementById('overlay').classList.add('active');
      document.body.style.overflow = 'hidden';
      
      if (!viewHistory.includes(productId)) {
        viewHistory.unshift(productId);
        if (viewHistory.length > 10) viewHistory.pop();
        localStorage.setItem('viewHistory', JSON.stringify(viewHistory));
      }
    }

    // Закрытие попапа товара
    function closeProductModal() {
      document.getElementById('productModal').classList.remove('open');
      document.getElementById('overlay').classList.remove('active');
      document.body.style.overflow = 'auto';
      currentProductModal = null;
    }

    // Добавление в корзину из попапа
    function addToCartFromModal(productId) {
      addToCart(productId);
      closeProductModal();
      showToast('Товар добавлен в корзину!', 'success');
    }

    // Генерация звезд рейтинга
    function generateStarsHTML(rating) {
      let starsHTML = '';
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      
      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
          starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
          starsHTML += '<i class="far fa-star"></i>';
        }
      }
      
      return starsHTML;
    }

    // Форматирование цены
    function formatPrice(price) {
      return price.toLocaleString('ru-RU') + '₽';
    }

    // Случайное количество отзывов
    function getRandomReviews() {
      const reviews = [23, 45, 67, 89, 112, 156, 203, 256, 342, 456];
      return reviews[Math.floor(Math.random() * reviews.length)];
    }

    // Фильтрация по категории
    function filterByCategory(category) {
      const categoryItems = document.querySelectorAll('.category-item');
      const mobileCategoryItems = document.querySelectorAll('.mobile-category-item');
      
      categoryItems.forEach(item => {
        item.classList.remove('active');
      });
      
      if (category === 'all') {
        categoryItems[0].classList.add('active');
      } else {
        const activeItem = Array.from(categoryItems).find(item => 
          item.textContent.includes(category)
        );
        if (activeItem) activeItem.classList.add('active');
      }
      
      mobileCategoryItems.forEach(item => {
        item.classList.remove('active');
      });
      
      if (category === 'all') {
        mobileCategoryItems[0].classList.add('active');
      } else {
        const activeMobileItem = Array.from(mobileCategoryItems).find(item => 
          item.textContent.includes(category)
        );
        if (activeMobileItem) activeMobileItem.classList.add('active');
      }
      
      document.getElementById('category').value = category;
      applyFilters();
    }

    // Поиск товаров
    function performSearch() {
      const searchInput = document.getElementById('searchInput');
      const searchTerm = searchInput.value.toLowerCase().trim();
      const searchResultsInfo = document.getElementById('searchResultsInfo');
      
      if (searchTerm && !searchHistory.includes(searchTerm)) {
        searchHistory.unshift(searchTerm);
        if (searchHistory.length > 10) searchHistory.pop();
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      }
      
      if (searchTerm) {
        searchResultsInfo.style.display = 'block';
      } else {
        searchResultsInfo.style.display = 'none';
        resetSearch();
        return;
      }
      
      const productElements = document.querySelectorAll('.design');
      let foundCount = 0;
      
      productElements.forEach(product => {
        const productId = parseInt(product.dataset.id);
        const productData = products[productId];
        const searchableText = `
          ${productData.title.toLowerCase()}
          ${productData.category.toLowerCase()}
          ${productData.tags.toLowerCase()}
          ${productData.description.toLowerCase()}
        `;
        
        if (searchableText.includes(searchTerm)) {
          product.classList.remove('hidden');
          foundCount++;
          
          const titleElement = product.querySelector('h3');
          const originalTitle = productData.title;
          const regex = new RegExp(`(${searchTerm})`, 'gi');
          titleElement.innerHTML = originalTitle.replace(regex, '<span class="search-highlight">$1</span>');
        } else {
          product.classList.add('hidden');
        }
      });
      
      if (foundCount === 0) {
        searchResultsInfo.innerHTML = `
          <i class="fas fa-search"></i>
          По запросу "<span class="search-highlight">${searchTerm}</span>" ничего не найдено.
          <p style="margin-top: 10px; font-size: 0.9rem;">Попробуйте изменить запрос или воспользуйтесь фильтрами</p>
        `;
      } else {
        searchResultsInfo.innerHTML = `
          <i class="fas fa-search"></i>
          Найдено <span class="search-highlight">${foundCount}</span> товаров по запросу "<span class="search-highlight">${searchTerm}</span>"
        `;
      }
      
      updateRecommendations();
    }

    function resetSearch() {
      document.getElementById('searchResultsInfo').style.display = 'none';
      const productElements = document.querySelectorAll('.design');
      productElements.forEach(product => {
        product.classList.remove('hidden');
        const productId = parseInt(product.dataset.id);
        const productData = products[productId];
        const titleElement = product.querySelector('h3');
        titleElement.textContent = productData.title;
      });
    }

    // Система рекомендаций
    function updateRecommendations() {
      const recommendationsContainer = document.getElementById('recommendationsContainer');
      const recommendationsSection = document.getElementById('recommendationsSection');
      
      let recommendedProducts = [];
      
      // Показываем топовые товары с акцией
      recommendedProducts = Object.values(products)
        .filter(product => product.badge === 'акция' || product.badge === 'топ')
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
      
      if (recommendedProducts.length === 0) {
        recommendationsSection.style.display = 'none';
        return;
      }
      
      recommendationsSection.style.display = 'block';
      
      let recommendationsHTML = '';
      recommendedProducts.forEach(product => {
        recommendationsHTML += `
          <a class="recommendation-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.title}" class="recommendation-img">
            <div class="recommendation-info">
              <div class="recommendation-title">${product.title}</div>
              <div class="recommendation-price">${formatPrice(product.price)}</div>
              <span class="recommendation-badge ${product.badge}">${product.badge}</span>
            </div>
          </a>
        `;
      });
      
      recommendationsContainer.innerHTML = recommendationsHTML;
    }

    // Корзина
    function updateCartCount() {
      let totalCount = 0;
      Object.values(cart).forEach(item => {
        totalCount += item.quantity;
      });
      document.getElementById('cartCount').textContent = totalCount;
    }

    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(productId) {
      const product = products[productId];
      
      if (!product) return;
      
      if (cart[productId]) {
        cart[productId].quantity += 1;
      } else {
        cart[productId] = {
          ...product,
          quantity: 1
        };
        
        if (!cartHistory.includes(productId)) {
          cartHistory.unshift(productId);
          if (cartHistory.length > 10) cartHistory.pop();
          localStorage.setItem('cartHistory', JSON.stringify(cartHistory));
        }
      }
      
      saveCart();
      updateCartCount();
      showToast(`"${product.title.substring(0, 25)}..." добавлен в корзину`, 'success');
      updateRecommendations();
      
      // Предложение помощи при первом добавлении в корзину
      const cartItems = Object.values(cart).length;
      if (cartItems === 1 && !localStorage.getItem('help_offered')) {
        setTimeout(() => {
          window.BuyDaySupport.addMessage('bot', 
            '🎉 Товар добавлен в корзину! Нужна помощь с выбором или оформлением заказа?');
          localStorage.setItem('help_offered', 'true');
        }, 2000);
      }
    }

    function removeFromCart(productId) {
      delete cart[productId];
      saveCart();
      updateCartCount();
      renderCart();
    }

    function updateQuantity(productId, change) {
      if (cart[productId]) {
        cart[productId].quantity += change;
        
        if (cart[productId].quantity <= 0) {
          removeFromCart(productId);
        } else {
          saveCart();
          updateCartCount();
          renderCart();
        }
      }
    }

    function renderCart() {
      const cartItems = document.getElementById('cartItems');
      const cartArray = Object.values(cart);
      
      if (cartArray.length === 0) {
        cartItems.innerHTML = `
          <div class="empty-cart">
            <i class="fas fa-shopping-cart"></i>
            <p>Корзина пуста</p>
            <p style="font-size: 0.9rem; margin-top: 10px;">Добавьте товары из каталога</p>
            <!-- Кнопка поддержки для пустой корзины -->
            <button class="cart-support-button" onclick="contactSupport()" style="margin-top: 20px;">
              <i class="fas fa-headset"></i> Задать вопрос по покупкам
            </button>
          </div>
        `;
        document.getElementById('totalPrice').textContent = '0₽';
        return;
      }
      
      let itemsHTML = '';
      let total = 0;
      
      cartArray.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        itemsHTML += `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.title}</div>
              <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity} = ${formatPrice(itemTotal)}</div>
              <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="item-quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      });
      
      // Добавляем кнопку поддержки в корзину
      itemsHTML += `
        <div style="padding: 20px; text-align: center; border-top: 1px solid #e0e0e0; margin-top: 20px;">
          <button class="cart-support-button" onclick="askAboutOrder()">
            <i class="fas fa-headset"></i> Вопрос по моему заказу
          </button>
        </div>
      `;
      
      cartItems.innerHTML = itemsHTML;
      document.getElementById('totalPrice').textContent = `${formatPrice(total)}`;
    }

    function openCart() {
      renderCart();
      document.getElementById('cartModal').classList.add('open');
      document.getElementById('overlay').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeCart() {
      document.getElementById('cartModal').classList.remove('open');
      document.getElementById('overlay').classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    function checkout() {
      if (Object.keys(cart).length === 0) {
        showToast('Корзина пуста!', 'error');
        return;
      }
      
      const total = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
      
      showToast(`Заказ на ${formatPrice(total)} оформлен! Спасибо за покупку!`, 'success');
      
      cart = {};
      saveCart();
      updateCartCount();
      renderCart();
      closeCart();
    }

    // Уведомления
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      const toastMessage = document.getElementById('toastMessage');
      
      toastMessage.textContent = message;
      
      if (type === 'error') {
        toast.style.background = 'linear-gradient(135deg, var(--danger), #D32F2F)';
      } else if (type === 'success') {
        toast.style.background = 'linear-gradient(135deg, var(--success), #2E7D32)';
      }
      
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    // Фильтрация
    function applyFilters() {
      const category = document.getElementById('category').value;
      const maxPrice = document.getElementById('price').value;
      const minRating = parseFloat(document.getElementById('rating').value);
      const badge = document.getElementById('badge').value;
      
      const productElements = document.querySelectorAll('.design');
      let visibleCount = 0;
      
      productElements.forEach(product => {
        const productCategory = product.dataset.category;
        const productPrice = parseFloat(product.dataset.price);
        const productRating = parseFloat(product.dataset.rating);
        const productBadge = product.dataset.badge;
        
        let isVisible = true;
        
        if (category !== 'all' && productCategory !== category) {
          isVisible = false;
        }
        
        if (maxPrice && productPrice > parseFloat(maxPrice)) {
          isVisible = false;
        }
        
        if (minRating > 0 && productRating < minRating) {
          isVisible = false;
        }
        
        if (badge !== 'all' && productBadge !== badge) {
          isVisible = false;
        }
        
        if (isVisible) {
          product.classList.remove('hidden');
          visibleCount++;
        } else {
          product.classList.add('hidden');
        }
      });
      
      const resultsInfo = document.getElementById('resultsInfo');
      if (visibleCount === 0) {
        resultsInfo.textContent = 'Товары по вашему запросу не найдены';
        resultsInfo.style.color = 'var(--danger)';
      } else {
        resultsInfo.textContent = `Найдено товаров: ${visibleCount}`;
        resultsInfo.style.color = 'var(--dark)';
      }
    }
    
    function resetFilters() {
      document.getElementById('category').value = 'all';
      document.getElementById('price').value = '';
      document.getElementById('rating').value = '0';
      document.getElementById('badge').value = 'all';
      filterByCategory('all');
      
      const products = document.querySelectorAll('.design');
      products.forEach(product => {
        product.classList.remove('hidden');
      });
      
      document.getElementById('resultsInfo').textContent = '';
      document.getElementById('searchInput').value = '';
      resetSearch();
    }

    // Мобильное меню
    function toggleMobileMenu() {
      const mobileNav = document.getElementById('mobileNav');
      mobileNav.classList.toggle('active');
    }

    // Закрытие всех попапов
    function closeAllModals() {
      document.getElementById('cartModal').classList.remove('open');
      document.getElementById('productModal').classList.remove('open');
      document.getElementById('overlay').classList.remove('active');
      document.getElementById('mobileNav').classList.remove('active');
      document.getElementById('supportModal').classList.remove('active');
      document.body.style.overflow = 'auto';
      currentProductModal = null;
      window.BuyDaySupport.isOpen = false;
    }

    // Прокрутка к верху
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    }

    // Инициализация при загрузке
    document.addEventListener('DOMContentLoaded', function() {
      // Инициализируем каталог
      initCatalog();
      
      // Инициализируем систему поддержки
      window.BuyDaySupport.init();
      
      // Добавляем обработчики для быстрых вопросов
      const quickQuestions = document.querySelectorAll('.quick-question');
      quickQuestions.forEach(btn => {
        btn.style.cssText = `
          background: white;
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        `;
        
        btn.addEventListener('mouseover', function() {
          this.style.background = 'var(--primary)';
          this.style.color = 'white';
        });
        
        btn.addEventListener('mouseout', function() {
          this.style.background = 'white';
          this.style.color = 'var(--primary)';
        });
      });
      
      // Предложение помощи при долгом нахождении на странице
      setTimeout(() => {
        if (!window.BuyDaySupport.isOpen && Math.random() > 0.5) {
          window.BuyDaySupport.addMessage('bot', 
            '💡 Нужна помощь с выбором товаров? Я могу помочь!');
        }
      }, 30000); // Через 30 секунд
      
      // Предложение помощи при поиске
      const originalPerformSearch = window.performSearch;
      window.performSearch = function() {
        originalPerformSearch.call(this);
        
        const searchTerm = document.getElementById('searchInput').value.trim();
        if (searchTerm.length > 0 && !window.BuyDaySupport.isOpen) {
          // Предлагаем помощь если ничего не найдено
          setTimeout(() => {
            const foundCount = document.querySelectorAll('.design:not(.hidden)').length;
            if (foundCount === 0 && Math.random() > 0.7) {
              window.BuyDaySupport.addMessage('bot', 
                `🔍 Не нашли "${searchTerm}"? Могу помочь с поиском или предложить альтернативы!`);
            }
          }, 1000);
        }
      };
    });