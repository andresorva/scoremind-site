Buenos días. Sesión nueva, hay que recargar contexto y arreglar bugs 
visuales que se nos pasaron ayer.

═══════════════════════════════════════════════════════════════════
PASO 1 — LEE EL CONTEXTO COMPLETO ANTES DE TOCAR NADA
═══════════════════════════════════════════════════════════════════

Lee estos 4 archivos COMPLETOS, en este orden:

1. /Users/mac/scoremind-site/CLAUDE.md
   → Reglas master del proyecto (no negociables)

2. /Users/mac/scoremind-site/design_guide.md
   → Sistema visual: colores, tipografía, spacing

3. /Users/mac/scoremind-site/prompt_site.md
   → El brief original que te di ayer para el redesign

4. /Users/mac/scoremind-site/SESSION_2026-04-28.md
   → Las notas de la sesión de ayer: bugs encontrados, decisiones 
     tomadas, FIXMEs pendientes, scoring Lighthouse, causas raíz

Después de leer los 4, confirma con un mini-resumen (3 líneas máximo) 
que entendiste:
- Qué stack es (GitHub Pages, vanilla)
- Qué está intocable (privacy/terms/auth)
- Qué quedó deployado ayer y qué Lighthouse scores tiene

═══════════════════════════════════════════════════════════════════
PASO 2 — EL PROBLEMA REAL QUE TIENES QUE ARREGLAR HOY
═══════════════════════════════════════════════════════════════════

Aunque Lighthouse pasó (97/93/96/100), la landing en producción TIENE 
BUGS VISUALES GRAVES. La verifiqué en https://scoremind.ai esta mañana 
con screenshots reales y SE VE FATAL:

1. Hero ES: el phone home.webp se ve estirado vertical, header del 
   cel cortado arriba del viewport
   
2. Live Social Proof section ("The AI Called It"): el headline aparece 
   tiny arriba, después HAY UN VOID NEGRO GIGANTE de ~800px sin 
   contenido, y al final del scroll aparece la puntita del phone abajo. 
   El layout está completamente roto.
   
3. Meet ScoreBot section: el phone scorebot.webp se ve gigante y 
   desbordándose de su columna, encima del texto de la columna derecha
   
4. Beyond the Score section ("Cada mercado, analizado"): el phone 
   match.webp aparece CORTADO A LA MITAD, solo se ve la columna derecha 
   del screenshot del cel, la izquierda está cortada por algún overflow
   
5. Stats That Matter: probablemente igual que las anteriores, no la 
   verifiqué pero apuesto que tiene el mismo bug

CAUSA RAÍZ PROBABLE:
Las phone screenshots son 1284×2778 (ratio 0.46, MUY verticales). 
Probablemente el CSS tiene `width: 100%` o similar sin max-width 
en los <img> de las phones, dentro de columnas anchas (~600px desktop). 
Eso las estira o hace que la altura natural genere voids. Plus, 
algunas sections pueden tener `min-height` que genera voids cuando 
el contenido es más corto que el min.

═══════════════════════════════════════════════════════════════════
PASO 3 — LA NUEVA DIRECCIÓN: SIMPLIFICAR
═══════════════════════════════════════════════════════════════════

Ayer la cagamos por intentar demasiado: 11 secciones, mocks 
deformados, layouts complejos. Hoy queremos SIMPLE.

DECISIÓN ESTRATÉGICA: cortar la landing de 11 secciones a 5.
Menos es más. Más legible. Más mantenible. Más premium.

NUEVA ESTRUCTURA APROBADA (5 secciones):

1. NAVBAR — mantener como está. Sticky con backdrop blur. Logo + 
   ScoreMind.AI wordmark + EN/ES toggle. Funciona bien, no tocar.

2. HERO — mantener como está estructuralmente. 50/50 split desktop, 
   stacked mobile. Eyebrow + H1 + subhead + 2 buttons + microtext + 
   1 phone (home.webp). 
   
   PERO arreglar el bug del phone deformado:
   - Phone <img> debe tener: max-width: 360px, height: auto, 
     object-fit: contain (NO width: 100%)
   - El ratio nativo de la imagen debe respetarse
   - Centrado en su columna

3. WHY SCOREMIND (NUEVA VERSIÓN SIMPLIFICADA) — 3 feature cards 
   en grid 3x1 desktop, stacked mobile.
   
   - Card 1: AI Predictions (icon Brain de Lucide en cyan + headline 
     + body)
   - Card 2: ScoreBot (icon Bot + headline + body)
   - Card 3: Deep Stats (icon BarChart3 + headline + body)
   
   IMPORTANTE: SIN phone screenshots dentro de las cards. Solo icon + 
   texto. Las screenshots las quitamos de aquí.
   
   Cards: bg #0A0A0A, border 1px #1A1A1A, border-radius 16px, 
   padding 32px-40px, hover lift sutil con border cyan.

