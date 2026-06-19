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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
