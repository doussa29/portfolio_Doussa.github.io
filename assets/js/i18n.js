/* =========================================================
   Textes du site en français et en anglais.
   Pour modifier un texte : changer la valeur de la clé dans "fr" ET dans "en".
   Dans le HTML, un élément est relié à une clé par :
     data-i18n="cle"        remplace le texte (un tableau devient une liste <li>)
     data-i18n-html="cle"   remplace le contenu HTML (pour <strong>, liens, etc.)
     data-i18n-attr="alt:cle; aria-label:cle2"   remplace des attributs
   Les textes des projets sont dans assets/js/projects.js.
   ========================================================= */

const I18N = {
  fr: {
    "meta.title": "Amadou Doussa Hafsatou | Élève ingénieure Data & IA",
    "meta.description": "Portfolio d'Amadou Doussa Hafsatou, élève ingénieure Big Data & IA à JUNIA ISEN (Lille). Recherche un stage de fin d'études de 6 mois à partir du 22 février 2027 : Data Analyst, Data Engineer, Data & IA, BI.",
    "meta.ogLocale": "fr_FR",

    "a11y.skip": "Aller au contenu",
    "a11y.nav": "Navigation principale",
    "a11y.menuOpen": "Ouvrir le menu",
    "a11y.menuClose": "Fermer le menu",
    "a11y.lang": "Switch to English",
    "a11y.themeDark": "Activer le thème sombre",
    "a11y.themeLight": "Activer le thème clair",
    "a11y.home": "Retour à l'accueil",
    "lang.toggle": "EN",

    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.education": "Formation",
    "nav.languages": "Langues",
    "nav.contact": "Contact",

    "cv.label": "Télécharger mon CV",
    "cv.href": "assets/docs/CV_FR.pdf",
    "cv.file": "CV_Amadou_Doussa_Hafsatou_FR.pdf",

    "hero.eyebrow": "Stage de fin d'études, 6 mois, dès février 2027",
    "hero.role": "Élève ingénieure Big Data & IA, JUNIA ISEN",
    "hero.pitch": "Je cherche un stage de 6 mois à partir du 22 février 2027, en Data Analyst, Data Engineer, Data & IA ou BI. J'ai déjà construit des pipelines de données, des modèles en étoile et des rapports Power BI.",
    "hero.contact": "Me contacter",
    "hero.statsLabel": "Quelques chiffres de mes projets",
    "hero.stat1": "sources CSV consolidées dans un référentiel PostgreSQL",
    "hero.stat2": "annonces Airbnb analysées et modélisées sous R",
    "hero.stat3": "de temps de calcul gagné sur un pipeline d'IA générative",

    "about.eyebrow": "À propos",
    "about.heading": "Data, BI et IA appliquée",
    "about.photoAlt": "Portrait d'Amadou Doussa Hafsatou",
    "about.p1": "Je suis en dernière année du cycle ingénieur Big Data & IA à JUNIA ISEN, à Lille. Mes cours portent sur la business intelligence, le data engineering, l'IA et les statistiques.",
    "about.p2": "En 2026, j'ai fait un stage de recherche de 4 mois à l'ISIA Lab de l'Université de Mons, sur le projet européen AI4Debunk. En projet de groupe, j'ai conçu un référentiel de données étudiantes sous PostgreSQL avec un rapport Power BI, et je participe au déploiement d'une application web sur Azure avec Terraform.",
    "about.p3": "Je prépare la certification Microsoft PL-300 (Power BI Data Analyst).",
    "about.factCity": "Ville",
    "about.city": "Lille, France",
    "about.factAvail": "Disponibilité",
    "about.avail": "22 février 2027, 6 mois",
    "about.interestsTitle": "En dehors des études",
    "about.interest1": "Volley-ball en club",
    "about.interest2": "Cuisine",
    "about.interest3": "Bénévolat associatif : aide alimentaire et étudiante avec",
    "about.and": "et",

    "skills.eyebrow": "Compétences",
    "skills.heading": "Outils et méthodes",
    "skills.intro": "Les compétences que j'ai utilisées en stage ou en projet.",
    "skills.g1": "Analyse et BI",
    "skills.g2": "Data engineering et cloud",
    "skills.g3": "IA, NLP et data science",
    "skills.g4": "Développement",
    "skills.excel": "Excel avancé",
    "skills.star": "Modélisation en étoile",
    "skills.quality": "Qualité des données",
    "skills.legend": "Notions : outils découverts en cours ou en projet, pas encore maîtrisés.",
    "skills.basic": "notions",

    "exp.eyebrow": "Expériences",
    "exp.heading": "Expériences professionnelles",
    "exp.e1.title": "Stagiaire Data Science & IA (R&D)",
    "exp.e1.date": "Mai - août 2026",
    "exp.e1.org": "ISIA Lab, Université de Mons (Belgique)",
    "exp.e1.note": "Projet européen AI4Debunk",
    "exp.e1.list": [
      "Développement d'un pipeline Python qui collecte et vérifie des informations à partir de plusieurs sources publiques (API Google Fact Check, moteur de recherche SearxNG).",
      "Similarité sémantique avec des bi-encodeurs et des Cross-Encoders NLI, et détection de positionnement (stance).",
      "Contrôle qualité de plus de 12 000 paires annotées, avec les coefficients Kappa de Fleiss et de Cohen.",
      "Benchmark de modèles et tableau de bord de suivi développé avec Flask, HTML, CSS et JavaScript.",
      "Travail sous Docker et Git, dans une équipe internationale."
    ],
    "exp.e2.title": "Cheffe de projet, projet client",
    "exp.e2.date": "2026 - 2027 (en cours)",
    "exp.e2.org": "JUNIA EdTech, Lille",
    "exp.e2.list": [
      "Pilotage d'une équipe de 5 étudiants chargée de former le personnel de JUNIA à un usage efficace et responsable de l'IA générative.",
      "Recueil des besoins par entretiens et questionnaires, puis restitution au client.",
      "Coordination avec deux autres équipes projet."
    ],
    "exp.e3.title": "Animatrice de communauté",
    "exp.e3.date": "Juil. - août 2025",
    "exp.e3.org": "Entourage, Lille",
    "exp.e3.list": [
      "Organisation et animation d'activités pour l'association.",
      "Gestion des réseaux sociaux.",
      "Travail dans une équipe de 8 personnes."
    ],
    "exp.e4.title": "Assistante back-office bancaire et contrôle qualité",
    "exp.e4.date": "Juil. - sept. 2023",
    "exp.e4.org": "SCB Cameroun, Douala",
    "exp.e4.list": [
      "Vérification et suivi du paiement des chèques.",
      "Numérisation et envoi des chèques aux banques partenaires pour la compensation interbancaire.",
      "Archivage des documents bancaires pour en garantir la traçabilité."
    ],

    "projects.eyebrow": "Projets",
    "projects.heading": "Projets data",
    "projects.intro": "Projets de cours, de groupe et personnels. Cliquez sur une carte pour voir le détail.",
    "projects.filterLabel": "Filtrer les projets par catégorie",
    "projects.all": "Tous",
    "projects.empty": "Aucun projet dans cette catégorie.",
    "projects.open": "Voir le détail",
    "projects.openFor": "Voir le détail du projet",
    "projects.context": "Contexte",
    "projects.did": "Ce que j'ai fait",
    "projects.tools": "Outils",
    "projects.results": "Résultats",
    "projects.github": "Voir le code sur GitHub",
    "projects.close": "Fermer",
    "projects.imgAlt": "Capture du projet",
    "cat.bi": "Data Analyst / BI",
    "cat.eng": "Data Engineering",
    "cat.ds": "IA & Data Science",
    "status.ongoing": "En cours",

    "edu.eyebrow": "Formation",
    "edu.heading": "Formation et certification",
    "edu.d1.title": "Cycle ingénieur Big Data & IA",
    "edu.d1.org": "JUNIA ISEN, Lille",
    "edu.d1.text": "Spécialisation business intelligence, data engineering, IA et statistiques.",
    "edu.d2.date": "En préparation",
    "edu.d2.title": "Certification Microsoft PL-300",
    "edu.d2.org": "Power BI Data Analyst",
    "edu.d2.text": "Préparation en parallèle de la dernière année. Certification pas encore obtenue.",
    "edu.d3.title": "Classes préparatoires scientifiques",
    "edu.d3.org": "IUC, Douala (Cameroun)",
    "edu.d3.text": "Mathématiques, physique, chimie, thermodynamique.",

    "lang.eyebrow": "Langues",
    "lang.heading": "Langues",
    "lang.fr": "Français",
    "lang.frLevel": "Langue maternelle",
    "lang.en": "Anglais",
    "lang.enLevel": "C1 (Cambridge)",
    "lang.it": "Italien",
    "lang.itLevel": "A1",

    "contact.eyebrow": "Contact",
    "contact.heading": "Me contacter",
    "contact.text": "Vous proposez un stage de fin d'études en data ou en IA à partir de février 2027 ? Écrivez-moi par email ou sur LinkedIn.",
    "contact.mail": "M'écrire un email",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.newTab": "(s'ouvre dans un nouvel onglet)",
    "footer.role": "Élève ingénieure Big Data & IA, JUNIA ISEN"
  },

  en: {
    "meta.title": "Amadou Doussa Hafsatou | Data & AI Engineering Student",
    "meta.description": "Portfolio of Amadou Doussa Hafsatou, final-year Big Data & AI engineering student at JUNIA ISEN (Lille, France). Looking for a 6-month end-of-studies internship starting 22 February 2027: Data Analyst, Data Engineer, Data & AI, BI.",
    "meta.ogLocale": "en_GB",

    "a11y.skip": "Skip to content",
    "a11y.nav": "Main navigation",
    "a11y.menuOpen": "Open menu",
    "a11y.menuClose": "Close menu",
    "a11y.lang": "Passer en français",
    "a11y.themeDark": "Switch to dark theme",
    "a11y.themeLight": "Switch to light theme",
    "a11y.home": "Back to top",
    "lang.toggle": "FR",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.languages": "Languages",
    "nav.contact": "Contact",

    "cv.label": "Download my resume",
    "cv.href": "assets/docs/CV_EN.pdf",
    "cv.file": "Resume_Amadou_Doussa_Hafsatou_EN.pdf",

    "hero.eyebrow": "6-month end-of-studies internship, from February 2027",
    "hero.role": "Big Data & AI engineering student, JUNIA ISEN",
    "hero.pitch": "I am looking for a 6-month internship starting 22 February 2027, as a Data Analyst, Data Engineer, Data & AI or BI intern. I have already built data pipelines, star schemas and Power BI reports.",
    "hero.contact": "Contact me",
    "hero.statsLabel": "A few figures from my projects",
    "hero.stat1": "CSV sources consolidated into a PostgreSQL master data repository",
    "hero.stat2": "Airbnb listings analysed and modelled in R",
    "hero.stat3": "less compute time on a generative AI pipeline",

    "about.eyebrow": "About",
    "about.heading": "Data, BI and applied AI",
    "about.photoAlt": "Portrait of Amadou Doussa Hafsatou",
    "about.p1": "I am in the final year of the Big Data & AI engineering programme at JUNIA ISEN in Lille, France. My courses cover business intelligence, data engineering, AI and statistics.",
    "about.p2": "In 2026, I completed a 4-month research internship at ISIA Lab, University of Mons, on the European project AI4Debunk. In team projects, I designed a student master data repository in PostgreSQL with a Power BI report, and I am helping deploy a web application on Azure with Terraform.",
    "about.p3": "I am preparing for the Microsoft PL-300 certification (Power BI Data Analyst).",
    "about.factCity": "Location",
    "about.city": "Lille, France",
    "about.factAvail": "Availability",
    "about.avail": "22 February 2027, 6 months",
    "about.interestsTitle": "Outside of school",
    "about.interest1": "Volleyball in a club",
    "about.interest2": "Cooking",
    "about.interest3": "Volunteering: food and student support with",
    "about.and": "and",

    "skills.eyebrow": "Skills",
    "skills.heading": "Tools and methods",
    "skills.intro": "Skills I have used during my internship or in projects.",
    "skills.g1": "Analytics and BI",
    "skills.g2": "Data engineering and cloud",
    "skills.g3": "AI, NLP and data science",
    "skills.g4": "Development",
    "skills.excel": "Advanced Excel",
    "skills.star": "Star schema modelling",
    "skills.quality": "Data quality",
    "skills.legend": "Basic knowledge: tools I have used in class or in a project, not yet mastered.",
    "skills.basic": "basics",

    "exp.eyebrow": "Experience",
    "exp.heading": "Work experience",
    "exp.e1.title": "Data Science & AI Intern (R&D)",
    "exp.e1.date": "May - Aug 2026",
    "exp.e1.org": "ISIA Lab, University of Mons (Belgium)",
    "exp.e1.note": "European project AI4Debunk",
    "exp.e1.list": [
      "Built a Python pipeline that collects and checks information from several public sources (Google Fact Check API, SearxNG search engine).",
      "Semantic similarity with bi-encoders and NLI Cross-Encoders, and stance detection.",
      "Quality control of more than 12,000 annotated pairs using Fleiss' and Cohen's Kappa.",
      "Model benchmarking and a monitoring dashboard built with Flask, HTML, CSS and JavaScript.",
      "Worked with Docker and Git in an international team."
    ],
    "exp.e2.title": "Project lead, client project",
    "exp.e2.date": "2026 - 2027 (ongoing)",
    "exp.e2.org": "JUNIA EdTech, Lille",
    "exp.e2.list": [
      "Leading a team of 5 students to train JUNIA staff in effective and responsible use of generative AI.",
      "Gathered requirements through interviews and surveys, then presented findings to the client.",
      "Coordination with two other project teams."
    ],
    "exp.e3.title": "Community facilitator",
    "exp.e3.date": "Jul - Aug 2025",
    "exp.e3.org": "Entourage, Lille",
    "exp.e3.list": [
      "Organised and ran activities for the association.",
      "Managed social media.",
      "Worked in a team of 8 people."
    ],
    "exp.e4.title": "Banking back-office and quality control assistant",
    "exp.e4.date": "Jul - Sep 2023",
    "exp.e4.org": "SCB Cameroun, Douala",
    "exp.e4.list": [
      "Checked and tracked cheque payments.",
      "Scanned and sent cheques to partner banks for interbank clearing.",
      "Archived banking documents to ensure traceability."
    ],

    "projects.eyebrow": "Projects",
    "projects.heading": "Data projects",
    "projects.intro": "Course, team and personal projects. Click a card to see the details.",
    "projects.filterLabel": "Filter projects by category",
    "projects.all": "All",
    "projects.empty": "No project in this category.",
    "projects.open": "See details",
    "projects.openFor": "See details of the project",
    "projects.context": "Context",
    "projects.did": "What I did",
    "projects.tools": "Tools",
    "projects.results": "Results",
    "projects.github": "View the code on GitHub",
    "projects.close": "Close",
    "projects.imgAlt": "Screenshot of the project",
    "cat.bi": "Data Analyst / BI",
    "cat.eng": "Data Engineering",
    "cat.ds": "AI & Data Science",
    "status.ongoing": "Ongoing",

    "edu.eyebrow": "Education",
    "edu.heading": "Education and certification",
    "edu.d1.title": "Engineering degree, Big Data & AI",
    "edu.d1.org": "JUNIA ISEN, Lille",
    "edu.d1.text": "Specialisation in business intelligence, data engineering, AI and statistics.",
    "edu.d2.date": "In preparation",
    "edu.d2.title": "Microsoft PL-300 certification",
    "edu.d2.org": "Power BI Data Analyst",
    "edu.d2.text": "Preparing alongside my final year. Not yet obtained.",
    "edu.d3.title": "Scientific preparatory classes",
    "edu.d3.org": "IUC, Douala (Cameroon)",
    "edu.d3.text": "Mathematics, physics, chemistry, thermodynamics.",

    "lang.eyebrow": "Languages",
    "lang.heading": "Languages",
    "lang.fr": "French",
    "lang.frLevel": "Native",
    "lang.en": "English",
    "lang.enLevel": "C1 (Cambridge)",
    "lang.it": "Italian",
    "lang.itLevel": "A1",

    "contact.eyebrow": "Contact",
    "contact.heading": "Get in touch",
    "contact.text": "Do you offer a data or AI end-of-studies internship starting February 2027? Email me or reach out on LinkedIn.",
    "contact.mail": "Send me an email",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.newTab": "(opens in a new tab)",
    "footer.role": "Big Data & AI engineering student, JUNIA ISEN"
  }
};

const I18N_LANGS = ["fr", "en"];
const I18N_DEFAULT = "fr";
const I18N_STORAGE_KEY = "portfolio-lang";

/* Lecture et écriture protégées : le stockage peut être bloqué (navigation privée, etc.) */
function storageGet(key) {
  try { return window.localStorage.getItem(key); } catch (e) { return null; }
}
function storageSet(key, value) {
  try { window.localStorage.setItem(key, value); } catch (e) { /* stockage indisponible */ }
}

/* Langue de départ : choix enregistré, sinon français */
function getInitialLang() {
  const saved = storageGet(I18N_STORAGE_KEY);
  return I18N_LANGS.includes(saved) ? saved : I18N_DEFAULT;
}

function t(key, lang) {
  const dict = I18N[lang || document.documentElement.lang] || I18N[I18N_DEFAULT];
  return key in dict ? dict[key] : (I18N[I18N_DEFAULT][key] ?? key);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* Applique une langue à toute la page, puis prévient les autres scripts */
function applyLang(lang, save) {
  if (!I18N_LANGS.includes(lang)) lang = I18N_DEFAULT;
  const root = document.documentElement;
  root.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n, lang);
    if (Array.isArray(value)) {
      el.innerHTML = value.map((item) => "<li>" + escapeHtml(item) + "</li>").join("");
    } else {
      el.textContent = value;
    }
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml, lang);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key, lang));
    });
  });
  document.title = t("meta.title", lang);

  if (save) storageSet(I18N_STORAGE_KEY, lang);
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

/* Ce script est chargé dans <head> sans "defer" : on fixe tout de suite la langue,
   le thème enregistré et la classe "js", avant l'affichage de la page. */
(function boot() {
  const root = document.documentElement;
  root.classList.add("js");
  root.lang = getInitialLang();
  const theme = storageGet("portfolio-theme");
  if (theme === "light" || theme === "dark") root.dataset.theme = theme;
})();
