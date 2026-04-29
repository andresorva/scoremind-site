Lee CLAUDE.md y design_guide.md ANTES de hacer cualquier cosa. 
Son el source of truth absoluto para este proyecto. Si encuentras 
contradicciones entre lo que digo aquí y esos documentos, ESOS GANAN — 
me preguntas en lugar de asumir.

═══════════════════════════════════════════════════════════════════
PERSONA
═══════════════════════════════════════════════════════════════════

Eres un senior frontend designer + developer especializado en landing 
pages premium de SaaS y apps de consumo. Has trabajado en sites como 
Linear, Raycast, Vercel, Resend. Sabes que las landing pages buenas 
muestran el producto (no solo lo describen), tienen jerarquía visual 
brutal, copy que vende sin gritar, y respetan el performance budget.

Tu trabajo aquí: rediseñar la landing actual de scoremind.ai sin 
cambiar el stack, manteniendo i18n EN/ES, y dejándola al nivel de las 
mejores landings de apps deportivas modernas.

Referencias visuales que debes estudiar mentalmente antes de empezar:
- linear.app (jerarquía + dark + accent color)
- fotmob.com (sports + clean)
- raycast.com (phone mockups flotantes en hero)
- vercel.com (typography + spacing)

═══════════════════════════════════════════════════════════════════
INTOCABLE — APPLE COMPLIANCE
═══════════════════════════════════════════════════════════════════

Las siguientes páginas y su contenido NO SE TOCAN bajo NINGUNA 
circunstancia durante este rediseño:

  - /privacy (Privacy Policy)
  - /terms (Terms of Service)
  - /contact (Contact page)

NO modificar:
  - Su contenido textual
  - Sus rutas/URLs
  - Su layout o estructura interna

SÍ permitido:
  - Estilizar el header y footer si esas páginas comparten layout 
    global con la home (ej: si el navbar es un componente compartido, 
    el navbar nuevo aparece también en /privacy automáticamente — 
    eso está bien)
  - Mantener los links del footer que apuntan a estas páginas

Si en algún momento tu refactor pareciera tocar estas páginas, 
DETENTE y pregúntame antes de continuar.

═══════════════════════════════════════════════════════════════════
REGLAS NO-NEGOCIABLES
═══════════════════════════════════════════════════════════════════

1. Do NOT git push after each commit. Only push to main ONE time at 
   the end of the session. No other branches. I say when to push.

2. NO INSTALAR DEPENDENCIAS NUEVAS sin pedirme permiso explícito 
   primero. Especialmente prohibido: analytics, tracking, heavy 
   animation libraries. La única excepción: una librería pequeña para 
   generar QR codes (max 20KB) si no hay forma de hacerlo con código 
   propio.

3. PRESERVAR i18n. Si agregas copy en inglés, AGREGA la versión en 
   español. Nunca shipear strings English-only.

4. APPLE COMPLIANCE: las páginas /privacy, /terms y /contact deben 
   seguir funcionando idénticas (200 OK) después de tus cambios. 
   No tocar el copy de esas páginas. Si tu refactor toca routing 
   global, verifica que esas rutas no se rompan.

5. NUNCA usar la palabra "bet", "betting", "gamble", "wager", "odds 
   to bet on" como verbos o como propuesta. Apple-safe language: 
   "predictions", "picks", "analysis", "statistical insights". El 
   disclaimer de la app es "ScoreMind doesn't promote betting" / 
   "ScoreMind no promueve apuestas".

6. NO usar "Coming Soon" placeholders. Si algo no está listo, omitir 
   la sección. La única excepción aceptable: el botón de App Store, 
   que sí puede decir "iOS coming soon" porque es información 
   factualmente verdadera y necesaria — pero el QR de App Store NO 
   debe ser un placeholder vacío.

7. STATS REALES. Los números que aparecen en la landing deben ser 
   los actuales (140+ competitions, no 83). Si necesitas un número 
   nuevo y no estás seguro del valor, PÍDEMELO en lugar de inventar.

