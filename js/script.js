// =====================================================

// ELEMENTOS PRINCIPAIS

// =====================================================



const menuButton = document.getElementById('menuButton');

const siteNav = document.getElementById('siteNav');

const currentYear = document.getElementById('currentYear');

const languageButton = document.getElementById('languageButton');

const languageLabel = document.getElementById('languageLabel');





// =====================================================

// TRADUÇÕES

// =====================================================



const translations = {

  pt: {

    navHome: 'Início',

    navProjects: 'Projetos',

    navAbout: 'Sobre mim',

    navContact: 'Contato',



    menuOpen: 'Menu',

    menuClose: 'Fechar',



    heroEyebrow: 'Desenvolvimento web',

    heroHello: 'Olá, eu sou a',

    heroIntro:

      'Desenvolvedora em formação, criando soluções web funcionais, acessíveis e bem cuidadas.',

    heroProjects: 'Conheça meus projetos',

    heroAbout: 'Sobre mim',

    heroImageAlt:

      'Ilustração de uma desenvolvedora trabalhando no computador',



    projectsTitle: 'Projetos',



    project1Title: 'Projeto 01',

    project1Description:

      'Uma pequena descrição explicando o objetivo e as principais funcionalidades do projeto.',

    project1Alt: 'Imagem do Projeto 01',



    project2Title: 'Projeto 02',

    project2Description:

      'Projeto desenvolvido utilizando tecnologias front-end e integração com serviços externos.',

    project2Alt: 'Imagem do Projeto 02',



    project3Title: 'Planejamento Pedagógico',

    project3Description:

      'Sistema web desenvolvido para auxiliar professores na criação e organização de planos de aula de forma prática e personalizada.',

    project3Alt: 'Prévia do sistema Planejamento Pedagógico',



    project4Title: 'Projeto 04',

    project4Description:

      'Sistema com armazenamento de dados e funcionalidades de cadastro e gerenciamento.',

    project4Alt: 'Imagem do Projeto 04',



    project5Title: 'Projeto 05',

    project5Description:

      'Projeto com autenticação e acesso utilizando serviços externos.',

    project5Alt: 'Imagem do Projeto 05',



    project6Title: 'Projeto 06',

    project6Description:

      'Projeto completo reunindo diferentes tecnologias e conceitos estudados.',

    project6Alt: 'Imagem do Projeto 06',



    skillsEyebrow: 'Sobre mim',

    skillsTitlePrefix: 'Transformando ideias em',

    skillsTitleHighlight: 'soluções digitais.',

    skillsText1:

      'Desenvolvo experiências web funcionais, responsivas e pensadas para oferecer uma navegação simples e intuitiva.',

    skillsText2:

      'Trabalho com HTML, CSS, JavaScript, Python, PHP, Flask e MySQL, além de APIs e integrações externas.',

    skillsText3:

      'Gosto de transformar problemas reais em soluções digitais úteis, buscando evoluir constantemente e aprimorar cada projeto que desenvolvo.',

    stackTitle: 'Tecnologias',



    contactEyebrow: 'Contato',

    contactTitle: 'Tem um projeto em mente?',

    contactText:

      'Entre em contato para dúvidas, ideias, orçamentos ou suporte.',

    contactName: 'Nome',

    contactNamePlaceholder: 'Nome',

    contactEmail: 'E-mail',

    contactEmailPlaceholder: 'E-mail',

    contactMessage: 'Mensagem',

    contactMessagePlaceholder: 'Mensagem',

    contactSend: 'Enviar mensagem',
    contactSending: 'Enviando...',
    contactSuccess: 'Mensagem enviada com sucesso!',
    contactWait: 'Aguarde {seconds} segundos antes de enviar novamente.',
    contactLimit: 'Limite de mensagens atingido. Tente novamente mais tarde.',
    contactError: 'Não foi possível enviar agora. Tente novamente em alguns instantes.',
    contactInvalid: 'Confira os campos antes de enviar.'

  },



  en: {

    navHome: 'Home',

    navProjects: 'Projects',

    navAbout: 'About me',

    navContact: 'Contact',



    menuOpen: 'Menu',

    menuClose: 'Close',



    heroEyebrow: 'Web development',

    heroHello: "Hi, I'm",

    heroIntro:

      'Developer in training, creating functional, accessible and carefully crafted web solutions.',

    heroProjects: 'Explore my projects',

    heroAbout: 'About me',

    heroImageAlt:

      'Illustration of a developer working at a computer',



    projectsTitle: 'Projects',



    project1Title: 'Project 01',

    project1Description:

      'A short description explaining the project goal and its main features.',

    project1Alt: 'Project 01 preview',



    project2Title: 'Project 02',

    project2Description:

      'A project built with front-end technologies and external service integrations.',

    project2Alt: 'Project 02 preview',



    project3Title: 'Pedagogical Planning',

    project3Description:

      'Web system developed to help teachers create and organize lesson plans in a practical and personalized way.',

    project3Alt: 'Pedagogical Planning system preview',



    project4Title: 'Project 04',

    project4Description:

      'A system with data storage, registration and management features.',

    project4Alt: 'Project 04 preview',



    project5Title: 'Project 05',

    project5Description:

      'A project featuring authentication and access through external services.',

    project5Alt: 'Project 05 preview',



    project6Title: 'Project 06',

    project6Description:

      'A complete project combining different technologies and concepts.',

    project6Alt: 'Project 06 preview',



    skillsEyebrow: 'About me',

    skillsTitlePrefix: 'Turning ideas into',

    skillsTitleHighlight: 'digital solutions.',

    skillsText1:

      'I build functional and responsive web experiences designed to provide simple and intuitive navigation.',

    skillsText2:

      'I work with HTML, CSS, JavaScript, Python, PHP, Flask and MySQL, as well as APIs and external integrations.',

    skillsText3:

      'I enjoy turning real-world problems into useful digital solutions while continuously improving each project I build.',

    stackTitle: 'Technologies I use',



    contactEyebrow: 'Contact',

    contactTitle: 'Have a project in mind?',

    contactText:

      'Get in touch for questions, ideas, quotes or support.',

    contactName: 'Your full name',

    contactNamePlaceholder: 'Your full name',

    contactEmail: 'Your email',

    contactEmailPlaceholder: 'Your email',

    contactMessage: 'Message',

    contactMessagePlaceholder: 'Message',

    contactSend: 'Send message',
    contactSending: 'Sending...',
    contactSuccess: 'Message sent successfully!',
    contactWait: 'Please wait {seconds} seconds before sending again.',
    contactLimit: 'Message limit reached. Please try again later.',
    contactError: 'Unable to send right now. Please try again shortly.',
    contactInvalid: 'Please check the fields before sending.'

  }

};





