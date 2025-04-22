// Translations object
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_achievements: "Achievements",
        nav_contact: "Contact",
        hero_title: "Hi, I'm Alexander Shvartsman",
        hero_tagline: "Aspiring Computer Scientist, Entrepreneur, and Athlete",
        hero_intro: "I'm passionate about building technology that improves people's lives. Whether it's helping my brother in his AI-driven healthcare solutions or creating my own SaaS apps to help others, I love using data and machine learning to solve real-world problems.",
        hero_work_btn: "📌 See My Work",
        hero_contact_btn: "📩 Contact Me",
        about_title: "About Me",
        about_who_title: "Who I Am",
        about_who_text: "I'm a high school sophomore with a strong passion for helping the world using AI and machine learning. Ever since I made my own calculator app (the youtube video showed the exact necessary code) at 10, I've been obsessed with creativity and solving problems. From wrestling on the mat to coding at my desk, I believe that persistence and passion drive meaningful change.",
        about_inspires_title: "What Inspires Me",
        about_inspires_text: "My dad, growing up in the mountains of Soviet Russia, had a tough life. There was immense pressure on him to succeed and to make enough money to escape the poor conditions and the unsafety that resided in the USSR. My father got top grades in school, moved to Moscow, found the love of his life, moved to America, just to keep pushing to create a great life for his children. I believe that such a story, especially from my father, is inspirational and pushes me to become the best version of myself.",
        about_goals_title: "My Goals",
        about_goals_text: "I hope to use my knowledge in AI programming and the mental skills learned in high-level sports to improve the human race. I plan to dedicate time and energy towards healthcare, AI-driven solutions, and helping people.",
        portfolio_title: "My Portfolio",
        portfolio_proj1_title: "🧠 Genetree: Genealogy with Profiles Website",
        portfolio_proj1_desc: "Built a website that allows users to create and share their family trees with profiles that include media, timelines, and relationships.",
        tech_python: "Python",
        tech_js: "JavaScript",
        tech_cursor: "Cursor",
        portfolio_github: "GitHub Repo",
        portfolio_proj2_title: "❤️ Java Blackjack Game",
        portfolio_proj2_desc: "Developed a simple blackjack game in Java that allows users to play against the computer.",
        tech_java: "Java",
        portfolio_proj3_title: "📝 Personal Website",
        portfolio_proj3_desc: "Built my own personal website to showcase my projects and share my thoughts.",
        tech_html: "HTML",
        tech_css: "CSS",
        more_projects: "More projects to come...",
        achievements_title: "My Achievements",
        achievements_academic_title: "Academic",
        achievements_academic_1: "🎓 4.52 Weighted GPA",
        achievements_academic_2: "🧮 MathCon Special Mention",
        achievements_academic_3: "📚 SAT: 1460 (Math: 770, Verbal: 690)",
        achievements_academic_4: "♟️ Chess.com 1968 ELO",
        achievements_academic_5: "🏫 Illinois High School Top Mathematics Scholar Student Award",
        achievements_academic_6: "📝 99th percentile MAP and STAR testing scores",
        achievements_academic_7: "🧮 School Mathletes Competitive Team",
        achievements_academic_8: "♟️ School Chess Club",
        achievements_leadership_title: "Leadership + Sports",
        achievements_leadership_1: "🤼 Varsity Wrestling Team Captain",
        achievements_leadership_2: "💼 Judo Club Assistant Coach",
        achievements_leadership_3: "🏅 Judo Panamerican Games Champion",
        achievements_leadership_4: "🏅 Multiple time Judo National Champion",
        achievements_leadership_5: "🤼 Wrestling Illinois State Qualifier",
        achievements_leadership_6: "🤼 Illinois Representative at Fargo Wrestling Nationals",
        achievements_leadership_7: "💃 Multiple Time Ballroom Dance National Dance Finalist",
        achievements_community_title: "Community Service",
        achievements_community_1: "🥋 Helped teach young kids defend themselves with judo",
        achievements_community_2: "🌐 Helped my brother create a functional attendance app for a wrestling club",
        contact_title: "Get In Touch",
        contact_info_title: "Contact Information",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_subject: "Subject",
        contact_message: "Your Message",
        contact_send: "Send Message",
        footer_copyright: "&copy; 2025 Alexander Shvartsman. All Rights Reserved.",
        form_success: "Thank you for your message! I will get back to you soon."
    },
    ru: {
        nav_home: "Главная",
        nav_about: "Обо мне",
        nav_portfolio: "Портфолио",
        nav_achievements: "Достижения",
        nav_contact: "Контакты",
        hero_title: "Привет, я Александр Шварцман",
        hero_tagline: "Будущий инженер-программист, предприниматель и спортсмен",
        hero_intro: "Я увлечен созданием технологий, которые улучшают жизнь людей. Будь то помощь моему брату в его решениях в области здравоохранения на основе искусственного интеллекта или создание собственных приложений Saas для помощи другим, мне нравится использовать данные и машинное обучение для решения реальных проблем.",
        hero_work_btn: "📌 Мои работы",
        hero_contact_btn: "📩 Связаться со мной",
        about_title: "Обо мне",
        about_who_title: "Кто я",
        about_who_text: "Я учусь на втором курсе средней школы и очень хочу помочь миру с помощью искусственного интеллекта и машинного обучения. С тех пор, как в 10 лет я создал собственное приложение-калькулятор (на видео на YouTube был показан точный необходимый код), я был одержим творчеством и решением задач. Я считаю, что настойчивость и страсть приводят к значимым изменениям — от борьбы на ковре до программирования за столом.",
        about_inspires_title: "Что меня вдохновляет",
        about_inspires_text: "Мой отец, выросший в горах Советской России, имел тяжелую жизнь. На него оказывалось огромное давление, чтобы добиться успеха и заработать достаточно денег, чтобы избежать плохих условий и небезопасности, которые существовали в СССР. Мой отец получил высокие оценки в школе, переехал в Москву, нашел любовь всей своей жизни, переехал в Америку, просто чтобы продолжать стремиться создать прекрасную жизнь для своих детей. Я считаю, что такая история, особенно от моего отца, вдохновляет и подталкивает меня стать лучшей версией себя.",
        about_goals_title: "Мои цели",
        about_goals_text: "Я хочу использовать свои знания в программировании ИИ и умственные навыки, полученные в спорте высокого уровня, для улучшения человеческой расы. Я планирую посвятить время и энергию здравоохранению, решениям на основе ИИ и помощи людям.",
        portfolio_title: "Мое портфолио",
        portfolio_proj1_title: "🧠 Genetree: Сайт генеалогии с профилями",
        portfolio_proj1_desc: "Создал веб-сайт, который позволяет пользователям создавать и делиться своими генеалогическими древами с профилями, включающими медиа, временные шкалы и отношения.",
        tech_python: "Python",
        tech_js: "JavaScript",
        tech_cursor: "Cursor",
        portfolio_github: "Репозиторий GitHub",
        portfolio_proj2_title: "❤️ Игра Блэкджек на Java",
        portfolio_proj2_desc: "Разработал простую игру в блэкджек на Java, позволяющую пользователям играть против компьютера.",
        tech_java: "Java",
        portfolio_proj3_title: "📝 Личный веб-сайт",
        portfolio_proj3_desc: "Создал свой личный веб-сайт для демонстрации своих проектов и обмена мыслями.",
        tech_html: "HTML",
        tech_css: "CSS",
        more_projects: "Скоро появятся новые проекты...",
        achievements_title: "Мои достижения",
        achievements_academic_title: "Академические",
        achievements_academic_1: "🎓 Средний балл 4.52 (взвешенный)",
        achievements_academic_2: "🧮 Особое упоминание MathCon",
        achievements_academic_3: "📚 SAT: 1460 (Математика: 770, Вербальный: 690)",
        achievements_academic_4: "♟️ Chess.com Рейтинг ЭЛО 1968",
        achievements_academic_5: "🏫 Награда лучшего ученика-математика средней школы Иллинойса",
        achievements_academic_6: "📝 99-й процентиль по результатам тестов MAP и STAR",
        achievements_academic_7: "🧮 Школьная соревновательная команда математиков",
        achievements_academic_8: "♟️ Школьный шахматный клуб",
        achievements_leadership_title: "Лидерство + Спорт",
        achievements_leadership_1: "🤼 Капитан университетской команды по борьбе",
        achievements_leadership_2: "💼 Помощник тренера клуба дзюдо",
        achievements_leadership_3: "🏅 Чемпион Панамериканских игр по дзюдо",
        achievements_leadership_4: "🏅 Многократный чемпион страны по дзюдо",
        achievements_leadership_5: "🤼 Квалификант штата Иллинойс по борьбе",
        achievements_leadership_6: "🤼 Представитель Иллинойса на национальном чемпионате по борьбе в Фарго",
        achievements_leadership_7: "💃 Многократный финалист национальных соревнований по бальным танцам",
        achievements_community_title: "Общественная работа",
        achievements_community_1: "🥋 Помогал учить детей защищаться с помощью дзюдо",
        achievements_community_2: "🌐 Помог брату создать функциональное приложение для учета посещаемости в борцовском клубе",
        contact_title: "Свяжитесь со мной",
        contact_info_title: "Контактная информация",
        contact_name: "Ваше имя",
        contact_email: "Ваш email",
        contact_subject: "Тема",
        contact_message: "Ваше сообщение",
        contact_send: "Отправить сообщение",
        footer_copyright: "&copy; 2025 Александр Шварцман. Все права защищены.",
        form_success: "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время."
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_portfolio: "Portafolio",
        nav_achievements: "Logros",
        nav_contact: "Contacto",
        hero_title: "Hola, soy Alejandro Shvartsman",
        hero_tagline: "Aspirante a científico informático, emprendedor y atleta",
        hero_intro: "Me apasiona desarrollar tecnología que mejore la vida de las personas. Ya sea ayudando a mi hermano con sus soluciones de salud basadas en IA o creando mis propias aplicaciones SaaS para ayudar a otros, me encanta usar datos y aprendizaje automático para resolver problemas del mundo real.",
        hero_work_btn: "📌 Ver mi trabajo",
        hero_contact_btn: "📩 Contáctame",
        about_title: "Sobre mí",
        about_who_title: "Quién soy",
        about_who_text: "Soy un estudiante de segundo año de secundaria y tengo una gran pasión por ayudar al mundo mediante la inteligencia artificial y el aprendizaje automático. Desde que hice mi propia aplicación de calculadora (el video de YouTube mostró el código exacto necesario) a los 10 años, he estado obsesionado con la creatividad y la resolución de problemas. Desde luchar en el tapete hasta codificar en mi escritorio, creo que la perseverancia y la pasión impulsan cambios significativos.",
        about_inspires_title: "Lo que me inspira",
        about_inspires_text: "Mi padre, criado en las montañas de la Rusia Soviética, tuvo una vida difícil. Tenía una enorme presión para triunfar y ganar suficiente dinero para escapar de las malas condiciones y la inseguridad que imperaban en la URSS. Mi padre sacó las mejores notas en la escuela, se mudó a Moscú, encontró al amor de su vida y se mudó a Estados Unidos, simplemente para seguir luchando por crear una vida plena para sus hijos. Creo que una historia como esta, especialmente la de mi padre, es inspiradora y me impulsa a convertirme en la mejor versión de mí mismo.",
        about_goals_title: "Mis objetivos",
        about_goals_text: "Quiero usar mis conocimientos de programación de IA y las habilidades mentales adquiridas en el deporte de alto nivel para mejorar la humanidad. Planeo dedicar tiempo y energía a la atención médica, a las soluciones basadas en IA y a ayudar a las personas.",
        portfolio_title: "Mi portafolio",
        portfolio_proj1_title: "🧠 Genetree: Sitio web de genealogía con perfiles",
        portfolio_proj1_desc: "Construí un sitio web que permite a los usuarios crear y compartir sus árboles genealógicos con perfiles que incluyen medios, líneas de tiempo y relaciones.",
        tech_python: "Python",
        tech_js: "JavaScript",
        tech_cursor: "Cursor",
        portfolio_github: "Repositorio GitHub",
        portfolio_proj2_title: "❤️ Juego de Blackjack en Java",
        portfolio_proj2_desc: "Desarrollé un juego simple de blackjack en Java que permite a los usuarios jugar contra la computadora.",
        tech_java: "Java",
        portfolio_proj3_title: "📝 Sitio web personal",
        portfolio_proj3_desc: "Construí mi propio sitio web personal para mostrar mis proyectos y compartir mis pensamientos.",
        tech_html: "HTML",
        tech_css: "CSS",
        more_projects: "Más proyectos por venir...",
        achievements_title: "Mis logros",
        achievements_academic_title: "Académico",
        achievements_academic_1: "🎓 GPA ponderado de 4.52",
        achievements_academic_2: "🧮 Mención especial de MathCon",
        achievements_academic_3: "📚 SAT: 1460 (Matemáticas: 770, Verbal: 690)",
        achievements_academic_4: "♟️ Chess.com ELO 1968",
        achievements_academic_5: "🏫 Premio al mejor estudiante erudito en matemáticas de la escuela secundaria de Illinois",
        achievements_academic_6: "📝 Percentil 99 en los puntajes de las pruebas MAP y STAR",
        achievements_academic_7: "🧮 Equipo competitivo de atletas de matemáticas de la escuela",
        achievements_academic_8: "♟️ Club de ajedrez de la escuela",
        achievements_leadership_title: "Liderazgo + Deportes",
        achievements_leadership_1: "🤼 Capitán del equipo universitario de lucha libre",
        achievements_leadership_2: "💼 Entrenador asistente del club de judo",
        achievements_leadership_3: "🏅 Campeón de los Juegos Panamericanos de Judo",
        achievements_leadership_4: "🏅 Múltiple campeón nacional de judo",
        achievements_leadership_5: "🤼 Clasificatorio estatal de lucha libre de Illinois",
        achievements_leadership_6: "🤼 Representante de Illinois en los Nacionales de Lucha Libre de Fargo",
        achievements_leadership_7: "💃 Finalista nacional de baile de salón en múltiples ocasiones",
        achievements_community_title: "Servicio comunitario",
        achievements_community_1: "🥋 Ayudó a enseñar a niños pequeños a defenderse con judo",
        achievements_community_2: "🌐 Ayudó a mi hermano a crear una aplicación funcional de asistencia para un club de lucha libre",
        contact_title: "Ponte en contacto",
        contact_info_title: "Información de contacto",
        contact_name: "Tu nombre",
        contact_email: "Tu correo electrónico",
        contact_subject: "Asunto",
        contact_message: "Tu mensaje",
        contact_send: "Enviar mensaje",
        footer_copyright: "&copy; 2025 Alexander Shvartsman. Todos los derechos reservados.",
        form_success: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto."
    }
};

