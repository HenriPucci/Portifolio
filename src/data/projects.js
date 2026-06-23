export const CATEGORIES = ["Todos", "UX/UI", "Pesquisa", "Desenvolvimento"];

export const PROJECTS = [
  {
    id: "discovery-servicos-publicos",
    tag: "UX/UI",
    tags: ["UX/UI", "Pesquisa"],
    title: "Discovery de Serviços Públicos",
    summary: "Atuação estratégica em múltiplos ministérios — Economia, SGD, DTI e MGI — conduzindo dinâmicas de Discovery para a transformação digital de serviços governamentais.",
    context: "Ao longo da minha trajetória no ITRAC/UnB, atuei diretamente em iniciativas de transformação digital junto a quatro órgãos federais: Ministério da Economia, Secretaria de Governo Digital (SGD), Diretoria de Tecnologia e Inovação (DTI) e Ministério da Gestão e Inovação (MGI). Em cada frente, o desafio central era o mesmo: mapear ecossistemas de serviços complexos e traduzir regras de negócio governamentais densas em requisitos acionáveis para equipes de produto.",
    workshopDetail: "Facilitei múltiplas rodadas de workshops de co-criação com servidores, gestores e equipes técnicas de cada ministério, utilizando frameworks de Service Design no Miro — Service Blueprints, mapas de jornada, diagramas de stakeholders e fluxos de ecossistema — para alinhar visões e gerar insumos estratégicos para prototipagem e desenvolvimento.",
    process: [
      { step: "Imersão e Pesquisa Contextual", detail: "Entrevistas e dinâmicas de escuta ativa com servidores públicos de diferentes órgãos para mapear dores, fluxos reais e oportunidades de modernização." },
      { step: "Facilitação de Workshops de Co-criação", detail: "Condução de sessões estruturadas no Miro com equipes multidisciplinares dos ministérios, aplicando métodos de Design Thinking e Service Design para desatar nós em fluxos burocráticos." },
      { step: "Mapeamento de Ecossistemas e Jornadas", detail: "Construção de Service Blueprints detalhados, mapas de stakeholders e jornadas do usuário para documentar o estado atual e definir o estado desejado dos serviços." },
      { step: "Levantamento e Documentação de Requisitos", detail: "Estruturação de requisitos funcionais e não-funcionais a partir dos artefatos gerados, entregues como insumos diretos para as equipes de produto e desenvolvimento de cada órgão." }
    ],
    artifacts: [
      { type: "miro", label: "MVP Agentes de IA", desc: "Board de mapeamento e ideação para MVP com agentes de IA", url: "https://miro.com/app/board/uXjVHPAE3ys=/" },
      { type: "miro", label: "Oficina ComprasGov", desc: "Board da oficina de co-criação para o sistema de compras governamentais", url: "https://miro.com/app/board/uXjVLpKEO7s=/" },
      { type: "miro", label: "Relatório Oficinas — Bens Patrimoniais", desc: "Mapeamento e relatório das oficinas sobre gestão de bens patrimoniais", url: "https://miro.com/app/board/uXjVGBbrafk=/" },
      { type: "miro", label: "Oficina Ecossistema DTI", desc: "Board da oficina de mapeamento do ecossistema da DTI", url: "https://miro.com/app/board/uXjVJUTrDU0=/?share_link_id=94655737093" },
      { type: "miro", label: "Oficina Codesign Rateio", desc: "Board da oficina de codesign para fluxos de rateio orçamentário", url: "https://miro.com/app/board/uXjVIZew704=/" },
      { type: "miro", label: "Oficina Luz para Todos", desc: "Board da oficina de co-criação para o programa Luz para Todos", url: "https://miro.com/app/board/uXjVID17wec=/" },
    ],
    translations: {
      en: {
        title: "Public Services Discovery",
        summary: "Strategic involvement across multiple ministries — Economy, SGD, DTI, and MGI — conducting Discovery dynamics for the digital transformation of government services.",
        context: "Throughout my career at ITRAC/UnB, I worked directly on digital transformation initiatives with four federal agencies: Ministry of Economy, Government Digital Secretariat (SGD), Technology and Innovation Directorate (DTI), and Ministry of Management and Innovation (MGI). In each front, the central challenge was the same: mapping complex service ecosystems and translating dense government business rules into actionable requirements for product teams.",
        workshopDetail: "I facilitated multiple rounds of co-creation workshops with civil servants, managers, and technical teams from each ministry, using Service Design frameworks in Miro — Service Blueprints, journey maps, stakeholder diagrams, and ecosystem flows — to align visions and generate strategic inputs for prototyping and development.",
        process: [
          { step: "Immersion and Contextual Research", detail: "Interviews and active listening dynamics with public servants from different agencies to map pain points, real flows, and modernization opportunities." },
          { step: "Co-creation Workshop Facilitation", detail: "Conducting structured sessions in Miro with multidisciplinary teams from the ministries, applying Design Thinking and Service Design methods to untangle bureaucratic process bottlenecks." },
          { step: "Ecosystem and Journey Mapping", detail: "Building detailed Service Blueprints, stakeholder maps, and user journeys to document the current state and define the desired state of services." },
          { step: "Requirements Gathering and Documentation", detail: "Structuring functional and non-functional requirements from the generated artifacts, delivered as direct inputs for the product and development teams at each agency." }
        ]
      }
    }
  },
  {
    id: "respiracao-oral",
    tag: "UX/UI",
    tags: ["UX/UI", "Desenvolvimento"],
    title: "Plataforma Respiração Oral",
    summary: "Desenvolvimento de interface e sistema focado no curso e conscientização sobre respiração oral em fonoaudiologia.",
    context: "Parceria com profissionais de fonoaudiologia para construir uma plataforma educacional online. O público-alvo era composto por fonoaudiólogos e estudantes da área, exigindo uma interface que comunicasse credibilidade científica com boa usabilidade.",
    process: [
      { step: "Pesquisa com Profissionais de Saúde", detail: "Entrevistas com fonoaudiólogos para entender necessidades didáticas e fluxo de aprendizagem." },
      { step: "Arquitetura de Informação", detail: "Estruturação da hierarquia de conteúdo e navegação para otimizar a experiência de estudo." },
      { step: "Design e Implementação", detail: "Desenvolvimento da interface em React com foco em acessibilidade e responsividade." },
      { step: "Testes e Entrega", detail: "Validação com usuários reais do curso e ajustes finais antes da publicação." }
    ],
    artifacts: [
      { type: "github", label: "Repositório GitHub", desc: "Código-fonte da plataforma", url: "https://github.com/Fonoaudiologia-Respiracao-Oral/Site-Curso-Respiracao-Oral" }
    ],
    translations: {
      en: {
        title: "Oral Breathing Platform",
        summary: "Interface and system development focused on an online course and awareness about oral breathing in speech therapy.",
        context: "Partnership with speech therapy professionals to build an educational online platform. The target audience consisted of speech therapists and students in the field, requiring an interface that communicated scientific credibility with good usability.",
        process: [
          { step: "Research with Healthcare Professionals", detail: "Interviews with speech therapists to understand didactic needs and the learning flow." },
          { step: "Information Architecture", detail: "Structuring the content hierarchy and navigation to optimize the study experience." },
          { step: "Design and Implementation", detail: "Interface development in React with a focus on accessibility and responsiveness." },
          { step: "Testing and Delivery", detail: "Validation with real course users and final adjustments before publication." }
        ]
      }
    }
  },
  {
    id: "artigo-enase",
    tag: "Pesquisa",
    tags: ["UX/UI", "Pesquisa"],
    title: "Artigo Internacional - ENASE 2025",
    summary: "Publicação científica internacional focada no papel do Service Design em experiências digitais modernas.",
    context: "Pesquisa empírica publicada nos anais da ENASE 2025 (International Conference on Evaluation of Novel Approaches to Software Engineering), investigando o papel estratégico do Service Design na construção de experiências digitais eficientes e centradas no usuário.",
    process: [
      { step: "Definição do Problema de Pesquisa", detail: "Identificação de lacunas na literatura sobre a aplicação de Service Design em sistemas digitais." },
      { step: "Revisão Sistemática da Literatura", detail: "Análise estruturada de publicações científicas para embasar o estudo empírico." },
      { step: "Condução do Estudo Empírico", detail: "Coleta e análise de dados com métricas de usabilidade e design de serviços em projetos reais." },
      { step: "Publicação Internacional", detail: "Submissão, revisão por pares e apresentação na conferência ENASE 2025." }
    ],
    artifacts: [
      { type: "link", label: "Publicação Oficial ENASE", desc: "Acesso ao artigo na base da SciTePress", url: "https://www.scitepress.org/Link.aspx?doi=10.5220/0013257300003928" },
      { type: "pdf", label: "Acessar PDF do Artigo", desc: "Abrir artigo completo no navegador", url: "/assets/Exploring the Role of Service Design.pdf" }
    ],
    translations: {
      en: {
        title: "International Paper - ENASE 2025",
        summary: "International scientific publication focused on the role of Service Design in modern digital experiences.",
        context: "Empirical research published in the proceedings of ENASE 2025 (International Conference on Evaluation of Novel Approaches to Software Engineering), investigating the strategic role of Service Design in building efficient, user-centered digital experiences.",
        process: [
          { step: "Research Problem Definition", detail: "Identification of gaps in the literature on the application of Service Design in digital systems." },
          { step: "Systematic Literature Review", detail: "Structured analysis of scientific publications to support the empirical study." },
          { step: "Empirical Study Conduct", detail: "Data collection and analysis with usability metrics and service design in real projects." },
          { step: "International Publication", detail: "Submission, peer review, and presentation at the ENASE 2025 conference." }
        ]
      }
    }
  },
  {
    id: "guia-acessibilidade",
    tag: "Pesquisa",
    tags: ["UX/UI", "Pesquisa"],
    title: "Guia Brasileiro de Acessibilidade Digital",
    summary: "Desenvolvimento de diretrizes nacionais e componentes inclusivos junto à SGD e ao Ministério da Gestão e Inovação (MGI).",
    context: "Projeto de impacto nacional com a Secretaria de Governo Digital (SGD) e o Ministério da Gestão e Inovação (MGI). O objetivo era criar um guia de acessibilidade digital que orientasse o desenvolvimento de todos os portais gov.br, beneficiando milhões de cidadãos.",
    workshopDetail: "Trabalhei na conversão de normas técnicas complexas de WCAG 2.1 e eMAG em diretrizes práticas e componentes implementáveis, colaborando com equipes de design e desenvolvimento de todo o governo federal.",
    process: [
      { step: "Pesquisa e Benchmarking", detail: "Análise das normas WCAG 2.1, eMAG e referências internacionais de acessibilidade digital." },
      { step: "Desenvolvimento de Componentes", detail: "Criação de componentes inclusivos documentados para o Design System gov.br." },
      { step: "Redação das Diretrizes", detail: "Produção do conteúdo técnico do guia com linguagem acessível para equipes de governo." },
      { step: "Publicação no gov.br", detail: "Publicação como artefato Plone no domínio oficial do governo federal." }
    ],
    artifacts: [
      { type: "pdf", label: "Acessar PDF do Guia", desc: "Abrir guia de acessibilidade no navegador", url: "/assets/Guia_Acessibilidade_GovBr.pdf" }
    ],
    translations: {
      en: {
        title: "Brazilian Guide to Digital Accessibility",
        summary: "Development of national guidelines and inclusive components alongside SGD and the Ministry of Management and Innovation (MGI).",
        context: "National impact project with the Government Digital Secretariat (SGD) and the Ministry of Management and Innovation (MGI). The goal was to create a digital accessibility guide to orient the development of all gov.br portals, benefiting millions of citizens.",
        workshopDetail: "I worked on converting complex technical standards of WCAG 2.1 and eMAG into practical guidelines and implementable components, collaborating with design and development teams from across the federal government.",
        process: [
          { step: "Research and Benchmarking", detail: "Analysis of WCAG 2.1, eMAG standards, and international digital accessibility references." },
          { step: "Component Development", detail: "Creation of documented inclusive components for the gov.br Design System." },
          { step: "Guideline Writing", detail: "Production of the guide's technical content in accessible language for government teams." },
          { step: "Publication on gov.br", detail: "Publication as a Plone artifact on the official federal government domain." }
        ]
      }
    }
  },
  {
    id: "anac-oficinas",
    tag: "UX/UI",
    tags: ["UX/UI", "Pesquisa"],
    title: "ANAC — Ciclo de Oficinas de Service Design",
    summary: "Facilitação de múltiplos ciclos de Design Sprint e oficinas de co-criação junto à ANAC, cobrindo 8 frentes estratégicas de transformação digital da aviação civil brasileira.",
    context: "Ao longo de 2024, conduzi um ciclo extenso de oficinas de Service Design junto à Agência Nacional de Aviação Civil (ANAC), abrangendo frentes que vão desde a digitalização do Diário de Bordo até a integração de dados entre a ANAC e o DECEA. Cada oficina foi estruturada como um Design Sprint adaptado de 2 a 4 dias, reunindo superintendências distintas (SAR, STD, SPO, SFI, SPI) em torno de problemas regulatórios reais e complexos, com o objetivo de redesenhar serviços centrados no cidadão e nos regulados.",
    workshopDetail: "As oficinas combinaram metodologias como Lean Inception, World Café, Crazy 8, Blueprint de Serviços, Jornada do Usuário e Canvas MVP. Cada ciclo foi cuidadosamente planejado para evoluir da imersão e diagnóstico até a prototipagem e validação, gerando artefatos estratégicos (personas, storyboards, blueprints e roadmaps) que alimentaram as decisões de produto de cada área da ANAC.",
    process: [
      { step: "Diário de Bordo Digital", detail: "Oficina de 3 dias (método Disney + World Café) para investigar a baixa adoção do Diário de Bordo Digital pelos regulados. Geração de memorial de acusações, personas e plano de ação para aumentar a adesão ao envio de dados para a ANAC." },
      { step: "HUB Financeiro & Base de Aeronaves", detail: "Duas frentes paralelas utilizando Design Sprint adaptado: mapeamento de prioridades (matriz impacto × esforço), enunciação e ressignificação de problemas, definição de proto-personas e construção de storyboards para os sistemas financeiro e de registro de aeronaves." },
      { step: "Plataforma PEL & Matriz de Certificação", detail: "Oficinas focadas nas Organizações de Instrução (PEL) e na jornada de certificação aeronáutica (Startup CERTIFICA). Aplicação de survey com stakeholders, Blueprint de Serviços de 4 dias, mapeamento de pontos de contato e proposição de melhorias centradas na experiência do regulado." },
      { step: "Integração ANAC × DECEA", detail: "Workshop de 2 dias para identificar dados e serviços de interesse comum entre os dois órgãos. Dinâmicas de Colcha de Retalhos, Caldeirão de Serviços e definição de roadmap de médio e longo prazo para integrações técnicas e normativas." },
      { step: "Safety Intelligence (2 Ciclos)", detail: "Lean Inception de 2 dias (Ciclo 1/Jun 2024) para definir visão de produto, personas e Canvas MVP do sistema de inteligência em segurança. Ciclo 2 (Out 2024) focado em Blueprint Futuro, mapeamento de jornadas e propostas de eficiência para o repositório padronizado de indicadores." },
      { step: "Jornada do Passageiro — Inframerica", detail: "Oficina de co-criação de 3 horas com a concessionária do aeroporto de Brasília, estruturando estratégias de engajamento com passageiros por perfil (persona), momento de contato e tom de voz, resultando em protótipos de abordagem votados pelos participantes." }
    ],
    artifacts: [
      { type: "pdf", label: "Relatório — Diário de Bordo Digital", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório Final Ciclo de oficinas -Diario de Bordo Digital -mai 2024 - ANAC.pdf" },
      { type: "pdf", label: "Relatório — HUB Financeiro", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório Final-Ciclo de oficinas e prototipação - ANAC - HUB FINANCEIRO - mar 2024.pdf" },
      { type: "pdf", label: "Relatório — Base de Aeronaves (Ciclo 1)", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório-Oficina 01- Anac-Base de Aeronaves vf.pdf" },
      { type: "pdf", label: "Relatório — Base de Aeronaves (Ciclo 2)", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório Ciclo 2 de oficinas -Base de Aeronaves-fev 2024 - ANAC.pdf" },
      { type: "pdf", label: "Relatório — Plataforma PEL", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório- ANAC-PLATAFORMA PEL - Consolidado.pdf" },
      { type: "pdf", label: "Relatório — Startup CERTIFICA", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório Final Ciclo de oficinas -Startup Certifica -mai 2024 - ANAC (1).pdf" },
      { type: "pdf", label: "Relatório — Integração ANAC × DECEA", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório - Oficinas - Integração DECEA - jul 2024.pdf" },
      { type: "pdf", label: "Relatório — Safety Intelligence (Ciclo 1)", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório-ANAC-SAFETY INTELLIGENCE.pdf" },
      { type: "pdf", label: "Relatório — Safety Intelligence (Ciclo 2)", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Relatório-ANAC-SAFETY INTELLIGENCE-Ciclo2 (1).pdf" },
      { type: "pdf", label: "Relatório — Jornada do Passageiro Inframerica", desc: "Acessar relatório completo da oficina", url: "/assets/ANAC/Oficina de cocriação com a Inframerica.pdf" }
    ],
    translations: {
      en: {
        title: "ANAC — Service Design Workshop Cycle",
        summary: "Facilitation of multiple Design Sprint cycles and co-creation workshops at ANAC, covering 8 strategic fronts of digital transformation in Brazilian civil aviation.",
        context: "Throughout 2024, I conducted an extensive cycle of Service Design workshops at the National Civil Aviation Agency (ANAC), covering fronts ranging from the digitization of the Flight Logbook to data integration between ANAC and DECEA. Each workshop was structured as an adapted 2 to 4-day Design Sprint, bringing together distinct superintendencies (SAR, STD, SPO, SFI, SPI) around real and complex regulatory problems, with the goal of redesigning citizen-centered services.",
        workshopDetail: "The workshops combined methodologies such as Lean Inception, World Café, Crazy 8, Service Blueprint, User Journey, and MVP Canvas. Each cycle was carefully planned to evolve from immersion and diagnosis to prototyping and validation, generating strategic artifacts (personas, storyboards, blueprints, and roadmaps) that fed product decisions in each ANAC area.",
        process: [
          { step: "Digital Flight Logbook", detail: "3-day workshop (Disney method + World Café) to investigate the low adoption of the Digital Flight Logbook by regulated entities. Generation of evidence memorials, personas, and action plans to increase data submission to ANAC." },
          { step: "Financial HUB & Aircraft Registry", detail: "Two parallel fronts using an adapted Design Sprint: priority mapping (impact × effort matrix), problem statement and reframing, proto-persona definition, and storyboard building for the financial and aircraft registration systems." },
          { step: "PEL Platform & Certification Matrix", detail: "Workshops focused on Flight Training Organizations (PEL) and the aviation certification journey (CERTIFICA Startup). Survey application with stakeholders, 4-day Service Blueprint, touchpoint mapping, and proposing improvements centered on the regulated entity's experience." },
          { step: "ANAC × DECEA Integration", detail: "2-day workshop to identify data and services of common interest between the two agencies. Patchwork Quilt dynamics, Services Cauldron, and medium and long-term roadmap definition for technical and normative integrations." },
          { step: "Safety Intelligence (2 Cycles)", detail: "2-day Lean Inception (Cycle 1/Jun 2024) to define product vision, personas, and MVP Canvas for the safety intelligence system. Cycle 2 (Oct 2024) focused on Future Blueprint, journey mapping, and efficiency proposals for the standardized indicator repository." },
          { step: "Passenger Journey — Inframerica", detail: "3-hour co-creation workshop with the Brasília airport concessionaire, structuring passenger engagement strategies by profile (persona), touchpoint, and tone of voice, resulting in approach prototypes voted on by participants." }
        ]
      }
    }
  },
  {
    id: "capju",
    tag: "Desenvolvimento",
    tags: ["Desenvolvimento"],
    title: "CAPJu - Gestão de Processos Judiciais",
    summary: "Contribuição e desenvolvimento open source na arquitetura de software e manutenção do sistema judicial para a FGA.",
    context: "CAPJu é um sistema open source de gestão de processos judiciais desenvolvido para a Faculdade do Gama (FGA/UnB). Contribuí com a manutenção evolutiva do sistema, trabalhando em um projeto real com impacto direto no fluxo jurídico universitário.",
    process: [
      { step: "Onboarding e Análise do Código", detail: "Estudo da arquitetura existente e mapeamento dos módulos para entender o fluxo do sistema." },
      { step: "Identificação e Correção de Bugs", detail: "Investigação de issues reportadas e implementação de correções no backend e frontend." },
      { step: "Automação de Testes", detail: "Desenvolvimento de casos de teste automatizados para garantir a estabilidade das funcionalidades críticas." },
      { step: "Contribuição com Documentação", detail: "Atualização da documentação técnica para facilitar o onboarding de novos contribuidores." }
    ],
    artifacts: [
      { type: "link", label: "Documentação Oficial", desc: "Acesso à documentação do projeto CAPJu", url: "https://fga-eps-mds.github.io/2022-2-CAPJu-Doc/#/" },
      { type: "github", label: "Repositório do Projeto", desc: "Acesso ao repositório do projeto CAPJu", url: "https://github.com/fga-eps-mds/2022-2-CAPJu-Doc" }
    ],
    translations: {
      en: {
        title: "CAPJu - Judicial Process Management",
        summary: "Open source contribution and development in software architecture and maintenance of the judicial system for FGA.",
        context: "CAPJu is an open source judicial process management system developed for the Gama Faculty (FGA/UnB). I contributed to the system's evolutionary maintenance, working on a real project with direct impact on the university's legal flow.",
        process: [
          { step: "Onboarding and Code Analysis", detail: "Study of the existing architecture and module mapping to understand the system flow." },
          { step: "Bug Identification and Fixing", detail: "Investigation of reported issues and implementation of fixes in the backend and frontend." },
          { step: "Test Automation", detail: "Development of automated test cases to ensure the stability of critical functionalities." },
          { step: "Documentation Contribution", detail: "Update of technical documentation to facilitate onboarding of new contributors." }
        ]
      }
    }
  },
  {
    id: "ans-sgd",
    tag: "UX/UI",
    tags: ["UX/UI", "Pesquisa"],
    title: "ANS - Agência Nacional de Saúde Suplementar",
    summary: "Redesign de serviços digitais da ANS em parceria com a SGD, unindo pesquisa com usuários, mapeamento de fluxos e prototipagem de alta fidelidade.",
    context: "Projeto desenvolvido em parceria com a Secretaria de Governo Digital (SGD) para modernizar os serviços digitais da Agência Nacional de Saúde Suplementar (ANS). O desafio envolveu compreender fluxos regulatórios complexos e transformá-los em experiências intuitivas para cidadãos e operadoras de saúde.",
    workshopDetail: "Conduzi sessões de mapeamento colaborativo no Miro com stakeholders da ANS e da SGD, estruturando blueprints de serviço e jornadas de usuário para identificar gargalos nos processos de atendimento e regulação.",
    process: [
      { step: "Discovery e Pesquisa", detail: "Levantamento de requisitos e pesquisa com usuários para compreender os fluxos de atendimento e as necessidades dos beneficiários de planos de saúde." },
      { step: "Mapeamento de Serviço", detail: "Estruturação de Service Blueprint e mapa de jornada no Miro, documentando fluxos regulatórios e pontos de atrito entre cidadão e sistema." },
      { step: "Prototipagem de Alta Fidelidade", detail: "Desenvolvimento do protótipo interativo no Figma com foco em clareza, acessibilidade e alinhamento com o Design System Gov.br." },
      { step: "Documentação e Entrega", detail: "Produção de relatório técnico consolidando descobertas, decisões de design e recomendações estratégicas para o produto." }
    ],
    artifacts: [
      { type: "figma", label: "Protótipo Interativo", desc: "Visualizar o protótipo de alta fidelidade no Figma", url: "https://www.figma.com/proto/t1p7rsjgNveiiDiSJOM7L8/SGD---ANS?page-id=0%3A1&type=design&node-id=334-3072&viewport=-1844%2C-507%2C1.54&t=lDdqm2gzOBQbD3Tt-1&scaling=scale-down&starting-point-node-id=334%3A3072" },
      { type: "miro", label: "Quadro de Mapeamento", desc: "Service Blueprint e jornadas no Miro", url: "https://miro.com/app/board/uXjVNlWwktI=/" },
      { type: "pdf", label: "Acessar Relatório", desc: "Abrir relatório completo no navegador", url: "/assets/Relatório -  ANS.pdf" }
    ],
    translations: {
      en: {
        title: "ANS - National Supplementary Health Agency",
        summary: "Redesign of ANS digital services in partnership with SGD, combining user research, flow mapping, and high-fidelity prototyping.",
        context: "Project developed in partnership with the Government Digital Secretariat (SGD) to modernize the digital services of the National Supplementary Health Agency (ANS). The challenge involved understanding complex regulatory flows and transforming them into intuitive experiences for citizens and health operators.",
        workshopDetail: "I conducted collaborative mapping sessions in Miro with ANS and SGD stakeholders, structuring service blueprints and user journeys to identify bottlenecks in the service and regulation processes.",
        process: [
          { step: "Discovery and Research", detail: "Requirements gathering and user research to understand the service flows and needs of health plan beneficiaries." },
          { step: "Service Mapping", detail: "Service Blueprint and journey map structuring in Miro, documenting regulatory flows and friction points between citizens and the system." },
          { step: "High-Fidelity Prototyping", detail: "Development of interactive prototypes in Figma focused on clarity, accessibility, and alignment with the Gov.br Design System." },
          { step: "Documentation and Delivery", detail: "Production of a technical report consolidating findings, design decisions, and strategic recommendations for the product." }
        ]
      }
    }
  },
  {
    id: "acidentes-aereos-etl",
    tag: "Desenvolvimento",
    tags: ["Desenvolvimento"],
    title: "ETL & Visualização — Acidentes Aeronáuticos",
    summary: "Arquitetura completa de pipeline ETL para consolidação e visualização de dados de acidentes aeronáuticos civis brasileiros.",
    context: "Projeto de engenharia de dados com foco na construção de um pipeline ETL robusto para ingestão, tratamento e consolidação das bases de acidentes aeronáuticos civis do CENIPA. O objetivo era transformar dados brutos e fragmentados em um dataset limpo e pronto para análise e visualização.",
    process: [
      { step: "Extração e Ingestão de Dados", detail: "Coleta automatizada das bases públicas do CENIPA, integrando múltiplas fontes de dados em formatos heterogêneos." },
      { step: "Transformação e Limpeza (ETL)", detail: "Tratamento de inconsistências, padronização de campos, deduplicação e enriquecimento dos registros utilizando Python e SQL." },
      { step: "Modelagem do Data Warehouse", detail: "Criação de esquema relacional otimizado para consultas analíticas, com staging e camada final consolidada via DBeaver e Docker." },
      { step: "Visualização e Análise", detail: "Desenvolvimento de dashboards e visualizações interativas para explorar padrões e tendências nos acidentes aeronáuticos civis." }
    ],
    artifacts: [
      { type: "github", label: "Repositório GitHub", desc: "Código-fonte completo do pipeline ETL e visualizações", url: "https://github.com/rodrigogontijoo/acidentes-aereos-etl-visualization" }
    ],
    translations: {
      en: {
        title: "ETL & Visualization — Aeronautical Accidents",
        summary: "Complete ETL pipeline architecture for consolidation and visualization of Brazilian civil aeronautical accident data.",
        context: "Data engineering project focused on building a robust ETL pipeline for ingestion, processing, and consolidation of CENIPA's civil aeronautical accident databases. The goal was to transform raw and fragmented data into a clean dataset ready for analysis and visualization.",
        process: [
          { step: "Data Extraction and Ingestion", detail: "Automated collection of CENIPA public databases, integrating multiple data sources in heterogeneous formats." },
          { step: "Transformation and Cleaning (ETL)", detail: "Handling inconsistencies, field standardization, deduplication, and record enrichment using Python and SQL." },
          { step: "Data Warehouse Modeling", detail: "Creation of a relational schema optimized for analytical queries, with staging and final consolidated layer via DBeaver and Docker." },
          { step: "Visualization and Analysis", detail: "Development of dashboards and interactive visualizations to explore patterns and trends in civil aeronautical accidents." }
        ]
      }
    }
  },
  {
    id: "projeto-amazon",
    tag: "Desenvolvimento",
    tags: ["UX/UI", "Pesquisa", "Desenvolvimento"],
    title: "Projeto Amazon - Arquitetura de Software (UnB)",
    summary: "Modelagem e documentação de arquitetura de software para um ecossistema inspirado na Amazon, aplicando padrões GoF, GRASP e notações UML.",
    context: "Projeto da disciplina de Arquitetura e Desenho de Software da UnB (2023.2), com foco na análise e modelagem de um sistema de e-commerce inspirado na Amazon. Envolveu pesquisa de padrões arquiteturais, design de interfaces e engenharia de software colaborativa em equipe multidisciplinar.",
    workshopDetail: "O projeto foi desenvolvido em equipe utilizando metodologia ágil com sprints curtas, revisões de artefatos e documentação colaborativa no GitHub Pages, cobrindo desde a modelagem UML até a prototipagem de experiências de usuário.",
    process: [
      { step: "Modelagem e Diagramação UML", detail: "Elaboração de diagramas de classes, sequência, estados e casos de uso para documentar a arquitetura do sistema." },
      { step: "Aplicação de Padrões de Projeto", detail: "Implementação de padrões GoF (criacionais, estruturais e comportamentais) e GRASP para estruturar a solução." },
      { step: "Design de Experiência", detail: "Pesquisa de usabilidade e prototipagem de fluxos de usuário para o ecossistema de e-commerce modelado." },
      { step: "Documentação e GitHub Pages", detail: "Publicação da documentação técnica completa via GitHub Pages com registro de decisões arquiteturais (ADRs)." }
    ],
    artifacts: [
      { type: "link", label: "Documentação do Projeto", desc: "GitHub Pages com toda a documentação arquitetural", url: "https://unbarqdsw2023-2.github.io/2023.2_G3_ProjetoAmazon/#/" },
      { type: "github", label: "Repositório GitHub", desc: "Código-fonte e artefatos de modelagem", url: "https://github.com/UnBArqDsw2023-2/2023.2_G3_ProjetoAmazon" }
    ],
    translations: {
      en: {
        title: "Amazon Project - Software Architecture (UnB)",
        summary: "Software architecture modeling and documentation for an Amazon-inspired ecosystem, applying GoF, GRASP patterns, and UML notations.",
        context: "Project from the Software Architecture and Design course at UnB (2023.2), focused on analyzing and modeling an e-commerce system inspired by Amazon. It involved research on architectural patterns, interface design, and collaborative software engineering in a multidisciplinary team.",
        workshopDetail: "The project was developed as a team using agile methodology with short sprints, artifact reviews, and collaborative documentation on GitHub Pages, covering everything from UML modeling to user experience prototyping.",
        process: [
          { step: "UML Modeling and Diagramming", detail: "Elaboration of class, sequence, state, and use case diagrams to document the system architecture." },
          { step: "Design Pattern Application", detail: "Implementation of GoF patterns (creational, structural, and behavioral) and GRASP to structure the solution." },
          { step: "Experience Design", detail: "Usability research and prototyping of user flows for the modeled e-commerce ecosystem." },
          { step: "Documentation and GitHub Pages", detail: "Publication of complete technical documentation via GitHub Pages with architectural decision records (ADRs)." }
        ]
      }
    }
  }
];

export const SKILLS = [
  {
    category: "UX/UI & Design",
    items: ["Figma", "Miro", "Wireframing", "Prototipagem de Alta Fidelidade", "Design System", "Service Blueprint", "Jornada do Usuário", "Pesquisa com Usuários", "Testes de Usabilidade"]
  },
  {
    category: "Requisitos & Produto",
    items: ["Levantamento de Requisitos", "Análise Funcional", "Discovery", "User Stories", "BDD", "Documentação Técnica"]
  },
  {
    category: "Acessibilidade",
    items: ["WCAG 2.1", "e-MAG", "Design Inclusivo", "Acessibilidade Digital"]
  },
  {
    category: "Desenvolvimento & Dados",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Python", "Node.js", "PHP", "SQL", "MySQL", "PostgreSQL", "Docker", "DBeaver", "Power BI", "Git"]
  },
  {
    category: "Metodologias",
    items: ["Design Thinking", "Lean UX", "Scrum", "Kanban", "Agile", "Discovery de Produto", "Facilitação de Workshops"]
  },
  {
    category: "Idiomas",
    items: ["Português (Nativo)", "Inglês Intermediário"]
  }
];