8. PERFORMANCE BUDGET. Lighthouse mobile:
   - Performance ≥ 85
   - Accessibility ≥ 90
   - Best Practices ≥ 90
   - SEO ≥ 95
   Si no llega, no es done.

9. MOSTRAR PLAN ANTES DE CODEAR. Antes de tocar cualquier archivo, 
   me presentas:
   - La lista de archivos que vas a crear/modificar
   - La estructura de la nueva página (secciones en orden)
   - Cualquier decisión técnica importante (ej: qué librería de QR 
     vas a usar, dónde vas a poner los assets)
   Y esperas mi confirmación antes de continuar.

10. VERIFICAR ANTES DE COMMIT FINAL. Antes de declarar done, corre:
    - El build del proyecto (npm run build o el comando equivalente)
    - Lighthouse mobile en la home
    - Verificar que /privacy, /terms, /contact siguen vivos
    - Verificar que el toggle EN/ES funciona en TODAS las nuevas 
      secciones, sin strings en inglés que se quedaron en español 
      ni viceversa
    - Verificar que las imágenes cargan (no 404s en consola)
    - Verificar que los QR codes apuntan a las URLs correctas 
      escaneando con el celular real

═══════════════════════════════════════════════════════════════════
ASSETS DISPONIBLES
═══════════════════════════════════════════════════════════════════

Las 5 screenshots para el hero y la sección ScoreBot ya existen en:

  ~/Downloads/Files 2/

Esos archivos son:
  - 01_predictions_1284x2778.png   (home / Next 24 Hours)
  - 02_scorebot_1284x2778.png      (ScoreBot Arsenal conversation)
  - 03_match_detail_1284x2778.png  (San Lorenzo match prediction)
  - 04_live_1284x2778.png          (Northampton vs Barnsley LIVE)
  - 05_stats_1284x2778.png         (Team Profile Advanced Stats)

Estas imágenes YA tienen el frame de marketing con headline y subhead 
encima del screenshot. Eso significa que NO debes meterlas en otro 
frame ni overlay de marketing — úsalas tal cual están, son self-
contained marketing assets.

ACCIÓN REQUERIDA:
1. Copia los 5 archivos de ~/Downloads/Files 2/ a la carpeta de 
   assets del proyecto (probablemente public/assets/screenshots/ o 
   src/assets/screenshots/ según el stack — me dices dónde los pones)
2. Renómbralos a algo más limpio:
   - 01_predictions_1284x2778.png  → home.webp
   - 02_scorebot_1284x2778.png     → scorebot.webp
   - 03_match_detail_1284x2778.png → match.webp
   - 04_live_1284x2778.png         → live.webp
   - 05_stats_1284x2778.png        → stats.webp
3. Conviértelos a WebP con calidad ~85 (quedan ~70% más chicos sin 
   pérdida visible). Mantén también los PNG originales por si acaso.

═══════════════════════════════════════════════════════════════════
URLS REALES
═══════════════════════════════════════════════════════════════════

Estas son las URLs reales que debes usar en botones, QRs y meta tags:

- Google Play (live):
  https://play.google.com/store/apps/details?id=ai.scoremind.app

- App Store (en review todavía, pero la URL final será):
  https://apps.apple.com/app/scoremind-ai/idTBD
  
  Como todavía no tenemos el ID real, en el código pon una constante:
  
    const APP_STORE_URL = '#'; // FIXME: replace with real URL after Apple approves
    const APP_STORE_LABEL_EN = 'iOS coming soon';
    const APP_STORE_LABEL_ES = 'iOS próximamente';
  
  El botón de App Store debe estar visualmente presente pero 
  deshabilitado (cursor: not-allowed, opacity 0.6) con el texto 
  "iOS coming soon" / "iOS próximamente" abajo del logo de Apple. 
  Cuando Apple apruebe, yo cambio esa constante y el botón se activa.

- Sitio actual: https://scoremind.ai (este mismo dominio)

═══════════════════════════════════════════════════════════════════
QR CODES
═══════════════════════════════════════════════════════════════════

