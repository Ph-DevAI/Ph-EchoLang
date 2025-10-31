
// Enhanced Parallax Effect
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const parallax1 = document.getElementById('parallax1');
    const parallax2 = document.getElementById('parallax2');
    
    if (parallax1) {
        parallax1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
    if (parallax2) {
        parallax2.style.transform = `translateY(${-scrollPosition * 0.3}px)`;
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Language translations data
const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_languages: "Langues",
        nav_services: "Services",
        nav_testimonials: "Témoignages",
        nav_domains: "Domaines",
        nav_contact: "Contact",
        // Buttons
        btn_start_translation: "Commencer la Traduction",
        btn_request_translation: "Demander une Traduction",
        btn_subscribe: "S'abonner",
        // Hero
        hero_badge: "Entreprise Camerounaise",
        hero_title: "Bienvenue chez Ph-EchoLang",
        hero_subtitle: "Votre partenaire de confiance pour des services de traduction professionnels boostés par l'IA dans 4 langues principales : français, anglais, espagnol et allemand.",
        // Languages section
        languages_title: "Langues Disponibles",
        languages_subtitle: "Notre expertise couvre les principales langues internationales avec des traducteurs natifs et des systèmes d'IA hautement qualifiés.",
        fr_title: "Français",
        fr_desc: "Langue maternelle - Traduction précise et contextuelle",
        en_title: "Anglais (US)",
        en_desc: "Variations américaines disponibles",
        uk_title: "Anglais (UK)",
        uk_desc: "Variations britanniques disponibles",
        es_title: "Espagnol",
        es_desc: "Traduction professionnelle pour tous les dialectes",
        de_title: "Allemand",
        de_desc: "Précision technique et terminologie spécialisée",
        selector_title: "Traduire cette page en :",
        // AI Section
        ai_title: "Traductions Boostées par l'IA",
        ai_text: "Nos services de traduction sont renforcés par des systèmes d'intelligence artificielle de pointe, combinés à l'expertise de traducteurs humains hautement qualifiés. Cette synergie garantit des traductions rapides, précises et adaptées à chaque contexte professionnel.",
        // Services
        services_title: "Nos Services de Traduction",
        service1_title: "Documents Officiels",
        service1_desc: "Traduction certifiée de documents administratifs, juridiques et officiels.",
        service2_title: "Sites Web",
        service2_desc: "Localisation complète de vos sites web et applications mobiles.",
        service3_title: "Contenu Éditorial",
        service3_desc: "Livres, articles, blogs et contenu marketing professionnel.",
        // Testimonials
        testimonials_title: "Témoignages",
        testimonial1_text: "Le service de traduction de Ph-EchoLang est exceptionnel. Rapidité, précision et professionnalisme au rendez-vous pour notre documentation technique.",
        testimonial1_name: "Marie Dubois",
        testimonial1_role: "Directrice Marketing",
        testimonial2_text: "Nous collaborons avec Ph-EchoLang depuis 3 ans pour toutes nos traductions juridiques. Toujours impeccable et dans les délais.",
        testimonial2_name: "Thomas Weber",
        testimonial2_role: "Avocat Associé",
        testimonial3_text: "La qualité des traductions automobiles est remarquable. Nos manuels techniques sont parfaits dans toutes les langues cibles.",
        testimonial3_name: "Sophie Martinez",
        testimonial3_role: "Ingénieure Technique",
        // Final Request
        final_request_title: "Prêt à lancer votre projet de traduction ?",
        final_request_text: "Contactez-nous dès maintenant pour obtenir un devis personnalisé et commencer votre projet de traduction avec nos experts IA boostés.",
        // Domains
        domains_title: "Nos Autres Domaines",
        domains_subtitle: "Sous le groupe PH, nous développons plusieurs domaines d'expertise complémentaires :",
        domain1_title: "Ph-reseauNet",
        domain1_desc: "Solutions réseau et infrastructure IT pour entreprises.",
        domain2_title: "Ph-DevAI",
        domain2_desc: "Développement d'applications d'intelligence artificielle sur mesure.",
        domain3_title: "Ph-ComMan",
        domain3_desc: "Communication digitale et gestion de marque.",
        domain4_title: "Ph-Art",
        domain4_desc: "Création artistique numérique et design graphique.",
        domain5_title: "Ph-Study",
        domain5_desc: "Plateforme éducative et formation en ligne.",
        // Footer
        footer_title: "Ph-EchoLang",
        footer_desc: "Entreprise camerounaise spécialisée dans les services de traduction boostés par l'IA. Membre du groupe PH.",
        footer_nav_title: "Navigation",
        footer_contact_title: "Contact",
        footer_newsletter_title: "Newsletter",
        newsletter_text: "Restez informé de nos nouveautés et offres spéciales.",
        copyright_text: "&copy; 2024 Ph-EchoLang - Tous droits réservés. Membre du groupe PH."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_languages: "Languages",
        nav_services: "Services",
        nav_testimonials: "Testimonials",
        nav_domains: "Domains",
        nav_contact: "Contact",
        // Buttons
        btn_start_translation: "Start Translation",
        btn_request_translation: "Request Translation",
        btn_subscribe: "Subscribe",
        // Hero
        hero_badge: "Cameroonian Company",
        hero_title: "Welcome to Ph-EchoLang",
        hero_subtitle: "Your trusted partner for professional AI-boosted translation services in 4 main languages: French, English, Spanish, and German.",
        // Languages section
        languages_title: "Available Languages",
        languages_subtitle: "Our expertise covers the main international languages with native translators and highly qualified AI systems.",
        fr_title: "French",
        fr_desc: "Native language - Precise and contextual translation",
        en_title: "English (US)",
        en_desc: "American variations available",
        uk_title: "English (UK)",
        uk_desc: "British variations available",
        es_title: "Spanish",
        es_desc: "Professional translation for all dialects",
        de_title: "German",
        de_desc: "Technical precision and specialized terminology",
        selector_title: "Translate this page to:",
        // AI Section
        ai_title: "AI-Boosted Translations",
        ai_text: "Our translation services are enhanced by cutting-edge artificial intelligence systems, combined with the expertise of highly qualified human translators. This synergy ensures fast, accurate, and context-adapted translations.",
        // Services
        services_title: "Our Translation Services",
        service1_title: "Official Documents",
        service1_desc: "Certified translation of administrative, legal, and official documents.",
        service2_title: "Websites",
        service2_desc: "Complete localization of your websites and mobile applications.",
        service3_title: "Editorial Content",
        service3_desc: "Books, articles, blogs, and professional marketing content.",
        // Testimonials
        testimonials_title: "Testimonials",
        testimonial1_text: "Ph-EchoLang's translation service is exceptional. Speed, accuracy, and professionalism for our technical documentation.",
        testimonial1_name: "Marie Dubois",
        testimonial1_role: "Marketing Director",
        testimonial2_text: "We have been collaborating with Ph-EchoLang for 3 years for all our legal translations. Always impeccable and on time.",
        testimonial2_name: "Thomas Weber",
        testimonial2_role: "Partner Lawyer",
        testimonial3_text: "The quality of automotive translations is remarkable. Our technical manuals are perfect in all target languages.",
        testimonial3_name: "Sophie Martinez",
        testimonial3_role: "Technical Engineer",
        // Final Request
        final_request_title: "Ready to start your translation project?",
        final_request_text: "Contact us now to get a personalized quote and start your translation project with our AI-boosted experts.",
        // Domains
        domains_title: "Our Other Domains",
        domains_subtitle: "Under the PH group, we develop several complementary areas of expertise:",
        domain1_title: "Ph-reseauNet",
        domain1_desc: "Network solutions and IT infrastructure for businesses.",
        domain2_title: "Ph-DevAI",
        domain2_desc: "Custom artificial intelligence application development.",
        domain3_title: "Ph-ComMan",
        domain3_desc: "Digital communication and brand management.",
        domain4_title: "Ph-Art",
        domain4_desc: "Digital artistic creation and graphic design.",
        domain5_title: "Ph-Study",
        domain5_desc: "Educational platform and online training.",
        // Footer
        footer_title: "Ph-EchoLang",
        footer_desc: "Cameroonian company specialized in AI-boosted translation services. Member of the PH group.",
        footer_nav_title: "Navigation",
        footer_contact_title: "Contact",
        footer_newsletter_title: "Newsletter",
        newsletter_text: "Stay informed about our news and special offers.",
        copyright_text: "&copy; 2024 Ph-EchoLang - All rights reserved. Member of the PH group."
    },
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_languages: "Idiomas",
        nav_services: "Servicios",
        nav_testimonials: "Testimonios",
        nav_domains: "Dominios",
        nav_contact: "Contacto",
        // Buttons
        btn_start_translation: "Iniciar Traducción",
        btn_request_translation: "Solicitar Traducción",
        btn_subscribe: "Suscribirse",
        // Hero
        hero_badge: "Empresa Camerunesa",
        hero_title: "Bienvenido a Ph-EchoLang",
        hero_subtitle: "Su socio de confianza para servicios profesionales de traducción potenciados por IA en 4 idiomas principales: francés, inglés, español y alemán.",
        // Languages section
        languages_title: "Idiomas Disponibles",
        languages_subtitle: "Nuestra experiencia abarca los principales idiomas internacionales con traductores nativos y sistemas de IA altamente calificados.",
        fr_title: "Francés",
        fr_desc: "Idioma materno - Traducción precisa y contextual",
        en_title: "Inglés (US)",
        en_desc: "Variaciones estadounidenses disponibles",
        uk_title: "Inglés (UK)",
        uk_desc: "Variaciones británicas disponibles",
        es_title: "Español",
        es_desc: "Traducción profesional para todos los dialectos",
        de_title: "Alemán",
        de_desc: "Precisión técnica y terminología especializada",
        selector_title: "Traducir esta página a:",
        // AI Section
        ai_title: "Traducciones Potenciadas por IA",
        ai_text: "Nuestros servicios de traducción están mejorados por sistemas de inteligencia artificial de vanguardia, combinados con la experiencia de traductores humanos altamente calificados. Esta sinergia garantiza traducciones rápidas, precisas y adaptadas a cada contexto.",
        // Services
        services_title: "Nuestros Servicios de Traducción",
        service1_title: "Documentos Oficiales",
        service1_desc: "Traducción certificada de documentos administrativos, legales y oficiales.",
        service2_title: "Sitios Web",
        service2_desc: "Localización completa de sus sitios web y aplicaciones móviles.",
        service3_title: "Contenido Editorial",
        service3_desc: "Libros, artículos, blogs y contenido de marketing profesional.",
        // Testimonials
        testimonials_title: "Testimonios",
        testimonial1_text: "El servicio de traducción de Ph-EchoLang es excepcional. Rapidez, precisión y profesionalismo para nuestra documentación técnica.",
        testimonial1_name: "Marie Dubois",
        testimonial1_role: "Directora de Marketing",
        testimonial2_text: "Colaboramos con Ph-EchoLang desde hace 3 años para todas nuestras traducciones legales. Siempre impecable y puntual.",
        testimonial2_name: "Thomas Weber",
        testimonial2_role: "Abogado Socio",
        testimonial3_text: "La calidad de las traducciones automotrices es notable. Nuestros manuales técnicos son perfectos en todos los idiomas objetivo.",
        testimonial3_name: "Sophie Martinez",
        testimonial3_role: "Ingeniera Técnica",
        // Final Request
        final_request_title: "¿Listo para iniciar su proyecto de traducción?",
        final_request_text: "Contáctenos ahora para obtener un presupuesto personalizado y comenzar su proyecto de traducción con nuestros expertos potenciados por IA.",
        // Domains
        domains_title: "Nuestros Otros Dominios",
        domains_subtitle: "Bajo el grupo PH, desarrollamos varias áreas complementarias de experiencia:",
        domain1_title: "Ph-reseauNet",
        domain1_desc: "Soluciones de red e infraestructura IT para empresas.",
        domain2_title: "Ph-DevAI",
        domain2_desc: "Desarrollo de aplicaciones de inteligencia artificial a medida.",
        domain3_title: "Ph-ComMan",
        domain3_desc: "Comunicación digital y gestión de marca.",
        domain4_title: "Ph-Art",
        domain4_desc: "Creación artística digital y diseño gráfico.",
        domain5_title: "Ph-Study",
        domain5_desc: "Plataforma educativa y formación en línea.",
        // Footer
        footer_title: "Ph-EchoLang",
        footer_desc: "Empresa camerunesa especializada en servicios de traducción potenciados por IA. Miembro del grupo PH.",
        footer_nav_title: "Navegación",
        footer_contact_title: "Contacto",
        footer_newsletter_title: "Boletín",
        newsletter_text: "Manténgase informado de nuestras novedades y ofertas especiales.",
        copyright_text: "&copy; 2024 Ph-EchoLang - Todos los derechos reservados. Miembro del grupo PH."
    },
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_languages: "Sprachen",
        nav_services: "Dienstleistungen",
        nav_testimonials: "Referenzen",
        nav_domains: "Bereiche",
        nav_contact: "Kontakt",
        // Buttons
        btn_start_translation: "Übersetzung starten",
        btn_request_translation: "Übersetzung anfordern",
        btn_subscribe: "Abonnieren",
        // Hero
        hero_badge: "Kamerunisches Unternehmen",
        hero_title: "Willkommen bei Ph-EchoLang",
        hero_subtitle: "Ihr vertrauenswürdiger Partner für professionelle KI-gestützte Übersetzungsdienstleistungen in 4 Hauptsprachen: Französisch, Englisch, Spanisch und Deutsch.",
        // Languages section
        languages_title: "Verfügbare Sprachen",
        languages_subtitle: "Unsere Expertise umfasst die wichtigsten internationalen Sprachen mit muttersprachlichen Übersetzern und hochqualifizierten KI-Systemen.",
        fr_title: "Französisch",
        fr_desc: "Muttersprache - Präzise und kontextbezogene Übersetzung",
        en_title: "Englisch (US)",
        en_desc: "Amerikanische Varianten verfügbar",
        uk_title: "Englisch (UK)",
        uk_desc: "Britische Varianten verfügbar",
        es_title: "Spanisch",
        es_desc: "Professionelle Übersetzung für alle Dialekte",
        de_title: "Deutsch",
        de_desc: "Technische Präzision und fachspezifische Terminologie",
        selector_title: "Diese Seite übersetzen in:",
        // AI Section
        ai_title: "KI-gestützte Übersetzungen",
        ai_text: "Unsere Übersetzungsdienstleistungen werden durch hochmoderne Künstliche Intelligenz-Systeme verstärkt, kombiniert mit der Expertise hochqualifizierter menschlicher Übersetzer. Diese Synergie gewährleistet schnelle, präzise und kontextangepasste Übersetzungen.",
        // Services
        services_title: "Unsere Übersetzungsdienstleistungen",
        service1_title: "Offizielle Dokumente",
        service1_desc: "Zertifizierte Übersetzung von Verwaltungs-, Rechts- und offiziellen Dokumenten.",
        service2_title: "Webseiten",
        service2_desc: "Komplette Lokalisierung Ihrer Webseiten und mobilen Anwendungen.",
        service3_title: "Redaktionelle Inhalte",
        service3_desc: "Bücher, Artikel, Blogs und professionelle Marketinginhalte.",
        // Testimonials
        testimonials_title: "Referenzen",
        testimonial1_text: "Der Übersetzungsservice von Ph-EchoLang ist außergewöhnlich. Schnelligkeit, Genauigkeit und Professionalität für unsere technische Dokumentation.",
        testimonial1_name: "Marie Dubois",
        testimonial1_role: "Marketingdirektorin",
        testimonial2_text: "Wir arbeiten seit 3 Jahren mit Ph-EchoLang für alle unsere juristischen Übersetzungen zusammen. Immer einwandfrei und pünktlich.",
        testimonial2_name: "Thomas Weber",
        testimonial2_role: "Partneranwalt",
        testimonial3_text: "Die Qualität der Automobilübersetzungen ist bemerkenswert. Unsere technischen Handbücher sind in allen Zielsprachen perfekt.",
        testimonial3_name: "Sophie Martinez",
        testimonial3_role: "Technische Ingenieurin",
        // Final Request
        final_request_title: "Bereit, Ihr Übersetzungsprojekt zu starten?",
        final_request_text: "Kontaktieren Sie uns jetzt, um ein personalisiertes Angebot zu erhalten und Ihr Übersetzungsprojekt mit unseren KI-gestützten Experten zu beginnen.",
        // Domains
        domains_title: "Unsere weiteren Bereiche",
        domains_subtitle: "Unter der PH-Gruppe entwickeln wir mehrere komplementäre Fachgebiete:",
        domain1_title: "Ph-reseauNet",
        domain1_desc: "Netzwerklösungen und IT-Infrastruktur für Unternehmen.",
        domain2_title: "Ph-DevAI",
        domain2_desc: "Maßgeschneiderte Entwicklung von Künstliche Intelligenz-Anwendungen.",
        domain3_title: "Ph-ComMan",
        domain3_desc: "Digitale Kommunikation und Markenführung.",
        domain4_title: "Ph-Art",
        domain4_desc: "Digitale künstlerische Gestaltung und Grafikdesign.",
        domain5_title: "Ph-Study",
        domain5_desc: "Bildungsplattform und Online-Schulungen.",
        // Footer
        footer_title: "Ph-EchoLang",
        footer_desc: "Kamerunisches Unternehmen, spezialisiert auf KI-gestützte Übersetzungsdienstleistungen. Mitglied der PH-Gruppe.",
        footer_nav_title: "Navigation",
        footer_contact_title: "Kontakt",
        footer_newsletter_title: "Newsletter",
        newsletter_text: "Bleiben Sie über unsere Neuigkeiten und Sonderangebote informiert.",
        copyright_text: "&copy; 2024 Ph-EchoLang - Alle Rechte vorbehalten. Mitglied der PH-Gruppe."
    }
};

