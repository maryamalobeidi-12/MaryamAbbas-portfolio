const links = {
  neuhaus: 'https://www.figma.com/design/tktgMCNnE92RxmZ49N04Iu/Untitled?node-id=36-86',
  zenflow: 'https://www.figma.com/design/zZoiTMjzT6peD0fkK25nJQ/DVG2-B_Maryam-Abbas_Herkansing-Content-Management?node-id=2-2',
  tokyo: 'https://www.figma.com/slides/RBfTzhl4HZ2iu1TUrLnWVg'
};

const content = {
  en: {
    nav: ['Home', 'Work', 'About', 'Connect'], contact: 'Connect', scroll: 'Scroll to explore',
    hello: 'HI, I’M MARYAM ABBAS', heroOne: 'Digital Designer', heroTwo: '& Creative',
    heroIntro: 'I create thoughtful visual designs with a focus on simplicity, creativity, and detail.',
    explore: 'Explore my work', aboutCta: 'More about me', selected: 'Selected work.',
    selectedNote: 'A few ways I turn an idea into a visual story.', allWork: 'View all projects',
    workScrollHint: 'Scroll to explore', workSwipeHint: 'Swipe to explore', moreWork: 'There is more to see.',
    homeAboutEyebrow: 'A little about me', homeAboutTitle: 'Curiosity is where my work begins.',
    homeAboutBody: 'From a photographed moment to a considered interface, I look for the feeling that makes a visual story memorable.',
    pageWorkEyebrow: 'Portfolio / 2026', pageWorkTitle: 'Selected work.',
    pageWorkIntro: 'Photography, editorial design, digital experiences and moving image — collected in one place.',
    pageAboutEyebrow: 'About Maryam', pageAboutTitle: 'Simple ideas. Meaningful design.',
    who: 'Who I am', whoTitle: 'Graphic & Digital Design student.',
    bio: "I'm Maryam Abbas, a digital design student at Artevelde University of Applied Sciences in Ghent. My background in graphic design and programming shapes the way I approach an image or interface: with curiosity, structure and attention to the details people notice. My practice moves between UI/UX, photography, branding, motion and editorial design.",
    languages: 'I speak Dutch and Arabic, and work in Dutch, English, French and Arabic.',
    skillsEyebrow: 'What I do', skillsTitle: 'Skills & tools.', design: 'Design', tools: 'Tools', process: 'Process',
    designSkills: ['UI/UX design', 'Visual design', 'Branding & identity', 'Typography', 'Motion design'],
    toolSkills: ['Figma', 'Adobe Creative Suite'],
    processSkills: ['Design thinking', 'Wireframing', 'Prototyping', 'User research', 'Agile workflow'],
    tickerSkills: ['Visual design', 'Branding', 'UI/UX', 'Photography', 'Motion', 'Editorial design', 'Typography'],
    pauseTicker: 'Pause motion', playTicker: 'Play motion',
    pathEyebrow: 'My path', pathTitle: 'Experience & education.', present: 'present',
    studyDigital: 'Digital design', studyProgramming: 'Programming', studyGraphic: 'Graphic design',
    connectEyebrow: 'Connect', connectTitle: "Have an idea in mind?", connectAccent: "Let's create something beautiful together.",
    connectBody: "Have a project, a question or a collaboration in mind? I'd love to hear it. Choose the way that works best for you.",
    openingEmail: 'Opening your email app…', openingPhone: 'Opening your phone dialer…', openingLinkedIn: 'Opening LinkedIn…',
    sayHello: 'Say hello',
    linkedIn: 'LinkedIn', phone: 'Phone', studyAt: 'Studying in', workingIn: 'Working in',
    next: 'Next project', back: 'All work', overview: 'The project', visual: 'The work', original: 'View original in Figma',
    viewProject: 'View project', viewSeries: 'Explore the full series', imageOf: 'Image',
    footerLine: "Have an idea in mind?", footerHeadline: "Let's make it beautiful.", backTop: 'Back to top',
    photoAssignment: 'Photography assignment', projectStudy: 'Study project', detail: 'Case study',
    discipline: 'Discipline', role: 'Role', client: 'Client', tool: 'Tool', format: 'Format'
  },
  nl: {
    nav: ['Home', 'Werk', 'Over mij', 'Contact'], contact: 'Contact', scroll: 'Scroll om te ontdekken',
    hello: 'HALLO, IK BEN MARYAM ABBAS', heroOne: 'Digital Designer', heroTwo: '& Creative',
    heroIntro: 'Ik maak doordachte visuele ontwerpen met aandacht voor eenvoud, creativiteit en detail.',
    explore: 'Bekijk mijn werk', aboutCta: 'Meer over mij', selected: 'Geselecteerd werk.',
    selectedNote: 'Een paar manieren waarop ik een idee tot een visueel verhaal maak.', allWork: 'Bekijk alle projecten',
    workScrollHint: 'Scroll om te ontdekken', workSwipeHint: 'Veeg om te ontdekken', moreWork: 'Er is meer te zien.',
    homeAboutEyebrow: 'Een beetje over mij', homeAboutTitle: 'Mijn werk begint met nieuwsgierigheid.',
    homeAboutBody: 'Van een gefotografeerd moment tot een doordachte interface: ik zoek naar het gevoel dat een visueel verhaal bijzonder maakt.',
    pageWorkEyebrow: 'Portfolio / 2026', pageWorkTitle: 'Geselecteerd werk.',
    pageWorkIntro: 'Fotografie, editoriaal ontwerp, digitale ervaringen en bewegend beeld — samen op één plek.',
    pageAboutEyebrow: 'Over Maryam', pageAboutTitle: 'Eenvoudige ideeën. Betekenisvol design.',
    who: 'Wie ik ben', whoTitle: 'Student grafisch & digitaal ontwerp.',
    bio: 'Ik ben Maryam Abbas en studeer digitale vormgeving aan de Arteveldehogeschool in Gent. Mijn achtergrond in grafisch ontwerp en programmeren bepaalt hoe ik naar een beeld of interface kijk: nieuwsgierig, gestructureerd en met aandacht voor details. Mijn werk omvat UI/UX, fotografie, branding, motion en editoriaal ontwerp.',
    languages: 'Ik spreek Nederlands en Arabisch en werk in het Nederlands, Engels, Frans en Arabisch.',
    skillsEyebrow: 'Wat ik doe', skillsTitle: 'Vaardigheden & tools.', design: 'Ontwerp', tools: 'Tools', process: 'Proces',
    designSkills: ['UI/UX-ontwerp', 'Visueel ontwerp', 'Branding & identiteit', 'Typografie', 'Motion design'],
    toolSkills: ['Figma', 'Adobe Creative Suite'],
    processSkills: ['Design thinking', 'Wireframing', 'Prototyping', 'Gebruikersonderzoek', 'Agile werkwijze'],
    tickerSkills: ['Visueel ontwerp', 'Branding', 'UI/UX', 'Fotografie', 'Motion', 'Editoriaal ontwerp', 'Typografie'],
    pauseTicker: 'Pauzeer beweging', playTicker: 'Start beweging',
    pathEyebrow: 'Mijn pad', pathTitle: 'Ervaring & opleiding.', present: 'heden',
    studyDigital: 'Digitale vormgeving', studyProgramming: 'Programmeren', studyGraphic: 'Grafisch ontwerp',
    connectEyebrow: 'Contact', connectTitle: 'Heb je een idee?', connectAccent: 'Laten we samen iets moois maken.',
    connectBody: 'Een project, vraag of samenwerking in gedachten? Ik hoor het graag. Kies de manier die voor jou het beste werkt.',
    openingEmail: 'Je e-mailapp wordt geopend…', openingPhone: 'Je telefoonapp wordt geopend…', openingLinkedIn: 'LinkedIn wordt geopend…',
    sayHello: 'Neem contact op',
    linkedIn: 'LinkedIn', phone: 'Telefoon', studyAt: 'Studerend in', workingIn: 'Werktaal',
    next: 'Volgend project', back: 'Alle projecten', overview: 'Het project', visual: 'Het werk', original: 'Bekijk origineel in Figma',
    viewProject: 'Bekijk project', viewSeries: 'Bekijk de volledige reeks', imageOf: 'Beeld',
    footerLine: 'Heb je een idee?', footerHeadline: 'Laten we iets moois maken.', backTop: 'Terug naar boven',
    photoAssignment: 'Fotografieopdracht', projectStudy: 'Studieproject', detail: 'Project',
    discipline: 'Discipline', role: 'Rol', client: 'Klant', tool: 'Tool', format: 'Formaat'
  }
};