4. TRUST BAR — mantener como está. 4 stat cards (82.9%, 68.9%, 
   12,000+, 140+). Ya quedó bien ayer. NO TOCAR.

5. DOWNLOAD CTA SIMPLIFICADO — el download card actual pero sin 
   columna de App Store dimmed.
   
   - Headline + subhead (mantener)
   - 1 sola columna con: 1 QR (Google Play) + label "Scan for 
     Google Play" + botón grande "Get it on Google Play"
   - Mobile: solo el botón, sin QR
   - QUITAR el QR dimmed de App Store y el botón "iOS coming soon" 
     de aquí. Los reagregaremos cuando Apple apruebe.

6. FOOTER — mantener como está. NO TOCAR.

═══════════════════════════════════════════════════════════════════
PASO 4 — SECCIONES A ELIMINAR
═══════════════════════════════════════════════════════════════════

Las siguientes secciones se ELIMINAN del index.html:

❌ .live-proof (Live Social Proof con live.webp y el void negro)
❌ .scorebot (Meet ScoreBot section con scorebot.webp)
❌ .beyond (Beyond the Score con match.webp)
❌ .market (Every Market pills coloridos)
❌ .stats (Stats That Matter con stats.webp)

Eso son 5 secciones que quitamos. Quedan 5 secciones limpias.

CON RESPECTO A LAS SCREENSHOTS:
- home.webp se queda en hero (única que se usa)
- live.webp, scorebot.webp, match.webp, stats.webp se quedan en 
  /assets/screenshots/ por si las usamos después, pero NO las 
  referenciamos desde index.html
- Las PNGs de backup en /assets/screenshots/png/ se quedan también

═══════════════════════════════════════════════════════════════════
PASO 5 — LIMPIEZA DE i18n.js
═══════════════════════════════════════════════════════════════════

Como quitamos 5 secciones, hay ~30-40 keys del diccionario que ya no 
se usan. Limpia el i18n.js dejando SOLO las keys que se usan en las 
5 secciones que quedan.

Confirma con grep al final que NO hay keys huérfanas (en dictionary 
pero no en HTML) ni keys faltantes (en HTML pero no en dictionary).

═══════════════════════════════════════════════════════════════════
PASO 6 — REGLAS DE ORO
═══════════════════════════════════════════════════════════════════

1. NO toques /privacy, /terms, /auth/verified — verifícalos 200 OK 
   al final.

2. Mantén Apple-safe language. Nunca "bet", "wager", "gamble".

3. EN y ES siempre sincronizados. Si quitas key en EN, quítala en ES.

4. NO instales dependencias nuevas. Lo que ya está en /tmp/ de ayer 
   sigue ahí (scoremind-qr-gen, scoremind-puppeteer, lh-install).

5. NO me preguntes paso a paso. Aplica las decisiones que están en 
   este prompt y trabaja autónomamente. Solo párate antes de push.

6. NO HAGAS git push. Solo commit local. Yo doy push cuando confirme 
   visualmente.

═══════════════════════════════════════════════════════════════════
PASO 6.5 — USA AGENTES EN PARALELO PARA EJECUTAR
═══════════════════════════════════════════════════════════════════

Esta tarea es paralelizable. Usa hasta 20 sub-agentes en paralelo 
para investigar y construir más rápido.

LOS AGENTES DEBEN OBEDECER 100% LAS INSTRUCCIONES DE ESTE PROMPT. 
No improvisan, no agregan secciones que no pedí, no cambian copy, 
no mueven cosas que ya están bien. Solo ejecutan lo que está escrito 
arriba.

DIVISIÓN SUGERIDA DE TRABAJO ENTRE AGENTES:

FASE A — INVESTIGACIÓN (paralelo, 4-5 agentes):
  - Agente 1: Inspecciona index.html actual y reporta el CSS exacto 
    de cada <img> de phone (width, max-width, height, object-fit)
  - Agente 2: Inspecciona el CSS de cada section con bug visual y 
    reporta min-height, padding, grid/flex config
  - Agente 3: Lee assets/js/i18n.js y lista TODAS las keys que tiene 
    el diccionario
  - Agente 4: Hace grep en index.html buscando data-i18n="..." y 
    lista todas las keys usadas
  - Agente 5: Compara las dos listas anteriores y reporta keys 
    huérfanas (en dict pero no en HTML) y faltantes (en HTML pero 
    no en dict)

FASE B — DEMOLICIÓN (1 agente, después de Fase A):
  - Borrar las 5 secciones del HTML: .live-proof, .scorebot, 
    .beyond, .market, .stats
  - Borrar el CSS asociado (todas las reglas que matcheen esas clases 
    y sus children)
  - Borrar las keys huérfanas del i18n.js (basado en lo que reportó 
    Fase A)
  - NO toques navbar, hero, trust, download, footer

