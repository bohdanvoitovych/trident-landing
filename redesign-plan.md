# Trident Software — План повного редизайну сайту v2

> **Замовник:** Trident Software Sàrl (Sion, Valais, Switzerland)
> **Поточний сайт:** https://trident-software.ch
> **Документ:** План редизайну, контенту, дизайн-системи, технічної архітектури та запуску
> **Версія:** 1.0 (2026-05-16)
> **Автор:** Підготовлено як консультаційний документ для CEO та технічного керівництва
> **Мова документа:** українська
> **Мови сайту v2:** EN (primary), DE, FR, IT

---

## Зміст

1. Виконавчий звіт (Executive Summary)
2. Думка спеціаліста про поточний сайт
3. Повний SEO-аудит поточного сайту
4. Маркетинговий аудит позиціонування
5. Конкурентний ландшафт (Switzerland + DACH + EU)
6. Стратегія v2 — позиціонування та бренд-наратив
7. Дизайн-стратегія — гібрид Мінімалізм + AI-bold
8. Atomic Design — повна система компонентів
9. Дизайн-токени та theming
10. Інформаційна архітектура (IA) нового сайту
11. Повний сайтмап v2 (з покриттям v1)
12. Карта 301-редіректів v1 → v2
13. Технічний стек і архітектурні рішення
14. Архітектура моноpепо Next.js + Payload
15. Payload CMS — колекції, поля, доступи
16. i18n стратегія для EN/DE/FR/IT
17. GEO/AEO стратегія для AI-пошуковиків
18. Технічна SEO-стратегія
19. Контент-стратегія (блог, кейси, послуги)
20. Lead-funnel і аналітика
21. Lead-dashboard в Payload (без зовнішнього CRM)
22. Claude-workflow — розширення сайту через промпти
23. CLAUDE.md — стартовий приклад
24. Prompt-шаблони для додавання сторінок/постів/кейсів
25. Performance і Core Web Vitals план
26. Безпека, GDPR / nFADP, ISO 27001 готовність
27. Accessibility (WCAG 2.2 AA)
28. VPS-хостинг, Docker, CI/CD
29. Roadmap — 5 фаз із термінами
30. Оцінки часу та орієнтовний бюджет
31. Ризики та митигація
32. Команда і ролі
33. Метрики успіху (KPIs)
34. Додатки — приклади структур, схем, чек-листів

---

# 1. Виконавчий звіт (Executive Summary)

Trident Software має сильну фактичну базу: 26 співробітників, понад 27 проєктів у портфоліо, 4 мовні версії, офіси у Швейцарії, Ізраїлі та Україні, ISO 27000-сумісні процеси, чітке позиціонування "Swiss quality + affordable rates", тривала історія (команда з 2009, юрособа з 2019), реальні клієнти з Valais, Швейцарії, ОАЕ та Канади. Це гарне ядро.

Але поточна реалізація на WordPress + Elementor створює стратегічний тупик: повільність, технічний борг, відсутність системності, неможливість масштабувати контент швидко й безпечно, обмежені можливості для AI-першого позиціонування, відсутність структурованих даних для GEO/AEO. На фоні того, що ринок IT-аутсорсингу у Швейцарії та DACH рухається у бік "AI-native" агенцій (INFLECT, Devedis, Plavno та ін.), Trident ризикує сприйматись як "ще одна WordPress-агенція", а не як технологічний партнер.

Цей план описує перехід на **Next.js 15 + Payload 3 + Postgres на власному VPS** із повним покриттям поточного сайтмапу, з 4 мовами (EN/DE/FR/IT), з Atomic Design системою, dark-mode-first AI-bold візуальністю, з GEO/AEO-стратегією для появи у відповідях Perplexity, ChatGPT Search, Claude, Gemini, з можливістю розширювати сайт промптами Claude замість роботи з адмінкою.

**Орієнтовні цифри проекту:**

| Параметр | Значення |
|---|---|
| Загальна тривалість v1 → лонч | 14–18 тижнів |
| Команда core | 1 PM + 1 дизайнер + 2 фронтенд + 1 бекенд/Payload + 1 QA |
| Кількість сторінок v1 | ~45 унікальних маршрутів × 4 мови = ~180 згенерованих |
| Очікувана продуктивність | Lighthouse 95+, LCP < 1.8s, INP < 200ms |
| GEO/AEO готовність | llms.txt + Schema.org + structured Q&A блоки |
| Розширюваність | Додавання нового кейсу/посту/послуги — 1 Claude-промпт + git commit |

**Стратегічна теза в одному реченні:**
> Trident Software стає першим швейцарським IT-партнером, чий власний сайт є демонстрацією AI-нативного інжинірингу: швидким як Linear, потужним як Vercel, заслужено цитованим AI-пошуковиками, і таким, що масштабується через природну мову, а не через адмінку.

---

# 2. Думка спеціаліста про поточний сайт

Розглядаю trident-software.ch очима людини, яка щодня працює з позиціонуванням IT-агенцій на Swiss/DACH ринку, відповідає за SEO та просування IT-послуг та аутсорсингу. Це не "критика заради критики" — це професійний діагноз із конкретними діями, які виправлять кожну з проблем у v2.

## 2.1. Що працює добре (фундамент, який треба зберегти)

**Швейцарське позиціонування.** Назва домену `.ch`, адреса в Sion (Valais), розташування на Rue de l'Industrie 23 — це сильний сигнал для пошуковиків і клієнтів. Trust-карта компанії географічно вкорінена. Це треба підсилити, а не маскувати.

**Реальні клієнтські імена і логотипи.** Зустріч у портфоліо назв як GO-Valais, Lapochette, DaniParts, Kleap, Mastertool, Samange, Catapult Crown, Ardevaz, Zenit Auto, 8Move — це сильно. У B2B-продажах social proof такого типу важливіший за будь-які слогани.

**ISO 27000 + Swiss Good Privacy + "data stays in Switzerland".** Це конкретний trust-сигнал, особливо для DACH ринку, де compliance — це не "bonus", а "must". Має винесено на головну, не сховано.

**Чотири мови (EN/FR/DE/IT).** Жодна локальна агенція в Valais не покриває всі чотири офіційні мови Швейцарії плюс англійську. Це конкурентна перевага, яку треба зберегти й посилити SEO-окремо для кожної мови.

**Чіткий технологічний стек.** Python, JS, React, Flutter, AWS/Azure/GCP, Terraform, Docker, Kubernetes, Datadog, Prometheus — це сучасний enterprise-стек. Це треба показувати, бо це говорить мовою CTO.

**26 співробітників і реальні фото команди.** Особливо керівництва. Це теж B2B-trust.

**EPHJ, Palexpo, Automechanika Dubai — реальні події.** Бренд бере участь у фізичних виставках. Це треба інтегрувати в "Events" розділ.

## 2.2. Що не працює (системні проблеми)

**Технологічна основа — глухий кут.** WordPress 6.x + Elementor 3.28.3 — це 2018-стек, який у 2026 році сприймається CTO-аудиторією як "low-tier". Іронія: Trident продає AI-сервіси і custom software development, але сайт побудований на найпопулярнішому WYSIWYG-конструкторі. Це обнуляє половину trust-сигналу. Будь-який потенційний CTO, який відкриє DevTools і побачить `wp-content/uploads/elementor`, миттєво знизить очікування від технічних можливостей команди.

**Швидкість.** Сторінки головної навантажують десятки великих jpg/png без AVIF/WebP-варіантів адекватного розміру, Elementor inject'ить десятки inline-стилів і JS-чанків, Facebook Pixel + GTM + Google fonts завантажуються синхронно. Це не "трохи повільно" — це провал Core Web Vitals на B2B-аудиторії, яка часто заходить через корпоративні VPN із обмеженою смугою.

**Розбиті/незавершені посилання.** На сторінці `/services/` показано 11 послуг, але 8 з них ведуть на `#`: UI/UX Design, IT Management, Web Development, DevOps, Support and Maintenance, Team Extension, Data Analysis, Cybersecurity. На сторінці `/industries/` показано 16 індустрій — **жодна** з них не має своєї сторінки, всі лінки на `#`. На головній є "Read More" → `#`. Terms & Conditions у футері — `#`. Це говорить пошуковику і користувачу: "ми не довели до кінця". У B2B це боляче.

**Лічильники зі значенням `0`.** На головній і на сторінці послуг є секція "Since 2024 — 0+ Success stories — 0K System users — 0 Solution types". Це або баг скрипта-анімації лічильника, або плейсхолдер, який ніхто не заповнив. На сайті, який продає QA та надійність — це гірше, ніж не мати лічильника взагалі.

**Контент написано через AI-перекладач, без редактури.** Видно характерні маркери: повторюване "Therefore", "Furthermore", "Consequently", "In fact", "Indeed", "Specifically" — це класичний слід LLM-перекладу з російської/української на англійську без post-edit. Для DACH-аудиторії, яка читає швидко й вибагливо, це сприймається як низькоякісний контент. Google і AI-пошуковики також знижують рейтинг такого тексту.

**Відсутність унікальних кейсів.** Портфоліо показує проєкти, але без цифр, без таймлайнів, без "проблема → рішення → результат → стек". Усі картки портфоліо ведуть на `#` (`Read More` не працює). Це означає, що 27 проєктів дають нуль SEO-сили — немає глибинних сторінок з технічним контентом для індексації.

**Стокові фотографії з alt-текстами, що повторюються.** Наприклад, alt-атрибути типу "Software solutions in Switzerland" повторюються на десятках зображень, що пошуковик розпізнає як SEO-спам.

**Відсутність структурованих даних.** На сайті немає JSON-LD для Organization, LocalBusiness, Service, Article, BreadcrumbList, FAQPage. Це означає: ChatGPT Search і Perplexity не можуть надійно витягнути факти про Trident і процитувати їх. Для AI-нативної агенції — це парадокс.

**Меню перевантажене.** Header має 6 пунктів верхнього рівня + dropdown'и, але немає чітких CTA на конверсію (Get Quote — є, але візуально слабкий і дублюється кнопкою у hero).

**Один Newsletter-input без consent-механіки nFADP.** Швейцарський nFADP (новий Federal Act on Data Protection, чинний з 1 вересня 2023 року) вимагає explicit consent і transparent purposes. Поточна форма Newsletter не показує consent-чекбокс і не лінкує до Privacy Policy.

**Privacy Policy існує, Terms & Conditions — ні.** Для швейцарського юридичного контексту обидва документи бажані, особливо для B2B-контрактів.

**Дублювання CTA "Let's Make It Happen" / "We build future together".** Внизу багатьох сторінок повторюються 2-3 однакові форми та банери Get Started, що створює відчуття "auto-generated" сайту.

**Немає AI-нативних візуальних елементів.** Враховуючи, що Trident має окрему сторінку `/services/ai-services/` і пропонує LLM/OCR/STT/RAG — головна сторінка нічого з цього не демонструє. Жодного інтерактивного елемента, жодного AI-demo, жодної живої ілюстрації того, що "ми робимо AI".

**Низький SEO/AEO impact.** Більшість мета-описів — generic, з повторами фрази "digital solutions in Switzerland". Заголовки сторінок дублюються. Немає семантичної структури H1-H6.

## 2.3. Ключовий висновок спеціаліста

Поточний сайт виконує функцію "візитки" і конвертує переважно теплий трафік (рекомендації, прямі заходи, кампанії). Він **не виконує** функцій:
- продажу через органічний пошук Google (через слабке технічне SEO),
- появи у відповідях AI-пошуковиків (через відсутність structured data і llms.txt),
- демонстрації технічної експертизи (через WordPress-будову),
- швидкої публікації нового контенту (через залежність від адмінки WordPress і ручної підтримки 4 мов),
- масштабування на нові індустрії (через `#` лінки на 16 індустрій),
- комунікації AI-першого позиціонування (через відсутність AI-візуальності).

**Рішення:** не "ремонтувати" поточний сайт, а зробити повний редизайн на сучасному стеку із збереженням 100% позиційних URL через 301-редіректи. Це інвестиція з ROI протягом 6–9 місяців за рахунок: росту органічного трафіку (+150% реалістичний цільовий KPI до 12 місяця), появи у AI-відповідях (нова категорія трафіку), скорочення часу публікації контенту (з днів — до хвилин), і відновлення довіри CTO-аудиторії.

---

# 3. Повний SEO-аудит поточного сайту

## 3.1. Технічне SEO

**Платформа.** WordPress із плагіном Elementor 3.28.3, Google Tag Manager (GTM-T5RCV6FL), Facebook Pixel (id=862852532300297), Yandex/Microsoft верифікації — все це інжектиться у head, що збільшує TTI. Сайт не оптимізований для Core Web Vitals.

**Швидкість і Core Web Vitals.**
- LCP (Largest Contentful Paint): ймовірно >3.5s на mobile через важкі hero-зображення без responsive `srcset` адекватного розміру.
- CLS (Cumulative Layout Shift): помітний на сторінках із табами і lazy-loaded зображеннями без зарезервованого aspect-ratio.
- INP (Interaction to Next Paint): ймовірно >300ms через важкі Elementor-скрипти.
- Total Blocking Time: високий.

**Структура URL.** Чиста, з префіксами мов (`/fr/`, `/de/`, `/it/`), послуги під `/services/<slug>/`, портфоліо під `/portfolio/`. Це треба зберегти у v2.

**hreflang.** Не виявлено в HTML head. Це критична помилка для багатомовного сайту — Google не розуміє відповідність між мовами, що знижує позиції в локальних індексах FR/DE/IT.

**Canonical-tags.** Присутні, але іноді некоректні (наприклад, `/about-us` повертає canonical `/about-us/`, але редірект-ланцюги недосліджено).

**robots.txt і sitemap.xml.** Не вдалося отримати доступ для аналізу під час сканування, але це треба перевірити окремо. Yoast SEO або RankMath ймовірно генерує sitemap.xml — треба підтвердити.

**Мета-теги.**
- `title` сторінок переважно унікальні, але задовгі для деяких (>60 символів);
- `meta description` повторюють патерн "...in Switzerland" — занадто шаблонні;
- немає Open Graph image оптимізації для соцмереж;
- `og:locale` — `en_US`, а має бути `en_GB` або `en_CH` для швейцарського ринку.

**Schema.org / JSON-LD.** Відсутнє, окрім автоматично згенерованого WordPress'ом базового `Article`-schema. Це найбільший SEO/AEO-провал.

**Heading hierarchy.** Не структурована: на одній сторінці може бути 4-5 H2 із семантично слабким контентом, відсутні логічні H3-підрозділи.

**Image SEO.** alt-атрибути або повторюються, або відсутні, або містять SEO-spam ("digital solutions in Switzerland" на 30+ зображень).

**Internal linking.** Слабкий: основні CTA ведуть до контактів, але не між пов'язаними послугами та індустріями (тому що 16 індустрій ведуть на `#`).

## 3.2. On-Page SEO

**Контент-довжина.** Сторінки послуг мають 800-1500 слів, що адекватно. Але контент шаблонний, без унікальних інсайтів, кейсів, цифр.

**Keyword targeting.** Перевантаження фразою "Switzerland" у заголовках і body — це підказує, що локальне SEO важливе, але виконано примітивно. Не виявлено таргетингу більш специфічних long-tail запитів типу:
- "AI agent development Switzerland"
- "on-premise LLM Swiss company"
- "Embedded software Sion Valais"
- "CTO as a service Geneva startup"
- "Custom ERP development Switzerland".

**E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).** Команда показана, але немає авторських статей конкретних людей із підписом. Це треба виправити у v2 — кожен пост і кейс має автора з посиланням на профіль.

## 3.3. Off-Page SEO (швидкий огляд)

