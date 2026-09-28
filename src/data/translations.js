/**
 * Textos da interface, em português e inglês, com paridade factual.
 * Os estudos de caso vivem em `projects.js`; aqui fica só o texto de chrome,
 * rótulos e as seções institucionais.
 */

const NAV_IDS = [
  { id: "sobre", pt: "Sobre", en: "About" },
  { id: "trajetoria", pt: "Trajetória", en: "Journey" },
  { id: "projetos", pt: "Projetos", en: "Projects" },
  { id: "contato", pt: "Contato", en: "Contact" }
];

/** Dados de contato e arquivos públicos, referenciados em um lugar só. */
export const PERFIL = {
  nome: "Henrique Pucci",
  cargo: "Analista de Requisitos e Produto",
  email: "pucci.rique1234@gmail.com",
  linkedin: "https://linkedin.com/in/henrique-pucci",
  github: "https://github.com/HenriPucci",
  site: "https://hpportifolio.vercel.app",
  local: "Brasília, DF, Brasil"
};

export const TRANSLATIONS = {
  pt: {
    langToggle: "EN",
    skipLink: "Pular para o conteúdo",
    nav: {
      ariaLabel: "Navegação principal",
      links: NAV_IDS.map(({ id, pt }) => ({ id, label: pt }))
    },
    menu: {
      title: "Navegação",
      openLabel: "Abrir menu de navegação",
      closeLabel: "Fechar menu"
    },
    hero: {
      eyebrow: "Discovery · Service Design · UX Research",
      role: "Analista de Requisitos e Produto",
      lede: "Atuo desde 2021 em transformação digital de serviços públicos e regulatórios. Planejo e facilito ciclos de Discovery e Service Design e transformo regras de negócio e pesquisa com usuários em requisitos, jornadas, service blueprints, protótipos e roadmaps. Minha formação em Engenharia de Software me permite conectar necessidade de negócio, experiência do usuário e viabilidade técnica.",
      ctaPrimary: "Ver projetos",
      ctaLinkedin: "LinkedIn",
      ctaContact: "Falar comigo",
      portraitAlt: "Retrato de Henrique Pucci.",
      proof: [
        "Engenharia de Software, UnB",
        "4 órgãos federais e 2 agências reguladoras",
        "Guia publicado no gov.br",
        "Artigo na ENASE 2025"
      ]
    },
    about: {
      eyebrow: "Sobre",
      heading: "Requisitos que se sustentam em pesquisa e em engenharia.",
      paragraphs: [
        "O que eu faço, na prática, é traduzir. Pego uma regra de negócio densa, entendo quem ela afeta e devolvo isso como requisito, fluxo e protótipo que a equipe consegue executar.",
        "Meu método vem de Discovery, Service Design e UX Research. Planejo e facilito as oficinas, mapeio ecossistemas de serviço, construo jornadas e service blueprints e converto cada artefato validado em requisito funcional e não funcional, história de usuário e backlog priorizado.",
        "Esse trabalho me levou para dentro da transformação digital do governo federal, com ANAC, ANS, Ministério da Economia, SGD, DTI e MGI. Também integrei a equipe do Guia de Boas Práticas para Acessibilidade Digital, publicado em domínio gov.br, aplicando WCAG, eMAG e o Design System Gov.br.",
        "A formação em Engenharia de Software é o que fecha o ciclo. Sustento decisão com dado, usando SQL, Python e Power BI, prototipo no Figma e leio o código quando preciso discutir viabilidade com a equipe de desenvolvimento."
      ],
      quote:
        "Decisão sustentada por evidência: pesquisa antes do traço, teste antes da entrega, e requisito que a equipe de desenvolvimento consegue executar.",
      stats: [
        { value: "Desde 2021", label: "Em transformação digital de serviços públicos" },
        { value: "8 frentes", label: "De transformação digital na ANAC" },
        { value: "ENASE 2025", label: "Mapeamento sistemático publicado" }
      ],
      education: {
        label: "Formação",
        value: "Bacharelado em Engenharia de Software, Universidade de Brasília",
        detail: "Componentes curriculares concluídos, aguardando colação de grau."
      },
      languages: {
        label: "Idiomas",
        value: "Português nativo e inglês avançado"
      }
    },
    experience: {
      eyebrow: "Trajetória",
      heading: "Onde trabalhei e o que saiu de lá.",
      items: [
        {
          role: "Analista de Requisitos e UX, transformação digital",
          org: "ITRAC / UnB, com ANAC, ANS, Ministério da Economia, SGD, DTI e MGI",
          period: "2021 até hoje",
          desc: "Planejo e facilito ciclos de Discovery e Service Design em órgãos federais e agências reguladoras. Mapeio ecossistemas de serviço, construo jornadas, service blueprints e protótipos, conduzo testes com usuários e converto os artefatos validados em requisitos, histórias de usuário e backlog priorizado para as equipes de produto."
        },
        {
          role: "Bolsista de acessibilidade digital",
          org: "Ministério da Gestão e Inovação e Secretaria de Governo Digital",
          period: "2022 a 2023",
          desc: "Integrei a equipe do Guia de Boas Práticas para Acessibilidade Digital, com 91 páginas e 16 critérios práticos. Converti WCAG, eMAG e o Design System Gov.br em diretrizes aplicáveis, montei exemplos corretos e incorretos e publiquei o material no domínio gov.br."
        },
        {
          role: "Contribuidor open source",
          org: "CAPJu, FGA/UnB, e Debian Brasil",
          period: "2022 até hoje",
          desc: "Correção de bugs, testes automatizados e documentação técnica no CAPJu, sistema de gestão de processos judiciais da 4ª Vara Cível Federal, além da manutenção de pacotes no ecossistema Debian."
        }
      ]
    },
    projects: {
      eyebrow: "Projetos",
      heading: "Estudos de caso.",
      intro:
        "Cada caso mostra contexto, meu papel, método, artefatos, validação e o que foi entregue. Meta ainda não medida aparece em seção separada, nunca como resultado.",
      cta: "Abrir o estudo de caso",
      filterLabel: "Filtrar projetos por área",
      clear: "Limpar filtro",
      resultCount: (total) => (total === 1 ? "1 projeto encontrado" : `${total} projetos encontrados`),
      categoryLabels: {
        Todos: "Todos",
        "Requisitos e Produto": "Requisitos e Produto",
        "Service Design e UX": "Service Design e UX",
        Acessibilidade: "Acessibilidade",
        Dados: "Dados",
        "Engenharia de Software": "Engenharia de Software"
      }
    },
    skills: {
      eyebrow: "Competências",
      heading: "O que eu uso para trabalhar.",
      categories: [
        {
          category: "Requisitos e produto",
          items: [
            "Levantamento de requisitos",
            "Requisitos funcionais e não funcionais",
            "Histórias de usuário",
            "BDD",
            "Análise funcional",
            "Backlog e priorização",
            "Documentação técnica"
          ]
        },
        {
          category: "Discovery e pesquisa",
          items: [
            "Discovery de produto",
            "Entrevista com usuários",
            "Teste de usabilidade",
            "Benchmarking",
            "Mapeamento sistemático",
            "Facilitação de oficinas"
          ]
        },
        {
          category: "Service Design e UX",
          items: [
            "Service blueprint",
            "Jornada do usuário",
            "Mapa de ecossistema",
            "Personas",
            "Storyboard",
            "Canvas de MVP",
            "Prototipagem de baixa e alta fidelidade",
            "Figma",
            "Miro"
          ]
        },
        {
          category: "Acessibilidade",
          items: ["WCAG 2.2", "WCAG 2.1", "eMAG", "Design System Gov.br", "Design inclusivo", "Auditoria de acessibilidade"]
        },
        {
          category: "Dados e engenharia",
          items: ["SQL", "Python", "Power BI", "ETL", "PostgreSQL", "MySQL", "Docker", "React", "JavaScript", "Git"]
        },
        {
          category: "Métodos",
          items: ["Design Thinking", "Lean Inception", "Design Sprint", "Scrum", "Kanban"]
        }
      ]
    },
    contact: {
      eyebrow: "Contato",
      heading: "Vamos conversar sobre a vaga ou o projeto.",
      description:
        "Estou aberto a posições de Analista de Requisitos, Analista de Produto e Business Analyst. O caminho mais rápido é o e-mail abaixo, e o formulário chega no mesmo lugar.",
      emailLabel: "E-mail",
      copy: "Copiar",
      copied: "Copiado",
      copyAria: "Copiar endereço de e-mail",
      links: [
        { platform: "LinkedIn", label: "Conectar no LinkedIn", url: "https://linkedin.com/in/henrique-pucci" },
        { platform: "GitHub", label: "Ver repositórios", url: "https://github.com/HenriPucci" }
      ]
    },
    form: {
      title: "Ou escreva por aqui",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "E-mail",
      emailPlaceholder: "seu@email.com",
      messageLabel: "Mensagem",
      messagePlaceholder: "Conte o que você precisa.",
      honeypot: "Deixe este campo em branco",
      submit: "Enviar mensagem",
      sending: "Enviando",
      retry: "Tentar de novo",
      success: "Mensagem enviada. Respondo assim que possível.",
      error: "Não consegui enviar agora. Tente de novo ou me chame pelo e-mail.",
      invalid: "Preencha nome, e-mail válido e mensagem antes de enviar."
    },
    footer: {
      copyright: "© 2026 Henrique Pucci",
      role: "Analista de Requisitos e Produto, Brasília, DF",
      builtWith: "Feito em React e publicado na Vercel.",
      sourceLink: "Código no GitHub"
    },
    a11y: {
      openLabel: "Abrir opções de acessibilidade",
      title: "Acessibilidade",
      contrast: "Alto contraste",
      on: "Ligado",
      off: "Desligado",
      textSize: "Tamanho do texto",
      textSizeOption: (step) => ["Texto padrão", "Texto grande", "Texto muito grande"][step]
    },
    modal: {
      close: "Fechar estudo de caso",
      contextLabel: "Contexto",
      roleLabel: "Meu papel",
      scopeLabel: "Escopo e participantes",
      processLabel: "Processo",
      frontsLabel: "Frentes de trabalho",
      artifactsLabel: "Artefatos e requisitos",
      validationLabel: "Validação",
      resultsLabel: "Resultados comprovados",
      nextStepsLabel: "Métricas propostas e próximos passos",
      nextStepsNote: "Metas de validação ainda não medidas.",
      evidenceLabel: "Evidências",
      galleryLabel: "Artefatos do projeto",
      zoom: "Ampliar imagem",
      closeZoom: "Fechar imagem ampliada",
      restricted: "não publicado"
    }
  },

  en: {
    langToggle: "PT",
    skipLink: "Skip to content",
    nav: {
      ariaLabel: "Main navigation",
      links: NAV_IDS.map(({ id, en }) => ({ id, label: en }))
    },
    menu: {
      title: "Navigation",
      openLabel: "Open navigation menu",
      closeLabel: "Close menu"
    },
    hero: {
      eyebrow: "Discovery · Service Design · UX Research",
      role: "Requirements and Product Analyst",
      lede: "Since 2021 I have worked on the digital transformation of public and regulatory services. I plan and facilitate Discovery and Service Design cycles and turn business rules and user research into requirements, journeys, service blueprints, prototypes and roadmaps. My Software Engineering background lets me connect business needs, user experience and technical feasibility.",
      ctaPrimary: "See the work",
      ctaLinkedin: "LinkedIn",
      ctaContact: "Get in touch",
      portraitAlt: "Portrait of Henrique Pucci.",
      proof: [
        "Software Engineering, UnB",
        "4 federal agencies and 2 regulators",
        "Guide published on gov.br",
        "Paper at ENASE 2025"
      ]
    },
    about: {
      eyebrow: "About",
      heading: "Requirements held up by research and by engineering.",
      paragraphs: [
        "What I do, in practice, is translate. I take a dense business rule, work out who it affects and give it back as requirements, flows and prototypes a team can execute.",
        "My method comes from Discovery, Service Design and UX Research. I plan and facilitate the workshops, map service ecosystems, build journeys and service blueprints, and turn every validated artifact into functional and non-functional requirements, user stories and a prioritized backlog.",
        "That work took me inside the digital transformation of the Brazilian federal government, with ANAC, ANS, the Ministry of Economy, SGD, DTI and MGI. I was also part of the team behind the Digital Accessibility Good Practice Guide, published on a gov.br domain, applying WCAG, eMAG and the Gov.br Design System.",
        "The Software Engineering background closes the loop. I back decisions with data using SQL, Python and Power BI, prototype in Figma, and read the code when feasibility has to be discussed with the development team."
      ],
      quote:
        "Decisions backed by evidence: research before the first sketch, testing before delivery, and requirements the development team can actually execute.",
      stats: [
        { value: "Since 2021", label: "In public service digital transformation" },
        { value: "8 fronts", label: "Of digital transformation at ANAC" },
        { value: "ENASE 2025", label: "Systematic mapping published" }
      ],
      education: {
        label: "Education",
        value: "BSc in Software Engineering, University of Brasília",
        detail: "Coursework completed, awaiting the graduation ceremony."
      },
      languages: {
        label: "Languages",
        value: "Native Portuguese and advanced English"
      }
    },
    experience: {
      eyebrow: "Journey",
      heading: "Where I worked and what came out of it.",
      items: [
        {
          role: "Requirements and UX Analyst, digital transformation",
          org: "ITRAC / UnB, with ANAC, ANS, the Ministry of Economy, SGD, DTI and MGI",
          period: "2021 to present",
          desc: "I plan and facilitate Discovery and Service Design cycles in federal agencies and regulators. I map service ecosystems, build journeys, service blueprints and prototypes, run user tests, and turn validated artifacts into requirements, user stories and a prioritized backlog for the product teams."
        },
        {
          role: "Digital accessibility fellow",
          org: "Ministry of Management and Innovation and Government Digital Secretariat",
          period: "2022 to 2023",
          desc: "I worked on the team behind the Digital Accessibility Good Practice Guide, 91 pages with 16 practical criteria. I turned WCAG, eMAG and the Gov.br Design System into applicable guidelines, built correct and incorrect examples, and published the material on the gov.br domain."
        },
        {
          role: "Open source contributor",
          org: "CAPJu, FGA/UnB, and Debian Brasil",
          period: "2022 to present",
          desc: "Bug fixing, automated tests and technical documentation on CAPJu, the judicial process management system of the 4th Federal Civil Court, plus package maintenance in the Debian ecosystem."
        }
      ]
    },
    projects: {
      eyebrow: "Projects",
      heading: "Case studies.",
      intro:
        "Each case shows context, my role, method, artifacts, validation and what was delivered. Targets that have not been measured appear in a separate section, never as results.",
      cta: "Open the case study",
      filterLabel: "Filter projects by area",
      clear: "Clear filter",
      resultCount: (total) => (total === 1 ? "1 project found" : `${total} projects found`),
      categoryLabels: {
        Todos: "All",
        "Requisitos e Produto": "Requirements and Product",
        "Service Design e UX": "Service Design and UX",
        Acessibilidade: "Accessibility",
        Dados: "Data",
        "Engenharia de Software": "Software Engineering"
      }
    },
    skills: {
      eyebrow: "Skills",
      heading: "What I work with.",
      categories: [
        {
          category: "Requirements and product",
          items: [
            "Requirements elicitation",
            "Functional and non-functional requirements",
            "User stories",
            "BDD",
            "Functional analysis",
            "Backlog and prioritization",
            "Technical documentation"
          ]
        },
        {
          category: "Discovery and research",
          items: [
            "Product discovery",
            "User interviews",
            "Usability testing",
            "Benchmarking",
            "Systematic mapping",
            "Workshop facilitation"
          ]
        },
        {
          category: "Service Design and UX",
          items: [
            "Service blueprint",
            "User journey",
            "Ecosystem map",
            "Personas",
            "Storyboard",
            "MVP canvas",
            "Low and high fidelity prototyping",
            "Figma",
            "Miro"
          ]
        },
        {
          category: "Accessibility",
          items: ["WCAG 2.2", "WCAG 2.1", "eMAG", "Gov.br Design System", "Inclusive design", "Accessibility audit"]
        },
        {
          category: "Data and engineering",
          items: ["SQL", "Python", "Power BI", "ETL", "PostgreSQL", "MySQL", "Docker", "React", "JavaScript", "Git"]
        },
        {
          category: "Methods",
          items: ["Design Thinking", "Lean Inception", "Design Sprint", "Scrum", "Kanban"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about the role or the project.",
      description:
        "I am open to Requirements Analyst, Product Analyst and Business Analyst positions. Email is the fastest route, and the form lands in the same inbox.",
      emailLabel: "Email",
      copy: "Copy",
      copied: "Copied",
      copyAria: "Copy email address",
      links: [
        { platform: "LinkedIn", label: "Connect on LinkedIn", url: "https://linkedin.com/in/henrique-pucci" },
        { platform: "GitHub", label: "Browse repositories", url: "https://github.com/HenriPucci" }
      ]
    },
    form: {
      title: "Or write here",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me what you need.",
      honeypot: "Leave this field empty",
      submit: "Send message",
      sending: "Sending",
      retry: "Try again",
      success: "Message sent. I will reply as soon as I can.",
      error: "It did not go through. Try again or reach me by email.",
      invalid: "Fill in your name, a valid email and a message before sending."
    },
    footer: {
      copyright: "© 2026 Henrique Pucci",
      role: "Requirements and Product Analyst, Brasília, Brazil",
      builtWith: "Built with React, deployed on Vercel.",
      sourceLink: "Source on GitHub"
    },
    a11y: {
      openLabel: "Open accessibility options",
      title: "Accessibility",
      contrast: "High contrast",
      on: "On",
      off: "Off",
      textSize: "Text size",
      textSizeOption: (step) => ["Default text", "Large text", "Extra large text"][step]
    },
    modal: {
      close: "Close case study",
      contextLabel: "Context",
      roleLabel: "My role",
      scopeLabel: "Scope and participants",
      processLabel: "Process",
      frontsLabel: "Work fronts",
      artifactsLabel: "Artifacts and requirements",
      validationLabel: "Validation",
      resultsLabel: "Confirmed results",
      nextStepsLabel: "Proposed metrics and next steps",
      nextStepsNote: "Validation targets that have not been measured yet.",
      evidenceLabel: "Evidence",
      galleryLabel: "Project artifacts",
      zoom: "Enlarge image",
      closeZoom: "Close enlarged image",
      restricted: "not published"
    }
  }
};