Genera DOS QR codes con un DISEÑO PREMIUM, NO los típicos cuadritos 
negros aburridos. Estos QRs son una pieza de marketing, no una 
herramienta utilitaria — deben verse al nivel de Linear, Stripe, 
Raycast.

DECISIÓN DE LIBRERÍA:
Usa una librería que soporte QR codes con estilos avanzados (módulos 
con shapes custom, colores, gradientes, eyes redondeados, logo en el 
centro). Mi recomendación: `qr-code-styling` (npm). Es 35KB, soporta 
todo lo que necesitamos, y se renderiza como SVG (escala perfecto a 
cualquier tamaño sin pixelar).

  npm install qr-code-styling

Si por alguna razón prefieres otra librería con features equivalentes 
(módulos rounded, eye styles custom, gradient support, logo embed), 
la apruebo — pero confírmame antes de instalarla.

═══════════════════════════════════════════════════════════════════
QR 1 — Google Play (ACTIVO)
═══════════════════════════════════════════════════════════════════

Apunta a: https://play.google.com/store/apps/details?id=ai.scoremind.app

Configuración del QR:

  - Width / Height: 200×200 px (renderizado SVG, escala libremente)
  
  - Tipo: SVG (NO canvas, para que escale crisp en retina)
  
  - dotsOptions:
    - type: 'rounded' (módulos como cuadritos con esquinas redondeadas)
    - color: '#00CEC9' (cyan brand)
  
  - cornersSquareOptions (los 3 cuadrados grandes en las esquinas, 
    los "eyes" del QR):
    - type: 'extra-rounded' (esquinas muy redondeadas, look premium)
    - color: '#FFFFFF' (blanco para contrastar con el cyan)
  
  - cornersDotOptions (los puntos dentro de los eyes):
    - type: 'dot' (círculos perfectos, no cuadrados)
    - color: '#00CEC9' (cyan)
  
  - backgroundOptions:
    - color: '#000000' (negro puro como el background del site)
  
  - imageOptions (logo en el centro del QR):
    - src: el logo robot ball del site (mismo logo del navbar)
    - imageSize: 0.25 (25% del QR, no muy grande para no romper escaneo)
    - margin: 8 (padding alrededor del logo)
    - crossOrigin: 'anonymous'
  
  - errorCorrectionLevel: 'H' (alto, necesario porque el logo en el 
    centro tapa parte del QR — H corrige hasta 30% de pérdida)

Wrapper del QR (el contenedor visual):
  - Padding interno: 20px alrededor del QR
  - Background: linear-gradient sutil de #0A0A0A a #050505
  - Border: 1px solid rgba(0, 206, 201, 0.3)
  - Border-radius: 16px
  - Box-shadow: 
      0 0 40px rgba(0, 206, 201, 0.15),
      inset 0 0 20px rgba(0, 206, 201, 0.05)
  - Hover effect: el glow exterior se intensifica suavemente 
    (transition 0.3s ease)

Etiqueta debajo del wrapper:
  - "Scan for Google Play" / "Escanea para Google Play"
  - Font-size: 13px
  - Font-weight: 500
  - Color: #00CEC9 (cyan)
  - Margin-top: 16px
  - Letter-spacing: 0.05em
  - Uppercase: yes

═══════════════════════════════════════════════════════════════════
QR 2 — App Store (PENDIENTE / VISUALMENTE ATENUADO)
═══════════════════════════════════════════════════════════════════

Apunta a: https://scoremind.ai (placeholder hasta que Apple apruebe)

Misma configuración que el QR 1, EXCEPTO:

  - dotsOptions.color: '#666666' (gris en lugar de cyan)
  - cornersDotOptions.color: '#999999' (gris claro)
  - cornersSquareOptions.color: '#444444' (gris oscuro)
  - El wrapper completo lleva opacity: 0.5
  - El border del wrapper: rgba(255, 255, 255, 0.1) (no cyan)
  - El glow del shadow: removido completo (sin glow porque está 
    "apagado")

