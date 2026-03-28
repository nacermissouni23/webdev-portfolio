(function () {
  "use strict";

  // Data structure for i18n
  const i18nData = {
    en: {
      "nav.about": "About", "nav.work": "Work", "nav.services": "Services", "nav.book": "Let's Talk",
      "hero.pre": "WEB STRATEGIST · ALGERIA",
      "hero.title.p1": "WEBSITES", "hero.title.p2": "THAT", "hero.title.p3": "BRING CLIENTS",
      "hero.sub": "I help Algerian businesses turn Google searches into real clients with fast, professional websites built to convert.",
      "about.label": "About Me",
      "about.statement": "Most businesses in Algeria don’t have a website… and don’t realize how many clients they lose because of it.",
      "about.story": "I started by helping a small local business get more visibility online. Within months, they were getting consistent client requests directly from Google, without ads.",
      "about.stats.p1": "Businesses Helped", "about.stats.p2": "Client Conversion Focus",
      "values.title": "What You Get",
      "values.v1": "A website designed to bring real clients, not just look nice", "values.v2": "Simple communication (Darija / Français / English)", "values.v3": "Full ownership, your website is 100% yours",
      "work.title": "Real Results", "work.all": "See More →",
      "work.p1.title": "Bourak Market", "work.p1.desc": "Website that helps customers find products easily and contact directly",
      "work.p2.title": "MediClic DZ", "work.p2.desc": "Platform designed to bring patients and simplify bookings",
      
      "loss.title": "What You’re Losing Without a Website",
      "loss.p1": "Every day, people search on Google for services like yours.",
      "loss.p2": "“Dentist near me” · “Best clinic in [your city]” · “Emergency appointment”",
      "loss.p3": "If you don’t appear… they choose someone else.",
      "loss.p4": "It’s not about having a website.",
      "loss.p5": "It’s about being the one they find first, and trust instantly.",
      "loss.b1": "You are invisible on Google",
      "loss.b2": "High-value clients go to competitors",
      "loss.b3": "You depend only on Instagram or word of mouth",
      "loss.b4": "People hesitate because they don’t find enough information about you",
      "loss.closing": "A simple, well-built website can change that in weeks.",

      "services.title": "How I Help You Grow",
      "services.web.title": "Business Websites", "services.web.desc": "Professional websites that make your business visible on Google and turn visitors into clients.", "services.web.price": "From 120K DZD",
      "services.ecom.title": "Online Store", "services.ecom.desc": "Sell your products online with a simple, secure buying experience.", "services.ecom.price": "From 180K DZD",
      "services.lp.title": "Client Acquisition Page", "services.lp.desc": "A single powerful page designed to bring you new clients quickly, ideal for clinics & local services.", "services.lp.price": "From 70K DZD",
      "book.title": "Let’s Get You Clients.", "book.sub": "I’ll show you exactly how your business can start getting clients from Google. No pressure.", "book.whatsapp": "Message Me on WhatsApp",
      "form.name": "Your Name", "form.email": "Email Address", "form.desc": "Tell me about your business (what you do + where you’re located)", "form.submit": "Send Request →",
      "form.success.title": "Perfect 👌", "form.success.desc": "I’ll review your business and get back to you with ideas."
    },
    fr: {
      "nav.about": "À Propos", "nav.work": "Projets", "nav.services": "Services", "nav.book": "Discutons",
      "hero.pre": "STRATÉGIE WEB · ALGÉRIE",
      "hero.title.p1": "DES SITES", "hero.title.p2": "QUI", "hero.title.p3": "RAMÈNENT DES CLIENTS",
      "hero.sub": "J’aide les entreprises en Algérie à transformer les recherches Google en vrais clients grâce à des sites rapides et efficaces.",
      "about.label": "À Propos",
      "about.statement": "La majorité des entreprises en Algérie n’ont pas de site… et perdent des clients chaque jour sans le savoir.",
      "about.story": "J’ai commencé en aidant un business local à être visible sur Google. En quelques mois, il recevait des demandes clients sans publicité.",
      "about.stats.p1": "Projets Livrés", "about.stats.p2": "Satisfaction Client",
      "values.title": "Ce que vous gagnez",
      "values.v1": "Un site qui attire des clients, pas juste joli", "values.v2": "Communication simple (Darija / Français / English)", "values.v3": "Vous êtes propriétaire à 100%",
      "work.title": "Projets Récents", "work.all": "Voir Tout →",
      "work.p1.title": "Bourak Market", "work.p1.desc": "Marketplace B2B pour fournisseurs",
      "work.p2.title": "MediClic DZ", "work.p2.desc": "Plateforme de réservation médicale",

      "loss.title": "Ce que vous perdez sans site web",
      "loss.p1": "Chaque jour, des personnes recherchent vos services sur Google.",
      "loss.p2": "“Dentiste près de moi” · “Meilleure clinique à [ville]” · “Urgence dentaire”",
      "loss.p3": "Si vous n’apparaissez pas… ils choisissent quelqu’un d’autre.",
      "loss.p4": "Ce n’est pas juste une question de site web.",
      "loss.p5": "C’est une question d’être visible au bon moment, et d’inspirer confiance.",
      "loss.b1": "Vous êtes invisible sur Google",
      "loss.b2": "Des clients importants partent chez vos concurrents",
      "loss.b3": "Vous dépendez uniquement d’Instagram ou du bouche-à-oreille",
      "loss.b4": "Les clients hésitent faute d’informations claires",
      "loss.closing": "Un site simple et bien conçu peut changer ça en quelques semaines.",

      "services.title": "Comment je vous aide",
      "services.web.title": "Site Web Professionnel", "services.web.desc": "Rendez votre business visible sur Google et transformez les visiteurs en clients.", "services.web.price": "À partir de 120K DZD",
      "services.ecom.title": "Boutique en ligne", "services.ecom.desc": "Vendez vos produits facilement avec une expérience fluide.", "services.ecom.price": "À partir de 180K DZD",
      "services.lp.title": "Page pour attirer des clients", "services.lp.desc": "Une page simple et efficace pour générer des clients rapidement (idéal cliniques, services).", "services.lp.price": "À partir de 70K DZD",
      "book.title": "On vous ramène des clients.", "book.sub": "Je vous montre comment votre business peut apparaître sur Google et attirer des clients.", "book.whatsapp": "WhatsApp",
      "form.name": "Votre Nom", "form.email": "Adresse Email", "form.desc": "Parlez-moi de votre activité (service + ville)", "form.submit": "Envoyer →",
      "form.success.title": "Parfait 👌", "form.success.desc": "Je reviens vers vous rapidement avec des idées concrètes."
    }
  };

  // 1. Language Toggle
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nData[lang][key]) el.textContent = i18nData[lang][key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  // 2. Custom Cursor
  const cursor = document.getElementById('cursor-dot');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
    });

    const render = () => {
      // Smooth interpolation
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    document.querySelectorAll('a, button, .js-hover-img').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('active'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
  }

  // 3. Magnetic Magnetic links & Buttons
  document.querySelectorAll('.js-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - v;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });

  // 4. Hero entrance animation
  setTimeout(() => {
    document.querySelectorAll('.slide-up').forEach((el, i) => {
      setTimeout(() => {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
        el.style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s';
      }, i * 150);
    });
  }, 100);

  // 5. Scroll Reveals and Smooth scroll anchors
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // 6. Carousel Auto-Center on Load + precise next/prev navigation
  const workGrid = document.querySelector('.v-work-grid');
  if (workGrid) {
    const workItems = Array.from(workGrid.querySelectorAll('.v-work-item'));
    let currentIndex = 0;

    const goTo = (idx) => {
      currentIndex = Math.max(0, Math.min(workItems.length - 1, idx));
      const item = workItems[currentIndex];
      if (!item) return;
      const scrollPos = item.offsetLeft - (workGrid.clientWidth / 2) + (item.clientWidth / 2);
      workGrid.scrollTo({ left: scrollPos, behavior: 'smooth' });
    };

    if (workItems.length) {
      // Default to the first project card (Refafa Mostefa)
      currentIndex = 0;
      setTimeout(() => goTo(currentIndex), 400);
    }

    // Add left/right scroll buttons support for non-touch users
    const leftBtn = document.querySelector('.work-scroll-left');
    const rightBtn = document.querySelector('.work-scroll-right');
    if (leftBtn) leftBtn.addEventListener('click', () => goTo(currentIndex - 1));
    if (rightBtn) rightBtn.addEventListener('click', () => goTo(currentIndex + 1));

    // Update currentIndex on manual scroll (so buttons stay in sync)
    let scrollTimeout = null;
    workGrid.addEventListener('scroll', () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // find closest item to center
        const center = workGrid.scrollLeft + workGrid.clientWidth / 2;
        let closest = 0; let closestDiff = Infinity;
        workItems.forEach((it, i) => {
          const itCenter = it.offsetLeft + it.clientWidth / 2;
          const diff = Math.abs(center - itCenter);
          if (diff < closestDiff) { closestDiff = diff; closest = i; }
        });
        currentIndex = closest;
      }, 120);
    });
  }

  // 7. Form Submission Handle
  const form = document.getElementById('bookForm');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      
      try {
        const payload = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: payload,
          headers: { "Accept": "application/json" }
        });
        
        if (response.ok) {
          form.classList.add('hidden');
          document.getElementById('formSuccess').classList.remove('hidden');
        } else {
          throw new Error('Failed to send');
        }
      } catch (err) {
        alert("Could not send message. Please contact via WhatsApp.");
        if (btn) btn.disabled = false;
      }
    });
  }

  // Trigger init language
  setLanguage('en');

})();