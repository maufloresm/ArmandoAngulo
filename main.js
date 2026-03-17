// ==========================================
// 1. DICCIONARIO DE TRADUCCIONES (ES / EN)
// ==========================================
const i18n = {
  es: {
    // Navegación
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
    contactTitle: "<strong>Contacto:</strong>",
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
    
    // Publicaciones (publications.html)
    pubsTitle: "Artículos de revista",
    pubsDesc: "Artículos indexados en revistas con revisión por pares ordenados cronológicamente.",

    // Presentaciones (presentations.html)
    presTitle: "Presentaciones y Conferencias",
    presDesc: "Selección de ponencias, conferencias magistrales, carteles y talleres presentados en congresos e instituciones académicas.",

    // Grupo de investigación (group.html)
    groupPageTitle: "Miembros del Grupo de Investigación",
    groupDesc: "Nuestro equipo está formado por estudiantes e investigadores dedicados al estudio de la psicolingüística y las neurociencias cognitivas de la conducta.",
    m1Name: "Juan García López",
    m1Info: "Estudiante de Licenciatura, Facultad de Psicología, UNAM, Tesis.",
    m1IntL: "<strong>Intereses de investigación:</strong>",
    m1IntT: "Predicción lingüística, eye-tracking, adquisición del lenguaje en la infancia.",
    m1ThesisL: "<strong>Tesis:</strong>",
    m1ThesisT: "El rol del contexto en la anticipación sintáctica en niños hispanohablantes.",
    m2Name: "Ana Rodríguez Martínez",
    m2Info: "Estudiante de Maestría en Ciencias (Neurobiología), UNAM.",
    m2IntL: "<strong>Intereses de investigación:</strong>",
    m2IntT: "Bilingüismo, acceso léxico, pupilometría, priming semántico.",
    m2ThesisL: "<strong>Tesis:</strong>",
    m2ThesisT: "Mecanismos de acceso léxico en bilingües simultáneos de español e inglés.",
    m3Name: "Pedro Sánchez Ruiz",
    m3Info: "Estudiante de Licenciatura, Facultad de Psicología, UNAM, Tesis.",
    m3IntL: "<strong>Intereses de investigación:</strong>",
    m3IntT: "Redes léxico-semánticas, envejecimiento cognitivo, enfermedad de Alzheimer.",
    m3ThesisL: "<strong>Tesis:</strong>",
    m3ThesisT: "Análisis computacional de redes semánticas como biomarcador temprano en Alzheimer.",
    m4Name: "Laura Pérez Gómez",
    m4Info: "Estudiante de Licenciatura, Facultad de Psicología, UNAM, Asistente de Investigación.",
    m4IntL: "<strong>Intereses de investigación:</strong>",
    m4IntT: "Psicolingüística experimental, electroencefalografía (EEG/ERP), comprensión de oraciones.",
    m4ThesisL: "<strong>Asistente de enseñanza:</strong>",
    m4ThesisT: "Cursos de Métodos de Investigación en Neurociencias.",

    // Proyectos
    projTitle: "Proyectos de Investigación",

    // Divulgación
    outreachTitle: "Divulgación Científica",
    outreachPubs: "Artículos de Divulgación",
    outreachEvents: "Organización de Eventos",
    outreachMedia: "Entrevistas en Medios",

    // Docencia
    teachingTitle: "Docencia",
    teachUndergrad: "Cursos de Licenciatura",
    teachGrad: "Cursos de Posgrado",

    // Colaboraciones
    collabTitle: "Colaboraciones",
    
    c1Name: "Dra. Natalia Arias Trejo",
    c1Degree: "Doctora en Psicología.",
    c1Position: "Profesora de Tiempo Completo en la Universidad Nacional Autónoma de México (UNAM).",
    c1IntL: "<strong>Temas de interés:</strong>",
    c1IntT: "Adquisición del lenguaje, normas de asociación de palabras.",

    c2Name: "Dr. Anuenue Baker Kukona",
    c2Degree: "Doctor en Psicología.",
    c2Position: "Profesor Titular en Psicología en la Universidad de Greenwich.",
    c2IntL: "<strong>Temas de interés:</strong>",
    c2IntT: "Cognición, lingüística y métodos cuantitativos.",

    c3Name: "Dr. Luis Ángel Llamas Alonso",
    c3Degree: "Doctor en Neurociencias de la Conducta.",
    c3Position: "Profesor de Tiempo Completo en la Universidad Autónoma de Baja California (UABC).",
    c3IntL: "<strong>Temas de interés:</strong>",
    c3IntT: "Neurociencia cognitiva, neurociencia afectiva, psicología experimental.",

    c4Name: "Dr. Julio César Llamas Alonso",
    c4Degree: "Doctor en Psicología.",
    c4Position: "Profesor Investigador de Tiempo Completo en la Universidad Autónoma del Estado de Hidalgo (UAEH).",
    c4IntL: "<strong>Temas de interés:</strong>",
    c4IntT: "Neurociencias, cognición, psicopatología, adicciones, memoria, creatividad.",

    c5Name: "Dr. Vladimir Huerta Chávez",
    c5Degree: "Doctor en Psicología.",
    c5Position: "Miembro del Instituto de Neurociencias de la Universidad de Guadalajara (UdeG).",
    c5IntL: "<strong>Temas de interés:</strong>",
    c5IntT: "Emoción y cognición, ERPs y rastreo ocular (eye-tracking).",

    c6Name: "Dr. Kim Plunkett",
    c6Degree: "Doctor en Psicología Experimental.",
    c6Position: "Profesor Emérito de Ciencias Cognitivas.",
    c6IntL: "<strong>Temas de interés:</strong>",
    c6IntT: "Reconocimiento de palabras, aprendizaje de palabras, desarrollo semántico y formación de categorías.",

    // Blog
    blogTitle: "Blog",
    blogDesc: "Reflexiones, noticias y notas breves sobre psicolingüística, ciencia cognitiva y tecnología.",
    readMore: "Leer más &rarr;",

    post1Title: "El futuro de la IA en la psicolingüística",
    post1Date: "15 de Marzo, 2026",
    post1Snippet: "Un breve análisis sobre cómo los modelos de lenguaje a gran escala (LLMs) están transformando nuestra forma de modelar y estudiar el léxico mental y el cerebro bilingüe...",

    post2Title: "Consejos para sobrevivir al doctorado",
    post2Date: "10 de Febrero, 2026",
    post2Snippet: "Después de defender mi tesis doctoral, comparto algunas estrategias que me ayudaron a mantener el equilibrio entre las exigencias del laboratorio, la escritura y la vida personal.",

    post3Title: "Entendiendo el 'Eye-Tracking' en la infancia",
    post3Date: "5 de Enero, 2026",
    post3Snippet: "Una introducción amigable a la tecnología de rastreo ocular y cómo esta herramienta no invasiva nos permite descubrir qué saben los bebés mucho antes de que puedan articular palabras."
  },
  
  en: {
    // Navigation
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
    contactTitle: "<strong>Contact:</strong>",
    member1: "National System of Researchers (SNI) Level I",
    member2: "Psycholinguistics Laboratory",
    member3: "Interdisciplinary Network for Cognitive and Behavioral Sciences",

    // Home
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

    // Publications
    pubsTitle: "Journal Articles",
    pubsDesc: "Peer-reviewed journal articles arranged chronologically.",

    // Presentations
    presTitle: "Presentations and Conferences",
    presDesc: "Selection of lectures, keynotes, posters, and workshops presented at academic conferences and institutions.",

    // Research Group
    groupPageTitle: "Research Group Members",
    groupDesc: "Our team consists of students and researchers dedicated to the study of psycholinguistics and cognitive neuroscience.",
    m1Name: "Juan Garcia Lopez",
    m1Info: "Undergraduate Student, Faculty of Psychology, UNAM, Thesis.",
    m1IntL: "<strong>Research interests:</strong>",
    m1IntT: "Linguistic prediction, eye-tracking, child language acquisition.",
    m1ThesisL: "<strong>Thesis:</strong>",
    m1ThesisT: "The role of context in syntactic anticipation in Spanish-speaking children.",
    m2Name: "Ana Rodriguez Martinez",
    m2Info: "MSc Student (Neurobiology), UNAM.",
    m2IntL: "<strong>Research interests:</strong>",
    m2IntT: "Bilingualism, lexical access, pupillometry, semantic priming.",
    m2ThesisL: "<strong>Thesis:</strong>",
    m2ThesisT: "Mechanisms of lexical access in simultaneous Spanish-English bilinguals.",
    m3Name: "Pedro Sanchez Ruiz",
    m3Info: "Undergraduate Student, Faculty of Psychology, UNAM, Thesis.",
    m3IntL: "<strong>Research interests:</strong>",
    m3IntT: "Lexico-semantic networks, cognitive aging, Alzheimer's disease.",
    m3ThesisL: "<strong>Thesis:</strong>",
    m3ThesisT: "Computational analysis of semantic networks as an early biomarker in Alzheimer's disease.",
    m4Name: "Laura Perez Gomez",
    m4Info: "Undergraduate Student, Faculty of Psychology, UNAM, Research Assistant.",
    m4IntL: "<strong>Research interests:</strong>",
    m4IntT: "Experimental psycholinguistics, electroencephalography (EEG/ERP), sentence comprehension.",
    m4ThesisL: "<strong>Teaching assistant:</strong>",
    m4ThesisT: "Research Methods in Neuroscience courses.",

    // Projects
    projTitle: "Research Projects",

    // Outreach
    outreachTitle: "Science Communication & Outreach",
    outreachPubs: "Outreach Publications",
    outreachEvents: "Event Organization",
    outreachMedia: "Media Interviews",

    // Teaching
    teachingTitle: "Teaching",
    teachUndergrad: "Undergraduate Courses",
    teachGrad: "Graduate Courses",

    // Collaborations
    collabTitle: "Collaborations",
    
    c1Name: "Dr. Natalia Arias Trejo",
    c1Degree: "Doctor of Psychology.",
    c1Position: "Full Time Professor at National Autonomous University of Mexico (UNAM).",
    c1IntL: "<strong>Interests Topics:</strong>",
    c1IntT: "Language acquisition, word association norms.",

    c2Name: "Dr. Anuenue Baker Kukona",
    c2Degree: "PhD in Psychology.",
    c2Position: "Senior Lecturer in Psychology at University of Greenwich.",
    c2IntL: "<strong>Interests Topics:</strong>",
    c2IntT: "Cognition, linguistics and quantitative methods.",

    c3Name: "Dr. Luis Angel Llamas Alonso",
    c3Degree: "PhD in Behavioral Neuroscience.",
    c3Position: "Full Time Professor at Autonomous University of Baja California.",
    c3IntL: "<strong>Interests Topics:</strong>",
    c3IntT: "Cognitive Neuroscience, Affective Neuroscience, Experimental Psychology.",

    c4Name: "Dr. Julio César Llamas Alonso",
    c4Degree: "Doctor of Psychology.",
    c4Position: "Full Time Researcher Lecturer at Autonomous University of Hidalgo State.",
    c4IntL: "<strong>Interests Topics:</strong>",
    c4IntT: "Neurosciences, cognition, psychopathology, addictions, memory, creativity.",

    c5Name: "Dr. Vladimir Huerta Chavez",
    c5Degree: "Doctor of Psychology.",
    c5Position: "Member of the Neuroscience Institute at the University of Guadalajara.",
    c5IntL: "<strong>Interests Topics:</strong>",
    c5IntT: "Emotion and cognition, ERP's & eye tracking.",

    c6Name: "Dr. Kim Plunkett",
    c6Degree: "PhD in Experimental Psychology.",
    c6Position: "Emeritus Professor of Cognitive Science.",
    c6IntL: "<strong>Interests Topics:</strong>",
    c6IntT: "Word recognition, word learning, semantic development and category formation.",

    // Blog
    blogTitle: "Blog",
    blogDesc: "Reflections, news, and short notes on psycholinguistics, cognitive science, and technology.",
    readMore: "Read more &rarr;",

    post1Title: "The future of AI in psycholinguistics",
    post1Date: "March 15, 2026",
    post1Snippet: "A brief analysis of how large language models (LLMs) are transforming the way we model and study the mental lexicon and the bilingual brain...",

    post2Title: "Tips for surviving a PhD",
    post2Date: "February 10, 2026",
    post2Snippet: "After defending my doctoral thesis, I share some strategies that helped me balance the demands of the lab, writing, and personal life.",

    post3Title: "Understanding Eye-Tracking in infancy",
    post3Date: "January 5, 2026",
    post3Snippet: "A friendly introduction to eye-tracking technology and how this non-invasive tool allows us to discover what babies know long before they can articulate words."
  }
};

