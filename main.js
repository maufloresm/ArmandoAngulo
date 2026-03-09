// ==========================================
// 1. DICCIONARIO DE TRADUCCIONES (ES / EN)
// ==========================================
const i18n = {
  es: {
    // Encabezado y Navegación
    navHome: "Home",
    navPubs: "Publicaciones",
    navPres: "Presentaciones",
    navOutreach: "Divulgación",
    navProjects: "Proyectos",
    navTeaching: "Docencia",
    navGroup: "Research Group",
    navCollab: "Colaboraciones",
    navResources: "Resources",
    navBlog: "Blog",

    // Barra Lateral (Sidebar)
    roleTitle: "Técnico Académico Titular A<br>(Tiempo Completo Definitivo)",
    affilUni: "<strong>Facultad de Psicología, UNAM</strong>",
    affilLoc: "Ciudad de México, México",
    memberTitle: "<strong>Miembro:</strong>",
    member1: "Sistema Nacional de Investigadores Nivel I",
    member2: "Laboratorio de Psicolingüística",
    member3: "Interdisciplinary Network for Cognitive and Behavioral Sciences",

    // Inicio (index.html)
    aboutTitle: "Acerca de mi",
    aboutP1: "Soy Doctor en Psicología (Neurociencias de la Conducta, UNAM; examen 28 de enero de 2025), con formación previa como Maestro en Ciencias del Comportamiento (Neurociencias, UdeG, 2018) y Licenciado en Psicología (UdeG, 2015).",
    aboutP2: "He realizado estancias y colaboración académica en instituciones como el Department of Experimental Psychology (University of Oxford, proyecto “Modelling the Infant Bilingual Lexicon”) y el Center for Brain and Cognition (Universitat Pompeu Fabra).",
    resTitle: "Intereses de investigación",
    resIntro: "Mi trabajo se enfoca en cómo se organiza y anticipa la información lingüística durante la comprensión, considerando factores semánticos, fonológicos y contextuales, y usando medidas experimentales y análisis computacionales.",
    int1: "Predicción lingüística en población típica y clínica",
    int2: "Adquisición del lenguaje (infancia temprana)",
    int3: "Bilingüismo y acceso léxico",
    int4: "Medidas conductuales y psicofisiológicas (eye-tracking, pupilometría, EEG)",
    int5: "Análisis computacional (RSA, series de tiempo, redes léxico-semánticas)",
    keyTitle: "Palabras Clave",
    k1: "Psicolingüística", k2: "Predicción", k3: "Bilingüismo", k4: "Adquisición del lenguaje", k5: "Rastreo ocular", k6: "Pupilometría", k7: "EEG/ERP", k8: "Redes semánticas", k9: "IA aplicada", k10: "Normas de completamiento oracional",
    contactTitle: "Contacto",
    
    // Publicaciones (publications.html)
    pubsTitle: "Journal Articles",
    pubsDesc: "Artículos indexados en revistas con revisión por pares ordenados cronológicamente.",

    // Presentaciones (presentations.html)
    presTitle: "Presentaciones y Conferencias",
    presDesc: "Selección de ponencias, conferencias magistrales, carteles y talleres presentados en congresos e instituciones académicas."
  },
  
  en: {
    // Header & Navigation
    navHome: "Home",
    navPubs: "Publications",
    navPres: "Presentations",
    navOutreach: "Outreach",
    navProjects: "Projects",
    navTeaching: "Teaching",
    navGroup: "Research Group",
    navCollab: "Collaborations",
    navResources: "Resources",
    navBlog: "Blog",

    // Sidebar
    roleTitle: "Senior Academic Technician A<br>(Full-Time)",
    affilUni: "<strong>Faculty of Psychology, UNAM</strong>",
    affilLoc: "Mexico City, Mexico",
    memberTitle: "<strong>Member:</strong>",
    member1: "National System of Researchers (SNI) Level I",
    member2: "Psycholinguistics Laboratory",
    member3: "Interdisciplinary Network for Cognitive and Behavioral Sciences",

    // Home (index.html)
    aboutTitle: "About me",
    aboutP1: "I hold a PhD in Psychology (Behavioral Neuroscience, UNAM; examination January 28, 2025), and previously completed an MSc in Behavioral Sciences (Neuroscience, UdeG, 2018) and a BA in Psychology (UdeG, 2015).",
    aboutP2: "I have conducted research stays and collaborations at institutions such as the Department of Experimental Psychology (University of Oxford, “Modelling the Infant Bilingual Lexicon” project) and the Center for Brain and Cognition (Universitat Pompeu Fabra).",
    resTitle: "Research interests",
    resIntro: "My work focuses on how linguistic information is organized and anticipated during comprehension, considering semantic, phonological, and contextual factors, using experimental measures and computational analyses.",
    int1: "Linguistic prediction in typical and clinical populations",
    int2: "Language acquisition (early childhood)",
    int3: "Bilingualism and lexical access",
    int4: "Behavioral and psychophysiological measures (eye-tracking, pupillometry, EEG)",
    int5: "Computational analysis (RSA, time series, lexico-semantic networks)",
    keyTitle: "Keywords",
    k1: "Psycholinguistics", k2: "Prediction", k3: "Bilingualism", k4: "Language acquisition", k5: "Eye-tracking", k6: "Pupillometry", k7: "EEG/ERP", k8: "Semantic networks", k9: "Applied AI", k10: "Sentence completion norms",
    contactTitle: "Contacts",

    // Publications (publications.html)
    pubsTitle: "Journal Articles",
    pubsDesc: "Peer-reviewed journal articles arranged chronologically.",

    // Presentations (presentations.html)
    presTitle: "Presentations and Conferences",
    presDesc: "Selection of lectures, keynotes, posters, and workshops presented at academic conferences and institutions."
  }
};