Не сканував детально посилковий профіль (потребує Ahrefs/SEMrush), але видно:
- посилання на сайт із go-valais.ch, ardevazsls.com, daniparts.com, kleap.co — це органічні B2B-беклінки, добре.
- LinkedIn-сторінка та Facebook — присутні.
- В Google Maps реєстрація є (lokalna адреса Sion).
- Немає видимих PR-публікацій або згадок у швейцарських ІТ-медіа.

## 3.4. Локальне SEO

Адреса Sion є, телефон є. Але:
- Не виявлено Google Business Profile-оптимізації (треба підтвердити).
- Немає sub-Pages для конкретних регіонів (Valais, Geneva, Lausanne, Zürich) — критично для multi-canton присутності.
- Немає інтеграції з місцевими бізнес-каталогами (local.ch, search.ch, Yelp Switzerland).

## 3.5. AEO/GEO готовність (відповіді AI-пошуковиків)

Це окремий розділ нижче, але коротко:
- **llms.txt:** відсутній.
- **Q&A блоки на сторінках:** відсутні (немає FAQPage schema).
- **Прямі відповіді у форматі "що таке X / як це працює / чому Y":** немає.
- **Цифри і факти в перших 100 словах сторінки:** немає.
- **Цитати від експертів команди:** немає.

У 2026 це означає, що Trident не з'являється у відповідях ChatGPT Search, Perplexity, Claude, Gemini на запити типу "best AI software development companies in Switzerland" або "Swiss IT outsourcing for SMEs" — навіть якщо клієнти і експертиза є.

## 3.6. Підсумкова таблиця проблем

| # | Проблема | Серйозність | Виправляється у v2 |
|---|---|---|---|
| 1 | WordPress + Elementor — повільність | Критична | Так — повна заміна |
| 2 | 8 послуг + 16 індустрій ведуть на `#` | Критична | Так — повний контент |
| 3 | Лічильники "0+, 0K, 0" | Висока | Так — реальні цифри |
| 4 | Немає Schema.org / JSON-LD | Критична для AEO | Так — повне покриття |
| 5 | Немає llms.txt | Висока для GEO | Так |
| 6 | Немає hreflang | Критична для i18n | Так |
| 7 | Перекладений LLM-ом текст без редактури | Висока | Так — нативна редактура |
| 8 | Стокові фото з duplicate alt | Середня | Так — нові ілюстрації |
| 9 | Терms & Conditions = `#` | Юридичний ризик | Так — реальний текст |
| 10 | Newsletter без consent (nFADP) | Юридичний ризик | Так — explicit consent |
| 11 | Кейси без деталей | Висока для конверсії | Так — повні case studies |
| 12 | Author/E-E-A-T слабкий | Середня | Так — авторські сторінки |
| 13 | Локальне SEO неоптимізоване | Середня | Так — Cantons-сторінки |
| 14 | OpenGraph для соцмереж — generic | Низька | Так — per-page OG |
| 15 | Дублюючі CTA "Let's Make It Happen" | Низька | Так — IA-перегляд |

---

# 4. Маркетинговий аудит позиціонування

## 4.1. Поточне позиціонування — як його читає клієнт

Слогани і повідомлення поточного сайту:
- "Empowering Businesses through AI, Digitalization & Optimization"
- "Сustom software engineering infused with Swiss quality"
- "Software for SMEs and Startups in Switzerland"
- "Transforming Visions into Digital Realities"
- "We build future together"

Це **узагальнене позиціонування** (umbrella positioning), яке працює в будь-якій IT-агенції в Швейцарії, Польщі, Україні, Індії. Для CTO або CEO стартапа, який шукає партнера, з цього неможливо зрозуміти:
- Чим Trident відрізняється від 1500 інших IT-партнерів у DACH?
- Чому саме Sion, а не Цюріх або Лозанна?
- Чому SMB і Startups — а не enterprise або scale-ups?
- Чим Trident сильніший за українські/польські агенції з вищою маржею?
- Які проєкти Trident *не* робить (важливо для якісного позиціонування)?

## 4.2. Що насправді каже бренд (без сайту, з реальних фактів)

З аудиту контенту, портфоліо, профілів LinkedIn та реальних кейсів видно, що Trident — це:
- Швейцарська юридична оболонка + полікультурна команда (CH + IL + UA).
- Реальна спеціалізація: B2B/B2C ecommerce (автозапчастини, fashion, luxury, tools, fishing, healthcare), CTO-as-a-service для стартапів, embedded software для OEM (особливо в healthcare/automotive), IoT-моніторинг (water purification — TDSbot), внутрішні системи (WMS, affiliate platforms, медичні платформи).
- Розгортається в індустріях, де є compliance і складність: automotive parts (з тіровою ціновою логікою B2B), healthcare (Aida, Dentyval, Catapult Crown), luxury (Flashhub, Samange).
- Реалізував AI-кейс Kleap — AI-website builder.
- Має 8Move як власну логістику/доставочну платформу (driver/admin/client apps).

Це **не** "general purpose software house". Це специфічна агенція, яка:
1. Уміє запускати B2B ecommerce із складними правилами.
2. Уміє робити embedded + IoT для регульованих індустрій.
3. Уміє вести стартапи від MVP до production через CTO-as-a-service.
4. Уміє додавати AI до існуючих систем (RAG, OCR, STT, LLM on-premise).
5. Локалізована у Швейцарії — а це означає nFADP, Swiss data residency, multilingual support.

## 4.3. Нове позиціонування для v2 — гіпотеза

**Один рядок (positioning statement):**
> Trident Software — швейцарський інженерний партнер для SME і стартапів, які впроваджують AI у реальні B2B-процеси: автомобільні платформи, медичні системи, ритейл і логістика. Швейцарські compliance і data residency, поліпрофільна команда CH+IL+UA, фіксовані бюджети.

**Три-рівнева ієрархія повідомлень:**

| Рівень | Аудиторія | Повідомлення |
|---|---|---|
| Strategic (CTO/CEO) | Tech leaders | "Swiss compliance + AI-native engineering at startup velocity" |
| Tactical (PM, ops) | Operations | "Custom B2B platforms with AI inside — fixed budgets, full delivery" |
| Operational (procurement) | Buyers | "ISO 27000, data stays in CH, 4 languages, 17 years of team experience" |

**Що Trident відкрито *не* робить** (qualifying questions для leads, які відсіюють невідповідні):
- Не робить казино / гемблінг (можна обговорити);
- Не робить crypto-токен запуски;
- Не робить пет-проєкти без бюджету >CHF 15K;
- Не бере проєкти без NDA і Statement of Work.

Це — сильний марк-сигнал зрілості.

## 4.4. Категорії повідомлень, які треба підсилити у v2

1. **Швейцарський compliance.** ISO 27000, ISO 21434, ISO 26262, nFADP, Swiss data residency — як trust-bar на головній.
2. **Прозорість ціноутворення.** "Fixed budgets, no hidden fees" — це сильно. Підсилити "Pricing Models" розділом із 3 типами engagement (Fixed / T&M / Dedicated Team).
3. **AI-наративи.** Не "AI services" як generic — а конкретні кейси: OCR для інвойсів, AI-агент для autoparts, RAG для документації, on-premise LLM для healthcare.
4. **Industry-specialization.** Розгорнути всі 16 індустрій у реальні сторінки з 2-3 case studies, релевантним стеком, регуляторним контекстом.
5. **Team & Locations.** Прозоро показати CH/IL/UA-розподілення команди як перевагу (24h coverage, time-zone arbitrage), а не приховувати.

---

# 5. Конкурентний ландшафт

## 5.1. Карта конкурентів

Конкуренти Trident поділяються на 4 групи:

**Група A — швейцарські AI-нативні агенції** (прямі конкуренти за нове позиціонування):
- INFLECT (Aarau) — AI consulting, GEO, AI-powered web dev.
- Devedis — Payload + Next.js custom apps, відкрито позиціонують стек.
- Niborts, Codeship, Adnovum, Liip — швейцарські software houses, які додають AI.
- Plavno — AI chatbots, computer vision, ChatGPT integrations.

**Група B — DACH enterprise IT-консалтинг** (конкуренти за enterprise-бюджети):
- Adesso Schweiz, Accenture Switzerland, BCG Platinion.
- Це ринок, на який Trident не має конкурувати лоб-в-лоб, але має позиціонуватись як "agile alternative for SMEs that grew out of Big Four".

**Група C — польські/чеські/українські nearshoring агенції** (конкуренти за SME-бюджети):
- 10Clouds, Netguru, STX Next, Vention, EPAM.
- Перевага Trident: швейцарська юрособа, data residency, мови, 4-мовна локалізація.

**Група D — local Valais/Geneva IT-агенції** (конкуренти за регіональні контракти):
- Kleap-style стартапи, Kalmizer, Antistatique (Lausanne), Liip (Friburg).

## 5.2. Як виглядають сайти топ-3 конкурентів (інспірація для v2)

**Linear (linear.app):** еталон мінімалізму і анімацій, тонкий жирний шрифт, чітка типографічна сітка, плавні scroll-анімації. Сайт сам по собі — продаж.

**Anthropic (anthropic.com):** AI-bold, темно-світла з градієнтами, мова дуже стримана, кейси — повноекранні story-формат із цифрами.

**Vercel (vercel.com):** інженерний мінімалізм, ідеальні Core Web Vitals, dark mode default, шрифт Geist, чорно-білий + ad-hoc акценти.

**Liip (liip.ch):** швейцарський лідер по UX, без візуальних викрутас, з фокусом на social impact projects. Сильний приклад "Swiss but not boring".

**Devedis:** монорепо Payload + Next.js, відкрита кодова база, відкрита ціна, відкритий процес. Це сильно для tech-аудиторії.

## 5.3. Висновки для Trident v2