const projects = [
  {
    id: 'pink-velvet', number: '01', image: 'assets/work-3.webp', tone: 'pink',
    title: {en: 'Pink Velvet Antwerp', nl: 'Pink Velvet Antwerp'},
    category: {en: 'Café photography', nl: 'Caféfotografie'},
    teaser: {en: 'A place seen through its colour, atmosphere and little rituals.', nl: 'Een plek gezien via kleur, sfeer en kleine rituelen.'},
    heading: {en: 'A café in pink, captured up close.', nl: 'Een roze café, van dichtbij vastgelegd.'},
    story: {en: ["For a photography assignment, Maryam chose Pink Velvet Antwerp as her subject. The series follows the café's distinctive colour through its interior, pastries and moments of service.", 'The six photographs form one visual story: a room with character, the people at work, and the details that make a visit memorable.'], nl: ['Voor een fotografieopdracht koos Maryam Pink Velvet Antwerp als onderwerp. De reeks volgt de kenmerkende kleur van het café in het interieur, het gebak en de momenten van bediening.', 'Zes foto’s vormen één visueel verhaal: een ruimte met karakter, mensen aan het werk en details die een bezoek bijzonder maken.']},
    facts: [['discipline', 'Café photography', 'Caféfotografie'], ['role', 'Photographer', 'Fotograaf'], ['client', 'Pink Velvet Antwerp', 'Pink Velvet Antwerp']],
    gallery: ['work-3.webp', 'work-4.webp', 'work-5.webp', 'work-6.webp', 'work-7.webp', 'work-8.webp']
  },
  {
    id: 'neuhaus', number: '02', image: 'assets/neuhaus-thumbnail.webp', fullImage: 'assets/neuhaus-figma.png', tone: 'cocoa', source: links.neuhaus,
    title: {en: 'NEUHAUS', nl: 'NEUHAUS'},
    category: {en: 'Landing page', nl: 'Landingspagina'},
    teaser: {en: 'A digital concept for a Belgian chocolate house.', nl: 'Een digitaal concept voor een Belgisch chocoladehuis.'},
    heading: {en: 'Chocolate, translated to the screen.', nl: 'Chocolade, vertaald naar het scherm.'},
    story: {en: ['This landing page concept explores how colour, product imagery and hierarchy can carry the character of NEUHAUS into a digital experience.', 'The work is presented as a visual design study. The original Figma file is available to explore.'], nl: ['Dit concept voor een landingspagina onderzoekt hoe kleur, productbeelden en hiërarchie het karakter van NEUHAUS digitaal kunnen uitdrukken.', 'Het werk wordt als visuele ontwerpstudie getoond. Het originele Figma-bestand is te bekijken.']},
    facts: [['discipline', 'Landing page', 'Landingspagina'], ['role', 'Digital design', 'Digitaal ontwerp'], ['tool', 'Figma', 'Figma']]
  },
  {
    id: 'zenflow', number: '03', image: 'assets/zenflow-thumbnail.webp', fullImage: 'assets/zenflow-figma.png', tone: 'slate', source: links.zenflow,
    title: {en: 'ZenFlow', nl: 'ZenFlow'}, category: {en: 'Website', nl: 'Website'},
    teaser: {en: 'A focused digital experience built around movement.', nl: 'Een gerichte digitale ervaring rond beweging.'},
    heading: {en: 'A digital space for movement.', nl: 'Een digitale ruimte voor beweging.'},
    story: {en: ['ZenFlow is a website concept that brings photography and a clear interface together around a fitness experience.', 'Its Figma design shows how structure and visual pace can guide a visitor from the first impression onward.'], nl: ['ZenFlow is een websiteconcept dat fotografie en een heldere interface samenbrengt rond fitness.', 'Het Figma-ontwerp laat zien hoe structuur en visueel ritme de bezoeker vanaf het eerste moment kunnen begeleiden.']},
    facts: [['discipline', 'Website', 'Website'], ['role', 'Digital design', 'Digitaal ontwerp'], ['tool', 'Figma', 'Figma']]
  },
  {
    id: 'flow', number: '04', image: 'assets/work-9.webp', tone: 'sand',
    title: {en: 'flow', nl: 'flow'}, category: {en: 'Editorial design', nl: 'Editoriaal ontwerp'},
    teaser: {en: 'Two cover studies, each with its own season and mood.', nl: 'Twee omslagstudies, elk met een eigen seizoen en sfeer.'},
    heading: {en: 'One title. Two visual seasons.', nl: 'Eén titel. Twee visuele seizoenen.'},
    story: {en: ['The flow cover studies explore two different moods for one publication. Botanical shapes and warm earth tones define one direction; a cooler winter palette defines the other.', 'Together, the mockups show how illustration, typography and colour can give a book a distinct presence.'], nl: ['De omslagstudies voor flow onderzoeken twee stemmingen voor één publicatie. Botanische vormen en warme aardetinten bepalen de ene richting; een koeler winterpalet de andere.', 'Samen laten de mockups zien hoe illustratie, typografie en kleur een boek een eigen karakter geven.']},
    facts: [['discipline', 'Branding', 'Branding'], ['role', 'Designer', 'Designer'], ['tool', 'Illustrator · InDesign', 'Illustrator · InDesign']],
    gallery: ['work-9.webp', 'work-10.webp']
  },
  {
    id: 'tokyo', number: '05', image: 'assets/tokyo-cover.png', tone: 'sakura', source: links.tokyo,
    title: {en: 'SAKU', nl: 'SAKU'}, category: {en: 'Branding · Mascot', nl: 'Branding · Mascotte'},
    teaser: {en: 'A brand character developed with a bold, playful presence.', nl: 'Een merkkarakter met een krachtige, speelse uitstraling.'},
    heading: {en: 'SAKU, built around character.', nl: 'SAKU, opgebouwd rond karakter.'},
    story: {en: ['SAKU brings branding and mascot design together through a clear visual character. The project explores how illustration and motion can give a brand its own voice.', 'Explore the original presentation in Figma Slides.'], nl: ['SAKU brengt branding en mascot-ontwerp samen in een duidelijk visueel karakter. Het project onderzoekt hoe illustratie en motion een merk een eigen stem kunnen geven.', 'Bekijk de originele presentatie in Figma Slides.']},
    facts: [['discipline', 'Branding · Mascot', 'Branding · Mascotte'], ['role', 'Brand & character designer', 'Brand- & character designer'], ['tool', 'Illustrator · After Effects', 'Illustrator · After Effects']]
  },
  {
    id: 'film', number: '06', image: 'assets/film-poster.jpg', tone: 'gold',
    title: {en: 'A moment in the sun', nl: 'Een moment in de zon'}, category: {en: 'Moving image', nl: 'Bewegend beeld'},
    teaser: {en: 'A short perfume film shaped by light and gesture.', nl: 'Een korte parfumfilm gevormd door licht en gebaar.'},
    heading: {en: 'A quiet story told in motion.', nl: 'Een rustig verhaal in beweging.'},
    story: {en: ['This short perfume film observes warm sunlight, a small gesture and the product within a scene.', 'Movement gives each detail time to unfold and lets the atmosphere carry the story.'], nl: ['Deze korte parfumfilm observeert warm zonlicht, een klein gebaar en het product in een scène.', 'Beweging geeft elk detail de tijd om zich te ontvouwen en laat de sfeer het verhaal dragen.']},
    facts: [['discipline', 'Moving image', 'Bewegend beeld'], ['role', 'Motion design', 'Motion design'], ['format', 'Short film', 'Korte film']]
  }
];

