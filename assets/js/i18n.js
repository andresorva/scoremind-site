(function () {
  'use strict';

  const STORAGE_KEY = 'sm_lang';

  const DICT = {
    en: {
      'nav.lang_en': 'EN',
      'nav.lang_es': 'ES',

      'hero.eyebrow': 'AI-POWERED · 140+ COMPETITIONS',
      'hero.h1': 'The Future of Football Predictions',
      'hero.sub': 'Win probabilities, deep stats, and a personal AI sports analyst — for 140+ competitions worldwide.',
      'hero.btn_primary_small': 'GET IT ON',
      'hero.btn_primary_big': 'Google Play',
      'hero.btn_secondary_small': 'COMING SOON',
      'hero.btn_secondary_big': 'for iOS',
      'hero.tiny': 'Free · No ads · Available in 5 languages',

      'trust.card1.label': 'Very High Accuracy',
      'trust.card1.desc': 'Very High confidence picks since launch',
      'trust.card2.label': 'High Accuracy',
      'trust.card2.desc': 'High confidence picks since launch',
      'trust.card3.label': 'Verified Predictions',
      'trust.card3.desc': 'Predictions verified against real results',
      'trust.card4.label': 'Competitions',
      'trust.card4.desc': 'Across 6 continents',
      'trust.disclaimer': 'Stats updated daily. For entertainment purposes only. ScoreMind doesn\'t promote betting.',

      'live.live_label': 'LIVE',
      'live.predicted_eyebrow': 'AI PREDICTION',
      'live.headline': 'AI predicted Barnsley to win — currently winning',
      'live.subhead': 'Real predictions, validated in real time.',
      'live.disclaimer': 'Match shown as illustration. Actual matches vary daily.',

      'why.eyebrow': 'WHY SCOREMIND',
      'why.h2': 'Built for fans who think before they pick',
      'why.card1.title': 'AI Predictions',
      'why.card1.body': 'Win probabilities, Over/Under, and Both Teams To Score for every match. Powered by a proprietary prediction engine.',
      'why.card2.title': 'Talk to ScoreBot',
      'why.card2.body': 'Your personal AI sports analyst. Ask anything about any match — in your language.',
      'why.card3.title': 'Deep Stats',
      'why.card3.body': 'Corners, cards, goal timing, xG, and form — the data behind every pick.',

      'scorebot.eyebrow': 'INTRODUCING',
      'scorebot.h2': 'Your AI Sports Analyst',
      'scorebot.body': 'ScoreBot reads the stats, weighs the form, checks injuries, and gives you a pick — with reasoning. In English, Spanish, Portuguese, French, or Arabic.',
      'scorebot.bullet1': 'Multi-market analysis (1X2, O/U, BTTS, parlays)',
      'scorebot.bullet2': 'Live match priority',
      'scorebot.bullet3': 'Powered by Google Gemini',
      'scorebot.bullet4': 'Available in 5 languages',

      'beyond.eyebrow': 'DEEP ANALYSIS',
      'beyond.h2': 'Every market, analyzed',
      'beyond.body': 'Win probability, Over/Under, Both Teams To Score, parlays — all in one screen, with the data behind every number.',

      'market.eyebrow': 'ALL THE MARKETS',
      'market.h2': 'Every prediction you care about',
      'market.pill_winprob': 'Win Probability',
      'market.pill_overunder': 'Over 1.5 / 2.5 / 3.5',
      'market.pill_btts': 'Both Teams To Score',
      'market.pill_parlays': 'Parlays 3–5 legs',
      'market.pill_live': 'Live in-match',
      'market.subtext': 'All powered by real stats. None of it gambling advice.',

      'stats.eyebrow': 'REAL DATA',
      'stats.h2': 'The numbers behind every pick',
      'stats.body': 'Corners, cards, shots, possession, goal timing, xG, and form. Real stats from 140+ competitions, updated daily.',

      'download.eyebrow': 'GET STARTED',
      'download.h2': 'Ready to upgrade your picks?',
      'download.sub': 'Download free on Android. Available worldwide.',
      'download.qr_label_active': 'Scan for Google Play',
      'download.qr_label_dimmed': 'iOS coming soon',
      'download.btn_active_small': 'GET IT ON',
      'download.btn_active_big': 'Google Play',
      'download.btn_dimmed_small': 'COMING SOON',
      'download.btn_dimmed_big': 'for iOS',

      'footer.tagline': 'Made by a sports fan with ❤ — for sports fans',
      'footer.link_privacy': 'Privacy Policy',
      'footer.link_terms': 'Terms of Service',
      'footer.link_contact': 'Contact',
      'footer.copyright': '© 2026 Datanaat. All rights reserved.',
      'footer.disclaimer': 'ScoreMind provides statistical analysis for entertainment purposes only and does not promote betting.',

      'meta.title': 'ScoreMind AI — AI Predictions for 140+ Football Competitions',
      'meta.description': 'AI-powered football predictions, deep stats, and a personal AI sports analyst (ScoreBot) for 140+ competitions worldwide. Free on Android. iOS coming soon.'
    },

    es: {
      'nav.lang_en': 'EN',
      'nav.lang_es': 'ES',

      'hero.eyebrow': 'POTENCIADO POR IA · 140+ COMPETENCIAS',
      'hero.h1': 'El Futuro de las Predicciones de Fútbol',
      'hero.sub': 'Probabilidades, estadísticas profundas y un analista deportivo IA personal — para más de 140 competencias en el mundo.',
      'hero.btn_primary_small': 'CONSÍGUELO EN',
      'hero.btn_primary_big': 'Google Play',
      'hero.btn_secondary_small': 'PRÓXIMAMENTE',
      'hero.btn_secondary_big': 'para iOS',
      'hero.tiny': 'Gratis · Sin anuncios · Disponible en 5 idiomas',

      'trust.card1.label': 'Precisión Muy Alta',
      'trust.card1.desc': 'Picks de Confianza Muy Alta desde el lanzamiento',
      'trust.card2.label': 'Precisión Alta',
      'trust.card2.desc': 'Picks de Confianza Alta desde el lanzamiento',
      'trust.card3.label': 'Predicciones Verificadas',
      'trust.card3.desc': 'Predicciones verificadas contra resultados reales',
      'trust.card4.label': 'Competencias',
      'trust.card4.desc': 'En 6 continentes',
      'trust.disclaimer': 'Estadísticas actualizadas diariamente. Solo para entretenimiento. ScoreMind no promueve apuestas.',

      'live.live_label': 'EN VIVO',
      'live.predicted_eyebrow': 'PREDICCIÓN DE IA',
      'live.headline': 'AI predijo victoria de Barnsley — ganando actualmente',
      'live.subhead': 'Predicciones reales, validadas en tiempo real.',
      'live.disclaimer': 'Partido mostrado como ilustración. Los partidos reales varían diariamente.',

      'why.eyebrow': 'POR QUÉ SCOREMIND',
      'why.h2': 'Hecho para fans que piensan antes de elegir',
      'why.card1.title': 'Predicciones con IA',
      'why.card1.body': 'Probabilidades de victoria, Over/Under y Both Teams To Score para cada partido. Potenciado por un motor de predicciones propio.',
      'why.card2.title': 'Habla con ScoreBot',
      'why.card2.body': 'Tu analista deportivo IA personal. Pregúntale lo que sea sobre cualquier partido — en tu idioma.',
      'why.card3.title': 'Estadísticas Profundas',
      'why.card3.body': 'Córners, tarjetas, timing de goles, xG y forma — los datos detrás de cada pick.',

      'scorebot.eyebrow': 'PRESENTAMOS',
      'scorebot.h2': 'Tu Analista Deportivo IA',
      'scorebot.body': 'ScoreBot lee las estadísticas, evalúa la forma, revisa las lesiones y te da un pick — con razonamiento. En inglés, español, portugués, francés o árabe.',
      'scorebot.bullet1': 'Análisis multi-mercado (1X2, O/U, BTTS, parlays)',
      'scorebot.bullet2': 'Prioridad para partidos en vivo',
      'scorebot.bullet3': 'Potenciado por Google Gemini',
      'scorebot.bullet4': 'Disponible en 5 idiomas',

      'beyond.eyebrow': 'ANÁLISIS PROFUNDO',
      'beyond.h2': 'Cada mercado, analizado',
      'beyond.body': 'Probabilidad de victoria, Over/Under, Ambos Equipos Anotan, parlays — todo en una pantalla, con los datos detrás de cada número.',

      'market.eyebrow': 'TODOS LOS MERCADOS',
      'market.h2': 'Cada predicción que te importa',
      'market.pill_winprob': 'Probabilidad de Victoria',
      'market.pill_overunder': 'Over 1.5 / 2.5 / 3.5',
      'market.pill_btts': 'Ambos Equipos Anotan',
      'market.pill_parlays': 'Parlays 3–5 picks',
      'market.pill_live': 'En vivo durante el partido',
      'market.subtext': 'Todo basado en estadísticas reales. Nada de esto es asesoría de apuestas.',

      'stats.eyebrow': 'DATOS REALES',
      'stats.h2': 'Los números detrás de cada pick',
      'stats.body': 'Córners, tarjetas, tiros, posesión, timing de goles, xG y forma. Estadísticas reales de más de 140 competencias, actualizadas diariamente.',

      'download.eyebrow': 'EMPIEZA YA',
      'download.h2': '¿Listo para mejorar tus picks?',
      'download.sub': 'Descarga gratis en Android. Disponible en todo el mundo.',
      'download.qr_label_active': 'Escanea para Google Play',
      'download.qr_label_dimmed': 'iOS próximamente',
      'download.btn_active_small': 'CONSÍGUELO EN',
      'download.btn_active_big': 'Google Play',
      'download.btn_dimmed_small': 'PRÓXIMAMENTE',
      'download.btn_dimmed_big': 'para iOS',

      'footer.tagline': 'Hecho por un fan del deporte con ❤ — para fans del deporte',
      'footer.link_privacy': 'Política de Privacidad',
      'footer.link_terms': 'Términos de Servicio',
      'footer.link_contact': 'Contacto',
      'footer.copyright': '© 2026 Datanaat. Todos los derechos reservados.',
      'footer.disclaimer': 'ScoreMind ofrece análisis estadístico solo con fines de entretenimiento y no promueve apuestas.',

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
      if (typeof val === 'string') el.textContent = val;
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