1. **Темна тема за замовчуванням** + миттєвий toggle на світлу. Як Anthropic і Vercel.
2. **Жирна типографіка для hero** (Geist Sans / Inter Display / GT America або власний кастомний gradient типу Vercel'ського Geist Mono для коду).
3. **AI-bold акценти** — інтерактивний AI-блок у hero (live чат-демо з Anthropic-style мікроанімаціями).
4. **Швейцарська стриманість** — без excessive scroll-animations, без "wow"-ефектів, де вони не потрібні.
5. **Кейси у full-screen story** — як Anthropic Customers або Vercel Customers.
6. **Прозорість processuу** — як Liip / Devedis, з відкритим roadmap'ом і процесом.

---

# 6. Стратегія v2 — позиціонування та бренд-наратив

## 6.1. Бренд-голос (Brand Voice)

**Tone of Voice:** confident, precise, technically literate, без надмірних метафор. Як інженер, який пояснює бізнес-власнику складну річ простими словами, але без поблажливості.

**Що уникати:**
- "Empowering" / "Transforming" / "Unlocking" — overused B2B-кліше.
- "We build future together" — generic.
- "Cutting-edge", "state-of-the-art", "best-in-class" — без доказів — пусті слова.

**Що використовувати:**
- Конкретні цифри і таймлайни ("ROI within 6 months", "deployed in 8 weeks", "reduced manual data entry by 73%").
- Технічні терміни де доречно (LLM, RAG, embeddings, ISO 21434, OTA updates).
- Швейцарські географічні якорі (Sion, Valais, Geneva, Zürich).
- Прямі звернення ("You ship faster. We ship the engineering.").

## 6.2. Месиджевий каркас (Message Framework)

```
┌─────────────────────────────────────────────────────────────┐
│  HERO STATEMENT                                              │
│  Swiss-engineered AI and software for SMEs that move fast.   │
└─────────────────────────────────────────────────────────────┘
   │
   ├── Proof: 17 років команди, 26 інженерів, 30+ проєктів
   ├── Compliance: ISO 27000, nFADP, Swiss data residency
   └── Difference: AI inside every layer — від OCR до on-premise LLM
       │
       ├── Service 1: AI Services (LLM, OCR, STT, RAG, agents)
       ├── Service 2: Custom Software Engineering
       ├── Service 3: Embedded & IoT (with ISO 21434/26262)
       ├── Service 4: CTO-as-a-Service (for startups)
       ├── Service 5: Cloud Consulting (AWS/Azure/GCP)
       ├── Service 6: Data & Analytics
       ├── Service 7: DevOps & SRE
       └── Service 8: UI/UX Design
            │
            └── Industries: 16 industries with their own pages
                     │
                     └── Cases: 30+ stories with metrics
```

## 6.3. Customer journey і конверсійна логіка

Три персони основні:

**Persona 1 — Startup Founder (Swiss / EU)**
- Болі: швидкість, бюджет, відсутність технічної експертизи, потреба у CTO.
- Шлях: Home → AI Services / CTO-as-a-Service → Cases (стартап-orientation) → Pricing → Book a call.
- CTA: "Book a 30-min consultation" (Outlook calendar link).

**Persona 2 — SME CTO / CEO (Swiss / DACH)**
- Болі: модернізація legacy системи, compliance, data residency, реальний партнер.
- Шлях: Home → Industries (своя індустрія) → Cases (релевантний кейс) → About → Contacts.
- CTA: "Request a tech audit".

**Persona 3 — Enterprise Procurement (Switzerland)**
- Болі: ISO/compliance docs, NDA, vendor questionnaire, references.
- Шлях: About → ISO/Compliance → Team → Contacts → RFP form.
- CTA: "Request RFP package".

Кожна персона має окремий primary CTA. Це треба врахувати в IA.

---

# 7. Дизайн-стратегія — гібрид Мінімалізм + AI-bold

## 7.1. Філософія дизайну

Дизайн v2 будується на трьох принципах:

1. **Тyпографіка вирішує 60% дизайну.** Як у Linear, Vercel, Anthropic.
2. **Простір — це функція.** Великі padding-и, чіткі секції, без візуального шуму.
3. **AI-візуальність живе в hero і на AI-сторінках.** На решті сторінок — нейтральний мінімалізм.

## 7.2. Що означає "Мінімалізм + AI-bold акценти"

**Базовий шар (90% сторінок):**
- Фон: чорний (#0A0A0A) у dark mode за замовчуванням / білий (#FAFAFA) у світлій темі.
- Текст: рівні білого/чорного з контрастом WCAG AAA.
- Акцентний колір: один (наприклад, Trident-blue #00A3FF або електричний фіолетово-синій градієнт).
- Шрифт: 1 sans-serif (Geist Sans / Inter Display) + 1 mono (Geist Mono / JetBrains Mono для коду).
- Анімації: лише плавні fade-in/up на scroll, мікрохавер-ефекти на кнопках.

**AI-bold шар (Hero, AI Services, Industries → AI):**
- Glow-ефекти на акцентному кольорі.
- Generative-патерни (Three.js / WebGL particles, але мінімально).
- "Live AI demo" блок із реальним викликом Claude API (на стороні Trident, з rate-limit).
- Mesh-градієнти (як у Vercel або Anthropic).
- Glass morphism на cards у hero (через `backdrop-filter: blur()`).

## 7.3. Чому це працює для DACH ринку

Швейцарська аудиторія цінує:
- Стриманість і функціональність.
- Точність типографіки (швейцарська типографічна школа — Helvetica, Univers, GT America).
- Відсутність маркетингового шуму.

Швейцарська AI/tech-аудиторія додатково очікує:
- Сучасні веб-патерни (dark mode, smooth scroll, responsive demo).
- Швидкість (Швейцарія = ринок з найвищим NPS до швидкості).
- Technical credibility (видно, що сайт зроблений руками інженерів).

Гібрид "минимализм + AI-bold" задовольняє і традиційну швейцарську естетику, і нову AI-нативну.

## 7.4. Дизайн-ритуали

**Mobile-first.** Кожна сторінка дизайниться спершу для 375×812, потім масштабується. Це не вибір — це необхідність для 2026.

**Container queries замість media queries.** У 2026 це доступно нативно й працює стабільніше для модульних компонентів.

**Fluid typography.** Замість `font-size: 16px` — `font-size: clamp(0.95rem, 1vw + 0.5rem, 1.05rem)`.

**Vertical rhythm.** 4px-сітка для всіх відступів, лінз тощо. Tailwind v4 за замовчуванням працює з 0.25rem (4px) step.

**Dark mode parity.** Кожний компонент тестується одночасно у двох темах.

---

# 8. Atomic Design — повна система компонентів

## 8.1. П'ять рівнів за Бредом Фростом

```
PAGES (приклади з реальним контентом)
  ↑
TEMPLATES (службові шаблони сторінок)
  ↑
ORGANISMS (header, footer, hero, blog post layout)
  ↑
MOLECULES (form field, card, CTA block, nav item)
  ↑
ATOMS (button, input, badge, icon, link)
```

## 8.2. Atoms (~25 одиниць)

| Component | Variants | Notes |
|---|---|---|
| Button | primary, secondary, ghost, destructive, link, icon-only | sm/md/lg/xl, з loading state |
| Input | text, email, tel, search, password | + label, error, hint |
| Textarea | base | + autoresize |
| Select | base, multi | через Radix Select |
| Checkbox | base, indeterminate | Radix Checkbox |
| Radio | base | Radix RadioGroup |
| Switch | base | Radix Switch (для theme toggle) |
| Badge | default, secondary, outline, destructive | для tags на блозі |
| Avatar | image, initials, fallback | для team |
| Icon | from `lucide-react` | strict список |
| Link | inline, standalone, external | external auto-додає arrow |
| Tag | service, industry, language | для портфоліо filter |
| Spinner | sm, md, lg | loading state |
| Skeleton | base | для async content |
| Kbd | base | для код-приладів у документації |
| Code (inline) | base | для технічних термінів |
| Divider | horizontal, vertical | |
| Logo | full, mark, monochrome | SVG, з 3 варіантами |
| Heading | h1..h6, display-1..display-3 | tracked, leading defined |
| Paragraph | base, lead, small | line-height optimized |
| Quote | base | Anthropic-style з лап мітками |
| Stat | number, label, growth | для лічильників на головній |
| Toast | success, error, info, warning | Sonner / Radix Toast |
| Progress | bar, ring | для process visualizations |
| Tooltip | base | Radix Tooltip |

## 8.3. Molecules (~30 одиниць)

| Component | Purpose |
|---|---|
| FormField | Label + Input + Error + Hint |
| SearchBar | Input + Icon + clear button + keyboard shortcut |
| LanguageSwitcher | Dropdown з EN/DE/FR/IT |
| ThemeToggle | Sun/Moon icon + smooth transition |
| NavItem | з dropdown і active state |
| MobileMenuTrigger | Hamburger + animation |
| Breadcrumb | автогенерований з route |
| Pagination | для блогу |
| CardService | Icon + Title + Description + CTA |
| CardIndustry | Image + Title + Tagline + CTA |
| CardCase | Hero image + Industry tag + Title + Result metric |
| CardPost | Image + Date + Title + Read time + Tag |
| CardTeam | Avatar + Name + Role + LinkedIn |
| CardLogo | Client logo + hover state |
| CardTestimonial | Quote + Avatar + Name + Company |
| CardStat | Number + Label + Optional sparkline |
| CardFeature | Icon + Title + Description |
| CardFAQ | Question + Answer (collapse) |
| CTABlock | Title + Description + Primary CTA + Secondary CTA |
| Newsletter | Input + Submit + Consent checkbox |
| ContactBlock | Email/Phone/Address icons |
| SocialLinks | LinkedIn/Facebook/Instagram/YouTube/X |
| HeroBlock | Title + Subtitle + 2 CTAs + Hero visual |
| AICard | Спеціалізована картка для AI use-cases |
| TechBadgeGrid | список технологій у грід |
| ProcessStep | Number + Title + Description + Connector line |
| Stepper | Multi-step indicator |
| TableFeature | Comparison table |
| ChipFilter | Filter chip для портфоліо/блогу |
| MapSwitzerland | SVG-мапа з офісами |

## 8.4. Organisms (~20 одиниць)

| Component | Purpose |
|---|---|
| Header | Logo + Nav + LanguageSwitcher + ThemeToggle + CTAGetQuote |
| HeaderMobile | Mobile drawer version |
| Footer | Logo + Description + 4 NavColumns + Social + Legal |
| HeroSection | Two variants: Standard / AIBold |
| FeaturesGrid | 3-6 CardFeature у responsive grid |
| ServicesShowcase | Інтерактивний tabset з 5 послугами |
| IndustriesGrid | 16 CardIndustry у grid |
| CasesShowcase | Featured 3 кейси з filter |
| BlogList | Pagination + Filter + Sort |
| BlogPost | Article layout (sidebar з TOC) |
| TeamGrid | Filter by role + CardTeam |
| StatsBar | 4 CardStat — реальні цифри |
| TestimonialsCarousel | Auto-rotate з 5-10 testimonials |
| ClientLogosWall | Grayscale logos з hover |
| FAQSection | Accordion з FAQPage schema |
| ContactSection | Map + ContactBlock + Form |
| LeadForm | Multi-step або single (config-driven) |
| ProcessSection | 5 кроків з ProcessStep |
| PricingSection | 3 tiers або engagement models |
| CTASection | Big closing CTA з glow background |

## 8.5. Templates (~10 одиниць)

```
templates/
  ├── PageDefault.tsx
  ├── PageHome.tsx
  ├── PageService.tsx
  ├── PageIndustry.tsx
  ├── PageCase.tsx
  ├── PageBlogList.tsx
  ├── PageBlogPost.tsx
  ├── PageTeam.tsx
  ├── PageAbout.tsx
  └── PageContacts.tsx
```

## 8.6. Pages — конкретні екземпляри

Сайтмап v2 (розділ 11) показує всі сторінки. Кожна — інстанс одного з 10 шаблонів із реальним MDX/Payload-контентом.

## 8.7. Технічна реалізація Atomic Design

**Бібліотека:** shadcn/ui copy-paste підхід (компоненти живуть у нашому репо, не в `node_modules`).
**Variants:** Class Variance Authority (`cva`) для типобезпечних варіантів.
**Animations:** Framer Motion для складних, Tailwind transitions для простих.
**Forms:** React Hook Form + Zod валідація.
**Icons:** Lucide React (тільки strict allowlist для бренд-консистентності).

Кожен компонент має:
- `Component.tsx` — імплементація;
- `Component.stories.tsx` — для Storybook (опційно у фазі 2);
- `Component.test.tsx` — Vitest + Testing Library;
- `Component.mdx` — документація у внутрішній DesignSystem-сторінці на сайті.

---

# 9. Дизайн-токени та theming

## 9.1. Token Architecture (3 рівні)

**Level 1 — Primitive tokens** (raw values):
```json
{
  "color": {
    "blue": {
      "50": "#EFF8FF",
      "500": "#00A3FF",
      "900": "#0B1F3A"
    },
    "neutral": {
      "0": "#FFFFFF",
      "50": "#FAFAFA",
      "950": "#0A0A0A"
    }
  },
  "spacing": { "1": "0.25rem", "2": "0.5rem", "4": "1rem" },
  "radius": { "sm": "0.375rem", "md": "0.75rem", "xl": "1.5rem" },
  "fontFamily": {
    "sans": ["Geist Sans", "Inter Display", "system-ui"],
    "mono": ["Geist Mono", "JetBrains Mono", "ui-monospace"]
  }
}
```

**Level 2 — Semantic tokens** (intent-based):
```json
{
  "background": {
    "primary": "{color.neutral.0}",
    "primary-dark": "{color.neutral.950}",
    "elevated": "{color.neutral.50}",
    "elevated-dark": "{color.neutral.900}"
  },
  "text": {
    "primary": "{color.neutral.950}",
    "primary-dark": "{color.neutral.0}",
    "muted": "{color.neutral.500}",
    "muted-dark": "{color.neutral.400}"
  },
  "accent": {
    "default": "{color.blue.500}",
    "hover": "{color.blue.600}",
    "subtle": "{color.blue.50}"
  }
}
```

**Level 3 — Component tokens** (component-scoped):
```json
{
  "button-primary-bg": "{accent.default}",
  "button-primary-bg-hover": "{accent.hover}",
  "button-primary-text": "{color.neutral.0}"
}
```

## 9.2. Tooling

- **Style Dictionary** — джерело істини (`tokens.json` → Tailwind config + CSS variables).
- **Tokens Studio** plugin для Figma (синхронізація дизайнер ↔ код).
- **Tailwind CSS v4** — `@theme` директива читає CSS variables.

## 9.3. Theming runtime

```ts
// theme-provider.tsx
export type Theme = "light" | "dark" | "system";

export function ThemeProvider({ children }) {
  // 1. Читає cookie на server-side (для уникнення FOUC)
  // 2. Виставляє data-theme на <html>
  // 3. Слухає prefers-color-scheme
}
```

CSS змінні автоматично перемикаються через `data-theme="dark"` на `<html>`. Cookie зберігає preference 1 рік.

## 9.4. Brand гайдлайн (мінімальний)

Оскільки у v1 є тільки логотип, у v2 проводимо мінімальний rebrand:
- Logo: зберегти базову форму "trident" + типографіку, але оновити пропорції під сучасні UI-стандарти.
- Logo variants: full / mark-only / monochrome.
- Кольори: основний #00A3FF (Trident Blue), нейтральні чорний/білий, акцент-градієнт #00A3FF → #A855F7 для AI-bold блоків.
- Шрифт: Geist Sans (open source, Vercel) + Geist Mono. Альтернативно — Inter + JetBrains Mono.
- Iconography: Lucide React, стиль stroke 1.5px.
- Illustrations: генеративні через Midjourney v8 або Flux 1.1 Pro, у єдиному стилі "tech-isometric з glow-акцентами".

---

# 10. Інформаційна архітектура (IA) нового сайту

## 10.1. Принципи IA

- **Не більше 3 кліків до будь-якої сторінки.**
- **Глобальна навігація — 5 пунктів верхнього рівня.**
- **Локальна навігація — у sticky-side TOC на довгих сторінках.**
- **Cross-linking — кожна Service лінкує релевантні Industry, Case, Blog post.**
- **Breadcrumbs — на всіх сторінках, окрім Home і Contact.**

## 10.2. Глобальна навігація (Header)

```
[Logo]   Services ▾   Industries ▾   Cases   About ▾   Resources ▾   [EN ▾]   [☀/🌙]   [Get Quote]
```

де dropdown'и:

**Services ▾**
- AI Services for Business
- Software Engineering
- Embedded & IoT
- CTO-as-a-Service
- Cloud Consulting
- Data & Analytics
- DevOps & SRE
- UI/UX Design
- *Всі послуги →*

**Industries ▾**
- Automotive
- Healthcare
- Fashion & Luxury
- Tourism
- Logistics
- Fintech
- DIY & Tools
- Catering
- Blockchain
- *Всі індустрії (16) →*

**About ▾**
- About Us
- Our Team
- Careers
- Events (EPHJ, Palexpo, Automechanika)
- Compliance & Security

**Resources ▾**
- Blog
- Case Studies
- Guides (нова рубрика — long-form)
- AI Playbooks (нова рубрика)
- Newsletter

## 10.3. Footer (4 колонки)

| Company | Services | Industries | Resources |
|---|---|---|---|
| About | AI Services | Automotive | Blog |
| Team | Software Engineering | Healthcare | Case Studies |
| Careers | Embedded & IoT | Fashion | Guides |
| Events | CTO-as-a-Service | Tourism | Newsletter |
| Contacts | Cloud Consulting | Logistics | RSS |
| | Data & Analytics | Fintech | llms.txt |
| | DevOps | DIY & Tools | sitemap.xml |
| | UI/UX | All industries → | |

Плюс bottom-row: Privacy Policy, Terms & Conditions, Cookie Policy, Imprint (для DACH compliance), © Trident Software Sàrl 2026, soc-icons.

## 10.4. Конверсійні точки

| Сторінка | Primary CTA | Secondary CTA |
|---|---|---|
| Home | Book a 30-min call | Explore Cases |
| Service | Request a proposal | See related cases |
| Industry | Talk to industry expert | See industry cases |
| Case | Start similar project | Read more cases |
| Blog list | Subscribe newsletter | — |
| Blog post | Talk to author | Related posts |
| About | Meet the team | Open positions |
| Team | Hire us | Open positions |
| Contacts | Send message | Book a call |

---

# 11. Повний сайтмап v2 — з покриттям v1

## 11.1. Огляд

Сайтмап v2 містить:
- **45 унікальних маршрутів** (без урахування пагінації блогу).
- **× 4 мови** = ~180 згенерованих сторінок.
- **Усі URL v1 збережені або redirected** (див. розділ 12).

## 11.2. Розгорнутий сайтмап (EN-маршрути; інші 3 мови дзеркалять через i18n slugs)

### Top-Level
```
/                                Home
/about                           About Us
/team                            Our Team
/careers                         Careers (новий)
/events                          Events (новий, з EPHJ/Palexpo/Automechanika)
/compliance                      Compliance & Security (новий, ISO/nFADP)
/contacts                        Contacts
/get-quote                       Get a Quote (форма-лід)
/book-a-call                     Book consultation (Outlook embed)
```

### Services
```
/services                        Services hub
/services/ai-services
/services/software-engineering
/services/embedded-and-iot
/services/cto-as-a-service       (перейменування з startups-cto-service)
/services/cloud-consulting
/services/data-and-analytics     (новий)
/services/devops-and-sre         (новий)
/services/ui-ux-design           (новий)
/services/team-extension         (новий)
/services/cybersecurity          (новий)
/services/it-management          (новий, опційно)
/services/support                (новий, опційно)
```

### Industries
```
/industries                      Industries hub
/industries/automotive
/industries/healthcare
/industries/fashion-and-luxury
/industries/tourism
/industries/logistics
/industries/fintech
/industries/diy-and-tools
/industries/catering
/industries/blockchain
/industries/fmcg
/industries/social-media
/industries/games
/industries/sport-and-activities
/industries/education
/industries/it
/industries/ecology              (бо є TDSbot — water purification IoT)
```

### Cases / Portfolio
```
/cases                           Cases hub (з фільтрами industry/service/tech)
/cases/8move-driver
/cases/8move-admin
/cases/8move-client
/cases/zenit-auto-b2b
/cases/aida-medicine
/cases/tires-online-shop
/cases/affiliation-platform
/cases/vesna-auto-b2b
/cases/status-m-wms
/cases/samange-fashion
/cases/dentyval
/cases/lapochette
/cases/kleap-ai-builder
/cases/flashhub
/cases/loudoun-decks
/cases/mastertool
/cases/ardevaz-sls
/cases/didi-mobile
/cases/go-valais
/cases/executive-travel
/cases/catapult-crown
/cases/tdsbot-iot
/cases/tpoint
/cases/myastro
/cases/alio
/cases/fishing-roi
/cases/vbavto
```

### Resources
```
/blog                            Blog hub (фільтр, пагінація)
/blog/{slug}                     ~30+ постів з v1 + нові
/guides                          Long-form guides (новий)
/guides/{slug}
/playbooks                       AI Playbooks (новий)
/playbooks/{slug}
/newsletter                      Підписка + архів
```

### Legal / Trust
```
/privacy-policy
/terms-and-conditions            (новий — заповнити юридичним текстом)
/cookie-policy                   (новий)
/imprint                         (новий, обов'язково для DE/AT/CH compliance)
/security                        (новий, технічні security-практики)
```

### Special / Functional
```
/llms.txt                        AI-friendly index
/sitemap.xml                     SEO sitemap
/sitemap-news.xml                Google News sitemap
/rss.xml                         RSS feed для блогу
/robots.txt
/manifest.json                   PWA manifest
/api/contact                     Contact form endpoint
/api/newsletter                  Newsletter endpoint
/api/leads                       Lead capture endpoint
```

### Локальні / Регіональні landing-сторінки (фаза 2)
```
/locations/sion-valais           (Trident HQ)
/locations/geneva
/locations/lausanne
/locations/zurich
/locations/bern
```

Це підсилить локальний SEO для запитів "software development Geneva", "AI agency Zürich" тощо.

## 11.3. Покриття всіх 27+ кейсів портфоліо v1

Усі проєкти, які зараз існують на `/portfolio/` як картки без посилання, отримують свою сторінку у `/cases/<slug>/` з такою структурою:

```
1. Hero — клієнт, індустрія, стек, бюджет (опційно)
2. Challenge — конкретна бізнес-проблема
3. Approach — як підходили (з diagram'ами)
4. Solution — що побудовано (з прев'ю UI/UX)
5. Tech Stack — конкретні технології
6. Results — метрики, цифри, до/після
7. Testimonial — реальний відгук (якщо є)
8. Related Cases — 3 схожі проєкти
9. CTA — "Start similar project"
```

---

# 12. Карта 301-редіректів v1 → v2

Збереження SEO-сили — критично. Усі URL v1, які мають беклінки чи позиції, отримують 301-редірект на еквівалент у v2.

## 12.1. Принцип

- Усі URL з v1 → 301 на v2.
- Заголовки `Link: rel="canonical"` на v2 → новий URL.
- Старі `/wp-content/uploads/...` зображення — рекомендується **зберегти** через nginx-проксі на старий бакет (або скопіювати у нову папку `/public/legacy/`) щоб не зламати соцмережі та зовнішні беклінки.

## 12.2. Таблиця редіректів

| v1 URL | v2 URL | Status |
|---|---|---|
| `/` | `/` | 200 |
| `/about-us/` | `/about` | 301 |
| `/our-team/` | `/team` | 301 |
| `/services/` | `/services` | 301 |
| `/services/ai-services/` | `/services/ai-services` | 301 |
| `/services/software-engineering/` | `/services/software-engineering` | 301 |
| `/services/embedded-and-iot/` | `/services/embedded-and-iot` | 301 |
| `/services/startups-cto-service/` | `/services/cto-as-a-service` | 301 |
| `/services/cloud-consulting/` | `/services/cloud-consulting` | 301 |
| `/industries/` | `/industries` | 301 |
| `/portfolio/` | `/cases` | 301 |
| `/blog/` | `/blog` | 301 |
| `/blog/2/` | `/blog/page/2` | 301 |
| `/blog/{slug}/` | `/blog/{slug}` | 301 |
| `/contacts/` | `/contacts` | 301 |
| `/privacy-policy/` | `/privacy-policy` | 301 |
| `/fr/...` | `/fr/...` (slug перекладається) | 301 |
| `/de/...` | `/de/...` | 301 |
| `/it/...` | `/it/...` | 301 |

Карта зберігається у `src/middleware.ts` як lookup-таблиця і виконується edge-middleware Next.js.

## 12.3. Тестування редіректів

Перед лончем:
- Експорт усіх v1 URL із Google Search Console.
- Запуск Screaming Frog по обох сайтах (preview v2 + live v1).
- Перевірка, що кожен v1 URL повертає 301 на актуальний v2 URL.
- Перевірка, що hreflang-теги коректні.

---

# 13. Технічний стек і архітектурні рішення

## 13.1. Загальний стек

| Layer | Tech | Why |
|---|---|---|
| Frontend framework | Next.js 15 (App Router) | SSR + ISR, edge-friendly, найкращий DX 2026 |
| Language | TypeScript 5.x | Type safety, AI-friendly (Claude розуміє типи) |
| UI library | React 19 | Server Components за замовчуванням |
| Styling | Tailwind CSS v4 | Найшвидший AOT-компайлер, CSS variables |
| Component primitives | Radix UI + shadcn/ui | A11y, customizable |
| Variants | CVA (class-variance-authority) | Type-safe variant API |
| Animation | Framer Motion 12 | Smooth, A11y-respecting |
| Icons | Lucide React | Tree-shakeable SVG icons |
| Forms | React Hook Form + Zod | Performant, validated |
| CMS | Payload 3 | Same monorepo, TypeScript-first |
| Database | Postgres 16 | Reliable, Payload-supported |
| ORM | Drizzle (через Payload) | Type-safe queries |
| Auth | Payload built-in | RBAC, JWT, sessions |
| i18n | next-intl | App Router-native |
| Search | Pagefind (static) | Build-time, no backend needed |
| Email | Resend | Modern API, transactional |
| Storage | MinIO (на VPS) або S3 | Self-hosted = data residency |
| Analytics | Plausible (self-hosted) + PostHog | Privacy-friendly + funnels |
| Error tracking | Sentry self-hosted | або Glitchtip (FOSS) |
| Logging | Pino + Loki | Structured logs |
| Monitoring | Uptime Kuma | Self-hosted uptime |
| Containers | Docker + Docker Compose | Простий деплой |
| Reverse proxy | Caddy 2 | Auto HTTPS, simpler than Nginx |
| CI/CD | GitHub Actions | Standard, free for OSS-like |
| Testing | Vitest + Playwright | Unit + E2E |
| Linting | Biome | Faster than ESLint+Prettier |

## 13.2. Чому Next.js 15 + App Router

- **React Server Components** скорочують JS-bundle на 40-60%.
- **Streaming SSR** дає кращий perceived performance.
- **Edge middleware** для редіректів, A/B-тестів, geolocation.
- **Built-in image optimization** з AVIF + WebP fallback.
- **next-intl** інтегрується нативно.
- **Vercel-compatible**, але деплой працює і на VPS через standalone-output + Docker.

## 13.3. Чому Payload 3

- **Same codebase as Next.js** — один деплой, одна команда.
- **Self-hostable on VPS** — швейцарська data residency.
- **TypeScript-first** — Claude легко читає і модифікує `collections/`.
- **Built-in admin UI** — для контент-менеджера як backup.
- **Programmatic API** — для seed-скриптів від Claude.
- **i18n native** — кожне поле може бути локалізованим.
- **Drafts, versions, live preview** — професійний CMS-workflow.
- **Access control** — RBAC для команди.

## 13.4. Архітектура високого рівня

```
┌─────────────────────────────────────────────────────────┐
│                     INTERNET                            │
└────────────────────────┬────────────────────────────────┘
                         │
            ┌────────────▼─────────────┐
            │   Caddy (HTTPS, gzip)    │
            └────────────┬─────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   ┌────▼────┐     ┌─────▼──────┐  ┌─────▼──────┐
   │  Next   │     │  Payload   │  │  Plausible │
   │  app    │◄────│  admin     │  │  analytics │
   │  :3000  │     │  :3001     │  │  :8000     │
   └────┬────┘     └─────┬──────┘  └────────────┘
        │                │
        └────────┬───────┘
                 │
         ┌───────▼────────┐
         │   Postgres     │
         │   :5432        │
         └────────────────┘
                 │
         ┌───────▼────────┐
         │   MinIO (S3)   │
         │   :9000        │
         └────────────────┘
```

Усі сервіси — у Docker Compose на VPS. Backup щодня в інший швейцарський bucket (через restic).

---

# 14. Архітектура моноpепо Next.js + Payload

## 14.1. Структура проєкту

```
trident-website/
├── apps/
│   └── web/                      Next.js app
│       ├── app/
│       │   ├── (marketing)/      Public routes
│       │   │   ├── page.tsx              Home
│       │   │   ├── services/
│       │   │   │   ├── page.tsx          Hub
│       │   │   │   └── [slug]/page.tsx   Detail
│       │   │   ├── industries/
│       │   │   ├── cases/
│       │   │   ├── blog/
│       │   │   ├── guides/
│       │   │   ├── playbooks/
│       │   │   ├── about/
│       │   │   ├── team/
│       │   │   ├── careers/
│       │   │   ├── events/
│       │   │   ├── compliance/
│       │   │   └── contacts/
│       │   ├── (legal)/
│       │   │   ├── privacy-policy/
│       │   │   ├── terms-and-conditions/
│       │   │   ├── cookie-policy/
│       │   │   └── imprint/
│       │   ├── (locations)/
│       │   ├── api/
│       │   │   ├── contact/route.ts
│       │   │   ├── newsletter/route.ts
│       │   │   ├── leads/route.ts
│       │   │   └── revalidate/route.ts
│       │   ├── llms.txt/route.ts         Dynamic llms.txt
│       │   ├── sitemap.ts                Dynamic sitemap
│       │   ├── robots.ts                 Dynamic robots
│       │   ├── manifest.ts               PWA manifest
│       │   └── layout.tsx
│       ├── components/
│       │   ├── atoms/
│       │   ├── molecules/
│       │   ├── organisms/
│       │   └── templates/
│       ├── lib/
│       │   ├── payload.ts                Payload client
│       │   ├── i18n.ts
│       │   ├── seo.ts
│       │   ├── schema.ts                 JSON-LD generators
│       │   ├── analytics.ts
│       │   └── email.ts
│       ├── messages/                     i18n strings
│       │   ├── en.json
│       │   ├── de.json
│       │   ├── fr.json
│       │   └── it.json
│       ├── middleware.ts                 Redirects, locale detection
│       ├── next.config.ts
│       └── package.json
├── apps/
│   └── cms/                      Payload CMS
│       ├── src/
│       │   ├── collections/
│       │   │   ├── Pages.ts
│       │   │   ├── Services.ts
│       │   │   ├── Industries.ts
│       │   │   ├── Cases.ts
│       │   │   ├── Posts.ts
│       │   │   ├── Guides.ts
│       │   │   ├── Playbooks.ts
│       │   │   ├── Authors.ts
│       │   │   ├── TeamMembers.ts
│       │   │   ├── Testimonials.ts
│       │   │   ├── Clients.ts
│       │   │   ├── Events.ts
│       │   │   ├── JobOpenings.ts
│       │   │   ├── Leads.ts
│       │   │   ├── Media.ts
│       │   │   └── Users.ts
│       │   ├── globals/
│       │   │   ├── SiteSettings.ts
│       │   │   ├── Navigation.ts
│       │   │   └── Footer.ts
│       │   ├── blocks/
│       │   │   ├── HeroBlock.ts
│       │   │   ├── FeaturesBlock.ts
│       │   │   ├── CTABlock.ts
│       │   │   ├── StatsBlock.ts
│       │   │   ├── FAQBlock.ts
│       │   │   ├── TestimonialsBlock.ts
│       │   │   ├── ProcessBlock.ts
│       │   │   ├── PricingBlock.ts
│       │   │   ├── AIBlock.ts
│       │   │   └── ContentBlock.ts (MDX)
│       │   ├── access/
│       │   ├── hooks/
│       │   ├── seed/
│       │   │   ├── seedAll.ts
│       │   │   ├── seedServices.ts
│       │   │   ├── seedIndustries.ts
│       │   │   └── seedCases.ts
│       │   ├── payload.config.ts
│       │   └── server.ts
│       └── package.json
├── packages/
│   ├── ui/                       Shared components
│   ├── design-tokens/            Style Dictionary source
│   ├── i18n/                     Translation utilities
│   └── tsconfig/                 Shared TS configs
├── docker/
│   ├── Dockerfile.web
│   ├── Dockerfile.cms
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   └── Caddyfile
├── scripts/
│   ├── seed.ts
│   ├── migrate.ts
│   └── generate-llms-txt.ts
├── content/                      Optional MDX-only content
│   ├── blog/
│   ├── guides/
│   └── playbooks/
├── public/
│   ├── images/
│   ├── fonts/
│   └── legacy/                   v1 image redirects
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── deploy.yml
│       └── lighthouse.yml
├── CLAUDE.md                     Claude instructions
├── .claude/
│   ├── skills/
│   │   ├── add-blog-post/
│   │   ├── add-case-study/
│   │   ├── add-service/
│   │   ├── add-industry/
│   │   └── translate/
│   └── prompts/
├── turbo.json                    Turborepo config
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

## 14.2. Чому Turborepo + pnpm

- Швидкий incremental build.
- Кешує між Web та CMS.
- pnpm — менші node_modules, швидкі install'и.

## 14.3. Деплой моделі

Два deploy targets з одного репо:
1. `apps/web` — Next.js standalone build, працює на :3000.
2. `apps/cms` — Payload, працює на :3001.

Обидва шеряться одним монорепо-кодом і Postgres.

---

# 15. Payload CMS — колекції, поля, доступи

## 15.1. Список колекцій

| Collection | Slug | Purpose | Localized |
|---|---|---|---|
| Pages | `pages` | Окремі статичні сторінки (Privacy, Imprint) | ✓ |
| Services | `services` | 12 послуг | ✓ |
| Industries | `industries` | 16 індустрій | ✓ |
| Cases | `cases` | Усі кейси | ✓ |
| Posts | `posts` | Блог пости | ✓ |
| Guides | `guides` | Long-form гайди | ✓ |
| Playbooks | `playbooks` | AI Playbooks | ✓ |
| Authors | `authors` | Автори контенту (з E-E-A-T) | partial |
| TeamMembers | `team-members` | Команда | ✓ (role) |
| Testimonials | `testimonials` | Відгуки | ✓ |
| Clients | `clients` | Клієнтські логотипи | — |
| Events | `events` | EPHJ, Palexpo, Automechanika | ✓ |
| JobOpenings | `job-openings` | Вакансії | ✓ |
| Leads | `leads` | Заявки з форм (не локалізована) | — |
| Media | `media` | Зображення, відео, файли | partial |
| Users | `users` | Адміни | — |

## 15.2. Приклад колекції Cases (Payload TypeScript)

```typescript
// apps/cms/src/collections/Cases.ts
import { CollectionConfig } from "payload";
import { slugField } from "../fields/slug";
import { seoFields } from "../fields/seo";
import { contentBlocks } from "../blocks";

export const Cases: CollectionConfig = {
  slug: "cases",
  labels: { singular: "Case Study", plural: "Case Studies" },
  admin: {
    defaultColumns: ["title", "industry", "status", "publishedAt"],
    useAsTitle: "title",
    listSearchableFields: ["title", "client.name", "tags"],
  },
  versions: { drafts: { autosave: true } },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    { name: "title", type: "text", required: true, localized: true },
    slugField(),
    {
      name: "client",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "logo", type: "upload", relationTo: "media" },
        { name: "url", type: "text" },
        { name: "country", type: "text" },
      ],
    },
    {
      name: "industries",
      type: "relationship",
      relationTo: "industries",
      hasMany: true,
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
      hasMany: true,
    },
    {
      name: "techStack",
      type: "array",
      fields: [
        { name: "tech", type: "text" },
        { name: "category", type: "select", options: ["frontend","backend","database","ai","cloud","mobile","other"] }
      ],
    },
    {
      name: "challenge",
      type: "richText",
      localized: true,
    },
    {
      name: "approach",
      type: "richText",
      localized: true,
    },
    {
      name: "solution",
      type: "blocks",
      blocks: contentBlocks,
      localized: true,
    },
    {
      name: "results",
      type: "array",
      localized: true,
      fields: [
        { name: "metric", type: "text", required: true },
        { name: "value", type: "text", required: true },
        { name: "description", type: "text" },
      ],
    },
    {
      name: "testimonial",
      type: "relationship",
      relationTo: "testimonials",
    },
    {
      name: "hero",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        { name: "image", type: "upload", relationTo: "media" },
        { name: "caption", type: "text", localized: true },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar" },
    },
    {
      name: "status",
      type: "select",
      options: ["draft","published","archived"],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
    ...seoFields(),
  ],
};
```

## 15.3. SEO Fields (shared)

```typescript
// apps/cms/src/fields/seo.ts
export const seoFields = () => [
  {
    name: "seo",
    type: "group",
    label: "SEO",
    localized: true,
    fields: [
      { name: "metaTitle", type: "text" },
      { name: "metaDescription", type: "textarea" },
      { name: "ogImage", type: "upload", relationTo: "media" },
      { name: "canonical", type: "text" },
      {
        name: "schemaOverride",
        type: "json",
        admin: { description: "Custom JSON-LD if needed" }
      },
    ],
  },
];
```

## 15.4. Leads колекція (без зовнішнього CRM)

```typescript
export const Leads: CollectionConfig = {
  slug: "leads",
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // публічно через API
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  admin: {
    defaultColumns: ["name","email","company","source","status","createdAt"],
    useAsTitle: "email",
    listSearchableFields: ["name","email","company","message"],
    group: "Operations",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    { name: "company", type: "text" },
    { name: "message", type: "textarea" },
    { name: "source", type: "select", options: ["contact","quote","newsletter","case","service","industry","event"] },
    { name: "sourcePage", type: "text" }, // який URL
    { name: "utm", type: "json" },
    { name: "locale", type: "select", options: ["en","de","fr","it"] },
    {
      name: "status",
      type: "select",
      options: ["new","contacted","qualified","won","lost","spam"],
      defaultValue: "new",
    },
    { name: "assignedTo", type: "relationship", relationTo: "users" },
    { name: "notes", type: "textarea" },
    {
      name: "createdAt",
      type: "date",
      admin: { readOnly: true, position: "sidebar" }
    },
  ],
  hooks: {
    afterChange: [
      // Шле email/Slack на info@trident-software.ch
      async ({ doc, operation }) => {
        if (operation === "create") {
          await sendNewLeadEmail(doc);
          await postToSlack(doc); // optional
        }
      },
    ],
  },
};
```

## 15.5. Adminка як dashboard для лідів

У Payload Admin UI колекція Leads має:
- List view із фільтрами (status, source, locale, date range).
- Detail view із усіма полями + notes + assignedTo.
- Kanban view (через custom view component) — лід-funnel: new → contacted → qualified → won/lost.
- Export to CSV — через кастомну view або endpoint `/api/leads/export`.

Це і є "власна БД + dashboard", який ви обрали в питанні про lead capture. Жодних HubSpot/Pipedrive.

---

# 16. i18n стратегія для EN/DE/FR/IT

## 16.1. Архітектура

- **next-intl** для UI-копії (статичних рядків).
- **Payload localized fields** для CMS-контенту.
- **URL-структура:** `/en/...`, `/de/...`, `/fr/...`, `/it/...` (EN дефолт — без префікса, опційно).
- **Slug-translation:** URL-сегменти перекладаються (`/services/ai-services` → `/de/dienstleistungen/ki-services` → `/fr/services/services-dia` → `/it/servizi/servizi-di-ia`).

## 16.2. Detection і пріоритет

```
1. URL prefix wins (якщо є `/de/...` — DE).
2. NEXT_LOCALE cookie.
3. Accept-Language header.
4. Default: EN.
```

Middleware:
```ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "fr", "it"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "as-needed", // EN без префікса
});
```

## 16.3. Workflow перекладу

1. Контент-менеджер створює запис в Payload в EN-локалі.
2. Кнопка "Translate to DE/FR/IT" — викликає Claude API через Payload hook.
3. Claude перекладає, виставляє draft статус.
4. Носій мови (для DE/FR/IT — фрілансер або співробітник) ревʼює.
5. Публікація.

Це **AI-assisted, human-reviewed** підхід. Якість на рівні нативного, швидкість як у MT.

## 16.4. hreflang генерація

```tsx
// app/[locale]/layout.tsx
export async function generateMetadata({ params }) {
  const { locale, pathname } = params;
  return {
    alternates: {
      languages: {
        "en": `https://trident-software.ch${pathname}`,
        "de": `https://trident-software.ch/de${pathname}`,
        "fr": `https://trident-software.ch/fr${pathname}`,
        "it": `https://trident-software.ch/it${pathname}`,
        "x-default": `https://trident-software.ch${pathname}`,
      },
    },
  };
}
```

## 16.5. Окремі sitemap.xml per locale

```
sitemap.xml                     Index
sitemap-en.xml
sitemap-de.xml
sitemap-fr.xml
sitemap-it.xml
```

---

# 17. GEO/AEO стратегія для AI-пошуковиків

## 17.1. Чому це окремий розділ

У 2026 органічний трафік ділиться на два потоки:
- **Класичний SEO** (Google web, Bing, DuckDuckGo).
- **Answer Engine / Generative Engine** (Perplexity, ChatGPT Search, Claude, Gemini, Bing Chat, Brave AI).

Дослідження Brandlight 2025 показало: перетин між top-10 Google і AI-cited sources впав з 70% до <20%. Це означає — недостатньо ранжуватись у Google; треба окремо оптимізувати під AI-цитування.

## 17.2. llms.txt — AI-friendly index

Створимо `/llms.txt` за специфікацією Answer.ai:

```markdown
# Trident Software