// =====================================================

// IDIOMA ATUAL

// =====================================================



let currentLanguage = localStorage.getItem('portfolioLanguage') || 'pt';



if (!translations[currentLanguage]) {

  currentLanguage = 'pt';

}





// =====================================================

// MENU MOBILE

// =====================================================



function updateMenuButtonText() {

  if (!menuButton || !siteNav) {

    return;

  }



  const isOpen = siteNav.classList.contains('is-open');

  const dictionary = translations[currentLanguage];



  menuButton.textContent = isOpen

    ? dictionary.menuClose

    : dictionary.menuOpen;



  menuButton.setAttribute(

    'aria-label',

    isOpen

      ? dictionary.menuClose

      : dictionary.menuOpen

  );

}



if (menuButton && siteNav) {

  menuButton.addEventListener('click', () => {

    const isOpen = siteNav.classList.toggle('is-open');



    menuButton.setAttribute('aria-expanded', String(isOpen));

    updateMenuButtonText();

  });



  siteNav.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      siteNav.classList.remove('is-open');

      menuButton.setAttribute('aria-expanded', 'false');

      updateMenuButtonText();

    });

  });

}





// =====================================================

// ANO AUTOMÁTICO

// =====================================================



if (currentYear) {

  currentYear.textContent = new Date().getFullYear();

}





// =====================================================

// ANIMAÇÃO DE DIGITAÇÃO DO HERO

// =====================================================



let typingRun = 0;



function startHeroTyping() {

  const run = ++typingRun;



  const items = [

    {

      element: document.querySelector('[data-i18n="heroHello"]'),

      speed: 82

    },

    {

      element: document.querySelector('.hero-name'),

      speed: 82

    },

    {

      element: document.querySelector('[data-i18n="heroIntro"]'),

      speed: 55

    }

  ].filter((item) => item.element);



  const texts = items.map(({ element }) =>

    element.textContent.replace(/\s+/g, ' ').trim()

  );



  items.forEach(({ element }) => {

    element.textContent = '';

    element.classList.remove('typing-active');

  });



  function typeElement(index) {

    if (run !== typingRun || index >= items.length) {

      return;

    }



    const { element, speed } = items[index];

    const text = texts[index];

    const textNode = document.createTextNode('');

    const cursor = document.createElement('span');



    let characterIndex = 0;



    cursor.className = 'typing-cursor';

    cursor.setAttribute('aria-hidden', 'true');



    element.append(textNode, cursor);

    element.classList.add('typing-active');



    function typeCharacter() {

      if (run !== typingRun) {

        return;

      }



      textNode.nodeValue = text.slice(0, characterIndex + 1);

      characterIndex += 1;



      if (characterIndex < text.length) {

        window.setTimeout(typeCharacter, speed);

        return;

      }



      element.classList.remove('typing-active');

      cursor.remove();



      window.setTimeout(() => {

        typeElement(index + 1);

      }, 260);

    }



    typeCharacter();

  }



  typeElement(0);

}





// =====================================================

// APLICA O IDIOMA

// =====================================================