Etiqueta debajo:
  - "iOS coming soon" / "iOS próximamente"
  - Color: #666666 (gris)
  - Resto del style igual que QR 1

═══════════════════════════════════════════════════════════════════
RESPONSIVE BEHAVIOR DE LOS QRS
═══════════════════════════════════════════════════════════════════

  - Desktop (≥1024px): mostrar AMBOS QRs lado a lado, gap 80px 
    entre ellos
  - Tablet (768-1023px): mostrar AMBOS QRs apilados verticalmente, 
    gap 32px
  - Mobile (<768px): OCULTAR los QRs completamente. En mobile no 
    tienen sentido (ya estás en el celular). Solo mostrar los 
    botones grandes de download.

═══════════════════════════════════════════════════════════════════
NOTA IMPORTANTE
═══════════════════════════════════════════════════════════════════

Antes de declarar done, ESCANEA AMBOS QRs desde un celular real:
  - QR 1 (Google Play): debe abrir el listing de Google Play 
    de la app
  - QR 2 (App Store atenuado): debe abrir scoremind.ai

Si alguno no escanea por culpa del logo en el centro o por contraste 
insuficiente, ajusta:
  - Bájale el imageSize a 0.2
  - O sube el contraste de los dots/background
  - Verifica que errorCorrectionLevel siga en 'H'

═══════════════════════════════════════════════════════════════════
ESTRUCTURA DE LA NUEVA LANDING
═══════════════════════════════════════════════════════════════════

Orden de secciones top-to-bottom:

1. NAVBAR (mantener actual, refinar visualmente)
2. HERO (rediseño completo)
3. TRUST BAR (mantener stats, mejorar)
4. WHY SCOREMIND (sección nueva)
5. MEET SCOREBOT (sección nueva)
6. EVERY MARKET (sección nueva)
7. DOWNLOAD CTA (rediseño completo, con QRs)
8. FOOTER (mantener actual, refinar visualmente)

Detalle por sección abajo. Para CADA sección incluyo el copy en 
EN y ES literal, listo para pegar al diccionario de i18n.

──────────────────────────────────────────────────────────────────
SECCIÓN 1 — NAVBAR
──────────────────────────────────────────────────────────────────

Mantener la estructura actual:
- Izquierda: logo robot ball + wordmark "ScoreMind.AI"
- Derecha: toggle EN/ES

Refinar:
- Sticky en scroll con backdrop blur sutil
- Altura 64px
- Fondo: rgba(0,0,0,0.7) con backdrop-filter: blur(12px) cuando 
  hay scroll, transparente cuando está en el top del fold
- Bottom border 1px de #1A1A1A solo cuando está sticky

──────────────────────────────────────────────────────────────────
SECCIÓN 2 — HERO (rediseño completo)
──────────────────────────────────────────────────────────────────

Layout: 12 columnas grid en desktop, stacked en mobile.
Padding-top: 120px (deja respirar al navbar). Min-height: 90vh.

IZQUIERDA (cols 1-6 en desktop, full width en mobile):

Eyebrow:
  EN: "AI-POWERED · 140+ COMPETITIONS"
  ES: "POTENCIADO POR IA · 140+ COMPETENCIAS"
  Style: small uppercase, letter-spacing 0.15em, color cyan #00CEC9, 
  font-weight 600, font-size 14px

Headline H1:
  EN: "The Future of Football Predictions"
  ES: "El Futuro de las Predicciones de Fútbol"
  Style: Inter Display ExtraBold (800), font-size clamp(48px, 6vw, 
  76px), line-height 1.05, color white, max-width 600px

Subheadline:
  EN: "Win probabilities, deep stats, and a personal AI sports analyst — for 140+ competitions worldwide."
  ES: "Probabilidades, estadísticas profundas y un analista deportivo IA personal — para más de 140 competencias en el mundo."
  Style: font-size clamp(18px, 2vw, 22px), line-height 1.5, color 
  #A0A8B4, max-width 540px, margin-top 24px