const pageNames = ['home', 'work', 'about', 'connect'];
let lang = 'en';
try { lang = localStorage.getItem('maryam-language') === 'nl' ? 'nl' : 'en'; } catch { /* Local file previews may disable storage. */ }
let marqueePaused = false;
let marqueeObserver;
let projectScrollCleanup = () => {};
let route = new URLSearchParams(location.search);
let page = pageNames.includes(route.get('page')) ? route.get('page') : 'home';
let project = projects.find(item => item.id === route.get('project'));
const t = () => content[lang];
const url = (pageName) => pageName === 'home' ? 'index.html' : `?page=${pageName}`;
const projectUrl = (id) => `?project=${id}`;
const asset = (name) => `assets/${name}`;

function header() {
  const nav = ['home', 'work', 'about', 'connect'].map((name, index) =>
    `<a class="nav-link ${!project && page === name ? 'is-current' : ''}" href="${url(name)}" ${!project && page === name ? 'aria-current="page"' : ''}>${t().nav[index]}</a>`).join('');
  return `<header class="site-header"><a class="brand" href="index.html" aria-label="Maryam Abbas home"><span class="brand-symbol">m<span>·</span>a</span><span class="brand-name">MARYAM <i>✦</i> ABBAS</span></a><nav class="desktop-nav" aria-label="Main navigation">${nav}</nav><div class="header-actions"><div class="language" aria-label="Language"><button type="button" data-lang="en" aria-pressed="${lang === 'en'}">EN</button><span>/</span><button type="button" data-lang="nl" aria-pressed="${lang === 'nl'}">NL</button></div><button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu"><span></span><span></span></button></div><nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">${nav}</nav></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-top"><span class="eyebrow">${t().footerLine}</span><a href="${url('connect')}" class="footer-headline">${t().footerHeadline}<span>↗</span></a></div><div class="footer-grid"><div><a class="footer-brand" href="index.html">MARYAM <em>✦</em> ABBAS</a><p>Digital design, photography & motion.</p></div><div class="footer-links"><a href="${url('home')}">${t().nav[0]}</a><a href="${url('work')}">${t().nav[1]}</a><a href="${url('about')}">${t().nav[2]}</a><a href="${url('connect')}">${t().nav[3]}</a></div><div class="footer-links"><a href="mailto:alobeidimaryam@gmail.com">Email ↗</a><a href="tel:+32490379332">Phone ↗</a><a href="https://www.linkedin.com/in/maryam-abbas-731732250" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Maryam Abbas</span><span>${t().studyAt} Ghent, Belgium</span><a href="#main">${t().backTop} ↑</a></div></footer>`;
}