let currentLang = 'fr';

// **CORRECTION IMPORTANTE : Ajout de l'événement click sur les boutons de traduction**
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
        const newLang = this.getAttribute('data-lang');
        
        // Update active state
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
        
        // Translate the page
        translatePage(newLang);
        currentLang = newLang;
    });
});

function translatePage(lang) {
    // Update navigation links
    document.getElementById('nav-home').textContent = translations[lang].nav_home;
    document.getElementById('nav-languages').textContent = translations[lang].nav_languages;
    document.getElementById('nav-services').textContent = translations[lang].nav_services;
    document.getElementById('nav-testimonials').textContent = translations[lang].nav_testimonials;
    document.getElementById('nav-domains').textContent = translations[lang].nav_domains;
    document.getElementById('nav-contact').textContent = translations[lang].nav_contact;
    
    // Update buttons
    document.getElementById('main-translation-btn').textContent = translations[lang].btn_start_translation;
    document.getElementById('hero-translation-btn').textContent = translations[lang].btn_start_translation;
    document.getElementById('request-btn').textContent = translations[lang].btn_request_translation;
    document.getElementById('services-request-btn').textContent = translations[lang].btn_request_translation;
    document.getElementById('final-request-btn').textContent = translations[lang].btn_request_translation;
    document.getElementById('newsletter-btn').textContent = translations[lang].btn_subscribe;
    
    // Update hero section
    document.getElementById('cameroun-badge').innerHTML = `<i class="fas fa-flag"></i> ${translations[lang].hero_badge}`;
    document.getElementById('hero-title').textContent = translations[lang].hero_title;
    document.getElementById('hero-subtitle').textContent = translations[lang].hero_subtitle;
    
    // Update languages section
    document.getElementById('languages-title').textContent = translations[lang].languages_title;
    document.getElementById('languages-subtitle').textContent = translations[lang].languages_subtitle;
    document.getElementById('fr-title').textContent = translations[lang].fr_title;
    document.getElementById('fr-desc').textContent = translations[lang].fr_desc;
    document.getElementById('en-title').textContent = translations[lang].en_title;
    document.getElementById('en-desc').textContent = translations[lang].en_desc;
    document.getElementById('uk-title').textContent = translations[lang].uk_title;
    document.getElementById('uk-desc').textContent = translations[lang].uk_desc;
    document.getElementById('es-title').textContent = translations[lang].es_title;
    document.getElementById('es-desc').textContent = translations[lang].es_desc;
    document.getElementById('de-title').textContent = translations[lang].de_title;
    document.getElementById('de-desc').textContent = translations[lang].de_desc;
    document.getElementById('selector-title').textContent = translations[lang].selector_title;
    
    // Update AI section
    document.getElementById('ai-title').textContent = translations[lang].ai_title;
    document.getElementById('ai-text').textContent = translations[lang].ai_text;
    
    // Update services section
    document.getElementById('services-title').textContent = translations[lang].services_title;
    document.getElementById('service1-title').textContent = translations[lang].service1_title;
    document.getElementById('service1-desc').textContent = translations[lang].service1_desc;
    document.getElementById('service2-title').textContent = translations[lang].service2_title;
    document.getElementById('service2-desc').textContent = translations[lang].service2_desc;
    document.getElementById('service3-title').textContent = translations[lang].service3_title;
    document.getElementById('service3-desc').textContent = translations[lang].service3_desc;
    
    // Update testimonials section
    document.getElementById('testimonials-title').textContent = translations[lang].testimonials_title;
    document.getElementById('testimonial1-text').textContent = translations[lang].testimonial1_text;
    document.getElementById('testimonial1-name').textContent = translations[lang].testimonial1_name;
    document.getElementById('testimonial1-role').textContent = translations[lang].testimonial1_role;
    document.getElementById('testimonial2-text').textContent = translations[lang].testimonial2_text;
    document.getElementById('testimonial2-name').textContent = translations[lang].testimonial2_name;
    document.getElementById('testimonial2-role').textContent = translations[lang].testimonial2_role;
    document.getElementById('testimonial3-text').textContent = translations[lang].testimonial3_text;
    document.getElementById('testimonial3-name').textContent = translations[lang].testimonial3_name;
    document.getElementById('testimonial3-role').textContent = translations[lang].testimonial3_role;
    
    // Update final request section
    document.getElementById('final-request-title').textContent = translations[lang].final_request_title;
    document.getElementById('final-request-text').textContent = translations[lang].final_request_text;
    
    // Update domains section
    document.getElementById('domains-title').textContent = translations[lang].domains_title;
    document.getElementById('domains-subtitle').textContent = translations[lang].domains_subtitle;
    document.getElementById('domain1-title').textContent = translations[lang].domain1_title;
    document.getElementById('domain1-desc').textContent = translations[lang].domain1_desc;
    document.getElementById('domain2-title').textContent = translations[lang].domain2_title;
    document.getElementById('domain2-desc').textContent = translations[lang].domain2_desc;
    document.getElementById('domain3-title').textContent = translations[lang].domain3_title;
    document.getElementById('domain3-desc').textContent = translations[lang].domain3_desc;
    document.getElementById('domain4-title').textContent = translations[lang].domain4_title;
    document.getElementById('domain4-desc').textContent = translations[lang].domain4_desc;
    document.getElementById('domain5-title').textContent = translations[lang].domain5_title;
    document.getElementById('domain5-desc').textContent = translations[lang].domain5_desc;
    
    // Update footer
    document.getElementById('footer-title').textContent = translations[lang].footer_title;
    document.getElementById('footer-desc').textContent = translations[lang].footer_desc;
    document.getElementById('footer-nav-title').textContent = translations[lang].footer_nav_title;
    document.getElementById('footer-nav-home').textContent = translations[lang].nav_home;
    document.getElementById('footer-nav-languages').textContent = translations[lang].nav_languages;
    document.getElementById('footer-nav-services').textContent = translations[lang].nav_services;
    document.getElementById('footer-nav-testimonials').textContent = translations[lang].nav_testimonials;
    document.getElementById('footer-nav-domains').textContent = translations[lang].nav_domains;
    document.getElementById('footer-contact-title').textContent = translations[lang].footer_contact_title;
    document.getElementById('footer-newsletter-title').textContent = translations[lang].footer_newsletter_title;
    document.getElementById('newsletter-text').textContent = translations[lang].newsletter_text;
    document.getElementById('copyright-text').innerHTML = translations[lang].copyright_text;
}

// Replace with your actual contact information
// WhatsApp: Replace 'votrenumero' with your actual WhatsApp number (with country code)
// Social media: Replace 'votrepagem' with your actual social media usernames