> Swiss-engineered AI and software development for SMEs and startups.
> Headquartered in Sion, Valais. ISO 27000 certified. 4 languages.

## Core Services

- [AI Services for Business](https://trident-software.ch/services/ai-services): On-premise LLM, OCR, STT, RAG, intelligent automation.
- [Software Engineering](https://trident-software.ch/services/software-engineering): Custom web, mobile, ecommerce platforms.
- [Embedded & IoT](https://trident-software.ch/services/embedded-and-iot): Firmware, device integration, ISO 21434/26262 compliance.
- [CTO-as-a-Service](https://trident-software.ch/services/cto-as-a-service): Fractional CTO for startups.
- [Cloud Consulting](https://trident-software.ch/services/cloud-consulting): AWS, Azure, GCP migration and optimization.

## Industries

- [Automotive](https://trident-software.ch/industries/automotive)
- [Healthcare](https://trident-software.ch/industries/healthcare)
- ...

## About

- [About Trident](https://trident-software.ch/about)
- [Team (26 engineers)](https://trident-software.ch/team)
- [Compliance & Security](https://trident-software.ch/compliance)

## Recent Case Studies

- [Smart Auto Parts Software](https://trident-software.ch/cases/8move-admin)
- [Aida Medicine Platform](https://trident-software.ch/cases/aida-medicine)
- ...

## Contact

- Email: info@trident-software.ch
- Phone: +41 79 745 44 29
- Address: Rue de l'Industrie 23, 1950 Sion, Valais, Switzerland
```

Файл генерується автоматично з Payload-контенту на кожному build/revalidation.

## 17.3. Structured Data (JSON-LD)

На кожному типі сторінки:

**Home/About:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Trident Software Sàrl",
  "url": "https://trident-software.ch",
  "logo": "https://trident-software.ch/logo.svg",
  "foundingDate": "2019",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue de l'Industrie 23",
    "addressLocality": "Sion",
    "addressRegion": "Valais",
    "postalCode": "1950",
    "addressCountry": "CH"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+41-79-745-44-29",
    "contactType": "sales",
    "areaServed": ["CH","DE","AT","FR","IT","EU"],
    "availableLanguage": ["en","de","fr","it"]
  }],
  "sameAs": [
    "https://www.linkedin.com/company/tridentsoftware/",
    "https://www.facebook.com/profile.php?id=100092674509471"
  ]
}
```

**Service сторінка:**
```json
{
  "@type": "Service",
  "serviceType": "AI Services for Business",
  "provider": { "@type": "Organization", "name": "Trident Software" },
  "areaServed": "CH",
  "hasOfferCatalog": { ... }
}
```

**Case сторінка:**
```json
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "...",
  "publisher": { ... }
}
```

**FAQPage** на сторінках, де є FAQ-блок.

**BreadcrumbList** на всіх внутрішніх сторінках.

## 17.4. Контентні патерни для AI-цитування

Дослідження (LLMrefs, Surmado) показують, що AI-моделі цитують контент, який:
1. **Починається з прямої відповіді** на запит (TL;DR у перших 50 словах).
2. **Має експертні цитати** у лапках.
3. **Містить статистику** у короткому форматі.
4. **Структурований у Q&A** блоки.
5. **Оновлений нещодавно** (date stamp видимий).

Тому кожна Service / Industry / Guide сторінка матиме:
- **TL;DR блок** у hero (50-80 слів).
- **"Key facts" блок** — 3-5 буллетів із цифрами.
- **"What is X" блок** — direct definitional answer.
- **FAQ блок** — 5-8 питань.
- **Author block** — з E-E-A-T сигналами.
- **Last updated** дату видимою.

## 17.5. AI crawler-friendly

У `robots.txt` явно дозволяємо AI-боти:
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

(Хоча, як показали недавні дискусії, llms.txt і robots.txt — це лише *запит*; реальні AI-боти не зобов'язані поважати. Але це best practice і сигнал GEO/AEO-tools.)

## 17.6. Citation magnets

Створюємо контент, який AI *хоче* цитувати:
- **Original research** (наприклад, "Stand of AI adoption in Swiss SMEs 2026" — звіт із власними опитуваннями).
- **Calculators** (на сайті: "AI ROI Calculator for SMEs").
- **Comparison tables** (наприклад, "On-premise LLM vs Cloud LLM for Swiss healthcare").
- **Glossaries** (інженерні терміни з визначеннями).

Кожен такий артефакт — мостовий маркетинг між людьми і AI.

---

# 18. Технічна SEO-стратегія

## 18.1. Технічні засади (must-have)

- **sitemap.xml** автогенерований із Payload.
- **robots.txt** з повним списком ботів.
- **hreflang** на всіх сторінках.
- **canonical URL** на всіх сторінках.
- **Open Graph + Twitter Cards** на всіх сторінках.
- **JSON-LD** на всіх типах сторінок.
- **Web Vitals**: LCP <1.8s, CLS <0.05, INP <200ms.
- **HTTPS only**, HSTS preload.
- **Compression**: Brotli 11 для HTML/CSS/JS.

## 18.2. Контентна SEO-стратегія

**Pillar-content стратегія:**

3 основні pillar'и:
1. **AI for SMEs** — pillar page + 10-15 cluster posts.
2. **Custom Software Engineering Switzerland** — pillar + cluster.
3. **CTO-as-a-Service for Startups** — pillar + cluster.

Кожен pillar — це сторінка глибиною 3000-5000 слів, що покриває тему повністю. Cluster — короткі пости (800-1500 слів) на специфічні підтеми, лінкані до pillar.

## 18.3. Long-tail keyword мапа (приклади)

| Keyword | Volume | Target page |
|---|---|---|
| "AI software development Switzerland" | low-mid | /services/ai-services |
| "On-premise LLM Switzerland" | low | /guides/on-premise-llm |
| "Custom ERP Switzerland SME" | low-mid | /services/software-engineering |
| "Embedded software development Sion" | low | /services/embedded-and-iot |
| "CTO as a service Geneva" | low-mid | /services/cto-as-a-service + /locations/geneva |
| "B2B ecommerce Switzerland" | mid | /industries/automotive (як use case) |
| "Swiss data residency software" | low | /compliance |
| "ISO 27001 software development" | mid | /compliance |
| "OCR invoice scanner Switzerland" | low | /blog/click-scan-done... + /cases/8move |

## 18.4. Internal linking strategy

Усі сторінки лінковані за паттерном "huba and spokes":
- Кожна Service ↔ 3-5 Industries вона обслуговує.
- Кожна Industry ↔ 3-5 Cases.
- Кожна Case ↔ 1 Industry + N Services.
- Кожен Blog post ↔ 1 Service або Industry + 2-3 related posts.

Це створює щільний граф для SEO та GEO.

## 18.5. Швидкість як SEO

Google і AI-пошуковики штрафують повільні сайти. План:
- **AVIF + WebP** з `<picture>`.
- **Font loading**: `font-display: optional` для дисплейних шрифтів, `font-display: swap` для тіла, обов'язковий self-host (без Google Fonts CDN).
- **JS budget**: <100KB gzipped на 90% сторінок.
- **CSS budget**: <30KB gzipped.
- **ISR (Incremental Static Regeneration)** для блогу і кейсів — швидке оновлення без full rebuild.
- **Edge caching** через Caddy + CDN-фронт (Cloudflare безкоштовний у proxy-режимі — це додає швейцарську CDN-точку).

---

# 19. Контент-стратегія

## 19.1. Контент-аудит v1

З 27 портфоліо-проєктів і ~32 блог-постів v1 у v2 переносимо:
- **27 кейсів** — кожен переписується у повний case-study формат.
- **~25 блог-постів** — переписуються з нативною редактурою.
- ~7 застарілих/неактуальних постів — архівуються або зливаються.

## 19.2. Контент-стилі

**Кейс (Case study):**
- Структура: Hero → Challenge → Approach → Solution (multi-block) → Tech Stack → Results → Testimonial → Related.
- Довжина: 1500-3000 слів + 5-10 візуалів.
- Видимі цифри: мінімум 3 метрики ("3x faster delivery", "73% reduction in manual data entry", "ROI in 6 months").

**Блог-пост (Article):**
- Структура: TL;DR → Intro → Body (3-7 sections) → Conclusion → CTA → Related.
- Довжина: 800-1500 слів.
- TL;DR — обов'язково (для AEO).
- Author block у кінці.

**Гайд (Guide):**
- Структура: TOC → Intro → Body (deep-dive) → Resources → CTA.
- Довжина: 3000-6000 слів.
- Пишеться як expert long-read.

**Playbook (AI Playbook):**
- Структура: When to use → Architecture → Stack → Steps → Common pitfalls → Trident's POV → CTA.
- Довжина: 2000-4000 слів.
- Технічний, практичний, з кодом.

## 19.3. Контент-календар v1 (перші 6 місяців)

| Місяць | Деливериси |
|---|---|
| M1 | 5 pillar-pages (Services), 4 industries (priority) |
| M2 | 27 cases (rewrite з v1), 5 industries |
| M3 | 7 industries (long-tail), 3 guides |
| M4 | 10 blog posts (migrated from v1), 2 playbooks |
| M5 | 8 new blog posts, 1 calculator, 1 glossary |
| M6 | Author pages, locations pages (5), 6 new posts |

## 19.4. Локалізація контенту

Не всі типи контенту локалізуються в усі мови:
- **Tier 1** (всі 4 мови): Home, Services, Industries, About, Team, Contacts, Privacy, Terms, Imprint.
- **Tier 2** (EN + DE; інші — за попитом): Cases, Pillar pages, Compliance.
- **Tier 3** (тільки EN на старті): Blog posts, Guides, Playbooks. Поступово локалізуємо top-perform статті.

Це звичайна B2B-стратегія для economy of effort.

## 19.5. Tone of Voice — практичні правила

- Активний стан замість пасивного. ❌ "Solutions are designed..." ✅ "We design solutions...".
- Один концепт на параграф.
- Перші 50 слів — direct answer.
- Уникати overused words: "leverage", "empower", "unlock", "cutting-edge", "state-of-the-art".
- Цифри прописом до десяти, цифрами від 10. Виключення: метрики ("3x", "5%").
- Швейцарська англійська (en-CH): "organisation" замість "organization".

---

# 20. Lead-funnel і аналітика

## 20.1. Воронка

```
DISCOVERY        →   AWARENESS      →   CONSIDERATION   →   CONVERSION   →   RETENTION
Google/AI/Soc    →   Home/Service   →   Case/Guide      →   Form/Call    →   Newsletter/Cases
```

Кожен етап має свій KPI:

| Etap | KPI | Tool |
|---|---|---|
| Discovery | impressions, AI citations | GSC, llmrefs |
| Awareness | unique visitors, top pages | Plausible |
| Consideration | time on page, scroll depth | PostHog |
| Conversion | form submits, calls booked | Payload Leads + Outlook |
| Retention | newsletter open rate | Resend |

## 20.2. Форми (Lead capture)

Усі форми використовують React Hook Form + Zod + Server Actions у Next.js. На фронті — інтерактивна валідація, на бекенді — додаткова перевірка + spam-захист (Cloudflare Turnstile, краще ніж reCAPTCHA для privacy).

Типи форм:
1. **Contact form** (`/contacts`) — generic.
2. **Get a Quote** (`/get-quote`) — multi-step, з рекомендацією послуги.
3. **Newsletter** (Footer, Blog) — single field email + consent.
4. **Service-specific** (на сторінці послуги) — "Talk to {Service} expert".
5. **Industry-specific** ("Talk to {Industry} expert").
6. **Career application** (`/careers/{job}`) — CV upload через MinIO.
7. **Event registration** (`/events/{event}`) — для EPHJ/Palexpo.

Усі форми пишуть у Payload `Leads` колекцію з source-тегом.

## 20.3. nFADP-сумісний consent

```tsx
<Checkbox required name="consent">
  I agree to the <Link href="/privacy-policy">Privacy Policy</Link>{" "}
  and consent to Trident processing my data to respond to my inquiry.
</Checkbox>
<Checkbox name="marketing">
  (Optional) I agree to receive Trident's newsletter and updates.
</Checkbox>
```

Контактна форма — `consent` required. Marketing — optional.

## 20.4. Analytics стек

**Plausible (self-hosted):**
- Простий дашборд: pageviews, unique visitors, top pages, top sources.
- GDPR/nFADP-сумісний без cookie banner (немає PII).
- Цілі: form submit, newsletter sign, CTA click.

**PostHog (self-hosted або cloud EU):**
- Сесійні записи (з PII-маскуванням).
- Funnels — від landing до form submit.
- Cohort analysis — повторні візити.
- A/B-тестинг (фаза 2).

**Search Console + Bing Webmaster.**

**llmrefs.com** (нова категорія) — для тракінгу AI-цитувань.

## 20.5. Lead Scoring (опційно у фазі 2)

Прості правила в Payload hook на створенні lead:
- email з корпоративного домену (не gmail/yahoo): +20.
- company > 50 employees (заповнено): +30.
- message > 100 chars: +10.
- source = "quote": +40.
- source = "newsletter": +5.

Score 50+ → "hot", auto-assigned до Bohdan або Maksym.

---

# 21. Lead Dashboard в Payload

## 21.1. Кастомізована View

Payload Admin UI дозволяє додати custom view для колекції. Створюємо:

```typescript
// apps/cms/src/views/LeadsDashboard.tsx
export default function LeadsDashboard() {
  // 4 columns kanban: new, contacted, qualified, won/lost
  // Drag-and-drop між колонками (оновлює status)
  // Filter by date / source / locale
  // Top metrics: leads this week, conversion rate, avg time-to-contact
}
```

Підключаємо у `payload.config.ts`:
```typescript
admin: {
  components: {
    views: {
      LeadsDashboard: {
        Component: "./views/LeadsDashboard",
        path: "/leads-dashboard",
      },
    },
  },
}
```

Доступно по `/admin/leads-dashboard`.

## 21.2. Експорт

Endpoint `/api/leads/export?from=...&to=...` — повертає CSV з леадів за діапазон. Захищено через Payload auth.

## 21.3. Сповіщення

Hook на створенні нового lead:
1. Email до info@trident-software.ch з лід-картою.
2. (Опційно) Webhook у Slack/Teams.
3. (Опційно) SMS через Twilio для "hot" leads.

---

# 22. Claude-workflow — розширення сайту через промпти

## 22.1. Філософія

Замість того, щоб тримати контент-менеджера в адмінці, ми робимо так, щоб **код був джерелом істини**, а Claude — оператором, який знає як модифікувати цей код безпечно.

Це означає:
- Контент може жити у Payload (через адмінку) АБО у MDX-файлах у репо.
- Claude може створювати нові MDX-файли, нові Payload-seed-скрипти, нові компоненти.
- Кожна зміна — git commit з осмисленим message.
- CI/CD автоматично деплоїть на VPS.

## 22.2. CLAUDE.md — джерело істини

У корені репо лежить `CLAUDE.md` — інструкція для Claude (як для нового співробітника). Приклад нижче (розділ 23).

## 22.3. Agent Skills

У `.claude/skills/` лежать reusable skills:

```
.claude/skills/
├── add-blog-post/
│   └── SKILL.md
├── add-case-study/
│   └── SKILL.md
├── add-service/
│   └── SKILL.md
├── add-industry/
│   └── SKILL.md
├── translate-content/
│   └── SKILL.md
├── add-team-member/
│   └── SKILL.md
├── add-testimonial/
│   └── SKILL.md
├── update-seo/
│   └── SKILL.md
└── generate-llms-txt/
    └── SKILL.md
```

Кожен SKILL.md описує: коли використовувати, які питання задати, які файли створити/змінити, як тестувати.

## 22.4. Промпт-приклади

**Додати кейс:**
> Claude, додай новий case study для клієнта "Acme Healthcare" у Швейцарії. Це була медична CRM з OCR для медичних рецептів. Challenge: ручне введення 500 рецептів/день. Solution: AI OCR + LLM extraction + integration з їх ERP. Result: 92% accuracy, 8x faster processing, 4 weeks delivery. Tech: Next.js, Python, Tesseract, Claude API, Postgres. Industry: Healthcare. Services: AI Services + Software Engineering.

Claude (з skill `add-case-study`):
1. Створює `apps/cms/src/seed/cases/acme-healthcare.ts` з повним об'єктом.
2. Генерує hero-копію та challenge/approach/solution тексти.
3. Створює (або просить вас завантажити) hero image.
4. Запускає seed-скрипт або через Payload API записує до БД.
5. Робить git commit "Add Acme Healthcare case study".
6. Підтверджує preview URL.

**Додати блог-пост:**
> Claude, напиши блог-пост на тему "5 ways Swiss SMEs use on-premise LLMs in 2026". Аудиторія — CTO малих компаній. 1200 слів. Включи 3 конкретні приклади з нашого досвіду (healthcare, retail, manufacturing). TL;DR блок, FAQ блок (5 питань), CTA на /services/ai-services. Локалізація — спершу EN, потім переклад на DE.

**Додати нову послугу:**
> Claude, додай послугу "Cybersecurity Audit & Implementation". Базуйся на найкращих практиках з нашого compliance-розділу. Структура — стандартна для service-сторінок. Метрики: ISO 27001 готовність, penetration tests, SOC. Локалізація — всі 4 мови.

## 22.5. Безпечні зміни

Кожен Claude-промпт — це Pull Request. CI запускає:
- Type-check (TypeScript).
- Lint (Biome).
- Build (Next.js).
- E2E test (Playwright — basic smoke test).
- Lighthouse CI (performance budget).

Тільки якщо все зелене — auto-merge у `main` (або review від PM, якщо налаштувати approval rules).

## 22.6. Контент-промпт-патерни

Шаблон "блог-пост":
```
TASK: write blog post
TOPIC: ...
AUDIENCE: ... (e.g., CTO of Swiss SME)
WORD COUNT: 1200
LOCALE: en (then translate to de/fr/it via translate-content skill)
STRUCTURE:
  - TL;DR (50 words)
  - Intro (150 words)
  - 3-5 sections (each 200-300 words)
  - FAQ (5 questions)
  - Conclusion (100 words) + CTA to {service}
SEO:
  - Target keyword: ...
  - Meta title: <60 chars
  - Meta description: <155 chars
SCHEMA: Article + FAQPage
INTERNAL LINKS: 3-5 to relevant services/industries/cases
```

Такі шаблони лежать у `.claude/prompts/blog-post.md` і Claude автоматично слідує їм.

---

# 23. CLAUDE.md — стартовий приклад

Нижче — приклад CLAUDE.md для репо. Це інструкція для Claude як для нового співробітника, який щодня працює з кодом.

```markdown
# CLAUDE.md — Trident Software Website

## Project Overview
This is the official website for Trident Software Sàrl, a Swiss
software development company. Built with Next.js 15, Payload 3,
Postgres on a self-hosted VPS in Switzerland.

## Quick Facts
- **Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind v4 + Payload 3 + Postgres
- **Languages:** EN (default), DE, FR, IT
- **Hosting:** VPS in Switzerland (Docker Compose)
- **Domain:** trident-software.ch
- **Compliance:** ISO 27000, nFADP, GDPR

## Repository Structure
- `apps/web/` — Next.js public site
- `apps/cms/` — Payload CMS
- `packages/ui/` — Shared component library
- `packages/design-tokens/` — Style Dictionary tokens
- `.claude/skills/` — Reusable workflows
- `content/` — Optional MDX content
- `docker/` — Compose files for VPS deploy

## Common Tasks

### Adding a blog post
Use skill: `add-blog-post`. See `.claude/skills/add-blog-post/SKILL.md`.

### Adding a case study
Use skill: `add-case-study`. Always include: client, industry, services, tech stack, results metrics.

### Adding a service
Use skill: `add-service`. Service pages follow the template `apps/web/components/templates/PageService.tsx`.

### Translating content
Use skill: `translate-content`. Translates from EN to DE/FR/IT via Claude API, marks as draft for native-speaker review.

## Code Conventions

- **TypeScript strict mode** enabled.
- **Components** in PascalCase, files match component name.
- **Atomic Design:** atoms, molecules, organisms, templates, pages.
- **Server Components** by default. Mark `"use client"` only if needed.
- **No localStorage / sessionStorage** in components — use server state.
- **Forms** via React Hook Form + Zod. Server actions for submission.
- **Styling** via Tailwind utility classes + `cva` for variants.
- **No inline styles** except for dynamic values (e.g., `style={{ '--accent': color }}`).
- **Icons** from `lucide-react` only.
- **Internal links** via Next.js `<Link>`. External — regular `<a>` with `rel="noopener noreferrer"` and trailing arrow.

## Content Conventions

- **Author block required** on all posts/guides.
- **TL;DR block required** at the top of every guide/playbook.
- **FAQ block** on service and industry pages (for FAQPage schema).
- **Locale priority:** EN first, then DE → FR → IT.
- **Hero image** required, AVIF format, with explicit alt text.
- **No "leverage", "empower", "unlock", "cutting-edge"** in copy.

## Brand Voice
Confident, precise, technical without being inaccessible. Direct, factual. Avoid hype.

Example good copy:
> "We deployed an on-premise LLM for a Swiss healthcare provider in 8 weeks. Their patient records never left their data centre. ISO 27001 audit passed in the same quarter."

Example bad copy (avoid):
> "We empower healthcare providers with cutting-edge AI solutions that unlock the full potential of their data assets."

## Performance Budgets
- LCP < 1.8s on slow 4G.
- INP < 200ms.
- CLS < 0.05.
- JS bundle < 100KB gzipped per route.
- Lighthouse Performance > 95.

## SEO Rules
- Every page has unique title (<60 chars) and description (<155 chars).
- Every page has canonical URL.
- Every page has hreflang for 4 languages.
- Every page has JSON-LD structured data.
- Author + datePublished + dateModified on all articles.

## AEO/GEO Rules
- TL;DR within first 80 words for AI to cite.
- Direct definitional statements ("X is...") in early paragraphs.
- Statistics with sources.
- FAQ section on long-form content.
- llms.txt auto-generated; do not edit manually.

## Git Workflow
- One feature per PR.
- Commit messages: `feat:`, `fix:`, `content:`, `chore:`.
- CI must be green before merge.

## Secrets & ENV
Stored in `.env.local` (dev) and Docker secrets (prod). Never commit.
Key envs:
- `PAYLOAD_SECRET`, `DATABASE_URL`, `RESEND_API_KEY`,
- `CLOUDFLARE_TURNSTILE_SECRET`, `S3_ENDPOINT`, `S3_KEY`, `S3_SECRET`,
- `CLAUDE_API_KEY` (for translation skill).

## Useful References
- Payload docs: https://payloadcms.com/docs
- Next.js 15: https://nextjs.org/docs
- Tailwind v4: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
```

---

# 24. Prompt-шаблони для розширення сайту

Нижче — готові prompt-шаблони, які лежать в `.claude/prompts/`. Користувач (PM / маркетолог / CEO) може просто запустити Claude з шаблоном і заповнити плейсхолдери.

## 24.1. Шаблон "Новий case study"

```
Claude, add a new case study with the following details:

CLIENT: {ClientName}
CLIENT_URL: {https://...} (optional)
CLIENT_COUNTRY: {Switzerland|EU|USA|Canada|...}
INDUSTRY: {automotive|healthcare|fashion|...} (must match existing industry slug)
SERVICES: {ai-services, software-engineering, ...}
TECH_STACK: {Next.js, Python, Claude API, Postgres, ...}

CHALLENGE: {1-2 paragraphs describing the business problem}

APPROACH: {1-2 paragraphs describing how we approached it}

SOLUTION: {3-5 paragraphs about what we built}

RESULTS:
  - Metric 1: {value}
  - Metric 2: {value}
  - Metric 3: {value}

TESTIMONIAL: {optional quote}
TESTIMONIAL_AUTHOR: {name + role}

DELIVERY_TIMELINE: {e.g., "8 weeks"}
BUDGET_RANGE: {optional}

Please:
1. Create the case study in Payload (via seed script or API).
2. Generate appropriate slug.
3. Write SEO meta title and description.
4. Generate JSON-LD schema.
5. Create EN version first; mark for translation to DE/FR/IT.
6. Commit changes with message "case: add {ClientName}".
```

## 24.2. Шаблон "Новий блог-пост"

```
Claude, write a blog post:

TOPIC: {short title or question}
TARGET KEYWORD: {primary keyword}
SECONDARY KEYWORDS: {2-3 related}
AUDIENCE: {persona — CTO, founder, etc.}
WORD COUNT: {800-1500}
TONE: {educational | technical | opinion}

STRUCTURE:
- TL;DR (50-80 words)
- Introduction (100-150 words)
- 3-5 main sections
- FAQ (5 questions)
- Conclusion + CTA to {service-slug}

INTERNAL LINKS: link to {services / cases / industries}
EXTERNAL LINKS: 2-4 authoritative sources

LOCALE: en (then translate to de via translate-content skill)

Please:
1. Create MDX file at content/blog/{slug}.mdx
2. Add frontmatter (title, description, author, date, image, tags, category)
3. Add author reference (default: maksym-shytov)
4. Add hero image placeholder (request human upload if needed)
5. Add JSON-LD Article schema
6. Commit "content: blog post {slug}"
```

## 24.3. Шаблон "Нова послуга"

```
Claude, add a new service page:

SERVICE_NAME: {full name}
SERVICE_SLUG: {url-slug}
SHORT_DESCRIPTION: {one line}
PARENT_CATEGORY: {main service group}

KEY OFFERINGS: {3-5 bullets}
INDUSTRIES_SERVED: {industries this service is most relevant for}
TECH_STACK: {tools, frameworks}

PROCESS_STEPS: {3-5 steps with name and description}
PRICING_MODEL: {fixed | T&M | dedicated}
TYPICAL_ENGAGEMENT_LENGTH: {weeks/months}

CASES_TO_REFERENCE: {existing case slugs}

Please follow the PageService template and:
1. Create Payload service entry.
2. Add to global Navigation.
3. Generate SEO meta.
4. Generate JSON-LD Service schema.
5. Mark for translation.
6. Update llms.txt.
```

## 24.4. Шаблон "Локалізація"

```
Claude, translate the following content from EN to {DE|FR|IT}:

CONTENT_TYPE: {service | industry | case | post | guide}
SOURCE_SLUG: {en-slug}

TRANSLATION RULES:
- Preserve all JSX/MDX components unchanged.
- Translate slugs to native (e.g., /services/ai-services → /de/dienstleistungen/ki-services).
- Use formal "Sie" (DE) / "vous" (FR) / "Lei" (IT).
- Keep brand name "Trident Software" untranslated.
- Convert dates and numbers to locale format.
- Update internal links to translated equivalents.

After translation:
1. Save as draft in Payload (status: needs-review).
2. Notify {locale}-reviewer via email.
3. Commit "i18n: {locale} translation for {slug}".
```

## 24.5. Шаблон "Оновлення llms.txt"

```
Claude, regenerate llms.txt based on current Payload content.

Rules:
1. Include all published Services, Industries, Cases.
2. Include latest 10 blog posts and all guides/playbooks.
3. Include Team page, About, Compliance, Contacts.
4. Use the template at scripts/generate-llms-txt.ts.
5. Save to public/llms.txt.
6. Commit "chore: regenerate llms.txt".
```

---

# 25. Performance і Core Web Vitals план

## 25.1. Цільові метрики

| Metric | Target | Stretch |
|---|---|---|
| LCP | < 1.8s | < 1.2s |
| INP | < 200ms | < 150ms |
| CLS | < 0.05 | < 0.02 |
| TTFB | < 200ms | < 100ms |
| FCP | < 1.0s | < 0.7s |
| Lighthouse Perf | > 95 | > 99 |
| Lighthouse A11y | > 95 | 100 |
| Lighthouse SEO | 100 | 100 |
| Lighthouse Best Practices | > 95 | 100 |

## 25.2. Як цього досягти

**HTML/SSR:**
- Server Components за замовчуванням.
- Streaming + suspense boundaries для async data.
- Static generation для всіх marketing-сторінок з ISR (revalidate: 3600).

**JavaScript:**
- `next/dynamic` для важких компонентів (theme toggle, animations).
- Tree-shaken icon imports з `lucide-react`.
- No Moment.js / lodash; use Intl + minor utilities.
- Budget: 80KB JS per route gzipped.

**CSS:**
- Tailwind v4 with `@layer` for strict ordering.
- Critical CSS inlined automatically by Next.js.
- No unused CSS (Tailwind purges).

**Images:**
- `next/image` з AVIF + WebP fallback.
- All images explicit width/height (CLS = 0).
- Lazy loading by default; eager only above-the-fold.
- AI-generated hero illustrations as SVG where possible (no raster).

**Fonts:**
- Self-hosted Geist + Geist Mono via `next/font/local`.
- `font-display: optional` для hero, `swap` для body.
- Subset для EN/DE/FR/IT.

**Network:**
- HTTP/3 через Caddy.
- Brotli 11 compression.
- Cache-Control headers: 1y immutable for static assets.

**Third-party scripts:**
- Plausible — async, no cookies.
- PostHog — load after first interaction.
- Cloudflare Turnstile — load only on form sections.

## 25.3. Performance Monitoring

- **Lighthouse CI** у GitHub Actions — fails build якщо drop >5%.
- **Real User Monitoring (RUM)** через `next/web-vitals` → Plausible.
- **Synthetic monitoring** з Checkly або Uptime Kuma — every 5 min for home + critical pages.

---

# 26. Безпека, GDPR/nFADP, ISO 27001

## 26.1. Регуляторний контекст

- **nFADP** (Swiss): чинний з 2023-09-01. Вимагає explicit consent, transparency, data subject rights, breach notification within 72h.
- **GDPR** (EU): для будь-якого EU-користувача.
- **EU AI Act**: для AI-послуг — risk-classification, model documentation, transparency.
- **Swiss Good Privacy** standard.

## 26.2. Технічні заходи

**Транзит:**
- TLS 1.3 only (Caddy default).
- HSTS preload з max-age=63072000.
- Certificate pinning не використовуємо (риск locking).

**At-rest:**
- Postgres encryption через filesystem (LUKS на VPS).
- MinIO server-side encryption.
- Daily backup через restic, шифрований, в другий швейцарський bucket.

**Application:**
- CSP (Content Security Policy) strict.
- SRI (Subresource Integrity) для CDN-assets.
- CSRF tokens на формах.
- Cloudflare Turnstile для anti-bot.
- Payload — RBAC, no public write to non-Leads collections.
- Secrets через Docker secrets, ніколи не в env-файлах коміченних.

**Auth:**
- Payload admin — за `/admin` префіксом, IP-allowlist для production (опційно).
- 2FA для admin users.
- Password requirements: 12+ chars, mixed case, digit, symbol.

## 26.3. Privacy by Design

- Plausible не записує IP, не використовує cookies.
- PostHog — з PII-маскуванням за замовчуванням.
- Leads form — мінімальний обсяг полів (name, email, message; phone/company optional).
- Newsletter — explicit double opt-in.
- Cookies — лише technical (theme, locale). Banner простий "Required cookies only" без accept/reject toggle, бо без marketing cookies.

## 26.4. Документація

Нові правові сторінки:
- **Privacy Policy** — переписаний під nFADP + GDPR.
- **Terms & Conditions** — для B2B-контрактів.
- **Cookie Policy** — список cookies (мінімальний).
- **Imprint** — обов'язково для DACH.
- **Security** — публічна сторінка про security practices (демонструє compliance до клієнтів).

## 26.5. ISO 27001/27000 готовність

Поточно Trident заявляє compliance з ISO 27000. У v2:
- Окрема сторінка `/compliance` з:
  - Списком сертифікатів (з фото/PDF).
  - Описом процесів (incident response, data handling, access control).
  - SOC 2 readiness (опційно).
- Sub-pages для конкретних клієнтських вимог (vendor questionnaire prep).

---

# 27. Accessibility (WCAG 2.2 AA)

## 27.1. Цільовий стандарт

WCAG 2.2 Level AA — це юридична вимога у багатьох європейських юрисдикціях для B2B-сайтів (EAA, European Accessibility Act, чинний 2025-06-28). Також — критично для enterprise-аудиторії.

## 27.2. Конкретні правила

- **Color contrast:** 4.5:1 для тексту, 3:1 для UI-елементів.
- **Keyboard navigation:** усі інтерактивні елементи доступні з клавіатури, видимий focus state.
- **Skip links:** "Skip to main content" на кожній сторінці.
- **Aria-labels:** на всіх icon-only кнопках.
- **Semantic HTML:** `<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`.
- **Heading hierarchy:** один `<h1>` на сторінку, послідовні `<h2>` → `<h3>` без перескакування.
- **Forms:** label поруч з input, error messages з aria-describedby.
- **Images:** explicit alt; декоративні — `alt=""`.
- **Motion:** respect `prefers-reduced-motion` — вимикаємо складні анімації.
- **Videos:** captions для всіх відео (якщо будуть).

## 27.3. Тестинг

- **axe-core** в CI (GitHub Actions).
- **Manual:** screen reader test (VoiceOver, NVDA) на home + 1 service + 1 case + 1 blog.
- **Lighthouse a11y > 95** як build gate.

---

# 28. VPS-хостинг, Docker, CI/CD

## 28.1. VPS вимоги (мінімальні для production)

| Resource | Spec |
|---|---|
| CPU | 4 vCPU |
| RAM | 8 GB |
| Disk | 100 GB NVMe SSD |
| Bandwidth | 1 TB/month |
| Location | Switzerland (Hetzner, Infomaniak, Exoscale, або Hostpoint) |
| OS | Ubuntu 24.04 LTS |
| Backup | Daily snapshot |

Рекомендую **Exoscale** (швейцарський провайдер, ISO 27001, GDPR/nFADP-compliant data centres в Geneva/Zurich) для production. Це підкреслить швейцарську data residency у компланенс-комунікаціях.

## 28.2. Docker Compose stack

```yaml
# docker-compose.prod.yml
services:
  caddy:
    image: caddy:2-alpine
    ports: ["80:80", "443:443"]
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy_data:/data
      - caddy_config:/config
    restart: unless-stopped

  web:
    build: { context: ., dockerfile: docker/Dockerfile.web }
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - PAYLOAD_URL=http://cms:3001
    depends_on: [postgres, cms]
    restart: unless-stopped

  cms:
    build: { context: ., dockerfile: docker/Dockerfile.cms }
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - PAYLOAD_SECRET=${PAYLOAD_SECRET}
      - S3_ENDPOINT=${S3_ENDPOINT}
    depends_on: [postgres, minio]
    restart: unless-stopped

  postgres:
    image: postgres:16-alpine
    environment:
      - POSTGRES_DB=trident
      - POSTGRES_USER=${PG_USER}
      - POSTGRES_PASSWORD=${PG_PASS}
    volumes:
      - pg_data:/var/lib/postgresql/data
    restart: unless-stopped

  minio:
    image: minio/minio
    command: server /data --console-address ":9001"
    environment:
      - MINIO_ROOT_USER=${MINIO_USER}
      - MINIO_ROOT_PASSWORD=${MINIO_PASS}
    volumes: [minio_data:/data]
    restart: unless-stopped

  plausible:
    image: plausible/analytics:latest
    environment:
      - DATABASE_URL=postgres://...
      - SECRET_KEY_BASE=${PLAUSIBLE_SECRET}
    depends_on: [postgres]
    restart: unless-stopped

  posthog:
    # ...
    restart: unless-stopped

volumes:
  pg_data:
  minio_data:
  caddy_data:
  caddy_config:
```

## 28.3. Caddyfile

```caddyfile
trident-software.ch {
  encode brotli zstd gzip
  reverse_proxy /admin* cms:3001
  reverse_proxy /api/payload* cms:3001
  reverse_proxy web:3000

  header {
    Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    X-Content-Type-Options nosniff
    X-Frame-Options SAMEORIGIN
    Referrer-Policy strict-origin-when-cross-origin
    Permissions-Policy "geolocation=(), microphone=(), camera=()"
  }
}

analytics.trident-software.ch {
  reverse_proxy plausible:8000
}
```

## 28.4. CI/CD (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'pnpm' }
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
      - run: pnpm run typecheck
      - run: pnpm run test
      - run: pnpm run build

  lighthouse:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install && pnpm run build
      - run: npx @lhci/cli autorun

  deploy:
    needs: [test, lighthouse]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to VPS
        run: |
          ssh deploy@vps.trident-software.ch \
            "cd /opt/trident && git pull && docker compose -f docker-compose.prod.yml up -d --build"
```

## 28.5. Backup стратегія

- Postgres pg_dump — щодня о 03:00, шифрований через GPG, заллитий у другий MinIO bucket.
- MinIO data — щодня rsync до інший VPS у DC у Zurich (для DR).
- Retention: 7 daily, 4 weekly, 12 monthly.
- DR-tests — раз на квартал.

---

# 29. Roadmap — 5 фаз із термінами

## 29.1. Загальна тривалість: 14–18 тижнів

```
Phase 0: Discovery & Strategy        2 weeks
Phase 1: Design System & IA          3 weeks
Phase 2: Development Foundation      4 weeks
Phase 3: Content Migration & Pages   3 weeks
Phase 4: SEO/GEO/AEO + i18n          2 weeks
Phase 5: Pre-launch & Launch         2 weeks
                                     -----
                                     16 weeks (4 months)
```

## 29.2. Деталі фаз

### Phase 0 — Discovery & Strategy (Weeks 1–2)
- Підтвердження позиціонування (Section 6).
- Workshop із стейкхолдерами Trident — фінальний brand voice.
- Затвердження сайтмапу (Section 11).
- Затвердження дизайн-напрямку (moodboard, 3 концепти).
- Setup репо, Linear/Jira, Figma file.
**Deliverables:** PRD, brand brief, sitemap, info architecture map.

### Phase 1 — Design System & IA (Weeks 3–5)
- Atomic Design components у Figma.
- Дизайн-токени, theming.
- Mockup'и для 10 ключових сторінок (home, services hub, 2 services detail, industries hub, 2 industries detail, case detail, blog list, blog post).
- Дизайн mobile-first для всіх 10.
- Дизайн-рев'ю з CEO.
**Deliverables:** Figma file з повним design system, 10 high-fidelity mockup'ів.

### Phase 2 — Development Foundation (Weeks 6–9)
- Setup monorepo (Next.js + Payload + Postgres + Docker).
- Реалізація всіх Atoms + Molecules.
- Реалізація 5 Organisms (Header, Footer, HeroSection, ServicesShowcase, CTASection).
- Підключення i18n (4 мови, тестові переклади).
- Підключення Payload колекцій (Pages, Services, Industries, Cases, Posts, Authors, Media, Leads).
- Базова admin-UI кастомізація.
- CI/CD setup.
- VPS provisioning.
**Deliverables:** runnable site з placeholder content, working CMS, dev environment.

### Phase 3 — Content Migration & Pages (Weeks 10–12)
- Перенесення 27 кейсів (rewrite з v1).
- Перенесення ~25 блог-постів.
- Створення 8 service-сторінок (5 existing + 3 нові).
- Створення 16 industry-сторінок.
- About, Team, Careers, Events, Compliance, Contacts.
- Legal pages (Privacy, Terms, Cookies, Imprint).
- Початкові переклади на DE (з Claude API, людський рев'ю).
**Deliverables:** Site з повним контентом у EN + 30% у DE.

### Phase 4 — SEO/GEO/AEO + i18n (Weeks 13–14)
- llms.txt generation.
- JSON-LD на всіх сторінках.
- Sitemap.xml, robots.txt, RSS.
- hreflang setup.
- 301-redirects з v1 (повний test).
- FR і IT переклади (top sturct + услуги; cases — поетапно).
- Цілі в Plausible, PostHog.
- Lead-форми + Turnstile.
**Deliverables:** Site SEO/AEO-готовий, 4 мови, redirects active.

### Phase 5 — Pre-launch & Launch (Weeks 15–16)
- Final QA (Playwright E2E на критичних flow's).
- Accessibility audit (axe + manual NVDA/VoiceOver).
- Lighthouse CI verification.
- Security review (security headers, CSP, dependency audit).
- DNS prep (CNAME staging, TTL low).
- Soft-launch: запуск на staging, share з командою + 5 близьких клієнтів для feedback.
- Final fixes.
- DNS cutover.
- Post-launch monitoring (24h watch).
- 301 redirects monitoring.
- Submit sitemap to GSC and Bing.
**Deliverables:** Live site at trident-software.ch.

## 29.3. Фази після лончу (post-launch)

### Phase 6 — Optimization (Weeks 17–20)
- Перші A/B тести.
- Збір real-user feedback.
- Закриття "хвостів" у DE/FR/IT перекладах.
- 5 нових AI Playbooks.

### Phase 7 — Local SEO Expansion (Weeks 21–24)
- 5 локацій-сторінок (Geneva, Lausanne, Zurich, Bern, Sion).
- Local schema, Google Business Profile синхронізація.

### Phase 8 — Tools & Calculators (Weeks 25–28)
- AI ROI Calculator.
- Tech Stack Picker (інтерактивний).
- Compliance Self-Assessment.

---

# 30. Оцінки часу та орієнтовний бюджет

## 30.1. Команда (per phase)

| Phase | Roles | FTE-weeks |
|---|---|---|
| 0 | PM (0.5), CEO (0.2), Designer (0.3), Tech Lead (0.5) | 1.0 |
| 1 | PM (0.5), Designer (1.0), Tech Lead (0.5) | 6.0 |
| 2 | PM (0.5), 2× Frontend (1.0), 1× Backend (1.0), Tech Lead (0.5) | 16 |
| 3 | PM (0.5), Content Editor (1.0), 1× Frontend (1.0), Translator-Reviewer (0.5) | 9 |
| 4 | PM (0.3), 1× Frontend (1.0), 1× Backend (0.5), Translator-Reviewer (1.0) | 5.6 |
| 5 | PM (0.5), Tech Lead (0.5), QA (1.0), DevOps (0.5) | 5.0 |
| **Total** | | **~42.6 FTE-тижнів** |

## 30.2. Бюджетні діапазони (CHF, орієнтовно)

При середній ставці CHF 700/день для швейцарського/змішаного проекту:

| Item | Estimate (CHF) |
|---|---|
| Discovery & Strategy | 8 000 |
| Design System & IA | 22 000 |
| Development | 60 000 |
| Content Migration & Pages | 28 000 |
| SEO/GEO/AEO + i18n | 14 000 |
| Pre-launch & Launch | 12 000 |
| **Subtotal** | **144 000** |
| Contingency 15% | 21 600 |
| **Total v1** | **~165 600** |

### Operating expenses (per month, post-launch)
- VPS (Exoscale 4 vCPU/8GB/100GB SSD): ~CHF 90
- Domain + DNS (Cloudflare): ~CHF 20
- Resend (email): ~CHF 25
- Backup storage: ~CHF 15
- Sentry / PostHog (self-hosted included): 0
- Plausible (self-hosted included): 0
- Claude API for translations: ~CHF 30–80
- Cloudflare Turnstile: 0 (free tier)
- **OPEX total:** **~CHF 180–230/місяць**

### Альтернативний бюджет (lean варіант)
Якщо команда виконує більше внутрішніми ресурсами:
- Дизайн внутрішнє (UI/UX уже є в команді): -CHF 18 000
- Backend через Bohdan / Maksym: -CHF 15 000
- **Lean estimate:** **~CHF 110 000**

## 30.3. Оцінки часу для post-launch operations

| Завдання | Час (одна особа) |
|---|---|
| Додавання нового блог-посту через Claude | 30 хв |
| Додавання нового кейсу через Claude | 60 хв |
| Додавання нової послуги (через Claude) | 90 хв |
| Локалізація 1 сторінки (Claude + native review) | 30 хв |
| Оновлення дизайн-системи (новий компонент) | 4–8 год |
| Створення локації-сторінки (Geneva/Zurich) | 2 год |

---

# 31. Ризики та митигація

| # | Ризик | Імовірність | Вплив | Митигація |
|---|---|---|---|---|
| 1 | SEO drop під час міграції | Висока | Високий | 301 redirect map, hreflang testing, sitemap submission, моніторинг 90 днів |
| 2 | i18n переклади низької якості | Середня | Середній | Claude AI + native human review, перевірка SME |
| 3 | Затримка через брак рук | Середня | Середній | Resource buffer 15% у roadmap, готові prompt-шаблони для асинхронної роботи з Claude |
| 4 | Скоупкріп — нові ідеї під час dev | Висока | Середній | Фіксація сайтмапу і дизайн-системи у Phase 1; нові ідеї — у backlog для Phase 6+ |
| 5 | VPS падіння | Низька | Високий | Daily backups, DR-тест, monitoring + Uptime Kuma |
| 6 | Юридичний non-compliance | Середня | Високий | Lawyer review перед лончем (Privacy, Terms, Imprint) |
| 7 | Payload bugs у v3 (recent release) | Низька | Середній | Pin версії, моніторинг GitHub, mature components only |
| 8 | Performance regressions | Середня | Високий | Lighthouse CI у GitHub Actions, real-user monitoring |
| 9 | AI-перекладач "галюцинує" терміни | Середня | Середній | Glossary у CLAUDE.md, обов'язковий review для tier-1 контенту |
| 10 | Брак real cases data (стара статистика портфоліо) | Висока | Середній | Інтерв'ю з PM/CTO для збору реальних цифр; placeholder "Project on request" якщо немає |
| 11 | Перевантаженість команди | Середня | Високий | Тиждень-by-тиждень scope-tracking; розширення команди при необхідності |
| 12 | Cookie / consent неузгодженість | Низька | Середній | Lawyer + privacy-by-design (мінімум cookies) |

---

# 32. Команда і ролі

## 32.1. Core team (для проєкту редизайну)

| Роль | Хто (приклад) | Обов'язки |
|---|---|---|
| Product Owner / PM | Bohdan Voitovych | Roadmap, scope, stakeholder mgmt, daily standup |
| Tech Lead / Architect | Maksym Shytov (CTO) | Архітектура, code review, dev-стандарти |
| Lead Designer | (TBD з команди / contractor) | Дизайн-система, mockups |
| Frontend Engineer 1 | (з команди) | Next.js, компоненти, atomic system |
| Frontend Engineer 2 | (з команди) | i18n, форми, performance |
| Backend Engineer | (з команди) | Payload, collections, integrations |
| QA Engineer | Dmytro Panasiuk / Kateryna | E2E tests, accessibility, regression |
| DevOps | Anton Savchuk | VPS, Docker, CI/CD |
| Content Editor (EN) | Natalia Shytova / external | Rewrite cases, edit posts |
| Native reviewers (DE/FR/IT) | Freelancers | Tier-1 локалізація |

## 32.2. Stakeholders

- CEO Trident — фінальне візуальне рішення, brand voice.
- Sales/Account Managers — input для lead-funnel.
- Marketing (якщо є) — input для content calendar.

## 32.3. Workflow

- **Tools:** GitHub (code, PRs), Figma (design), Linear/Asana (tasks), Slack (комунікація).
- **Cadence:**
  - Daily 15-min standup (PM + tech lead + active devs).
  - Weekly demo (15 хв) для CEO/stakeholders.
  - Phase-end review (1 год).

---

# 33. Метрики успіху (KPIs)

## 33.1. Tier 1 — strategic

| KPI | Baseline (v1) | 6 months | 12 months |
|---|---|---|---|
| Monthly organic traffic | ~2-3K (est.) | 5-7K | 12-18K |
| Qualified leads / month | ~10-15 (est.) | 25-30 | 50-70 |
| AI citations (Perplexity, ChatGPT) | 0 | 30/mo | 150/mo |
| Conversion rate (visitor → lead) | ~1.5% (est.) | 2.5% | 3.5% |
| Newsletter subscribers | ~0 (est.) | 300 | 1500 |
| Domain Rating (Ahrefs) | TBD | +5 | +15 |

## 33.2. Tier 2 — operational

| KPI | Target |
|---|---|
| Core Web Vitals — % "good" | > 95% |
| Lighthouse Performance | > 95 |
| Uptime | 99.9% |
| Time to publish new blog post | < 45 min |
| Time to publish new case | < 90 min |
| Languages — coverage of tier-1 content | 100% EN, 100% DE, 80% FR/IT |

## 33.3. Інструменти трекінгу

- Google Search Console (organic clicks, impressions, CTR).
- Plausible (real-time traffic, top pages, top sources).
- PostHog (funnels, retention).
- Payload Leads (lead volume by source).
- llmrefs.com / Otterly (AI citations tracking).
- Ahrefs / SEMrush (DR, backlinks, keyword positions).

---

# 34. Додатки

## 34.1. Чек-ліст готовності до запуску

### Технічний
- [ ] Всі сторінки v1 мають 301-redirect на v2
- [ ] hreflang на всіх сторінках для 4 мов
- [ ] Canonical URL на всіх сторінках
- [ ] sitemap.xml + sitemap-{locale}.xml
- [ ] robots.txt з AI-боти allowlist
- [ ] llms.txt згенерований
- [ ] JSON-LD на всіх типах сторінок
- [ ] OG-image + Twitter Card на всіх сторінках
- [ ] Favicon + Apple Touch + manifest.json
- [ ] HSTS preload submitted
- [ ] Security headers (CSP, X-Frame, Referrer-Policy)

### Контент
- [ ] Home + 8 Services + 16 Industries + 27 Cases публіковані
- [ ] Privacy, Terms, Cookies, Imprint — реальний текст
- [ ] About, Team, Compliance заповнені
- [ ] Blog з 10+ migrated постами
- [ ] Author pages для top-5 авторів

### Performance
- [ ] Lighthouse Perf > 95 на home, service, case, blog post
- [ ] LCP < 1.8s на mobile slow 4G
- [ ] CLS < 0.05
- [ ] JS bundle < 100KB gzipped

### Accessibility
- [ ] axe-core без помилок на ключових сторінках
- [ ] Keyboard navigation працює
- [ ] Screen reader test пройдений (1 сторінка кожного типу)

### Lead-funnel
- [ ] Контактна форма пише у Payload Leads
- [ ] Email-нотифікації на info@trident-software.ch
- [ ] Cloudflare Turnstile активний
- [ ] nFADP consent на всіх формах

### Analytics
- [ ] Plausible підключений
- [ ] PostHog підключений (з PII masking)
- [ ] GSC verified
- [ ] Bing Webmaster verified
- [ ] Google Business Profile sync

### Legal
- [ ] Lawyer review for Privacy / Terms / Imprint
- [ ] Cookie banner (мінімальний, бо мінімум cookies)
- [ ] GDPR data subject rights endpoints (`/api/data/export`, `/api/data/delete`)

## 34.2. Приклад MDX блог-посту

```mdx
---
title: "On-premise LLM for Swiss healthcare: a 2026 playbook"
description: "How a Swiss radiology clinic deployed Llama 3 locally — what we learned about model selection, GPU sizing, and compliance."
date: 2026-05-20
author: maksym-shytov
category: ai-services
tags: [llm, healthcare, on-premise, nfadp, switzerland]
hero: /images/blog/on-premise-llm-hero.avif
heroAlt: "On-premise LLM rack in a Swiss data centre"
locale: en
readTime: 9
---

import { TLDR, FAQ, Stat, CTACard } from "@/components/blog";

<TLDR>
Swiss healthcare providers can run open-source LLMs on-premise to meet
nFADP and FOPH data residency requirements. Llama 3.1 70B on 2× A100s
gives clinical-grade accuracy for medical note summarisation at ~CHF 18K
upfront and CHF 350/month operating costs. Below is a practical playbook.
</TLDR>

## What is on-premise LLM?

On-premise LLM means running a large language model entirely on hardware
you control — typically a GPU server in your data centre or co-location.
Patient data never leaves your network, which is the only compliant
architecture for clinical PHI under nFADP and the Swiss Federal Office
of Public Health (FOPH) requirements.

## Why Swiss healthcare needs on-premise

<Stat number="92%" label="of Swiss hospitals will deploy AI by 2027 (Bain 2025)" />

Three forces:
1. **Compliance.** nFADP §6 requires explicit consent for any cross-border PHI transfer.
2. **Latency.** Clinical workflows need <500ms response for triage.
3. **Cost.** Cloud LLM API costs scale with usage. On-prem is fixed.

[...]

## FAQ

<FAQ
  items={[
    {
      q: "What models work on-premise for medical?",
      a: "Llama 3.1 70B, Mixtral 8x22B, Mistral Large. Avoid 7B for clinical accuracy."
    },
    {
      q: "Minimum GPU?",
      a: "1× A100 80GB for 70B Q4. 2× for production redundancy."
    },
    // ...
  ]}
/>

<CTACard
  title="Need help deploying on-premise LLM?"
  description="We've shipped 4 on-premise LLM systems for Swiss healthcare in the past year."
  cta="Talk to Maksym"
  href="/contacts"
/>
```

## 34.3. Приклад structure llms.txt

```markdown
# Trident Software

> Swiss AI and software development company. ISO 27000. nFADP compliant. 4 languages: EN/DE/FR/IT. Based in Sion, Valais.

## Company

- [About](https://trident-software.ch/about): History, mission, values
- [Team](https://trident-software.ch/team): 26 engineers across CH, IL, UA
- [Compliance](https://trident-software.ch/compliance): ISO 27000, nFADP, GDPR

## Services

- [AI Services for Business](https://trident-software.ch/services/ai-services): On-premise LLM, OCR, STT, RAG, agents
- [Software Engineering](https://trident-software.ch/services/software-engineering): Custom platforms, web, mobile
- [Embedded & IoT](https://trident-software.ch/services/embedded-and-iot): Firmware, device integration
- [CTO-as-a-Service](https://trident-software.ch/services/cto-as-a-service): Fractional CTO for startups
- [Cloud Consulting](https://trident-software.ch/services/cloud-consulting): AWS, Azure, GCP

## Industries

- [Automotive](https://trident-software.ch/industries/automotive): B2B parts platforms, dealership tech
- [Healthcare](https://trident-software.ch/industries/healthcare): Patient platforms, on-prem AI
- [Fashion & Luxury](https://trident-software.ch/industries/fashion-and-luxury): D2C, marketplace
[...]

## Cases

- [Aida Medicine Platform](https://trident-software.ch/cases/aida-medicine)
- [8Move Logistics Suite](https://trident-software.ch/cases/8move-admin)
[...]

## Contact

- Email: info@trident-software.ch
- Phone: +41 79 745 44 29
- Address: Rue de l'Industrie 23, 1950 Sion, Switzerland
- LinkedIn: https://www.linkedin.com/company/tridentsoftware/
```

## 34.4. Інспіраційні референси для дизайн-команди

| Сайт | Що подивитись |
|---|---|
| linear.app | Hero, typography, scroll-animation |
| vercel.com | Dark mode parity, font, Customers section |
| anthropic.com | AI-bold visuals, research section, story-format cases |
| stripe.com/sessions | Long-form event page treatment |
| liip.ch | Swiss agency reference |
| devedis.com | Payload + Next.js stack visual |
| inflect.ch | AI-positioned Swiss agency |
| railway.com | Pricing, calculator pages |
| browserbase.com | Compact technical landing |
| ghost.org | Blog reading experience |

## 34.5. Скорочення і глосарій

- **AEO** — Answer Engine Optimization.
- **GEO** — Generative Engine Optimization.
- **LLM** — Large Language Model.
- **RAG** — Retrieval-Augmented Generation.
- **OCR** — Optical Character Recognition.
- **STT** — Speech-to-Text.
- **nFADP** — new Federal Act on Data Protection (Swiss, 2023-09-01).
- **GDPR** — General Data Protection Regulation (EU).
- **CMS** — Content Management System.
- **IA** — Information Architecture.
- **ISR** — Incremental Static Regeneration.
- **SSR** — Server-Side Rendering.
- **PHI** — Protected Health Information.
- **DACH** — Germany, Austria, Switzerland.
- **DR** — Disaster Recovery.
- **SLA** — Service Level Agreement.
- **E-E-A-T** — Experience, Expertise, Authoritativeness, Trustworthiness (Google content quality criteria).

---

## Заключне слово

Цей план — це не "ремонт сайту". Це **інвестиція у бренд Trident Software як AI-нативного швейцарського інженерного партнера**. Поточний сайт виконує функцію візитки; новий сайт стане:
- Каналом органічного росту (Google + AI search).
- Демонстрацією технічної експертизи (own engineering DNA in every line of code).
- Інструментом продажів (lead funnel, dashboards, automation).
- Платформою для контенту (масштабовано через Claude-промпти).
- Швейцарським флагманом для DACH-ринку.

ROI реалістично очікувати протягом 6–12 місяців за рахунок:
- Росту якісних лідів у 3-5x.
- Появи у AI-відповідях нових категорій B2B-запитів.
- Скорочення часу на публікацію контенту на 80–90%.
- Підняття trust-score у CTO-аудиторії — це конвертується у вищі ставки за свої послуги.

Я готовий перейти до Фази 1 (Design System & Information Architecture) одразу після затвердження цього плану. Перші артефакти Фази 1 — Figma-файл із атомами і молекулами, mockup'и для home + 2 service pages — можна продемонструвати через 2 тижні.

— Підготовлено як стратегічний документ для CEO та технічного керівництва Trident Software.