Botones (group horizontal, gap 16px, margin-top 40px):
  Botón primario: "Get it on Google Play"
    - Background: cyan #00CEC9
    - Text: black
    - Icon: Google Play SVG icon a la izquierda
    - Padding: 14px 28px
    - Border-radius: 12px
    - Hover: scale 1.02 + glow cyan sutil
    - Link: https://play.google.com/store/apps/details?id=ai.scoremind.app
  
  Botón secundario: "iOS coming soon" / "iOS próximamente"
    - Background: transparent
    - Border: 1.5px solid #333
    - Text: white con opacity 0.7
    - Icon: Apple SVG icon a la izquierda
    - Cursor: not-allowed
    - No hover effect

Tiny text bajo botones:
  EN: "Free · No ads · Available in 5 languages"
  ES: "Gratis · Sin anuncios · Disponible en 5 idiomas"
  Style: font-size 13px, color #666, margin-top 16px

DERECHA (cols 7-12 en desktop, oculto en mobile <768px):

Composición de 3 phone screenshots flotantes con tilt:
  - Phone izquierdo (atrás): match.webp, rotate -8deg, translate 
    -40px en x, scale 0.9, opacity 0.85, z-index 1
  - Phone centro (frente): home.webp, rotate +2deg, scale 1.0, 
    z-index 3, sombra cyan glow stronger
  - Phone derecho (atrás): scorebot.webp, rotate +6deg, translate 
    +40px en x, scale 0.9, opacity 0.85, z-index 2

Cada phone:
  - Width: 280px (responsive: scale down en breakpoints)
  - Border-radius: 28px (simulando glass de iPhone)
  - Box-shadow: 
    0 20px 60px rgba(0, 206, 201, 0.25),
    0 8px 24px rgba(0, 0, 0, 0.4)
  - Animación on load: fade-in-up con delay escalonado 
    (0ms, 150ms, 300ms)

Responsive:
  - <768px: solo mostrar el phone del centro (home.webp), 
    centrado, scale 0.85, sin tilt
  - 768-1024px: mostrar los 3 pero con scales reducidos

Background del hero:
  - Subtle radial glow cyan en el corner superior izquierdo del 
    bloque derecho (donde están los phones)
  - radial-gradient(circle at 80% 30%, rgba(0,206,201,0.15), 
    transparent 60%)

──────────────────────────────────────────────────────────────────
SECCIÓN 3 — TRUST BAR
──────────────────────────────────────────────────────────────────

Mantener las 4 stat cards actuales pero mejorar:
- Layout: 4 columnas desktop, 2x2 grid mobile
- Cards individuales con:
  - Background: #0A0A0A
  - Border: 1px solid #1A1A1A
  - Border-radius: 16px
  - Padding: 32px 24px
  - Hover: border color cyan, transform translateY(-4px), 
    transition 0.2s ease
- Número grande arriba (font-size 48px, weight 800, color verde 
  para los % y blanco para los counts)