function workCard(item, index) {
  return `<a class="work-card reveal" href="${projectUrl(item.id)}" aria-label="${t().viewProject}: ${item.title[lang]}"><div class="work-card-visual tone-${item.tone}"><img src="${item.image}" alt="${item.title[lang]} project preview" loading="${index < 2 ? 'eager' : 'lazy'}"><span class="card-arrow" aria-hidden="true">↗</span></div><div class="work-card-details"><span class="work-number">${item.category[lang]}</span><h3>${item.title[lang]}</h3><p>${item.teaser[lang]}</p></div></a>`;
}

function home() {
  const projectTotal = String(projects.length + 1).padStart(2, '0');
  return `<main id="main">
    <section class="home-hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow hero-hello">${t().hello}</span>
          <h1><span>${t().heroOne}</span><em>${t().heroTwo}</em></h1>
          <p>${t().heroIntro}</p>
          <div class="hero-buttons"><a class="button button-accent" href="${url('work')}">${t().explore}<span>↗</span></a><a class="text-link" href="${url('about')}">${t().aboutCta}<span>↗</span></a></div>
        </div>
        <div class="hero-portrait">
          <div class="portrait-backplate" aria-hidden="true"></div>
          <figure class="portrait-frame"><img src="assets/maryam-portrait.png" alt="Portrait of Maryam Abbas" fetchpriority="high"><figcaption><strong>Maryam Abbas</strong><span>Digital designer</span></figcaption></figure>
        </div>
      </div>
      <div class="hero-bottom"><span>MARYAM ABBAS — PORTFOLIO</span><span>${t().scroll} ↓</span></div>
    </section>
    <section class="home-work" aria-label="${t().selected}"><div class="project-scroll-scene"><div class="project-sticky section-shell"><div class="section-header reveal"><div><span class="eyebrow">WORK</span><h2>${t().selected}</h2></div><p>${t().selectedNote}</p></div><div class="project-window" role="region" tabindex="0" aria-label="${t().selected}"><div class="project-track">${projects.map((item, index) => workCard(item, index)).join('')}<a class="project-end-card" href="${url('work')}"><span>${t().moreWork}</span><strong>${t().allWork}</strong><i aria-hidden="true">↗</i></a></div></div><div class="project-controls"><span class="project-hint-scroll">${t().workScrollHint} ↓</span><span class="project-hint-swipe">${t().workSwipeHint} →</span><div class="project-progress" aria-hidden="true"><span></span></div><span class="project-counter">01 / ${projectTotal}</span></div></div></div></section>
    <section class="home-about"><div class="home-about-mark" aria-hidden="true">M<span>✦</span>A</div><div class="reveal"><span class="eyebrow">${t().homeAboutEyebrow}</span><h2>${t().homeAboutTitle}</h2><p>${t().homeAboutBody}</p><a class="button button-light" href="${url('about')}">${t().aboutCta}<span>↗</span></a></div></section>
  </main>`;
}