// ==========================================
// 2. FUNCIÓN PARA CARGAR COMPONENTES (FETCH)
// ==========================================
async function loadComponents() {
  try {
    // Carga los 3 archivos al mismo tiempo
    const [headerRes, sidebarRes, footerRes] = await Promise.all([
      fetch('header.html'),
      fetch('sidebar.html'),
      fetch('footer.html')
    ]);

    // Convierte la respuesta a texto HTML
    const headerHtml = await headerRes.text();
    const sidebarHtml = await sidebarRes.text();
    const footerHtml = await footerRes.text();

    // Inyecta el HTML en los contenedores vacíos de tu página
    document.getElementById('header-placeholder').innerHTML = headerHtml;
    document.getElementById('sidebar-placeholder').innerHTML = sidebarHtml;
    document.getElementById('footer-placeholder').innerHTML = footerHtml;

    // Una vez cargados los componentes, iniciamos el idioma y resaltamos el menú
    initLanguage();
    highlightCurrentPage();

  } catch (error) {
    console.error("Error cargando los componentes HTML:", error);
  }
}

// ==========================================
// 3. LÓGICA DE IDIOMAS
// ==========================================
function setLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  document.documentElement.lang = lang; // Cambia el lang del HTML

  // Recorre todas las etiquetas que tengan data-i18n y reemplaza su contenido
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Actualiza el botón de idioma (Visual y funcionalidad)
  const langToggle = document.getElementById("langToggle");
  const langImg = document.getElementById("langImg");
  const langText = document.getElementById("langText");

  if (langToggle && langImg && langText) {
    if (lang === "es") {
      langText.textContent = "EN";
      langImg.src = "img/usa.jpg"; 
      langImg.alt = "Bandera EN";
    } else {
      langText.textContent = "ES";
      langImg.src = "img/mx.jpg";
      langImg.alt = "Bandera ES";
    }
  }

  // Guarda la preferencia en el navegador
  localStorage.setItem("site_lang", lang);
}

function initLanguage() {
  // Verifica si el usuario ya había elegido un idioma antes
  const savedLang = localStorage.getItem("site_lang") || "es";
  setLanguage(savedLang);

  // Agrega el evento de clic al botón que acabamos de inyectar en el header
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que el enlace recargue la página
      const currentLang = document.documentElement.lang || "es";
      const newLang = currentLang === "es" ? "en" : "es";
      setLanguage(newLang);
    });
  }
}

// ==========================================
// 4. RESALTAR PÁGINA ACTUAL EN EL MENÚ
// ==========================================
function highlightCurrentPage() {
  const links = document.querySelectorAll(".nav-menu a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

// ==========================================
// 5. INICIAR TODO AL CARGAR LA PÁGINA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadComponents();
});