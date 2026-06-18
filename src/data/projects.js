export const CATEGORIES = ["Todos", "UX/UI Design", "Desenvolvimento", "Research"];

export const PROJECTS = [
  {
    id: 1,
    title: "Mapeamento Estratégico – Ministério da Economia",
    tag: "UX/UI Design",
    summary: "Condução de oficinas de Discovery e BDD para a modernização de serviços públicos complexos.",
    context:
      "Atuação estratégica junto ao ITRAC/UnB na modernização de plataformas governamentais. O foco do projeto foi centrado na liderança de dinâmicas colaborativas para alinhar múltiplos stakeholders e simplificar a jornada do cidadão.",
    workshopDetail: 
      "Liderei a preparação e mediação de 3 grandes workshops síncronos mapeados no Miro. O objetivo foi extrair regras de negócio de servidores seniores e consolidá-las em artefatos acionáveis, reduzindo ruídos de comunicação antes das etapas de UI.",
    process: [
      {
        step: "Facilitação no Miro",
        detail: "Estruturação de dinâmicas de Brainstorming, alinhamento de dores e mapeamento de personas com equipes multidisciplinares."
      },
      {
        step: "Elicitação e BDD",
        detail: "Tradução de post-its e discussões técnicas em documentação estruturada de requisitos funcionais e cenários em formato BDD (Behavior-Driven Development)."
      },
      {
        step: "Handoff Visual",
        detail: "Construção de wireframes estruturais e fluxos de navegação responsivos validados diretamente com os usuários-chave."
      }
    ],
    artifacts: [
      {
        type: "miro",
        label: "Oficina de Discovery – Board 1",
        desc: "Mapeamento inicial de requisitos e alinhamento de stakeholders.",
        url: "https://miro.com/app/board/uXjVID17wec=/?share_link_id=886887746412"
      },
      {
        type: "miro",
        label: "Oficina de Discovery – Board 2",
        desc: "Sessão colaborativa de priorização com técnica MoSCoW.",
        url: "https://miro.com/app/board/uXjVLnIyLHE=/?share_link_id=495153833014"
      },
      {
        type: "miro",
        label: "Oficina de Discovery – Board 3",
        desc: "Mapeamento de Jornada do Usuário e service blueprints das soluções.",
        url: "https://miro.com/app/board/uXjVJnPlLrk=/?share_link_id=460616324420"
      }
    ]
  },
  {
    id: 2,
    title: "CAPJu – Gestão de Processos Judiciais",
    tag: "Desenvolvimento",
    summary: "Do workshop à entrega em React: sistema open source para a 4ª Vara Cível da Justiça Federal.",
    context:
      "Sistema corporativo robusto construído para otimizar fluxos burocráticos do judiciário. O case destaca meu perfil híbrido, cobrindo o ciclo de ponta a ponta: do alinhamento da jornada ao código em produção.",
    workshopDetail: 
      "Organizei oficinas de cocriação com servidores públicos para decodificar trâmites jurídicos densos. Mapeamos as dependências do sistema por meio de Service Blueprints no Miro, mitigando gargalos operacionais e guiando a arquitetura da informação.",
    process: [
      {
        step: "Co-criação & Service Blueprint",
        detail: "Desenho das interações de frontstage e backstage com funcionários do Judiciário Federal para simplificar status complexos de processos."
      },
      {
        step: "Componentização e UI",
        detail: "Criação de interfaces de alta fidelidade e layouts funcionais focados em reduzir a carga cognitiva dos operadores."
      },
      {
        step: "Engenharia Front-end",
        detail: "Codificação dos componentes vivos utilizando React e integração com APIs ágeis em squads Scrum."
      }
    ],
    artifacts: [
      {
        type: "github",
        label: "Repositório Front-end GitHub",
        desc: "Código aberto com arquitetura de componentes reutilizáveis.",
        url: "https://github.com/fga-eps-mds/2023-1-CAPJu-Front"
      },
      {
        type: "doc",
        label: "Artigo Internacional – ENASE 2025",
        desc: "Mapeamento sistemático validando a integração de Service Design na Engenharia de Software.",
        url: null
      }
    ]
  },
  {
    id: 3,
    title: "SplitGov — Oficina de Módulo Orçamentário",
    tag: "UX/UI Design",
    summary: "Consolidação de entendimento coletivo e prototipação ágil de fluxos financeiros.",
    context:
      "Um projeto focado puramente em desatar a complexidade de regras de negócio de alta sensibilidade fiscal. O objetivo central foi unificar o entendimento de um sistema fragmentado por meio de facilitação ágil.",
    workshopDetail: 
      "Idealizei e conduzi a oficina metodológica síncrona que reuniu PMs, desenvolvedores e stakeholders. Através de telas estruturadas, criamos um ambiente seguro para debater exceções de código e travas de orçamento, gerando clareza operacional imediata.",
    process: [
      {
        step: "Facilitação de Alinhamento",
        detail: "Gestão e mediação da dinâmica no Miro para consolidação do entendimento técnico coletivo sobre o fluxo financeiro."
      },
      {
        step: "Evolução do Protótipo",
        detail: "Refinamento ágil de telas de média fidelidade com base nos inputs e travas mapeados em tempo real na oficina."
      },
      {
        step: "Relatório de Insights",
        detail: "Documentação pós-oficina detalhando as dependências funcionais descobertas e mitigando riscos de desenvolvimento."
      }
    ],
    artifacts: [
      {
        type: "miro",
        label: "Miro Workspace — Módulo Orçamentário",
        desc: "Espaço de facilitação colaborativa e mapeamento de travas de sistema.",
        url: null
      }
    ]
  },
  {
    id: 4,
    title: "Guia Brasileiro de Acessibilidade Digital",
    tag: "Research",
    summary: "Elaboração de padrões de usabilidade e WCAG para o ecossistema gov.br.",
    context:
      "Projeto em nível nacional desenvolvido com a Secretaria de Governo Digital (SGD) para o Ministério da Gestão e Inovação (MGI). Focado em transformar especificações técnicas densas em soluções práticas inclusivas.",
    workshopDetail: 
      "Sintetizei pesquisas quantitativas e qualitativas em relatórios estratégicos semanais para a alta liderança. O foco foi criar uma documentação que servisse de ponte didática para designers e desenvolvedores do Governo Federal.",
    process: [
      {
        step: "Benchmarking e Análise",
        detail: "Mapeamento de boas práticas globais de acessibilidade e varredura minuciosa das regras da WCAG e e-MAG."
      },
      {
        step: "Estruturação de Critérios",
        detail: "Criação de 16 blocos com exemplos práticos visuais (corretos vs. incorretos) de componentes de interface."
      },
      {
        step: "Entrega em Produção",
        detail: "Publicação do guia como artefato acessível estruturado na infraestrutura do governo federal."
      }
    ],
    artifacts: [
      {
        type: "doc",
        label: "Guia Oficial de Acessibilidade",
        desc: "Documento oficial hospedado no portal gov.br.",
        url: null
      }
    ]
  },
  {
    id: 5,
    title: "Infantio – Design System & SaaS Escolar",
    tag: "Desenvolvimento",
    summary: "Pesquisa de processos complexos e engenharia front-end de um produto B2B.",
    context:
      "Plataforma digital SaaS projetada para simplificar e automatizar a rotina de berçários e institutions de ensino, equilibrando dados densos com usabilidade de alta performance.",
    workshopDetail: 
      "Realizei mapeamento com diretores e professores para entender a carga de tarefas administrativas diárias. Essa imersão de UX Research fundamentou uma hierarquia visual limpa criada no Figma.",
    process: [
      {
        step: "UX Research Imersiva",
        detail: "Entrevistas contextuais para entender a jornada e os gargalos na gestão escolar diária."
      },
      {
        step: "Design System & Tokens",
        detail: "Construção de bibliotecas de componentes reutilizáveis, layouts fluidos e responsividade estrita."
      },
      {
        step: "Desenvolvimento em React",
        detail: "Tradução fiel do design para código limpo utilizando React e tipagem estruturada."
      }
    ],
    artifacts: [
      {
        type: "figma",
        label: "Componentes no Figma",
        desc: "Especificações de UI e variações de estados de tela.",
        url: null
      }
    ]
  }
];

export const SKILLS = [
  {
    category: "Facilitação & UX",
    items: ["Oficinas de Co-criação", "Miro Boards", "Service Blueprint", "Jornada do Usuário", "Discovery", "Elicitação de Requisitos", "Figma"]
  },
  {
    category: "Acessibilidade & Regras",
    items: ["WCAG 2.1", "e-MAG", "Design Inclusivo", "BDD", "User Stories", "Arquitetura da Informação"]
  },
  {
    category: "Engenharia Front-end",
    items: ["React", "TypeScript", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Git / GitHub"]
  }
];