function work() {
  return `<main id="main" class="inner-page"><section class="page-heading section-shell"><span class="eyebrow">${t().pageWorkEyebrow}</span><h1>${t().pageWorkTitle}</h1><div class="heading-tail"><p>${t().pageWorkIntro}</p><span>0${projects.length} PROJECTS</span></div></section><section class="all-work section-shell" aria-label="Selected projects">${projects.map((item, index) => workCard(item, index)).join('')}</section></main>`;
}

function skillColumn(title, items) {
  return `<div class="skill-column reveal"><h3>${title}</h3><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
}

function skillsMarquee() {
  const items = t().tickerSkills.map(item => `<span class="marquee-item">${item}</span>`).join('');
  return `<section class="skills-marquee ${marqueePaused ? 'is-paused' : ''}" aria-label="${t().skillsTitle}"><div class="marquee-viewport"><div class="marquee-track"><div class="marquee-group">${items}</div><div class="marquee-group" aria-hidden="true">${items}</div></div></div><button class="marquee-toggle" type="button" aria-pressed="${marqueePaused}" aria-label="${marqueePaused ? t().playTicker : t().pauseTicker}"><span class="marquee-toggle-icon" aria-hidden="true">${marqueePaused ? '▶' : 'Ⅱ'}</span><span class="marquee-toggle-label">${marqueePaused ? t().playTicker : t().pauseTicker}</span></button></section>`;
}

function about() {
  return `<main id="main" class="inner-page about-page"><section class="page-heading section-shell"><span class="eyebrow">${t().pageAboutEyebrow}</span><h1>${t().pageAboutTitle}</h1></section><section class="about-intro section-shell"><div class="about-photo reveal"><img src="assets/maryam-portrait.png" alt="Maryam Abbas in a pink outfit" loading="eager"><span>MARYAM / ABBAS</span></div><div class="about-story reveal"><span class="eyebrow">${t().who}</span><h2>${t().whoTitle}</h2><p>${t().bio}</p><p>${t().languages}</p><a class="button button-accent" href="${url('connect')}">${t().contact}<span>↗</span></a></div></section><section class="skills-section section-shell"><div class="section-header reveal"><div><span class="eyebrow">${t().skillsEyebrow}</span><h2>${t().skillsTitle}</h2></div></div><div class="skills-grid">${skillColumn(t().design, t().designSkills)}${skillColumn(t().tools, t().toolSkills)}${skillColumn(t().process, t().processSkills)}</div></section><section class="education-section section-shell"><div class="section-header reveal"><div><span class="eyebrow">${t().pathEyebrow}</span><h2>${t().pathTitle}</h2></div></div><div class="education-list"><div class="education-row reveal"><span>2024 — ${t().present}</span><strong>${t().studyDigital}</strong><p>Artevelde University of Applied Sciences, Ghent</p></div><div class="education-row reveal"><span>2022 — 2023</span><strong>${t().studyProgramming}</strong><p></p></div><div class="education-row reveal"><span>2019 — 2022</span><strong>${t().studyGraphic}</strong><p>VISO Mariakerke</p></div></div></section>${skillsMarquee()}</main>`;
}

function connect() {
  return `<main id="main" class="connect-page">
    <section class="connect-hero section-shell"><span class="eyebrow">${t().connectEyebrow}</span><h1>${t().connectTitle}<br><em>${t().connectAccent}</em></h1><p>${t().connectBody}</p></section>
    <section class="connect-content section-shell"><div class="contact-methods">
      <span class="eyebrow">${t().sayHello}</span>
      <a href="mailto:alobeidimaryam@gmail.com" class="contact-method" data-contact="email"><span>EMAIL</span><strong>alobeidimaryam@gmail.com</strong><i aria-hidden="true">↗</i><small class="contact-response" aria-live="polite"></small></a>
      <a href="tel:+32490379332" class="contact-method" data-contact="phone"><span>${t().phone.toUpperCase()}</span><strong>+32 490 37 93 32</strong><i aria-hidden="true">↗</i><small class="contact-response" aria-live="polite"></small></a>
      <a href="https://www.linkedin.com/in/maryam-abbas-731732250" target="_blank" rel="noopener noreferrer" class="contact-method" data-contact="linkedIn"><span>LINKEDIN</span><strong>Maryam Abbas</strong><i aria-hidden="true">↗</i><small class="contact-response" aria-live="polite"></small></a>
      <div class="contact-small"><div><span>${t().studyAt.toUpperCase()}</span><strong>Ghent, Belgium</strong></div><div><span>${t().workingIn.toUpperCase()}</span><strong>Dutch · English · French · Arabic</strong></div></div>
    </div></section>
  </main>`;
}

function factsMarkup(item) {
  return item.facts.map(([key, en, nl]) => `<div><dt>${t()[key]}</dt><dd>${lang === 'nl' ? nl : en}</dd></div>`).join('');
}

function caseMedia(item) {
  if (item.id === 'film') return `<div class="case-video"><video controls playsinline preload="metadata" poster="assets/film-poster.jpg" aria-label="${item.title[lang]}"><source src="assets/perfume-film.mp4" type="video/mp4"></video></div>`;
  if (item.id === 'pink-velvet') return `<div class="photo-scroll-scene"><div class="photo-sticky"><div class="photo-top"><span>${t().viewSeries}</span><span class="photo-counter">01 / 06</span></div><div class="photo-window"><div class="photo-track">${item.gallery.map((name, index) => `<figure><img src="${asset(name)}" alt="Pink Velvet Antwerp photograph ${index + 1}" loading="${index < 2 ? 'eager' : 'lazy'}"><figcaption>${String(index + 1).padStart(2, '0')} / 06</figcaption></figure>`).join('')}</div></div><div class="photo-progress"><span></span></div></div></div>`;
  if (item.gallery) return `<div class="case-image-grid">${item.gallery.map((name, index) => `<img src="${asset(name)}" alt="${item.title[lang]} cover study ${index + 1}" loading="lazy">`).join('')}</div>`;
  return `<a class="case-figma-image" href="${item.source}" target="_blank" rel="noopener noreferrer" aria-label="${t().original}: ${item.title[lang]}"><img src="${item.fullImage || item.image}" alt="${item.title[lang]} design preview" loading="eager"><span>${t().original} ↗</span></a>`;
}

function caseStudy(item) {
  const next = projects[(projects.indexOf(item) + 1) % projects.length];
  return `<main id="main" class="case-page"><div class="case-heading section-shell"><a class="back-link" href="${url('work')}">← ${t().back}</a><span class="eyebrow">${t().detail} ${item.number} / 0${projects.length}</span><h1>${item.title[lang]}</h1><dl class="case-facts">${factsMarkup(item)}</dl></div><div class="case-cover tone-${item.tone}"><img src="${item.image}" alt="${item.title[lang]} project" fetchpriority="high"></div><section class="case-story section-shell"><div><span class="eyebrow">${t().overview}</span><h2>${item.heading[lang]}</h2></div><div class="case-story-body">${item.story[lang].map(paragraph => `<p>${paragraph}</p>`).join('')}${item.source ? `<a class="outline-button" href="${item.source}" target="_blank" rel="noopener noreferrer">${t().original}<span>↗</span></a>` : ''}</div></section><section class="case-gallery section-shell"><div class="section-header"><div><span class="eyebrow">${item.number} / ${t().visual}</span><h2>${t().visual}.</h2></div></div>${caseMedia(item)}</section><a class="next-project" href="${projectUrl(next.id)}"><span>${t().next} / ${next.number}</span><strong>${next.title[lang]}</strong><i>↗</i></a></main>`;
}

function setupInteractions() {
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    lang = button.dataset.lang;
    try { localStorage.setItem('maryam-language', lang); } catch { /* Keep the current page translation. */ }
    const currentScroll = scrollY;
    render();
    scrollTo({top: currentScroll, behavior: 'instant'});
  }));
  const menu = document.querySelector('.menu-button');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    document.querySelector('.mobile-nav').classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: .08, rootMargin: '0px 0px -4% 0px'});
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  } else document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
  marqueeObserver?.disconnect();
  const ticker = document.querySelector('.skills-marquee');
  if (ticker) {
    const toggle = ticker.querySelector('.marquee-toggle');
    toggle.addEventListener('click', () => {
      marqueePaused = !marqueePaused;
      ticker.classList.toggle('is-paused', marqueePaused);
      toggle.setAttribute('aria-pressed', String(marqueePaused));
      toggle.setAttribute('aria-label', marqueePaused ? t().playTicker : t().pauseTicker);
      toggle.querySelector('.marquee-toggle-icon').textContent = marqueePaused ? '▶' : 'Ⅱ';
      toggle.querySelector('.marquee-toggle-label').textContent = marqueePaused ? t().playTicker : t().pauseTicker;
    });
    if ('IntersectionObserver' in window) {
      marqueeObserver = new IntersectionObserver(entries => ticker.classList.toggle('is-in-view', entries[0].isIntersecting), {threshold: .05});
      marqueeObserver.observe(ticker);
    } else ticker.classList.add('is-in-view');
  }
  setupContactFeedback();
  setupProjectScroll();
  setupPhotoScroll();
}

function setupContactFeedback() {
  document.querySelectorAll('.contact-method').forEach(link => {
    link.addEventListener('click', () => {
      const key = {email: 'openingEmail', phone: 'openingPhone', linkedIn: 'openingLinkedIn'}[link.dataset.contact];
      link.querySelector('.contact-response').textContent = t()[key];
      link.classList.add('is-activated');
      clearTimeout(link.feedbackTimer);
      link.feedbackTimer = setTimeout(() => link.classList.remove('is-activated'), 2600);
    });
  });
}

function setupProjectScroll() {
  projectScrollCleanup();
  projectScrollCleanup = () => {};
  const scene = document.querySelector('.project-scroll-scene');
  if (!scene) return;
  const sticky = scene.querySelector('.project-sticky');
  const frame = scene.querySelector('.project-window');
  const track = scene.querySelector('.project-track');
  const progress = scene.querySelector('.project-progress span');
  const counter = scene.querySelector('.project-counter');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const total = projects.length + 1;
  let distance = 0;
  let ticking = false;
  const nativeScroll = () => reduced.matches || innerWidth <= 760;
  function update() {
    ticking = false;
    let ratio;
    if (nativeScroll()) {
      const max = Math.max(1, frame.scrollWidth - frame.clientWidth);
      ratio = frame.scrollLeft / max;
    } else {
      const top = parseFloat(getComputedStyle(sticky).top) || 0;
      const travelled = Math.min(distance, Math.max(0, top - scene.getBoundingClientRect().top));
      track.style.transform = `translate3d(${-travelled}px, 0, 0)`;
      ratio = distance ? travelled / distance : 0;
    }
    progress.style.width = `${Math.max(100 / total, ratio * 100)}%`;
    counter.textContent = `${String(Math.min(total, Math.round(ratio * (total - 1)) + 1)).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  }
  function measure() {
    track.style.transform = '';
    if (nativeScroll()) scene.style.height = '';
    else {
      frame.scrollLeft = 0;
      distance = Math.max(0, track.scrollWidth - frame.clientWidth);
      scene.style.height = `${sticky.offsetHeight + distance}px`;
    }
    update();
  }
  function onPageScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  function onKey(event) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    if (nativeScroll()) frame.scrollBy({left: direction * frame.clientWidth * .8, behavior: 'smooth'});
    else scrollBy({top: direction * Math.min(560, innerHeight * .7), behavior: 'smooth'});
  }
  function onFocus(event) {
    const card = event.target.closest('.work-card, .project-end-card');
    if (!card || nativeScroll() || !card.matches(':focus-visible')) return;
    const cardX = card.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const target = Math.min(distance, Math.max(0, cardX - frame.clientWidth * .1));
    requestAnimationFrame(() => {
      frame.scrollLeft = 0;
      const sceneTop = scene.getBoundingClientRect().top + scrollY;
      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      scrollTo({top: sceneTop - stickyTop + target, behavior: 'instant'});
      update();
    });
  }
  addEventListener('scroll', onPageScroll, {passive: true});
  addEventListener('resize', measure);
  frame.addEventListener('scroll', onPageScroll, {passive: true});
  frame.addEventListener('keydown', onKey);
  track.addEventListener('focusin', onFocus);
  reduced.addEventListener?.('change', measure);
  document.fonts?.ready.then(() => { if (scene.isConnected) measure(); });
  projectScrollCleanup = () => {
    removeEventListener('scroll', onPageScroll);
    removeEventListener('resize', measure);
    frame.removeEventListener('scroll', onPageScroll);
    frame.removeEventListener('keydown', onKey);
    track.removeEventListener('focusin', onFocus);
    reduced.removeEventListener?.('change', measure);
  };
  measure();
}