// Current language (default: English)
let currentLang = localStorage.getItem('language') || 'en';

// Function to update all text on the page based on selected language
function updateLanguage(lang) {
    // Update currentLang
    currentLang = lang;
    
    // Save user preference
    localStorage.setItem('language', lang);
    
    // Update the current language display
    document.querySelector('.current-lang').textContent = lang.toUpperCase();
    
    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        // Check if the element is an input or textarea
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translations[lang][key];
        }
        // For all other elements
        else {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Language dropdown toggle
const languageBtn = document.querySelector('.language-btn');
const languageDropdown = document.querySelector('.language-dropdown');

languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
});

// Language selection
document.querySelectorAll('.language-dropdown li').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        updateLanguage(lang);
        languageDropdown.classList.remove('show');
    });
});

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        languageDropdown.classList.remove('show');
    }
});

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
        }
    });
};

// Call fadeIn on initial load
window.addEventListener('load', fadeIn);

// Call fadeIn on scroll
window.addEventListener('scroll', fadeIn);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) { // Check if target element exists
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Make fully opaque on scroll
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Slightly transparent at top
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Scroll Down Arrow Fade
const scrollArrow = document.getElementById('scroll-down-arrow');
const heroSection = document.getElementById('home'); // Assuming 'home' is the ID of your hero section

if (scrollArrow && heroSection) {
    const heroHeight = heroSection.offsetHeight;
    // Start fading after scrolling 10% of the hero height, fully faded by 40%
    const fadeStart = heroHeight * 0.1;
    const fadeEnd = heroHeight * 0.4;

    const fadeArrowOnScroll = () => {
        const scrollY = window.scrollY;
        let opacity = 1;

        if (scrollY > fadeStart) {
            // Calculate opacity: decreases linearly from 1 to 0 between fadeStart and fadeEnd
            opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        }

        // Clamp opacity between 0 and 1
        opacity = Math.max(0, Math.min(1, opacity));

        scrollArrow.style.opacity = opacity;
    };

    window.addEventListener('scroll', fadeArrowOnScroll);
    // Initial call in case the page loads already scrolled
    fadeArrowOnScroll();
}

// Disco Effect
document.addEventListener('DOMContentLoaded', function() {
    const danceLink = document.getElementById('dance-link');
    
    if (danceLink) {
        danceLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create the disco overlay
            const discoOverlay = document.createElement('div');
            discoOverlay.className = 'disco-overlay';
            document.body.appendChild(discoOverlay);
            
            // Create disco ball
            const discoBall = document.createElement('div');
            discoBall.className = 'disco-ball';
            discoOverlay.appendChild(discoBall);
            
            // Show the overlay
            discoOverlay.style.display = 'block';
            
            // Add strobe effect to boxes
            const boxes = document.querySelectorAll('.portfolio-item, .achievement-box');
            boxes.forEach(box => box.classList.add('strobe'));
            
            // Play disco music if desired (commented out for now)
            // const audio = new Audio('path/to/disco-music.mp3');
            // audio.play();
            
            // End the disco after 5 seconds
            setTimeout(function() {
                discoOverlay.style.display = 'none';
                boxes.forEach(box => box.classList.remove('strobe'));
                document.body.removeChild(discoOverlay);
                // if (audio) audio.pause();
            }, 5000);
        });
    }
});