// ==========================================
// 2. FUNCIÓN PARA CARGAR COMPONENTES (FETCH)
// ==========================================
async function loadComponents() {
  try {
    const [headerRes, sidebarRes, footerRes] = await Promise.all([
      fetch('header.html'),
      fetch('sidebar.html'),
      fetch('footer.html')
    ]);

    const headerHtml = await headerRes.text();
    const sidebarHtml = await sidebarRes.text();
    const footerHtml = await footerRes.text();

    const headerPlaceholder = document.getElementById('header-placeholder');
    if(headerPlaceholder) headerPlaceholder.innerHTML = headerHtml;

    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if(sidebarPlaceholder) sidebarPlaceholder.innerHTML = sidebarHtml;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if(footerPlaceholder) footerPlaceholder.innerHTML = footerHtml;

    initLanguage();
    highlightCurrentPage();

  } catch (error) {
    console.error("Error cargando los componentes HTML:", error);
  }
}

// ==========================================
// 3. LÓGICA DE IDIOMAS Y DELEGACIÓN DE EVENTOS
// ==========================================
function setLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  document.documentElement.lang = lang; 

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langImg = document.getElementById("langImg");
  const langText = document.getElementById("langText");

  if (langImg && langText) {
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

  localStorage.setItem("site_lang", lang);
}

function initLanguage() {
  const savedLang = localStorage.getItem("site_lang") || "es";
  setLanguage(savedLang);

  // Delegación de eventos (A prueba de balas)
  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest("#langToggle");
    
    if (toggleBtn) {
      e.preventDefault(); 
      const currentLang = document.documentElement.lang || "es";
      const newLang = currentLang === "es" ? "en" : "es";
      setLanguage(newLang);
    }
  });
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
