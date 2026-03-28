/* ===================================================
   شركة المنزل العتيق - JavaScript
   Bilingual Support: Arabic (RTL) / English (LTR)
   =================================================== */

// ── TRANSLATIONS ────────────────────────────────────
const translations = {
  ar: {
    pageTitle:       "شركة المنزل العتيق | استيراد الأجهزة الإلكترونية والكهربائية",
    logoName:        "المنزل العتيق",
    logoSub:         "للاستيراد",
    navHome:         "الرئيسية",
    navAbout:        "من نحن",
    navServices:     "خدماتنا",
    navProducts:     "منتجاتنا",
    navWhyUs:        "لماذا نحن",
    navContact:      "تواصل معنا",
    callUs:          "اتصل بنا",
    // Hero
    heroBadge:       "الشركة الرائدة في يفرن",
    heroTitle1:      "شركة",
    heroTitle2:      "المنزل العتيق",
    heroTitle3:      "لاستيراد الأجهزة",
    heroSubtitle:    "نوفّر أفضل الأجهزة الإلكترونية والكهربائية والكهرومنزلية المستوردة بجودة عالية وأسعار تنافسية لنصنع معًا منازل أفضل في مدينة يفرن والمنطقة",
    heroBtn1:        "تواصل معنا",
    heroBtn2:        "استعرض منتجاتنا",
    stat1:           "منتج مستورد",
    stat2:           "سنوات خبرة",
    stat3:           "عميل راضٍ",
    // Marquee
    mq1: "⚡ أجهزة إلكترونية",
    mq2: "🏠 كهرومنزلية",
    mq3: "💡 كهربائية",
    mq4: "📺 شاشات وتلفزيونات",
    mq5: "❄️ تكييف وتبريد",
    mq6: "🧺 غسالات وثلاجات",
    mq7: "📱 أجهزة ذكية",
    mq8: "🔌 أجهزة منزلية",
    // About
    aboutTag:     "من نحن",
    aboutTitle1:  "شركة رائدة",
    aboutTitle2:  " في عالم الاستيراد",
    aboutDesc1:   "شركة المنزل العتيق هي شركة متخصصة في استيراد وتوزيع الأجهزة الإلكترونية والكهربائية والكهرومنزلية عالية الجودة. تأسست في مدينة يفرن لتكون الخيار الأول لسكان المنطقة في الحصول على أفضل المنتجات بأسعار تنافسية.",
    aboutDesc2:   "نحن نحرص على اختيار أفضل العلامات التجارية العالمية ونوفّر ضمانًا على جميع منتجاتنا، مع خدمة ما بعد البيع التي تضمن رضا عملائنا الكرام في جميع الأوقات.",
    feat1:        "منتجات مضمونة ذات جودة عالية",
    feat2:        "توصيل سريع وآمن داخل المنطقة",
    feat3:        "خدمة عملاء متميزة على مدار الساعة",
    feat4:        "أسعار تنافسية ومناسبة للجميع",
    aboutBtn:     "تواصل معنا الآن",
    // Services
    servicesTag:      "خدماتنا",
    servicesTitle1:   "ما الذي",
    servicesTitle2:   " نقدمه لك؟",
    servicesSubtitle: "نوفر مجموعة شاملة من الأجهزة المستوردة لتلبية احتياجات كل منزل وعمل",
    svc1Title: "أجهزة إلكترونية",
    svc1Desc:  "تلفزيونات، شاشات، أنظمة صوت، أجهزة حاسوب ولاب توب، وأجهزة ذكية متنوعة من أفضل العلامات التجارية العالمية.",
    svc2Title: "أجهزة كهربائية",
    svc2Desc:  "أجهزة كهربائية متنوعة للمنزل والمكتب بمعايير جودة عالية وكفاءة طاقة ممتازة لتوفير الاستهلاك وضمان الأداء.",
    svc3Title: "أجهزة كهرومنزلية",
    svc3Desc:  "غسالات، ثلاجات، مكيفات، مواقد، ومعدات المطبخ الحديثة لتجعل منزلك أكثر راحة وعصرية في كل وقت.",
    svc4Title: "تكييف وتبريد",
    svc4Desc:  "أجهزة تكييف ومبردات هواء بأحدث التقنيات ومن أفضل الشركات العالمية المتخصصة في منظومات التبريد والتدفئة.",
    svc5Title: "الأجهزة الذكية",
    svc5Desc:  "هواتف ذكية، أجهزة لوحية، ساعات ذكية، وملحقاتها من أحدث الإصدارات العالمية بأسعار مناسبة للجميع.",
    svc6Title: "خدمة ما بعد البيع",
    svc6Desc:  "نوفر خدمة متكاملة لما بعد البيع تشمل الضمان والصيانة والدعم الفني لضمان رضا عملائنا الكرام في كل وقت.",
    // Products
    productsTag:      "منتجاتنا",
    productsTitle1:   "أبرز",
    productsTitle2:   " منتجاتنا المستوردة",
    productsSubtitle: "نستورد لك أفضل المنتجات بمعايير جودة دولية عالية",
    prod1Title: "شاشات وتلفزيونات",   prod1Desc: "أحدث تقنيات العرض OLED/QLED/4K",
    prod2Title: "غسالات ملابس",        prod2Desc: "أتوماتيك وشبه أتوماتيك بكفاءة عالية",
    prod3Title: "ثلاجات ومجمدات",      prod3Desc: "بأحجام وتصاميم متعددة تناسب كل احتياج",
    prod4Title: "مكيفات هواء",          prod4Desc: "موفرة للطاقة وبقدرات تبريد متنوعة",
    prod5Title: "أجهزة المطبخ",        prod5Desc: "مواقد، أفران، مايكروويف، وخلاطات",
    prod6Title: "حاسوب ولاب توب",     prod6Desc: "أجهزة كمبيوتر بمواصفات عالية لكل الأغراض",
    prod7Title: "هواتف ذكية",          prod7Desc: "أحدث إصدارات الهواتف من شركات عالمية",
    prod8Title: "ملحقات إلكترونية",    prod8Desc: "كابلات، شواحن، سماعات، وإكسسوارات متنوعة",
    // Why Us
    whyTag:    "لماذا نحن؟",
    whyTitle1: "ما يميزنا عن",
    whyTitle2: " الآخرين",
    why1Title: "جودة مضمونة",    why1Desc: "نلتزم باختيار أفضل المنتجات ذات الجودة العالية والمعتمدة دوليًا لضمان رضا عملائنا.",
    why2Title: "أسعار تنافسية",  why2Desc: "نوفر أفضل الأسعار في السوق مع الحفاظ على جودة المنتجات لتناسب ميزانية كل عميل.",
    why3Title: "استيراد مباشر",  why3Desc: "نستورد مباشرة من المصانع العالمية مما يضمن أصالة المنتج وتوفير أفضل الأسعار للعميل.",
    why4Title: "ضمان الشراء",    why4Desc: "جميع منتجاتنا تأتي مع ضمان رسمي وخدمة ما بعد البيع لراحة بالك التامة.",
    // Contact
    contactTag:    "تواصل معنا",
    contactTitle1: "نحن هنا",
    contactTitle2: " لخدمتك",
    contactDesc:   "تواصل معنا لأي استفسار حول منتجاتنا أو للحصول على عرض أسعار. فريقنا مستعد للرد عليك في أسرع وقت ممكن.",
    emailLabel:    "البريد الإلكتروني",
    phoneLabel:    "رقم الهاتف",
    locationLabel: "الموقع",
    locationValue: "مدينة يفرن، ليبيا",
    hoursLabel:    "ساعات العمل",
    hoursValue:    "السبت - الخميس: 9:00 ص - 9:00 م",
    mapBtn:        "عرض على خرائط Google",
    formTitle:     "أرسل لنا رسالة",
    formName:      "الاسم الكامل",      formNamePh:    "أدخل اسمك الكامل",
    formPhone:     "رقم الهاتف",        formPhonePh:   "أدخل رقم هاتفك",
    formSubject:   "الموضوع",           formSubjectPh: "موضوع رسالتك",
    formMessage:   "الرسالة",           formMessagePh: "اكتب رسالتك هنا...",
    formSubmit:    "إرسال الرسالة",
    formSending:   "جارٍ الإرسال...",
    formSuccess:   "✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
    // Footer
    footerTagline: "استيراد الأجهزة الإلكترونية والكهربائية والكهرومنزلية<br>مدينة يفرن، ليبيا",
    footerCopy:    "© 2024 شركة المنزل العتيق. جميع الحقوق محفوظة.",
  },

  en: {
    pageTitle:       "Al-Manzel Al-Ateeq | Electronics & Electrical Appliances Import",
    logoName:        "Al-Manzel Al-Ateeq",
    logoSub:         "Import Co.",
    navHome:         "Home",
    navAbout:        "About Us",
    navServices:     "Services",
    navProducts:     "Products",
    navWhyUs:        "Why Us",
    navContact:      "Contact",
    callUs:          "Call Us",
    // Hero
    heroBadge:       "Yefren's Leading Company",
    heroTitle1:      "",
    heroTitle2:      "Al-Manzel Al-Ateeq",
    heroTitle3:      "Electronics Import Co.",
    heroSubtitle:    "We provide the finest imported electronics, electrical and home appliances with premium quality and competitive prices — building better homes in Yefren and the region.",
    heroBtn1:        "Contact Us",
    heroBtn2:        "Browse Products",
    stat1:           "Imported Products",
    stat2:           "Years Experience",
    stat3:           "Happy Clients",
    // Marquee
    mq1: "⚡ Electronics",
    mq2: "🏠 Home Appliances",
    mq3: "💡 Electrical Devices",
    mq4: "📺 TVs & Screens",
    mq5: "❄️ Air Conditioning",
    mq6: "🧺 Washers & Fridges",
    mq7: "📱 Smart Devices",
    mq8: "🔌 Household Appliances",
    // About
    aboutTag:     "About Us",
    aboutTitle1:  "A Leading Company",
    aboutTitle2:  " in the Import Industry",
    aboutDesc1:   "Al-Manzel Al-Ateeq is a company specializing in the import and distribution of high-quality electronics, electrical, and home appliances. Founded in Yefren to be the first choice for residents seeking the best products at competitive prices.",
    aboutDesc2:   "We carefully select the world's best brands and provide warranties on all our products, along with after-sales service that ensures the complete satisfaction of our valued customers at all times.",
    feat1:        "Guaranteed high-quality products",
    feat2:        "Fast & safe local delivery",
    feat3:        "Exceptional 24/7 customer service",
    feat4:        "Competitive prices for everyone",
    aboutBtn:     "Contact Us Now",
    // Services
    servicesTag:      "Our Services",
    servicesTitle1:   "What Do We",
    servicesTitle2:   " Offer You?",
    servicesSubtitle: "We provide a comprehensive range of imported appliances to meet the needs of every home and business.",
    svc1Title: "Electronic Devices",
    svc1Desc:  "Televisions, screens, audio systems, computers, laptops, and a variety of smart devices from the world's leading brands.",
    svc2Title: "Electrical Appliances",
    svc2Desc:  "Diverse electrical appliances for home and office with high quality standards and excellent energy efficiency.",
    svc3Title: "Home Appliances",
    svc3Desc:  "Washing machines, refrigerators, air conditioners, stoves, and modern kitchen equipment for a comfortable modern home.",
    svc4Title: "Air Conditioning & Cooling",
    svc4Desc:  "Air conditioning units and air coolers using the latest technologies from the world's best cooling system companies.",
    svc5Title: "Smart Devices",
    svc5Desc:  "Smartphones, tablets, smartwatches, and accessories from the latest global releases at affordable prices for everyone.",
    svc6Title: "After-Sales Service",
    svc6Desc:  "We provide a comprehensive after-sales service including warranty, maintenance, and technical support for full peace of mind.",
    // Products
    productsTag:      "Our Products",
    productsTitle1:   "Our Best",
    productsTitle2:   " Imported Products",
    productsSubtitle: "We import the best products for you with high international quality standards.",
    prod1Title: "TVs & Screens",        prod1Desc: "Latest OLED/QLED/4K display technology",
    prod2Title: "Washing Machines",     prod2Desc: "Automatic & semi-automatic, high efficiency",
    prod3Title: "Refrigerators",        prod3Desc: "Multiple sizes & designs for every need",
    prod4Title: "Air Conditioners",     prod4Desc: "Energy-efficient with various cooling capacities",
    prod5Title: "Kitchen Appliances",   prod5Desc: "Stoves, ovens, microwaves & blenders",
    prod6Title: "Computers & Laptops",  prod6Desc: "High-spec computers for all purposes",
    prod7Title: "Smartphones",          prod7Desc: "Latest phone releases from global brands",
    prod8Title: "Electronic Accessories", prod8Desc: "Cables, chargers, headphones & accessories",
    // Why Us
    whyTag:    "Why Choose Us?",
    whyTitle1: "What Sets Us Apart",
    whyTitle2: " from Others",
    why1Title: "Guaranteed Quality",    why1Desc: "We are committed to selecting the best internationally certified products to ensure our customers' satisfaction.",
    why2Title: "Competitive Prices",    why2Desc: "We offer the best market prices while maintaining product quality to suit every customer's budget.",
    why3Title: "Direct Import",         why3Desc: "We import directly from international factories, ensuring product authenticity and the best prices for the customer.",
    why4Title: "Purchase Warranty",     why4Desc: "All our products come with an official warranty and after-sales service for your complete peace of mind.",
    // Contact
    contactTag:    "Contact Us",
    contactTitle1: "We Are Here",
    contactTitle2: " to Serve You",
    contactDesc:   "Reach out to us for any inquiries about our products or to get a price quote. Our team is ready to respond as quickly as possible.",
    emailLabel:    "Email Address",
    phoneLabel:    "Phone Number",
    locationLabel: "Location",
    locationValue: "Yefren City, Libya",
    hoursLabel:    "Working Hours",
    hoursValue:    "Sat – Thu: 9:00 AM – 9:00 PM",
    mapBtn:        "View on Google Maps",
    formTitle:     "Send Us a Message",
    formName:      "Full Name",       formNamePh:    "Enter your full name",
    formPhone:     "Phone Number",    formPhonePh:   "Enter your phone number",
    formSubject:   "Subject",         formSubjectPh: "Your message subject",
    formMessage:   "Message",         formMessagePh: "Write your message here...",
    formSubmit:    "Send Message",
    formSending:   "Sending...",
    formSuccess:   "✅ Your message was sent successfully! We will contact you soon.",
    // Footer
    footerTagline: "Electronics, Electrical & Home Appliances Import<br>Yefren City, Libya",
    footerCopy:    "© 2024 Al-Manzel Al-Ateeq. All rights reserved.",
  }
};