// Function to check for form submission success on page load
function checkFormSubmission() {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;

    // Check if redirected back to #contact with submitted=true
    if (hash.startsWith('#contact') && urlParams.get('submitted') === 'true') {
        const messageArea = document.getElementById('form-message-area');
        if (messageArea) {
            // Use translation key for the success message
            const successMsgKey = 'form_success';
            const successMsg = translations[currentLang] && translations[currentLang][successMsgKey]
                                ? translations[currentLang][successMsgKey]
                                : "Thank you for your message! I will get back to you soon."; // Default fallback

            messageArea.innerHTML = `<p style="color: green; font-weight: bold; margin-bottom: 15px;">${successMsg}</p>`;

            // Optionally clear the query parameter from URL without reloading
            history.replaceState(null, '', '#contact');
        }
    }
}

// Add event listener for DOMContentLoaded to run initial setup and checks
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language on load (keep this)
    updateLanguage(currentLang);

    // Check for form submission status (add this call)
    checkFormSubmission();

    // Disco Effect initialization (keep this, assuming it's inside DOMContentLoaded)
    const danceLink = document.getElementById('dance-link');
    if (danceLink) {
       // ... (rest of the disco effect listener code) ...
    }

    // Navbar shrink on scroll initial check (if needed, or handled by scroll listener)

    // Fade in elements initial check (keep this)
    fadeIn();
});