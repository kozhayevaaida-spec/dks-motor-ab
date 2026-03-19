// =========================
// MENU / DRAWER
// =========================
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

function openDrawer() {
  if (!drawer || !overlay || !menuBtn) return;
  drawer.classList.add("is-open");
  overlay.hidden = false;
  drawer.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  if (!drawer || !overlay || !menuBtn) return;
  drawer.classList.remove("is-open");
  overlay.hidden = true;
  drawer.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn) {
  menuBtn.addEventListener("click", openDrawer);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeDrawer);
}

if (overlay) {
  overlay.addEventListener("click", closeDrawer);
}

// =========================
// LANGUAGE SWITCHER
// =========================
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const currentLang = document.getElementById("currentLang");

const translations = {
  sv: {
    // General
    book_service: "Boka bilservice",
    menu: "Meny",
    navigate: "Navigera",
    home: "Startsida",
    services: "Våra tjänster",
    contact: "Kontakta oss",
    book_time: "Boka tid",
    about: "Om oss",
    address_label: "Adress",
    address_value: "Hammarhagsvägen 30, 149 50 Nynäshamn",
    address_label_inline: "Adress:",
    email_label: "E-post:",

    // Index
    hero_title: "BILSERVICE OCH REPARATION",
    hero_subtitle: "Din lokala bilverkstad i Nynäshamn",
    hero_text_1: "DKS Motor AB erbjuder service och reparation av alla bilmärken samt service och reparation av tunga fordon.",
    hero_text_2: "Snabb service • Bra priser • Personligt bemötande",
    welcome_title: "Välkommen till DKS Motor AB!",
    welcome_offer: 'Få <strong>10 % rabatt på första servicen</strong> hos oss. Kontakta oss eller skicka en bokningsförfrågan via hemsidan.',
    about_short_title: "Lite kort om oss",
    about_short_text: "Vi arbetar med service och reparation av alla bilmärken och erbjuder även service och reparation av tunga fordon. Hos oss kan du få hjälp med AC-service, framvagnsinställning, däckservice, svetsarbeten samt motor- och växellådsreparationer.",
    opening_hours_title: "Våra öppettider",
    regular_hours: "Ordinarie öppettider",
    hours_weekdays: "Måndag–Fredag: 08:00–18:00",
    hours_saturday: "Lördag: 09:00–14:00",
    hours_sunday: "Söndag: Stängt",
    deviating_hours: "Avvikande öppettider",
    red_days_closed: "Röda dagar: Stängt",
    contact_section_title: "Adress och kontakt",

    // Contact page
    contact_page_title: "Kontakta oss",
    contact_intro: "Hör gärna av dig till oss om du vill boka tid, ställa frågor eller få hjälp med service och reparation.",
    email_us: "Mejla oss",
    call: "Ring",

    // Services page
    services_badge: "Våra tjänster",
    services_hero_title: "Service och reparation för alla bilmärken",
    services_hero_text: "På DKS Motor AB erbjuder vi professionell hjälp med service, felsökning och reparationer för både personbilar och tunga fordon. Vi fokuserar på kvalitet, tydlighet och personlig service.",
    services_help_title: "Det här hjälper vi dig med",
    services_help_text: "Vi erbjuder ett brett utbud av verkstadstjänster för att hålla ditt fordon i gott skick året runt.",

    service_1_title: "Bilservice",
    service_1_text: "Regelbunden service för att bilen ska fungera säkert, effektivt och hålla längre.",

    service_2_title: "Reparationer",
    service_2_text: "Vi utför reparationer av olika typer av fel och ser till att bilen kommer tillbaka i bra skick.",

    service_3_title: "AC-service",
    service_3_text: "Kontroll, service och underhåll av bilens klimatanläggning för bättre komfort året runt.",

    service_4_title: "Framvagnsinställning",
    service_4_text: "Rätt inställning förbättrar körkänslan, minskar däckslitage och ger bättre stabilitet.",

    service_5_title: "Däckservice",
    service_5_text: "Hjälp med däckbyte, kontroll och annan service för säkrare körning i alla säsonger.",

    service_6_title: "Svetsarbeten",
    service_6_text: "Vi utför svetsarbeten vid behov och hjälper till med hållbara lösningar för ditt fordon.",

    service_7_title: "Motorreparation",
    service_7_text: "Felsökning och reparation av motorproblem för att återställa prestanda och funktion.",

    service_8_title: "Växellådsreparation",
    service_8_text: "Vi hjälper till med problem i växellådan och arbetar för pålitlig och säker drift.",

    service_9_title: "Tunga fordon",
    service_9_text: "Vi erbjuder även service och reparation för tunga fordon med fokus på kvalitet och tillgänglighet.",

    why_us_title: "Varför välja DKS Motor AB?",
    why_1_title: "Alla bilmärken",
    why_1_text: "Vi hjälper kunder med många olika typer av fordon och behov.",
    why_2_title: "Personligt bemötande",
    why_2_text: "Hos oss får du tydlig kontakt och service anpassad efter dig och ditt fordon.",
    why_3_title: "Snabb hjälp",
    why_3_text: "Vi arbetar för att ge dig snabb och smidig service när du behöver det.",
    why_4_title: "Bra priser",
    why_4_text: "Vi erbjuder professionell hjälp till konkurrenskraftiga priser.",

    services_cta_title: "Behöver din bil service eller reparation?",
    services_cta_text: "Skicka en bokningsförfrågan till oss så hjälper vi dig vidare.",

    // Booking page
    booking_title: "Boka bilservice",
    booking_intro: "Skicka en bokningsförfrågan via formuläret nedan så återkommer vi så snart som möjligt.",
    form_name_label: "Namn",
    form_name_placeholder: "Ditt namn",
    form_phone_label: "Telefon",
    form_phone_placeholder: "Telefonnummer",
    form_email_label: "E-post",
    form_email_placeholder: "E-postadress",
    form_reg_label: "Registreringsnummer",
    form_reg_placeholder: "Bilens registreringsnummer",
    form_service_label: "Typ av service",
    form_service_placeholder: "t.ex. service, AC-service, däckservice",
    form_message_label: "Meddelande",
    form_message_placeholder: "Beskriv vad du behöver hjälp med",
    form_submit: "Skicka bokningsförfrågan",
    form_subject: "Ny bokningsförfrågan från hemsidan"
  },

  en: {
    // General
    book_service: "Book car service",
    menu: "Menu",
    navigate: "Navigate",
    home: "Home",
    services: "Our services",
    contact: "Contact us",
    book_time: "Book appointment",
    about: "About us",
    address_label: "Address",
    address_value: "Hammarhagsvägen 30, 149 50 Nynäshamn",
    address_label_inline: "Address:",
    email_label: "Email:",

    // Index
    hero_title: "CAR SERVICE AND REPAIR",
    hero_subtitle: "Your local car workshop in Nynäshamn",
    hero_text_1: "DKS Motor AB offers service and repair for all car brands as well as service and repair of heavy vehicles.",
    hero_text_2: "Fast service • Good prices • Personal care",
    welcome_title: "Welcome to DKS Motor AB!",
    welcome_offer: 'Get <strong>10% off your first service</strong> with us. Contact us or send a booking request through the website.',
    about_short_title: "A little about us",
    about_short_text: "We work with service and repair of all car brands and also offer service and repair of heavy vehicles. We can help you with AC service, wheel alignment, tire service, welding work, as well as engine and gearbox repairs.",
    opening_hours_title: "Our opening hours",
    regular_hours: "Regular opening hours",
    hours_weekdays: "Monday–Friday: 08:00–18:00",
    hours_saturday: "Saturday: 09:00–14:00",
    hours_sunday: "Sunday: Closed",
    deviating_hours: "Special opening hours",
    red_days_closed: "Public holidays: Closed",
    contact_section_title: "Address and contact",

    // Contact page
    contact_page_title: "Contact us",
    contact_intro: "Feel free to contact us if you want to book an appointment, ask questions, or get help with service and repairs.",
    email_us: "Email us",
    call: "Call",

    // Services page
    services_badge: "Our services",
    services_hero_title: "Service and repair for all car brands",
    services_hero_text: "At DKS Motor AB, we offer professional help with servicing, diagnostics, and repairs for both passenger cars and heavy vehicles. We focus on quality, clarity, and personal service.",
    services_help_title: "This is what we can help you with",
    services_help_text: "We offer a wide range of workshop services to keep your vehicle in good condition all year round.",

    service_1_title: "Car service",
    service_1_text: "Regular service to keep your car safe, efficient, and in good condition for longer.",

    service_2_title: "Repairs",
    service_2_text: "We perform repairs for different types of faults and make sure your car is restored to good condition.",

    service_3_title: "AC service",
    service_3_text: "Inspection, service, and maintenance of your car’s air conditioning system for better comfort all year round.",

    service_4_title: "Wheel alignment",
    service_4_text: "Correct alignment improves driving feel, reduces tire wear, and provides better stability.",

    service_5_title: "Tire service",
    service_5_text: "Help with tire changes, inspection, and other services for safer driving in all seasons.",

    service_6_title: "Welding work",
    service_6_text: "We carry out welding work when needed and help with durable solutions for your vehicle.",

    service_7_title: "Engine repair",
    service_7_text: "Diagnostics and repair of engine problems to restore performance and function.",

    service_8_title: "Gearbox repair",
    service_8_text: "We help with gearbox problems and work for reliable and safe operation.",

    service_9_title: "Heavy vehicles",
    service_9_text: "We also offer service and repair for heavy vehicles with a focus on quality and accessibility.",

    why_us_title: "Why choose DKS Motor AB?",
    why_1_title: "All car brands",
    why_1_text: "We help customers with many different types of vehicles and needs.",
    why_2_title: "Personal service",
    why_2_text: "With us, you get clear communication and service tailored to you and your vehicle.",
    why_3_title: "Fast help",
    why_3_text: "We work to give you fast and smooth service when you need it.",
    why_4_title: "Good prices",
    why_4_text: "We offer professional help at competitive prices.",

    services_cta_title: "Does your car need service or repair?",
    services_cta_text: "Send us a booking request and we will help you further.",

    // Booking page
    booking_title: "Book car service",
    booking_intro: "Send a booking request using the form below and we will get back to you as soon as possible.",
    form_name_label: "Name",
    form_name_placeholder: "Your name",
    form_phone_label: "Phone",
    form_phone_placeholder: "Phone number",
    form_email_label: "Email",
    form_email_placeholder: "Email address",
    form_reg_label: "Registration number",
    form_reg_placeholder: "Vehicle registration number",
    form_service_label: "Type of service",
    form_service_placeholder: "e.g. service, AC service, tire service",
    form_message_label: "Message",
    form_message_placeholder: "Describe what you need help with",
    form_submit: "Send booking request",
    form_subject: "New booking request from the website"
  },

  es: {
    // General
    book_service: "Reservar servicio",
    menu: "Menú",
    navigate: "Navegar",
    home: "Inicio",
    services: "Nuestros servicios",
    contact: "Contáctanos",
    book_time: "Reservar cita",
    about: "Sobre nosotros",
    address_label: "Dirección",
    address_value: "Hammarhagsvägen 30, 149 50 Nynäshamn",
    address_label_inline: "Dirección:",
    email_label: "Correo electrónico:",

    // Index
    hero_title: "SERVICIO Y REPARACIÓN DE AUTOMÓVILES",
    hero_subtitle: "Tu taller local en Nynäshamn",
    hero_text_1: "DKS Motor AB ofrece servicio y reparación para todas las marcas de automóviles, así como servicio y reparación de vehículos pesados.",
    hero_text_2: "Servicio rápido • Buenos precios • Atención personalizada",
    welcome_title: "¡Bienvenido a DKS Motor AB!",
    welcome_offer: 'Obtén <strong>10 % de descuento en tu primer servicio</strong> con nosotros. Contáctanos o envía una solicitud de reserva a través de la página web.',
    about_short_title: "Un poco sobre nosotros",
    about_short_text: "Trabajamos con servicio y reparación de todas las marcas de automóviles y también ofrecemos servicio y reparación de vehículos pesados. Podemos ayudarte con servicio de aire acondicionado, alineación, servicio de neumáticos, trabajos de soldadura, así como reparaciones de motor y caja de cambios.",
    opening_hours_title: "Nuestros horarios",
    regular_hours: "Horario habitual",
    hours_weekdays: "Lunes–Viernes: 08:00–18:00",
    hours_saturday: "Sábado: 09:00–14:00",
    hours_sunday: "Domingo: Cerrado",
    deviating_hours: "Horario especial",
    red_days_closed: "Días festivos: Cerrado",
    contact_section_title: "Dirección y contacto",

    // Contact page
    contact_page_title: "Contáctanos",
    contact_intro: "No dudes en contactarnos si deseas reservar una cita, hacer preguntas o recibir ayuda con servicio y reparaciones.",
    email_us: "Envíanos un correo",
    call: "Llamar",

    // Services page
    services_badge: "Nuestros servicios",
    services_hero_title: "Servicio y reparación para todas las marcas de automóviles",
    services_hero_text: "En DKS Motor AB ofrecemos ayuda profesional con servicio, diagnóstico y reparaciones tanto para turismos como para vehículos pesados. Nos enfocamos en la calidad, la claridad y la atención personalizada.",
    services_help_title: "Esto es lo que podemos hacer por ti",
    services_help_text: "Ofrecemos una amplia gama de servicios de taller para mantener tu vehículo en buen estado durante todo el año.",

    service_1_title: "Servicio de automóvil",
    service_1_text: "Mantenimiento regular para que el coche funcione de manera segura, eficiente y dure más tiempo.",

    service_2_title: "Reparaciones",
    service_2_text: "Realizamos reparaciones de diferentes tipos de fallos y nos aseguramos de que el coche vuelva a estar en buen estado.",

    service_3_title: "Servicio de AC",
    service_3_text: "Control, servicio y mantenimiento del sistema de climatización del coche para mayor comodidad durante todo el año.",

    service_4_title: "Alineación",
    service_4_text: "Una alineación correcta mejora la conducción, reduce el desgaste de los neumáticos y proporciona mayor estabilidad.",

    service_5_title: "Servicio de neumáticos",
    service_5_text: "Ayuda con cambio de neumáticos, revisión y otros servicios para una conducción más segura en todas las estaciones.",

    service_6_title: "Trabajos de soldadura",
    service_6_text: "Realizamos trabajos de soldadura cuando es necesario y ofrecemos soluciones duraderas para tu vehículo.",

    service_7_title: "Reparación del motor",
    service_7_text: "Diagnóstico y reparación de problemas del motor para restaurar el rendimiento y la funcionalidad.",

    service_8_title: "Reparación de caja de cambios",
    service_8_text: "Te ayudamos con problemas en la caja de cambios y trabajamos para un funcionamiento fiable y seguro.",

    service_9_title: "Vehículos pesados",
    service_9_text: "También ofrecemos servicio y reparación para vehículos pesados con enfoque en calidad y disponibilidad.",

    why_us_title: "¿Por qué elegir DKS Motor AB?",
    why_1_title: "Todas las marcas",
    why_1_text: "Ayudamos a clientes con muchos tipos distintos de vehículos y necesidades.",
    why_2_title: "Atención personalizada",
    why_2_text: "Con nosotros obtienes contacto claro y servicio adaptado a ti y a tu vehículo.",
    why_3_title: "Ayuda rápida",
    why_3_text: "Trabajamos para ofrecerte un servicio rápido y ágil cuando lo necesites.",
    why_4_title: "Buenos precios",
    why_4_text: "Ofrecemos ayuda profesional a precios competitivos.",

    services_cta_title: "¿Tu coche necesita servicio o reparación?",
    services_cta_text: "Envíanos una solicitud de reserva y te ayudaremos a seguir adelante.",

    // Booking page
    booking_title: "Reservar servicio",
    booking_intro: "Envía una solicitud de reserva mediante el formulario de abajo y nos pondremos en contacto contigo lo antes posible.",
    form_name_label: "Nombre",
    form_name_placeholder: "Tu nombre",
    form_phone_label: "Teléfono",
    form_phone_placeholder: "Número de teléfono",
    form_email_label: "Correo electrónico",
    form_email_placeholder: "Dirección de correo electrónico",
    form_reg_label: "Número de matrícula",
    form_reg_placeholder: "Matrícula del vehículo",
    form_service_label: "Tipo de servicio",
    form_service_placeholder: "por ejemplo, servicio, AC, servicio de neumáticos",
    form_message_label: "Mensaje",
    form_message_placeholder: "Describe en qué necesitas ayuda",
    form_submit: "Enviar solicitud de reserva",
    form_subject: "Nueva solicitud de reserva desde la página web"
  },

  ru: {
    // General
    book_service: "Записаться на сервис",
    menu: "Меню",
    navigate: "Навигация",
    home: "Главная",
    services: "Наши услуги",
    contact: "Связаться с нами",
    book_time: "Записаться",
    about: "О нас",
    address_label: "Адрес",
    address_value: "Hammarhagsvägen 30, 149 50 Nynäshamn",
    address_label_inline: "Адрес:",
    email_label: "Эл. почта:",

    // Index
    hero_title: "АВТОСЕРВИС И РЕМОНТ",
    hero_subtitle: "Ваш местный автосервис в Нюнесхамне",
    hero_text_1: "DKS Motor AB предлагает обслуживание и ремонт всех марок автомобилей, а также обслуживание и ремонт тяжёлых транспортных средств.",
    hero_text_2: "Быстрый сервис • Хорошие цены • Индивидуальный подход",
    welcome_title: "Добро пожаловать в DKS Motor AB!",
    welcome_offer: 'Получите <strong>10% скидку на первое обслуживание</strong> у нас. Свяжитесь с нами или отправьте заявку на бронирование через сайт.',
    about_short_title: "Коротко о нас",
    about_short_text: "Мы занимаемся обслуживанием и ремонтом всех марок автомобилей, а также предлагаем обслуживание и ремонт тяжёлых транспортных средств. У нас вы можете получить помощь с обслуживанием кондиционера, развал-схождением, шиномонтажом, сварочными работами, а также ремонтом двигателя и коробки передач.",
    opening_hours_title: "Часы работы",
    regular_hours: "Обычные часы работы",
    hours_weekdays: "Понедельник–Пятница: 08:00–18:00",
    hours_saturday: "Суббота: 09:00–14:00",
    hours_sunday: "Воскресенье: Закрыто",
    deviating_hours: "Особые часы работы",
    red_days_closed: "Праздничные дни: Закрыто",
    contact_section_title: "Адрес и контакты",

    // Contact page
    contact_page_title: "Свяжитесь с нами",
    contact_intro: "Свяжитесь с нами, если хотите записаться, задать вопросы или получить помощь с обслуживанием и ремонтом.",
    email_us: "Написать нам",
    call: "Позвонить",

    // Services page
    services_badge: "Наши услуги",
    services_hero_title: "Обслуживание и ремонт всех марок автомобилей",
    services_hero_text: "В DKS Motor AB мы предлагаем профессиональную помощь с обслуживанием, диагностикой и ремонтом как легковых, так и тяжёлых транспортных средств. Мы делаем упор на качество, понятность и индивидуальный подход.",
    services_help_title: "Чем мы можем вам помочь",
    services_help_text: "Мы предлагаем широкий спектр услуг автосервиса, чтобы ваш автомобиль оставался в хорошем состоянии круглый год.",

    service_1_title: "Техническое обслуживание",
    service_1_text: "Регулярное обслуживание, чтобы автомобиль работал безопасно, эффективно и служил дольше.",

    service_2_title: "Ремонт",
    service_2_text: "Мы выполняем ремонт различных неисправностей и возвращаем автомобиль в хорошее состояние.",

    service_3_title: "Обслуживание кондиционера",
    service_3_text: "Проверка, обслуживание и уход за системой кондиционирования автомобиля для комфорта круглый год.",

    service_4_title: "Развал-схождение",
    service_4_text: "Правильная настройка улучшает управляемость, снижает износ шин и повышает устойчивость.",

    service_5_title: "Шинный сервис",
    service_5_text: "Помощь с заменой шин, проверкой и другим обслуживанием для более безопасного вождения в любое время года.",

    service_6_title: "Сварочные работы",
    service_6_text: "Мы выполняем сварочные работы при необходимости и предлагаем надёжные решения для вашего автомобиля.",

    service_7_title: "Ремонт двигателя",
    service_7_text: "Диагностика и ремонт проблем с двигателем для восстановления производительности и функциональности.",

    service_8_title: "Ремонт коробки передач",
    service_8_text: "Мы помогаем с проблемами коробки передач и работаем над надёжной и безопасной эксплуатацией.",

    service_9_title: "Тяжёлые транспортные средства",
    service_9_text: "Мы также предлагаем обслуживание и ремонт тяжёлых транспортных средств с акцентом на качество и доступность.",

    why_us_title: "Почему выбирают DKS Motor AB?",
    why_1_title: "Все марки автомобилей",
    why_1_text: "Мы помогаем клиентам с разными типами транспортных средств и потребностей.",
    why_2_title: "Индивидуальный подход",
    why_2_text: "У нас вы получаете понятное общение и сервис, адаптированный под вас и ваш автомобиль.",
    why_3_title: "Быстрая помощь",
    why_3_text: "Мы стараемся обеспечить вам быстрый и удобный сервис, когда он нужен.",
    why_4_title: "Хорошие цены",
    why_4_text: "Мы предлагаем профессиональную помощь по конкурентоспособным ценам.",

    services_cta_title: "Вашему автомобилю нужно обслуживание или ремонт?",
    services_cta_text: "Отправьте нам запрос на бронирование, и мы поможем вам дальше.",

    // Booking page
    booking_title: "Записаться на сервис",
    booking_intro: "Отправьте заявку на бронирование через форму ниже, и мы свяжемся с вами как можно скорее.",
    form_name_label: "Имя",
    form_name_placeholder: "Ваше имя",
    form_phone_label: "Телефон",
    form_phone_placeholder: "Номер телефона",
    form_email_label: "Эл. почта",
    form_email_placeholder: "Адрес электронной почты",
    form_reg_label: "Регистрационный номер",
    form_reg_placeholder: "Регистрационный номер автомобиля",
    form_service_label: "Тип услуги",
    form_service_placeholder: "например, обслуживание, AC-сервис, шиномонтаж",
    form_message_label: "Сообщение",
    form_message_placeholder: "Опишите, с чем вам нужна помощь",
    form_submit: "Отправить заявку",
    form_subject: "Новая заявка на бронирование с сайта"
  },

  ar: {
    // General
    book_service: "احجز خدمة السيارة",
    menu: "القائمة",
    navigate: "التنقل",
    home: "الرئيسية",
    services: "خدماتنا",
    contact: "اتصل بنا",
    book_time: "احجز موعدًا",
    about: "من نحن",
    address_label: "العنوان",
    address_value: "Hammarhagsvägen 30, 149 50 Nynäshamn",
    address_label_inline: "العنوان:",
    email_label: "البريد الإلكتروني:",

    // Index
    hero_title: "خدمة وإصلاح السيارات",
    hero_subtitle: "ورشتك المحلية في نينسهامن",
    hero_text_1: "تقدم DKS Motor AB خدمة وإصلاح لجميع ماركات السيارات وكذلك خدمة وإصلاح المركبات الثقيلة.",
    hero_text_2: "خدمة سريعة • أسعار جيدة • معاملة شخصية",
    welcome_title: "مرحبًا بكم في DKS Motor AB!",
    welcome_offer: 'احصل على <strong>خصم 10٪ على أول خدمة</strong> لدينا. تواصل معنا أو أرسل طلب حجز عبر الموقع.',
    about_short_title: "نبذة عنا",
    about_short_text: "نحن نعمل في خدمة وإصلاح جميع ماركات السيارات ونقدم أيضًا خدمة وإصلاح المركبات الثقيلة. يمكننا مساعدتك في خدمة التكييف، ضبط العجلات، خدمة الإطارات، أعمال اللحام، بالإضافة إلى إصلاحات المحرك وعلبة التروس.",
    opening_hours_title: "ساعات العمل",
    regular_hours: "ساعات العمل العادية",
    hours_weekdays: "الاثنين–الجمعة: 08:00–18:00",
    hours_saturday: "السبت: 09:00–14:00",
    hours_sunday: "الأحد: مغلق",
    deviating_hours: "ساعات العمل الخاصة",
    red_days_closed: "أيام العطل الرسمية: مغلق",
    contact_section_title: "العنوان ووسائل الاتصال",

    // Contact page
    contact_page_title: "اتصل بنا",
    contact_intro: "لا تتردد في التواصل معنا إذا كنت تريد حجز موعد أو طرح أسئلة أو الحصول على مساعدة في الصيانة والإصلاح.",
    email_us: "راسلنا",
    call: "اتصل",

    // Services page
    services_badge: "خدماتنا",
    services_hero_title: "خدمة وإصلاح لجميع ماركات السيارات",
    services_hero_text: "في DKS Motor AB نقدم مساعدة احترافية في الصيانة، والفحص، والإصلاح لكل من سيارات الركاب والمركبات الثقيلة. نحن نركز على الجودة، والوضوح، والخدمة الشخصية.",
    services_help_title: "هذا ما يمكننا مساعدتك به",
    services_help_text: "نقدم مجموعة واسعة من خدمات الورشة للحفاظ على مركبتك بحالة جيدة طوال العام.",

    service_1_title: "خدمة السيارة",
    service_1_text: "صيانة دورية لضمان عمل السيارة بأمان وكفاءة ولمدة أطول.",

    service_2_title: "الإصلاحات",
    service_2_text: "نقوم بإصلاح أنواع مختلفة من الأعطال ونتأكد من عودة السيارة إلى حالة جيدة.",

    service_3_title: "خدمة المكيف",
    service_3_text: "فحص وصيانة نظام تكييف السيارة لتحسين الراحة على مدار السنة.",

    service_4_title: "ضبط العجلات",
    service_4_text: "الضبط الصحيح يحسن إحساس القيادة، ويقلل تآكل الإطارات، ويوفر ثباتًا أفضل.",

    service_5_title: "خدمة الإطارات",
    service_5_text: "مساعدة في تبديل الإطارات وفحصها وخدمات أخرى لقيادة أكثر أمانًا في جميع الفصول.",

    service_6_title: "أعمال اللحام",
    service_6_text: "نقوم بأعمال اللحام عند الحاجة ونوفر حلولاً متينة لمركبتك.",

    service_7_title: "إصلاح المحرك",
    service_7_text: "تشخيص وإصلاح مشاكل المحرك لاستعادة الأداء والوظيفة.",

    service_8_title: "إصلاح ناقل الحركة",
    service_8_text: "نساعد في مشاكل ناقل الحركة ونعمل من أجل تشغيل موثوق وآمن.",

    service_9_title: "المركبات الثقيلة",
    service_9_text: "نقدم أيضًا خدمة وإصلاح المركبات الثقيلة مع التركيز على الجودة والتوفر.",

    why_us_title: "لماذا تختار DKS Motor AB؟",
    why_1_title: "جميع ماركات السيارات",
    why_1_text: "نساعد العملاء مع أنواع مختلفة من المركبات والاحتياجات.",
    why_2_title: "خدمة شخصية",
    why_2_text: "لدينا ستحصل على تواصل واضح وخدمة مصممة لك ولمركبتك.",
    why_3_title: "مساعدة سريعة",
    why_3_text: "نعمل على تقديم خدمة سريعة وسلسة عندما تحتاجها.",
    why_4_title: "أسعار جيدة",
    why_4_text: "نقدم مساعدة احترافية بأسعار تنافسية.",

    services_cta_title: "هل تحتاج سيارتك إلى صيانة أو إصلاح؟",
    services_cta_text: "أرسل إلينا طلب حجز وسنساعدك في الخطوة التالية.",

    // Booking page
    booking_title: "احجز خدمة السيارة",
    booking_intro: "أرسل طلب حجز عبر النموذج أدناه وسنعود إليك في أقرب وقت ممكن.",
    form_name_label: "الاسم",
    form_name_placeholder: "اسمك",
    form_phone_label: "الهاتف",
    form_phone_placeholder: "رقم الهاتف",
    form_email_label: "البريد الإلكتروني",
    form_email_placeholder: "عنوان البريد الإلكتروني",
    form_reg_label: "رقم التسجيل",
    form_reg_placeholder: "رقم تسجيل السيارة",
    form_service_label: "نوع الخدمة",
    form_service_placeholder: "مثلاً: صيانة، خدمة تكييف، خدمة إطارات",
    form_message_label: "الرسالة",
    form_message_placeholder: "اشرح ما الذي تحتاج المساعدة فيه",
    form_submit: "إرسال طلب الحجز",
    form_subject: "طلب حجز جديد من الموقع الإلكتروني"
  },

  zh: {
    // General
    book_service: "预约汽车服务",
    menu: "菜单",
    navigate: "导航",
    home: "首页",
    services: "我们的服务",
    contact: "联系我们",
    book_time: "预约时间",
    about: "关于我们",
    address_label: "地址",
    address_value: "Hammarhagsvägen 30, 149 50 Nynäshamn",
    address_label_inline: "地址：",
    email_label: "电子邮箱：",

    // Index
    hero_title: "汽车保养与维修",
    hero_subtitle: "您在 Nynäshamn 的本地汽车维修厂",
    hero_text_1: "DKS Motor AB 提供所有汽车品牌的保养和维修服务，同时也提供重型车辆的保养和维修。",
    hero_text_2: "快速服务 • 价格合理 • 贴心接待",
    welcome_title: "欢迎来到 DKS Motor AB！",
    welcome_offer: '首次保养可享<strong>9折优惠</strong>。欢迎联系我们或通过网站发送预约请求。',
    about_short_title: "关于我们",
    about_short_text: "我们提供所有汽车品牌的保养和维修服务，也提供重型车辆的保养和维修。我们还可以帮助您进行空调保养、四轮定位、轮胎服务、焊接工作以及发动机和变速箱维修。",
    opening_hours_title: "营业时间",
    regular_hours: "正常营业时间",
    hours_weekdays: "周一至周五：08:00–18:00",
    hours_saturday: "周六：09:00–14:00",
    hours_sunday: "周日：休息",
    deviating_hours: "特殊营业时间",
    red_days_closed: "公共假期：休息",
    contact_section_title: "地址和联系方式",

    // Contact page
    contact_page_title: "联系我们",
    contact_intro: "如果您想预约时间、咨询问题或获得保养与维修帮助，欢迎随时联系我们。",
    email_us: "给我们发邮件",
    call: "致电",

    // Services page
    services_badge: "我们的服务",
    services_hero_title: "适用于所有汽车品牌的保养与维修",
    services_hero_text: "在 DKS Motor AB，我们为乘用车和重型车辆提供专业的保养、故障诊断和维修服务。我们注重质量、清晰沟通和个性化服务。",
    services_help_title: "我们可以为您提供这些帮助",
    services_help_text: "我们提供广泛的维修厂服务，让您的车辆全年保持良好状态。",

    service_1_title: "汽车保养",
    service_1_text: "定期保养可让车辆更安全、更高效，并延长使用寿命。",

    service_2_title: "维修",
    service_2_text: "我们维修各种类型的故障，并确保车辆恢复良好状态。",

    service_3_title: "空调保养",
    service_3_text: "对车辆空调系统进行检查、保养和维护，让您全年都更舒适。",

    service_4_title: "四轮定位",
    service_4_text: "正确的定位可改善驾驶感受、减少轮胎磨损并提高稳定性。",

    service_5_title: "轮胎服务",
    service_5_text: "提供换胎、检查和其他服务，让您在各个季节都能更安全驾驶。",

    service_6_title: "焊接工作",
    service_6_text: "我们可根据需要进行焊接工作，并为您的车辆提供耐用的解决方案。",

    service_7_title: "发动机维修",
    service_7_text: "对发动机问题进行诊断和维修，以恢复性能和功能。",

    service_8_title: "变速箱维修",
    service_8_text: "我们帮助处理变速箱问题，确保运行可靠且安全。",

    service_9_title: "重型车辆",
    service_9_text: "我们也为重型车辆提供保养与维修服务，重点关注质量和可用性。",

    why_us_title: "为什么选择 DKS Motor AB？",
    why_1_title: "所有汽车品牌",
    why_1_text: "我们为多种不同类型的车辆和需求提供帮助。",
    why_2_title: "个性化服务",
    why_2_text: "在这里，您将获得清晰沟通和根据您及您的车辆量身定制的服务。",
    why_3_title: "快速帮助",
    why_3_text: "我们致力于在您需要时提供快速顺畅的服务。",
    why_4_title: "价格合理",
    why_4_text: "我们以有竞争力的价格提供专业帮助。",

    services_cta_title: "您的车辆需要保养或维修吗？",
    services_cta_text: "向我们发送预约请求，我们会继续为您提供帮助。",

    // Booking page
    booking_title: "预约汽车服务",
    booking_intro: "请通过下面的表单发送预约请求，我们会尽快回复您。",
    form_name_label: "姓名",
    form_name_placeholder: "您的姓名",
    form_phone_label: "电话",
    form_phone_placeholder: "电话号码",
    form_email_label: "电子邮箱",
    form_email_placeholder: "电子邮箱地址",
    form_reg_label: "车牌号",
    form_reg_placeholder: "车辆注册号",
    form_service_label: "服务类型",
    form_service_placeholder: "例如：保养、空调保养、轮胎服务",
    form_message_label: "留言",
    form_message_placeholder: "请描述您需要什么帮助",
    form_submit: "发送预约请求",
    form_subject: "来自网站的新预约请求"
  }
};

function setLanguage(lang) {
  const selectedLang = translations[lang] ? lang : "sv";
  const langData = translations[selectedLang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (langData[key]) {
      element.innerHTML = langData[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (langData[key]) {
      element.placeholder = langData[key];
    }
  });

  const subjectInput = document.querySelector('input[name="_subject"]');
  if (subjectInput && langData.form_subject) {
    subjectInput.value = langData.form_subject;
  }

  if (currentLang) {
    currentLang.textContent = selectedLang.toUpperCase();
  }

  document.documentElement.lang = selectedLang;
  document.documentElement.dir = selectedLang === "ar" ? "rtl" : "ltr";

  localStorage.setItem("siteLanguage", selectedLang);
}

if (langToggle && langMenu) {
  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("show");
  });

  document.querySelectorAll("#langMenu button").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);
      langMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-switcher")) {
      langMenu.classList.remove("show");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDrawer();
    if (langMenu) {
      langMenu.classList.remove("show");
    }
  }
});

const savedLanguage = localStorage.getItem("siteLanguage") || "sv";
setLanguage(savedLanguage);