function applyLanguage(language) {

  const dictionary = translations[language];



  if (!dictionary) {

    return;

  }



  currentLanguage = language;



  document.documentElement.lang =

    language === 'pt' ? 'pt-BR' : 'en';



  document.querySelectorAll('[data-i18n]').forEach((element) => {

    const key = element.dataset.i18n;

    const translation = dictionary[key];



    if (translation) {

      element.textContent = translation;

    }

  });



  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {

    const key = element.dataset.i18nAlt;

    const translation = dictionary[key];



    if (translation) {

      element.alt = translation;

    }

  });



  document

    .querySelectorAll('[data-i18n-placeholder]')

    .forEach((element) => {

      const key = element.dataset.i18nPlaceholder;

      const translation = dictionary[key];



      if (translation) {

        element.placeholder = translation;

      }

    });



  if (languageLabel) {

    languageLabel.textContent =

      language === 'pt' ? 'EN' : 'PT';

  }



  if (languageButton) {

    languageButton.setAttribute(

      'aria-label',

      language === 'pt'

        ? 'Trocar idioma para inglês'

        : 'Switch language to Portuguese'

    );

  }



  updateMenuButtonText();

  startHeroTyping();

}





// =====================================================

// BOTÃO DE IDIOMA

// =====================================================



if (languageButton) {

  languageButton.addEventListener('click', () => {

    const nextLanguage =

      currentLanguage === 'pt' ? 'en' : 'pt';



    localStorage.setItem(

      'portfolioLanguage',

      nextLanguage

    );



    applyLanguage(nextLanguage);

  });

}





// =====================================================

// INICIALIZAÇÃO

// =====================================================



applyLanguage(currentLanguage);

// =====================================================
// FORMULÁRIO: ANTI-SPAM + RATE LIMIT DE INTERFACE
// =====================================================
//
// IMPORTANTE:
// Este bloqueio no navegador melhora a experiência e reduz spam básico,
// mas pode ser contornado. O rate limit REAL está no app.py.
//

const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const formStatus = document.getElementById('formStatus');

const CONTACT_RATE_KEY = 'portfolioContactRateLimit';

const CONTACT_RATE = {
  maxAttempts: 3,
  windowTime: 15 * 60 * 1000, // 15 minutos
  cooldown: 60 * 1000         // 1 minuto entre envios
};

function getContactDictionary() {
  return translations[currentLanguage] || translations.pt;
}

function setFormStatus(message, type = '') {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.remove(
    'form-status--success',
    'form-status--error'
  );

  if (type === 'success') {
    formStatus.classList.add('form-status--success');
  }

  if (type === 'error') {
    formStatus.classList.add('form-status--error');
  }
}

function getContactRateData() {
  try {
    return JSON.parse(
      localStorage.getItem(CONTACT_RATE_KEY)
    ) || {
      attempts: [],
      lastSubmit: 0
    };
  } catch {
    return {
      attempts: [],
      lastSubmit: 0
    };
  }
}

function saveContactRateData(data) {
  localStorage.setItem(
    CONTACT_RATE_KEY,
    JSON.stringify(data)
  );
}

function cleanContactAttempts(attempts) {
  const now = Date.now();

  return attempts.filter(
    (timestamp) =>
      now - timestamp < CONTACT_RATE.windowTime
  );
}

function getCooldownSeconds(lastSubmit) {
  const elapsed = Date.now() - lastSubmit;
  const remaining = CONTACT_RATE.cooldown - elapsed;

  return Math.max(
    0,
    Math.ceil(remaining / 1000)
  );
}

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const dictionary = getContactDictionary();
    const honeypot = document.getElementById('website');

    // Bots costumam preencher este campo invisível.
    if (honeypot && honeypot.value.trim() !== '') {
      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      setFormStatus(dictionary.contactInvalid, 'error');
      return;
    }

    const now = Date.now();
    const rateData = getContactRateData();

    rateData.attempts = cleanContactAttempts(
      rateData.attempts || []
    );

    const seconds = getCooldownSeconds(
      rateData.lastSubmit || 0
    );

    if (seconds > 0) {
      setFormStatus(
        dictionary.contactWait.replace(
          '{seconds}',
          String(seconds)
        ),
        'error'
      );

      return;
    }

    if (
      rateData.attempts.length >=
      CONTACT_RATE.maxAttempts
    ) {
      setFormStatus(
        dictionary.contactLimit,
        'error'
      );

      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    setFormStatus(dictionary.contactSending);

    try {
      const response = await fetch('/contato', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.status === 429) {
        setFormStatus(
          data.message || dictionary.contactLimit,
          'error'
        );
        return;
      }

      if (!response.ok) {
        setFormStatus(
          data.message || dictionary.contactError,
          'error'
        );
        return;
      }

      // Só registra uma tentativa local depois que o servidor aceitou.
      rateData.attempts.push(now);
      rateData.lastSubmit = now;
      saveContactRateData(rateData);

      contactForm.reset();

      setFormStatus(
        data.message || dictionary.contactSuccess,
        'success'
      );
    } catch (error) {
      setFormStatus(
        dictionary.contactError,
        'error'
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}