// ── CURRENT LANGUAGE ─────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ar';

// ── SWITCH LANGUAGE ───────────────────────────────────
function switchLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const t = translations[lang];
  const html = document.documentElement;

  // Set direction & lang attribute (triggers CSS overrides)
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update page title
  document.title = t.pageTitle;

  // Toggle label on button
  document.getElementById('langLabel').textContent = lang === 'ar' ? 'EN' : 'عربي';

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Use innerHTML to support <br> in footer tagline
      if (key === 'footerTagline') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Animate a subtle flash on switch
  document.body.style.opacity = '0.85';
  setTimeout(() => { document.body.style.opacity = '1'; }, 200);
}

// ── ON DOM READY ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language
  applyLanguage(currentLang);

  // ── Navbar Scroll Effect ──────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── Active Nav Link on Scroll ────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => sectionObserver.observe(s));

  // ── Hamburger Menu ───────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinksList = document.getElementById('navLinks');
  hamburger?.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
  });
  navLinksList?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinksList.classList.remove('open'));
  });

  // ── Counter Animation ────────────────────────────
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  const countersStarted = new Set();
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted.has(entry.target)) {
          countersStarted.add(entry.target);
          animateCounter(entry.target, +entry.target.dataset.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statNums.forEach(el => statsObserver.observe(el));

  // ── Scroll Reveal ────────────────────────────────
  const revealEls = document.querySelectorAll(
    '.service-card, .product-card, .why-card, .feature-item, .contact-item'
  );
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 3 === 1) el.classList.add('reveal-delay-1');
    if (i % 3 === 2) el.classList.add('reveal-delay-2');
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const aboutImg = document.querySelector('.about-image-wrap');
  if (aboutImg) { aboutImg.classList.add('reveal'); revealObserver.observe(aboutImg); }
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) { aboutContent.classList.add('reveal', 'reveal-delay-2'); revealObserver.observe(aboutContent); }

  // ── Floating Particles ───────────────────────────
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 2;
      const isGold = Math.random() > 0.5;
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 12 + 10}s;
        animation-delay: ${Math.random() * 15}s;
        background: ${isGold ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.3)'};
        box-shadow: 0 0 ${size * 2}px ${isGold ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.2)'};
      `;
      particlesContainer.appendChild(p);
    }
  }

  // ── Back to Top ──────────────────────────────────
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  });
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Smooth Scroll ────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // ── Contact Form ─────────────────────────────────
  window.handleSubmit = function (e) {
    e.preventDefault();
    const t = translations[currentLang];
    const btn = document.getElementById('submitBtn');
    const btnText = btn.querySelector('.btn-text');
    const successMsg = document.getElementById('formSuccess');
    btnText.textContent = t.formSending;
    btn.disabled = true;
    btn.style.opacity = '0.75';
    setTimeout(() => {
      successMsg.style.display = 'block';
      successMsg.textContent = t.formSuccess;
      btnText.textContent = t.formSubmit;
      btn.disabled = false;
      btn.style.opacity = '1';
      document.getElementById('contactForm').reset();
      setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
    }, 1500);
  };

});