FASE C — RECONSTRUCCIÓN (paralelo, 3 agentes):
  - Agente A: Construye la nueva sección .why simplificada (3 feature 
    cards, sin phones, con icons Lucide). HTML + CSS + i18n keys.
  - Agente B: Simplifica el .download-card actual: una sola columna 
    con QR Google Play + label + botón. Quita columna del App Store 
    dimmed.
  - Agente C: Arregla el bug del phone del hero. Cambia el CSS para 
    max-width: 360px, height: auto, object-fit: contain, NO width: 100%.

FASE D — VERIFICACIÓN (paralelo, 3 agentes):
  - Agente X: Toma los 5 screenshots desktop @ 1290px y los guarda 
    en /tmp/scoremind-screenshots-v2/
  - Agente Y: Toma los 3 screenshots mobile @ 375px en la misma carpeta
  - Agente Z: Corre Lighthouse mobile y guarda el reporte JSON

REGLAS PARA TUS SUB-AGENTES:

1. Cada agente DEBE recibir como input:
   - El path absoluto del archivo que va a tocar
   - Las reglas del PASO 6 de este prompt (especialmente: no tocar 
     privacy/terms/auth, mantener Apple-safe language, EN+ES sync)
   - La sección específica de este prompt que aplica a su tarea

2. Cuando un agente termine, reporta de vuelta:
   - Qué archivo modificó/creó
   - Qué líneas/keys cambió
   - Cualquier desviación de las instrucciones (si tuvo que improvisar 
     algo, lo señala — no debería pasar pero por si acaso)

3. Si un agente se topa con permission denied (esto pasó ayer en 
   sesión anterior según SESSION_2026-04-28.md §8 Bug E), NO 
   reintentes 5 veces — fallback a hacer la tarea en el thread 
   principal.

4. Después de cada FASE, espera a que TODOS los agentes de esa fase 
   terminen antes de arrancar la siguiente fase. Las fases SÍ son 
   secuenciales aunque los agentes dentro sean paralelos.

5. NO arranques agentes adicionales para tareas no listadas arriba. 
   Stick to the plan.

═══════════════════════════════════════════════════════════════════
PASO 7 — VERIFICACIÓN OBLIGATORIA ANTES DE PEDIR PUSH
═══════════════════════════════════════════════════════════════════

Esto es CRÍTICO porque ayer Lighthouse pasó pero el layout estaba 
roto y no lo cazamos. Esta vez SÍ verificamos visualmente:

1. Toma 5 screenshots desktop @ 1290px:
   - Above-the-fold (hero EN)
   - Above-the-fold (hero ES, para validar toggle)
   - Why ScoreMind section completa
   - Trust Bar + Download CTA juntos
   - Full-page (todas las secciones de un jalón)

2. Toma 3 screenshots mobile @ 375px:
   - Above-the-fold
   - Why ScoreMind mobile
   - Full-page

3. Verifica visualmente en CADA screenshot:
   - El hero phone se ve completo, sin deformación, tilt 2° suave
   - Las 3 feature cards alineadas, sin huecos
   - Los stats cards alineados
   - El download CTA con el QR centrado y bien
   - NO hay voids negros gigantes en ninguna parte
   - NO hay phones cortados ni deformados
   - Toggle EN/ES funciona

4. Corre Lighthouse mobile y reporta scores. Target:
   - Performance ≥85
   - A11y ≥90
   - Best Practices ≥90
   - SEO ≥95

5. Verifica /privacy, /terms, /auth/verified siguen 200 OK.

6. MÁNDAME LOS 8 SCREENSHOTS + LIGHTHOUSE SCORES antes de pedir push.
   Si me ves algo que no late, lo arreglas y vuelves a tomar screenshots.

═══════════════════════════════════════════════════════════════════
PASO 8 — ACTUALIZA SESSION_2026-04-29.md (NUEVO ARCHIVO)
═══════════════════════════════════════════════════════════════════

Cuando termines, crea SESSION_2026-04-29.md con el mismo formato del 
de ayer. Documenta:
- Qué bugs visuales arreglaste y cómo
- Por qué decidimos cortar de 11 a 5 secciones
- Qué quitaste del HTML / CSS / i18n
- Lighthouse scores finales
- Lista de FIXMEs que siguen pendientes (los 4 de ayer + cualquiera nuevo)

Esto es para que la sesión siguiente arranque con contexto.

═══════════════════════════════════════════════════════════════════
ARRANCA
═══════════════════════════════════════════════════════════════════

Lee los 4 archivos de contexto, confirma entendimiento en 3 líneas, 
y procede con el rediseño simplificado. Trabajas autónomo hasta que 
tengas los screenshots listos para mi review final.

Vamos.