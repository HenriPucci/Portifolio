const NAV_IDS = [
  { id: "sobre", pt: "Sobre", en: "About" },
  { id: "trajetoria", pt: "Trajetória", en: "Journey" },
  { id: "projetos", pt: "Projetos", en: "Projects" },
  { id: "contato", pt: "Contato", en: "Contact" }
];

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
      eyebrow: "Service design, UX e engenharia de software",
      role: "Projeto serviços públicos digitais e também os construo.",
      lede: "Estou no último semestre de Engenharia de Software na UnB. Trabalho entre a regra de negócio e a tela: mapeio serviços densos de governo, facilito oficinas com quem opera o serviço e entrego requisito, protótipo e código que a equipe consegue usar.",
      ctaPrimary: "Ver os projetos",
      ctaSecondary: "Falar comigo",
      portraitAlt: "Retrato de Henrique Pucci.",
      proof: ["4 órgãos federais", "Guia publicado no gov.br", "Artigo na ENASE 2025", "Debian e CAPJu"]
    },
    about: {
      eyebrow: "Sobre",
      heading: "Design que se sustenta na engenharia.",
      paragraphs: [
        "O que eu faço, na prática, é traduzir. Pego uma regra de negócio densa, entendo quem ela afeta e devolvo isso como um serviço que a pessoa consegue usar sem precisar de ajuda.",
        "Meu método vem de pesquisa em UX, service design e estratégia de produto. Mapeio ecossistemas de serviço, facilito oficinas de co-criação e uso service blueprints e mapas de jornada no Miro para transformar o que aparece na sala em requisito documentado e protótipo de alta fidelidade no Figma.",
        "Esse trabalho me levou para dentro da transformação digital do governo federal. Atuei no Discovery junto ao Ministério da Economia e ajudei a estruturar padrões nacionais de acessibilidade, escrevendo diretrizes e componentes para o Guia Brasileiro de Acessibilidade Digital e Inclusão com a SGD e o MGI, aplicando WCAG 2.1 e eMAG.",
        "A parte de engenharia não é enfeite. Sustento decisão de design com dado, usando SQL, Docker, DBeaver e Power BI, e montei a arquitetura de ETL que consolidou bases de acidentes aeronáuticos civis. Também contribuo com software livre no ecossistema Debian e no CAPJu, sistema de gestão processual da FGA/UnB."
      ],
      quote:
        "Decisão sustentada por evidência: pesquisa antes do traço, teste antes da entrega, e código que aguenta o que foi desenhado.",
      stats: [
        { value: "4", label: "Órgãos federais atendidos" },
        { value: "ENASE 2025", label: "Publicação internacional" },
        { value: "Debian e CAPJu", label: "Projetos open source" }
      ]
    },
    experience: {
      eyebrow: "Trajetória",
      heading: "Onde trabalhei e o que saiu de lá.",
      items: [
        {
          role: "Bolsista de transformação digital e UX",
          org: "ITRAC / UnB, junto ao Ministério da Economia, SGD, DTI e MGI",
          desc: "Conduzi iniciativas de Discovery em quatro órgãos federais, mapeando ecossistemas de serviço e traduzindo regra de negócio de governo em requisito acionável. Facilitei oficinas de co-criação com servidores e gestores, entregando service blueprints, jornadas do usuário e fluxos de ecossistema para programas como ComprasGov, Bens Patrimoniais e Luz para Todos."
        },
        {
          role: "Bolsista de acessibilidade digital",
          org: "Ministério da Gestão e Inovação (MGI)",
          desc: "Co-desenvolvi o Guia Brasileiro de Acessibilidade Digital e Inclusão, convertendo WCAG 2.1 e eMAG em diretrizes práticas para o Design System Gov.br. O guia foi publicado no domínio oficial gov.br e passou a orientar interfaces digitais de todo o governo federal."
        },
        {
          role: "Contribuidor open source",
          org: "CAPJu e Debian Brasil",
          desc: "Correção de bugs, automação de testes e documentação técnica no CAPJu, sistema de gestão de processos judiciais da FGA/UnB, além de manutenção de pacotes no ecossistema Debian."
        }
      ]
    },
    projects: {
      eyebrow: "Projetos",
      heading: "Trabalho selecionado.",
      cta: "Ver o caso",
      filterLabel: "Filtrar projetos por área",
      resultCount: (total) =>
        total === 1 ? "1 projeto encontrado" : `${total} projetos encontrados`,
      categoryLabels: {
        Todos: "Todos",
        "UX/UI": "UX/UI",
        Pesquisa: "Pesquisa",
        Desenvolvimento: "Desenvolvimento"
      }
    },
    skills: {
      eyebrow: "Ferramentas e métodos",
      heading: "O que eu uso para trabalhar.",
      categories: [
        {
          category: "UX/UI e design",
          items: [
            "Figma",
            "Miro",
            "Wireframing",
            "Prototipagem de alta fidelidade",
            "Design system",
            "Service blueprint",
            "Jornada do usuário",
            "Pesquisa com usuários",
            "Teste de usabilidade"
          ]
        },
        {
          category: "Requisitos e produto",
          items: [
            "Levantamento de requisitos",
            "Análise funcional",
            "Discovery",
            "User stories",
            "BDD",
            "Documentação técnica"
          ]
        },
        {
          category: "Acessibilidade",
          items: ["WCAG 2.1", "eMAG", "Design inclusivo", "Auditoria de acessibilidade"]
        },
        {
          category: "Desenvolvimento e dados",
          items: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Python",
            "Node.js",
            "PHP",
            "SQL",
            "MySQL",
            "PostgreSQL",
            "Docker",
            "DBeaver",
            "Power BI",
            "Git"
          ]
        },
        {
          category: "Métodos",
          items: [
            "Design thinking",
            "Lean UX",
            "Scrum",
            "Kanban",
            "Discovery de produto",
            "Facilitação de oficinas"
          ]
        },
        {
          category: "Idiomas",
          items: ["Português nativo", "Inglês intermediário"]
        }
      ]
    },
    contact: {
      eyebrow: "Contato",
      heading: "Vamos falar do seu problema.",
      description:
        "Se você tem um serviço complexo para redesenhar, uma pesquisa para conduzir ou um produto que precisa sair do papel, me escreva. Respondo pelo formulário ou pelos canais abaixo.",
      links: [
        { platform: "LinkedIn", label: "Conectar no LinkedIn", url: "https://linkedin.com/in/henrique-pucci" },
        { platform: "GitHub", label: "Ver repositórios", url: "https://github.com/HenriPucci" }
      ]
    },
    form: {
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
      error: "Não consegui enviar agora. Tente de novo ou me chame pelo LinkedIn."
    },
    footer: {
      copyright: "© 2026 Henrique Pucci",
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
      close: "Fechar detalhes do projeto",
      contextLabel: "Contexto",
      galleryLabel: "Artefatos do projeto",
      zoom: "Ampliar imagem",
      closeZoom: "Fechar imagem ampliada",
      workshopLabel: "Facilitação e prática",
      processLabel: "Processo",
      artifactsLabel: "Entregas e evidências",
      restricted: "acesso interno"
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
      eyebrow: "Service design, UX and software engineering",
      role: "I design public digital services and build them too.",
      lede: "I am in my final semester of Software Engineering at UnB. I work between the business rule and the screen: mapping dense government services, facilitating workshops with the people who run them, and delivering requirements, prototypes and code a team can actually use.",
      ctaPrimary: "See the work",
      ctaSecondary: "Get in touch",
      portraitAlt: "Portrait of Henrique Pucci.",
      proof: ["4 federal agencies", "Guide published on gov.br", "Paper at ENASE 2025", "Debian and CAPJu"]
    },
    about: {
      eyebrow: "About",
      heading: "Design held up by engineering.",
      paragraphs: [
        "What I do, in practice, is translate. I take a dense business rule, work out who it affects, and give it back as a service people can use without help.",
        "My method comes from UX research, service design and product strategy. I map service ecosystems, facilitate co-creation workshops, and use service blueprints and journey maps in Miro to turn what surfaces in the room into documented requirements and high-fidelity prototypes in Figma.",
        "That work took me inside the digital transformation of the Brazilian federal government. I ran Discovery with the Ministry of Economy and helped structure national accessibility standards, writing guidelines and components for the Brazilian Guide to Digital Accessibility and Inclusion with SGD and MGI, applying WCAG 2.1 and eMAG.",
        "The engineering side is not decoration. I back design decisions with data using SQL, Docker, DBeaver and Power BI, and I built the ETL architecture that consolidated Brazilian civil aviation accident databases. I also contribute to free software in the Debian ecosystem and to CAPJu, the judicial process management system from FGA/UnB."
      ],
      quote:
        "Decisions backed by evidence: research before the first line, testing before delivery, and code that holds up what was designed.",
      stats: [
        { value: "4", label: "Federal agencies served" },
        { value: "ENASE 2025", label: "International publication" },
        { value: "Debian and CAPJu", label: "Open source projects" }
      ]
    },
    experience: {
      eyebrow: "Journey",
      heading: "Where I worked and what came out of it.",
      items: [
        {
          role: "Digital transformation and UX fellow",
          org: "ITRAC / UnB, with the Ministry of Economy, SGD, DTI and MGI",
          desc: "Led Discovery initiatives across four federal agencies, mapping service ecosystems and translating government business rules into actionable requirements. Facilitated co-creation workshops with civil servants and managers, delivering service blueprints, user journeys and ecosystem flows for programs such as ComprasGov, Public Assets and Luz para Todos."
        },
        {
          role: "Digital accessibility fellow",
          org: "Ministry of Management and Innovation (MGI)",
          desc: "Co-developed the Brazilian Guide to Digital Accessibility and Inclusion, turning WCAG 2.1 and eMAG into practical guidelines for the Gov.br Design System. The guide was published on the official gov.br domain and now guides digital interfaces across the federal government."
        },
        {
          role: "Open source contributor",
          org: "CAPJu and Debian Brasil",
          desc: "Bug fixing, test automation and technical documentation on CAPJu, the judicial process management system from FGA/UnB, plus package maintenance in the Debian ecosystem."
        }
      ]
    },
    projects: {
      eyebrow: "Projects",
      heading: "Selected work.",
      cta: "Open the case",
      filterLabel: "Filter projects by area",
      resultCount: (total) => (total === 1 ? "1 project found" : `${total} projects found`),
      categoryLabels: {
        Todos: "All",
        "UX/UI": "UX/UI",
        Pesquisa: "Research",
        Desenvolvimento: "Development"
      }
    },
    skills: {
      eyebrow: "Tools and methods",
      heading: "What I work with.",
      categories: [
        {
          category: "UX/UI and design",
          items: [
            "Figma",
            "Miro",
            "Wireframing",
            "High-fidelity prototyping",
            "Design system",
            "Service blueprint",
            "User journey",
            "User research",
            "Usability testing"
          ]
        },
        {
          category: "Requirements and product",
          items: [
            "Requirements gathering",
            "Functional analysis",
            "Discovery",
            "User stories",
            "BDD",
            "Technical documentation"
          ]
        },
        {
          category: "Accessibility",
          items: ["WCAG 2.1", "eMAG", "Inclusive design", "Accessibility audit"]
        },
        {
          category: "Development and data",
          items: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Python",
            "Node.js",
            "PHP",
            "SQL",
            "MySQL",
            "PostgreSQL",
            "Docker",
            "DBeaver",
            "Power BI",
            "Git"
          ]
        },
        {
          category: "Methods",
          items: [
            "Design thinking",
            "Lean UX",
            "Scrum",
            "Kanban",
            "Product discovery",
            "Workshop facilitation"
          ]
        },
        {
          category: "Languages",
          items: ["Portuguese, native", "English, intermediate"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about your problem.",
      description:
        "If you have a complex service to redesign, research to run, or a product that needs to leave the slide deck, write to me. I answer through the form or the channels below.",
      links: [
        { platform: "LinkedIn", label: "Connect on LinkedIn", url: "https://linkedin.com/in/henrique-pucci" },
        { platform: "GitHub", label: "Browse repositories", url: "https://github.com/HenriPucci" }
      ]
    },
    form: {
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
      error: "It did not go through. Try again or reach me on LinkedIn."
    },
    footer: {
      copyright: "© 2026 Henrique Pucci",
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
      close: "Close project details",
      contextLabel: "Context",
      galleryLabel: "Project artifacts",
      zoom: "Enlarge image",
      closeZoom: "Close enlarged image",
      workshopLabel: "Facilitation in practice",
      processLabel: "Process",
      artifactsLabel: "Deliverables and evidence",
      restricted: "internal access"
    }
  }
};