- Label intermedio (font-size 14px, weight 600, white)
- Description abajo (font-size 13px, color #A0A8B4)

Contenido de cada card:

Card 1:
  Number: 82.9%
  Label EN: "Very High Accuracy"
  Label ES: "Precisión Muy Alta"
  Description EN: "Very High confidence picks since launch"
  Description ES: "Picks de Confianza Muy Alta desde el lanzamiento"
  Color del número: #10B981 (success green)

Card 2:
  Number: 68.9%
  Label EN: "High Accuracy"
  Label ES: "Precisión Alta"
  Description EN: "High confidence picks since launch"
  Description ES: "Picks de Confianza Alta desde el lanzamiento"
  Color del número: #10B981

Card 3:
  Number: 12,000+
  Label EN: "Verified Predictions"
  Label ES: "Predicciones Verificadas"
  Description EN: "Predictions verified against real results"
  Description ES: "Predicciones verificadas contra resultados reales"
  Color del número: #00CEC9

Card 4:
  Number: 140+
  Label EN: "Competitions"
  Label ES: "Competencias"
  Description EN: "Across 6 continents"
  Description ES: "En 6 continentes"
  Color del número: #00CEC9

Disclaimer abajo de las cards (full width, centrado, font-size 12px, 
color #666):
  EN: "Stats updated daily. For entertainment purposes only. ScoreMind doesn't promote betting."
  ES: "Estadísticas actualizadas diariamente. Solo para entretenimiento. ScoreMind no promueve apuestas."

──────────────────────────────────────────────────────────────────
SECCIÓN 4 — WHY SCOREMIND (sección nueva)
──────────────────────────────────────────────────────────────────

Section header:
  Eyebrow EN: "WHY SCOREMIND"
  Eyebrow ES: "POR QUÉ SCOREMIND"
  
  H2 EN: "Built for fans who think before they pick"
  H2 ES: "Hecho para fans que piensan antes de elegir"
  Style: font-size clamp(36px, 5vw, 56px), weight 800, max-width 
  720px, centered

3 columnas de feature cards:

Card 1:
  Icon: Robot/AI brain (Lucide: Brain o Sparkles, color cyan)
  Title EN: "AI Predictions"
  Title ES: "Predicciones con IA"
  Body EN: "Win probabilities, Over/Under, and Both Teams To Score for every match. Powered by a proprietary prediction engine."
  Body ES: "Probabilidades de victoria, Over/Under y Both Teams To Score para cada partido. Potenciado por un motor de predicciones propio."

Card 2:
  Icon: Chat bubble with sparkle (Lucide: MessageSquare con * o 
  Bot, color cyan)
  Title EN: "Talk to ScoreBot"
  Title ES: "Habla con ScoreBot"
  Body EN: "Your personal AI sports analyst. Ask anything about any match — in your language."
  Body ES: "Tu analista deportivo IA personal. Pregúntale lo que sea sobre cualquier partido — en tu idioma."

Card 3:
  Icon: Bar chart (Lucide: BarChart3, color cyan)
  Title EN: "Deep Stats"
  Title ES: "Estadísticas Profundas"
  Body EN: "Corners, cards, goal timing, xG, and form — the data behind every pick."
  Body ES: "Córners, tarjetas, timing de goles, xG y forma — los datos detrás de cada pick."

Card style:
  - Background: linear-gradient(180deg, #0A0A0A, #050505)
  - Border: 1px solid #1A1A1A
  - Border-radius: 16px
  - Padding: 40px 28px
  - Icon contained in cyan circle (56x56px, bg rgba(0,206,201,0.1), 
    icon color cyan)
  - Title: font-size 22px, weight 700, white, margin-top 24px
  - Body: font-size 15px, color #A0A8B4, line-height 1.6, margin-top 12px

──────────────────────────────────────────────────────────────────
SECCIÓN 5 — MEET SCOREBOT (sección nueva)
──────────────────────────────────────────────────────────────────

Layout: 2 columnas desktop (50/50), stacked mobile.

IZQUIERDA: phone mockup con scorebot.webp (la imagen que ya tiene 
el headline "Meet ScoreBot" embebido).
  - Width: 360px max desktop, full width mobile con padding
  - Border-radius: 28px
  - Box-shadow cyan glow + dark shadow

DERECHA:
  Eyebrow:
    EN: "INTRODUCING"
    ES: "PRESENTAMOS"
  
  H2:
    EN: "Your AI Sports Analyst"
    ES: "Tu Analista Deportivo IA"
    Style: font-size clamp(36px, 4vw, 48px), weight 800
  
  Body:
    EN: "ScoreBot reads the stats, weighs the form, checks injuries, and gives you a pick — with reasoning. In English, Spanish, Portuguese, French, or Arabic."
    ES: "ScoreBot lee las estadísticas, evalúa la forma, revisa las lesiones y te da un pick — con razonamiento. En inglés, español, portugués, francés o árabe."
    Style: font-size 18px, color #A0A8B4, line-height 1.6, max-width 480px
  
  Bullet list (cyan check icons + text):
    EN:
      ✓ Multi-market analysis (1X2, O/U, BTTS, parlays)
      ✓ Live match priority
      ✓ Powered by Google Gemini
      ✓ Available in 5 languages
    ES:
      ✓ Análisis multi-mercado (1X2, O/U, BTTS, parlays)
      ✓ Prioridad para partidos en vivo
      ✓ Potenciado por Google Gemini
      ✓ Disponible en 5 idiomas
  
  Style de cada bullet: cyan check icon + text white, font-size 16px, 
  margin-bottom 12px

Background sutil de la sección:
  - radial-gradient(circle at 50% 50%, rgba(0,206,201,0.08), 
    transparent 70%)

──────────────────────────────────────────────────────────────────
SECCIÓN 6 — EVERY MARKET (sección nueva)
──────────────────────────────────────────────────────────────────

Section header:
  Eyebrow EN: "ALL THE MARKETS"
  Eyebrow ES: "TODOS LOS MERCADOS"
  
  H2 EN: "Every prediction you care about"
  H2 ES: "Cada predicción que te importa"

Layout: strip horizontal con pills coloridos (los mismos del app).
Centered, gap entre pills 16px, flex-wrap en mobile.

Pills (estilo: rounded-full, padding 12px 20px, font-weight 600, 
font-size 16px):

  - "Win Probability" / "Probabilidad de Victoria"
    Background: rgba(0,206,201,0.15), text cyan
  
  - "Over 1.5 / 2.5 / 3.5"
    Background: rgba(9,132,227,0.15), text blue #0984E3
  
  - "Both Teams To Score" / "Ambos Equipos Anotan"
    Background: rgba(108,92,231,0.15), text purple #6C5CE7
  
  - "Parlays 3-5 legs" / "Parlays 3-5 picks"
    Background: rgba(245,158,11,0.15), text gold #F59E0B
  
  - "Live in-match" / "En vivo durante el partido"
    Background: rgba(255,68,68,0.15), text red #FF4444
    Adicional: pulsing dot cyan a la izquierda del texto

Sub-text below the pills (centered, color #666, font-size 14px):
  EN: "All powered by real stats. None of it gambling advice."
  ES: "Todo basado en estadísticas reales. Nada de esto es asesoría de apuestas."

──────────────────────────────────────────────────────────────────
SECCIÓN 7 — DOWNLOAD CTA (rediseño con QRs)
──────────────────────────────────────────────────────────────────

Layout: card grande centrada, max-width 1100px.
Background: gradient sutil from #0A0A0A to #000 con cyan radial glow.
Padding: 80px 60px desktop, 48px 24px mobile.
Border-radius: 24px.
Border: 1px solid rgba(0,206,201,0.2).

Contenido centrado:

Eyebrow EN: "GET STARTED"
Eyebrow ES: "EMPIEZA YA"

H2:
  EN: "Ready to upgrade your picks?"
  ES: "¿Listo para mejorar tus picks?"
  Style: font-size clamp(36px, 5vw, 56px), weight 800

Subheadline:
  EN: "Download free on Android. Available worldwide."
  ES: "Descarga gratis en Android. Disponible en todo el mundo."

Layout de download options (margin-top 56px):

DESKTOP (≥768px): 2 columnas centered, gap 80px
  
  Columna 1 — Google Play:
    QR Code 180×180 (cyan #00CEC9 sobre blanco, border-radius 12px, 
    padding 16px white)
    Text below: "Scan for Google Play" / "Escanea para Google Play"
    Botón grande debajo: "Get it on Google Play" / "Consíguelo en 
    Google Play"
    Botón link: https://play.google.com/store/apps/details?id=ai.scoremind.scoremind
  
  Columna 2 — App Store:
    QR Code 180×180 (con opacity 0.5 indicating not active yet)
    Text below: "iOS coming soon" / "iOS próximamente"
    Botón grande debajo: deshabilitado, texto "iOS coming soon" / 
    "iOS próximamente"

MOBILE (<768px): solo botones, sin QRs (en mobile no tiene sentido):
  Botón Google Play full width, primary cyan
  Botón App Store full width, deshabilitado, texto "iOS coming soon"

──────────────────────────────────────────────────────────────────
SECCIÓN 8 — FOOTER
──────────────────────────────────────────────────────────────────

Mantener la estructura actual pero con upgrade visual:
- Padding-top 80px, padding-bottom 40px
- Border-top 1px solid #1A1A1A
- Layout 2 columnas desktop:
  Izquierda: logo + tagline
    Tagline EN: "Made by a sports fan with ❤ — for sports fans"
    Tagline ES: "Hecho por un fan del deporte con ❤ — para fans del deporte"
  Derecha: links Privacy / Terms / Contact (vertical stack)
- Bottom row centered:
  © 2026 Datanaat. All rights reserved.
- Disclaimer extra (font-size 12px, color #444, max-width 600px, 
  centered):
  EN: "ScoreMind provides statistical analysis for entertainment purposes only and does not promote betting."
  ES: "ScoreMind ofrece análisis estadístico solo con fines de entretenimiento y no promueve apuestas."

═══════════════════════════════════════════════════════════════════
META TAGS (head)
═══════════════════════════════════════════════════════════════════

Actualizar / agregar:

<title>ScoreMind AI — AI Predictions for 140+ Football Competitions</title>

<meta name="description" content="AI-powered football predictions, deep stats, and a personal AI sports analyst (ScoreBot) for 140+ competitions worldwide. Free on Android. iOS coming soon.">

<meta property="og:title" content="ScoreMind AI — AI Predictions for Football">
<meta property="og:description" content="Win probabilities, deep stats, and a personal AI sports analyst — for 140+ competitions worldwide.">
<meta property="og:image" content="https://scoremind.ai/og-image.png">
<meta property="og:url" content="https://scoremind.ai">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ScoreMind AI — AI Predictions for Football">
<meta name="twitter:description" content="Win probabilities, deep stats, and a personal AI sports analyst.">
<meta name="twitter:image" content="https://scoremind.ai/og-image.png">

ACCIÓN: crea un og-image.png de 1200×630px usando el screenshot 
home.webp como base, con headline "ScoreMind AI" + tagline encima. 
Si no puedes generar la imagen tú, deja un comentario FIXME y dime 
que la genere yo y la suba a /public/og-image.png.

═══════════════════════════════════════════════════════════════════
ENTREGA Y VERIFICACIÓN
═══════════════════════════════════════════════════════════════════

ANTES DE CODEAR, muéstrame:
1. Lista de archivos que vas a crear o modificar (con paths absolutos)
2. Confirmación de qué stack es (Next.js / Astro / vanilla / etc) 
   y dónde van a vivir los assets
3. Un preview HTML estático SOLO del nuevo HERO (la sección más 
   importante) para validar dirección visual antes de seguir
4. Espera mi confirmación antes de continuar con el resto

DESPUÉS DEL CODE, antes de declarar done:
1. npm run build → 0 errores
2. Lighthouse mobile en home: Performance ≥85, A11y ≥90, SEO ≥95
3. Verifica /privacy, /terms, /contact siguen vivos (200 OK)
4. Toggle EN/ES funciona en TODAS las nuevas secciones
5. Screenshot de la nueva home (full page) para que yo apruebe 
   antes de push
6. Lista de cualquier FIXME o TODO que dejaste pendiente

ENTONCES Y SOLO ENTONCES, me dices:
"Listo para revisar. ¿Le doy push to main?"
Y yo digo cuándo.

═══════════════════════════════════════════════════════════════════
RECORDATORIO FINAL
═══════════════════════════════════════════════════════════════════

- Lee CLAUDE.md y design_guide.md primero. Te dan contexto que este 
  prompt no repite.
- Las screenshots ya tienen marketing copy embebido — NO les pongas 
  otro overlay encima.
- Apple-safe language en todo. Nunca "bet", "gamble", "wager".
- i18n EN/ES en TODAS las strings nuevas, sin excepción.
- No git push hasta que yo lo diga.
- Show plan before code.

Vamos.