function setupPhotoScroll() {
  const scene = document.querySelector('.photo-scroll-scene');
  if (!scene) return;
  const sticky = scene.querySelector('.photo-sticky');
  const frame = scene.querySelector('.photo-window');
  const track = scene.querySelector('.photo-track');
  const counter = scene.querySelector('.photo-counter');
  const progress = scene.querySelector('.photo-progress span');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let distance = 0;
  let ticking = false;
  function update() {
    ticking = false;
    if (reduced.matches || innerWidth < 720) return;
    const travelled = Math.min(1, Math.max(0, -scene.getBoundingClientRect().top / Math.max(1, distance)));
    track.style.transform = `translate3d(${-distance * travelled}px, 0, 0)`;
    counter.textContent = `${String(Math.min(6, Math.floor(travelled * 6) + 1)).padStart(2, '0')} / 06`;
    progress.style.width = `${Math.max(16.7, travelled * 100)}%`;
  }
  function measure() {
    track.style.transform = '';
    if (reduced.matches || innerWidth < 720) { scene.style.height = ''; return; }
    distance = Math.max(0, track.scrollWidth - frame.clientWidth);
    scene.style.height = `${sticky.offsetHeight + distance}px`;
    update();
  }
  addEventListener('resize', measure);
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, {passive: true});
  reduced.addEventListener?.('change', measure);
  addEventListener('load', measure, {once: true});
  measure();
}

function render() {
  document.documentElement.lang = lang;
  document.body.className = project ? 'view-case' : `view-${page}`;
  const main = project ? caseStudy(project) : ({home, work, about, connect})[page]();
  document.querySelector('#app').innerHTML = header() + main + footer();
  document.title = project ? `${project.title[lang]} — Maryam Abbas` : page === 'home' ? 'Maryam Abbas — Digital Designer' : `${t().nav[pageNames.indexOf(page)]} — Maryam Abbas`;
  setupInteractions();
}

render();
