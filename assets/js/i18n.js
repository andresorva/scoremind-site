(function () {
  'use strict';

  const STORAGE_KEY = 'sm_lang';

  const DICT = {
    en: {
      'nav.lang_en': 'EN',
      'nav.lang_es': 'ES',
      'nav.link_blog': 'Blog',

      'hero.eyebrow': 'AI-POWERED · 140+ COMPETITIONS',
      'hero.h1': 'The Future of Football Predictions',
      'hero.sub': 'Win probabilities, deep stats, and a personal AI sports analyst — for 140+ competitions worldwide.',
      'hero.btn_primary_small': 'GET IT ON',
      'hero.btn_primary_big': 'Google Play',
      'hero.btn_secondary_small': 'COMING SOON',
      'hero.btn_secondary_big': 'for iOS',
      'hero.tiny': 'Free · Available in 5 languages · 18+',

      'trust.card1.label': 'Very High Accuracy',
      'trust.card1.desc': 'Very High accuracy predictions since launch',
      'trust.card2.label': 'High Accuracy',
      'trust.card2.desc': 'High accuracy predictions since launch',
      'trust.card3.label': 'Verified Predictions',
      'trust.card3.desc': 'Predictions verified against real results',
      'trust.card4.label': 'Competitions',
      'trust.card4.desc': 'Across 6 continents',
      'trust.disclaimer': 'Stats updated daily. AI-powered football analysis for entertainment purposes only.',

      'why.eyebrow': 'WHY SCOREMIND',
      'why.h2': 'Built for fans who love the data behind the game',
      'why.card1.title': 'AI Predictions',
      'why.card1.body': 'Win probabilities, scoring trends, and match insights for every game. Powered by a proprietary prediction engine.',
      'why.card2.title': 'Talk to ScoreBot',
      'why.card2.body': 'Your personal AI sports analyst. Ask anything about any match — in your language.',
      'why.card3.title': 'Deep Stats',
      'why.card3.body': 'Corners, cards, goal timing, xG, and form — the data behind every match.',

      'download.eyebrow': 'GET STARTED',
      'download.h2': 'Ready to dive into the data?',
      'download.sub': 'Download free on Android. Available worldwide.',
      'download.qr_label_active': 'Scan for Google Play',
      'download.btn_active_small': 'GET IT ON',
      'download.btn_active_big': 'Google Play',

      'footer.tagline': 'Made by a sports fan with ❤ — for sports fans',
      'footer.link_privacy': 'Privacy Policy',
      'footer.link_terms': 'Terms of Service',
      'footer.link_contact': 'Contact',
      'footer.copyright': '© 2026 Datanaat. All rights reserved.',
      'footer.disclaimer': 'ScoreMind AI provides sports predictions and football analysis for entertainment purposes only.',

      'wc.subscribe_cta': 'Subscribe to the full World Cup 2026 calendar — auto-updates every day with results and upcoming matches',
      'wc.modal.title': 'World Cup 2026 Calendar',
      'wc.modal.bullet1': 'All 72 matches plus bracket auto-fills as the tournament progresses',
      'wc.modal.bullet2': 'Match results update automatically',
      'wc.modal.bullet3': '15-minute reminder before each match (via your calendar)',
      'wc.modal.bullet4': 'Want instant result notifications? <a href="https://play.google.com/store/apps/details?id=ai.scoremind.app" target="_blank" rel="noopener">Download the app</a>',
      'wc.modal.cancel': 'Cancel',
      'wc.modal.confirm': 'Subscribe',

      'meta.title': 'ScoreMind AI — AI Predictions for 140+ Football Competitions',
      'meta.description': 'AI-powered football predictions, deep stats, and a personal AI sports analyst (ScoreBot) for 140+ competitions worldwide. Free on Android. iOS coming soon.'
    },

    es: {
      'nav.lang_en': 'EN',
      'nav.lang_es': 'ES',
      'nav.link_blog': 'Blog',

      'hero.eyebrow': 'POTENCIADO POR IA · 140+ COMPETENCIAS',
      'hero.h1': 'El Futuro de las Predicciones de Fútbol',
      'hero.sub': 'Probabilidades, estadísticas profundas y un analista deportivo IA personal — para más de 140 competencias en el mundo.',
      'hero.btn_primary_small': 'CONSÍGUELO EN',
      'hero.btn_primary_big': 'Google Play',
      'hero.btn_secondary_small': 'PRÓXIMAMENTE',
      'hero.btn_secondary_big': 'para iOS',
      'hero.tiny': 'Gratis · Disponible en 5 idiomas · 18+',

      'trust.card1.label': 'Precisión Muy Alta',
      'trust.card1.desc': 'Predicciones de Precisión Muy Alta desde el lanzamiento',
      'trust.card2.label': 'Precisión Alta',
      'trust.card2.desc': 'Predicciones de Precisión Alta desde el lanzamiento',
      'trust.card3.label': 'Predicciones Verificadas',
      'trust.card3.desc': 'Predicciones verificadas contra resultados reales',
      'trust.card4.label': 'Competencias',
      'trust.card4.desc': 'En 6 continentes',
      'trust.disclaimer': 'Estadísticas actualizadas diariamente. Análisis de fútbol con IA solo con fines de entretenimiento.',

      'why.eyebrow': 'POR QUÉ SCOREMIND',
      'why.h2': 'Hecho para fans que aman los datos del juego',
      'why.card1.title': 'Predicciones con IA',
      'why.card1.body': 'Probabilidades de victoria, tendencias de goleo y datos de cada partido. Potenciado por un motor de predicciones propio.',
      'why.card2.title': 'Habla con ScoreBot',
      'why.card2.body': 'Tu analista deportivo IA personal. Pregúntale lo que sea sobre cualquier partido — en tu idioma.',
      'why.card3.title': 'Estadísticas Profundas',
      'why.card3.body': 'Córners, tarjetas, timing de goles, xG y forma — los datos detrás de cada partido.',

      'download.eyebrow': 'EMPIEZA YA',
      'download.h2': '¿Listo para sumergirte en los datos?',
      'download.sub': 'Descarga gratis en Android. Disponible en todo el mundo.',
      'download.qr_label_active': 'Escanea para Google Play',
      'download.btn_active_small': 'CONSÍGUELO EN',
      'download.btn_active_big': 'Google Play',

      'footer.tagline': 'Hecho por un fan del deporte con ❤ — para fans del deporte',
      'footer.link_privacy': 'Política de Privacidad',
      'footer.link_terms': 'Términos de Servicio',
      'footer.link_contact': 'Contacto',
      'footer.copyright': '© 2026 Datanaat. Todos los derechos reservados.',
      'footer.disclaimer': 'ScoreMind AI ofrece predicciones deportivas y análisis de fútbol solo con fines de entretenimiento.',

      'wc.subscribe_cta': 'Suscríbete al calendario completo del Mundial 2026 — se actualiza cada día con resultados y próximos partidos',
      'wc.modal.title': 'Calendario del Mundial 2026',
      'wc.modal.bullet1': 'Los 72 partidos y el bracket se llenan automáticamente conforme avanza el torneo',
      'wc.modal.bullet2': 'Los resultados de cada partido se actualizan automáticamente',
      'wc.modal.bullet3': 'Recordatorio 15 minutos antes de cada partido (vía tu calendario)',
      'wc.modal.bullet4': '¿Quieres notificaciones instantáneas de resultados? <a href="https://play.google.com/store/apps/details?id=ai.scoremind.app" target="_blank" rel="noopener">Descarga la app</a>',
      'wc.modal.cancel': 'Cancelar',
      'wc.modal.confirm': 'Suscribirme',

      'meta.title': 'ScoreMind AI — Predicciones de IA para más de 140 competencias de fútbol',
      'meta.description': 'Predicciones de fútbol con IA, estadísticas profundas y un analista deportivo personal (ScoreBot) para más de 140 competencias en el mundo. Gratis en Android. iOS próximamente.'
    }
  };

  function detectInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'es') return urlLang;
    } catch (e) {}
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') return saved;
    } catch (e) {}
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  function applyLang(lang) {
    const dict = DICT[lang] || DICT.en;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (typeof val !== 'string') return;
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach(function (pair) {
        const parts = pair.trim().split(':');
        if (parts.length !== 2) return;
        const attr = parts[0].trim();
        const key = parts[1].trim();
        const val = dict[key];
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });

    if (dict['meta.title']) document.title = dict['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      const btnLang = btn.getAttribute('data-lang-btn');
      btn.classList.toggle('active', btnLang === lang);
      btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'es') return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function init() {
    const initial = detectInitialLang();
    applyLang(initial);

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang-btn'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.SMI18n = { setLang: setLang, getDict: function () { return DICT; } };
})();
