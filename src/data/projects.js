/**
 * Fonte única dos estudos de caso.
 *
 * Cada projeto segue a mesma estrutura: contexto, papel, escopo, processo,
 * artefatos, validação, resultados comprovados, métricas propostas e
 * evidências. Resultado comprovado e meta futura ficam em campos separados
 * de propósito: nada que não foi medido aparece como resultado.
 *
 * `en` carrega a tradução dos campos textuais. Campo ausente em `en` cai
 * para o português, então a paridade factual fica em um lugar só.
 */

export const CATEGORIES = [
  "Todos",
  "Requisitos e Produto",
  "Service Design e UX",
  "Acessibilidade",
  "Dados",
  "Engenharia de Software"
];

export const PROJECTS = [
  {
    id: "anac-oficinas",
    categories: ["Requisitos e Produto", "Service Design e UX"],
    title: "ANAC, programa de transformação digital",
    summary:
      "Oito frentes de transformação digital para cinco superintendências, registradas em dez relatórios. Planejei e facilitei as oficinas, converti os resultados em requisitos e prototipei os serviços.",
    context:
      "A Agência Nacional de Aviação Civil precisava redesenhar serviços regulatórios que afetam operadores, escolas de aviação, fabricantes e o próprio corpo técnico. Cada frente tinha uma superintendência responsável, norma própria e sistemas legados diferentes, mas o problema era o mesmo: entender a regra, entender quem ela afeta e devolver isso como serviço digital viável.",
    role: [
      "Planejei cada ciclo de oficina, definindo objetivo, dinâmica, duração e material de apoio.",
      "Facilitei as sessões com as superintendências e, nas frentes de certificação e segurança, também com regulados externos.",
      "Registrei os resultados e produzi os dez relatórios entregues à agência.",
      "Construí as jornadas, os service blueprints, os mapas de ecossistema e os canvases apresentados.",
      "Converti os artefatos validados em requisitos e backlog priorizado.",
      "Prototipei em baixa e alta fidelidade e analisei os testes com usuários."
    ],
    scope: [
      { label: "Período", value: "Ciclos de 2 a 4 dias por frente, ao longo de 2024" },
      { label: "Superintendências", value: "Cinco: SAR, STD, SPO, SFI e SPI" },
      { label: "Frentes", value: "Oito, documentadas em dez relatórios" },
      {
        label: "Participações registradas",
        value: "Mais de 100 presenças em oficinas, contadas por participação e não por pessoas únicas"
      }
    ],
    process: [
      {
        step: "Imersão na norma e nos sistemas",
        detail:
          "Estudei o regulamento e os sistemas envolvidos antes de cada oficina, para a sessão discutir o problema em vez de gastar o tempo explicando a regra."
      },
      {
        step: "Enunciação do problema",
        detail:
          "Apliquei matriz de enunciado com quem, o quê, onde, quando e por quê, para o grupo convergir em uma frase única antes de propor solução."
      },
      {
        step: "Jornada e ecossistema de serviço",
        detail:
          "A jornada expõe a experiência do regulado e o mapa de ecossistema expõe as dependências entre áreas e sistemas, que é onde os projetos costumam travar."
      },
      {
        step: "Priorização com o grupo",
        detail:
          "Matriz de impacto e esforço, para a decisão do que entra no MVP sair da sala com dono e ficar registrada."
      },
      {
        step: "Prototipação e teste",
        detail:
          "Baixa fidelidade para validar fluxo e alta fidelidade para validar interface e linguagem, testadas com quem usa o serviço."
      },
      {
        step: "Conversão em requisitos",
        detail:
          "Transformei cada artefato validado em requisito, história de usuário e backlog priorizado para as equipes de produto."
      }
    ],
    fronts: [
      {
        name: "Diário de Bordo Digital",
        detail:
          "Necessidades dos usuários, escopo e jornadas validados, com estratégias de adoção e roadmap de MVP e versões seguintes."
      },
      {
        name: "Hub Financeiro",
        detail: "Ecossistema validado, serviços priorizados e o serviço escolhido redesenhado e prototipado."
      },
      {
        name: "Base de Aeronaves",
        detail:
          "Problema consolidado, jornada e ecossistema de serviço mapeados, priorização definida e prototipação."
      },
      {
        name: "Plataforma PEL",
        detail: "Protótipo do serviço inicial de certificação, testado com usuários."
      },
      {
        name: "Startup Certifica",
        detail: "Protótipo de baixa fidelidade construído e testado com usuários."
      },
      {
        name: "Integração ANAC e DECEA",
        detail:
          "Integrações priorizadas e roadmap com marcos, responsáveis e os próximos sistemas e APIs a conectar."
      },
      {
        name: "Safety Intelligence",
        detail:
          "MVP definido, backlog de módulos, protótipos navegáveis e validação com regulados externos."
      },
      {
        name: "Jornada do passageiro, Inframerica",
        detail:
          "Oficina de cocriação de três horas, em grupos pequenos, com priorização das ideias pelos participantes."
      }
    ],
    artifacts: [
      "Jornadas do usuário e service blueprints por frente",
      "Mapas de ecossistema de serviço e de stakeholders",
      "Canvas de MVP, storyboards e matrizes de impacto e esforço",
      "Protótipos de baixa e alta fidelidade",
      "Requisitos, histórias de usuário e backlog priorizado",
      "Dez relatórios consolidados entregues à ANAC"
    ],
    validation:
      "Testei os protótipos com servidores das superintendências responsáveis e, nas frentes de certificação e de inteligência em segurança, também com regulados externos. As observações voltaram para o fluxo antes de o backlog ser entregue.",
    results: [
      "Oito frentes com problema enunciado, jornada mapeada e escopo acordado entre as áreas.",
      "Serviços priorizados e MVP definido junto da superintendência dona de cada frente.",
      "Protótipos validados e convertidos em requisitos e backlog.",
      "Roadmap de integração entre ANAC e DECEA, com marcos e responsáveis definidos.",
      "Dez relatórios entregues, que passaram a ser o registro formal das decisões."
    ],
    nextSteps: [
      "Redução do lead time de certificação, proposta como meta de validação na frente Startup Certifica.",
      "Redução do número de interações entre regulado e agência dentro do mesmo processo.",
      "Adoção do Diário de Bordo Digital pelos operadores, a medir depois da implantação."
    ],
    evidence: [
      {
        type: "doc",
        label: "Dez relatórios de oficina",
        desc: "Contêm nomes e imagens de participantes, então não são publicados aqui"
      }
    ],
    en: {
      title: "ANAC digital transformation program",
      summary:
        "Eight digital transformation fronts for five superintendencies, recorded in ten reports. I planned and facilitated the workshops, turned the outcomes into requirements and prototyped the services.",
      context:
        "Brazil's National Civil Aviation Agency needed to redesign regulatory services affecting operators, flight schools, manufacturers and its own technical staff. Each front had its own superintendency, its own regulation and different legacy systems, but the problem was the same: understand the rule, understand who it affects, and give it back as a workable digital service.",
      role: [
        "Planned every workshop cycle, defining objective, format, duration and supporting material.",
        "Facilitated the sessions with the superintendencies and, on the certification and safety fronts, with external regulated parties as well.",
        "Recorded the outcomes and produced the ten reports delivered to the agency.",
        "Built the journeys, service blueprints, ecosystem maps and canvases presented.",
        "Turned the validated artifacts into requirements and a prioritized backlog.",
        "Prototyped in low and high fidelity and analysed the user tests."
      ],
      scope: [
        { label: "Period", value: "Cycles of 2 to 4 days per front, throughout 2024" },
        { label: "Superintendencies", value: "Five: SAR, STD, SPO, SFI and SPI" },
        { label: "Fronts", value: "Eight, documented in ten reports" },
        {
          label: "Recorded attendances",
          value: "Over 100 workshop attendances, counted as attendance rather than unique people"
        }
      ],
      process: [
        {
          step: "Immersion in the regulation and the systems",
          detail:
            "I studied the regulation and the systems before each workshop, so the session could discuss the problem instead of spending its time explaining the rule."
        },
        {
          step: "Problem statement",
          detail:
            "Applied a who, what, where, when and why matrix so the group converged on a single sentence before proposing solutions."
        },
        {
          step: "Service journey and ecosystem",
          detail:
            "The journey exposes the regulated party's experience and the ecosystem map exposes dependencies between areas and systems, which is where these projects usually stall."
        },
        {
          step: "Prioritization with the group",
          detail:
            "Impact and effort matrix, so the decision about the MVP left the room with an owner and stayed on record."
        },
        {
          step: "Prototyping and testing",
          detail:
            "Low fidelity to validate the flow and high fidelity to validate interface and wording, tested with the people who use the service."
        },
        {
          step: "Conversion into requirements",
          detail:
            "Turned each validated artifact into requirements, user stories and a prioritized backlog for the product teams."
        }
      ],
      fronts: [
        {
          name: "Digital Flight Logbook",
          detail:
            "User needs, scope and journeys validated, with adoption strategies and a roadmap for the MVP and following versions."
        },
        {
          name: "Financial Hub",
          detail: "Ecosystem validated, services prioritized and the chosen service redesigned and prototyped."
        },
        {
          name: "Aircraft Registry",
          detail: "Problem consolidated, journey and service ecosystem mapped, prioritization defined and prototyping."
        },
        { name: "PEL Platform", detail: "Prototype of the initial certification service, tested with users." },
        { name: "CERTIFICA Startup", detail: "Low fidelity prototype built and tested with users." },
        {
          name: "ANAC and DECEA integration",
          detail:
            "Integrations prioritized and a roadmap with milestones, owners and the next systems and APIs to connect."
        },
        {
          name: "Safety Intelligence",
          detail: "MVP defined, module backlog, navigable prototypes and validation with external regulated parties."
        },
        {
          name: "Passenger journey, Inframerica",
          detail: "Three-hour co-creation workshop in small groups, with ideas prioritized by the participants."
        }
      ],
      artifacts: [
        "User journeys and service blueprints per front",
        "Service ecosystem and stakeholder maps",
        "MVP canvases, storyboards and impact and effort matrices",
        "Low and high fidelity prototypes",
        "Requirements, user stories and prioritized backlog",
        "Ten consolidated reports delivered to ANAC"
      ],
      validation:
        "I tested the prototypes with staff from the responsible superintendencies and, on the certification and safety intelligence fronts, with external regulated parties too. The observations went back into the flow before the backlog was handed over.",
      results: [
        "Eight fronts with a stated problem, a mapped journey and a scope agreed between areas.",
        "Services prioritized and an MVP defined with the superintendency that owns each front.",
        "Prototypes validated and converted into requirements and backlog.",
        "Integration roadmap between ANAC and DECEA, with milestones and owners.",
        "Ten reports delivered, which became the formal record of the decisions."
      ],
      nextSteps: [
        "Reduction of certification lead time, proposed as a validation target on the CERTIFICA Startup front.",
        "Reduction in the number of interactions between the regulated party and the agency within one process.",
        "Adoption of the Digital Flight Logbook by operators, to be measured after rollout."
      ],
      evidence: [
        {
          type: "doc",
          label: "Ten workshop reports",
          desc: "They carry participant names and images, so they are not published here"
        }
      ]
    }
  },

  {
    id: "ans-sgd",
    categories: ["Requisitos e Produto", "Service Design e UX", "Acessibilidade"],
    title: "Minha ANS Digital",
    summary:
      "Quatro oficinas de Discovery, jornada regulatória, storyboards e protótipo de alta fidelidade no Figma, testado com oito usuários de perfis distintos.",
    context:
      "A Agência Nacional de Saúde Suplementar precisava aproximar o beneficiário de plano de saúde dos seus serviços digitais: consultar cobertura, entender o próprio plano, registrar reclamação e acompanhar a solicitação. O trabalho foi conduzido em parceria com a Secretaria de Governo Digital.",
    role: [
      "Planejei e facilitei as quatro oficinas de Discovery com as áreas da ANS e da SGD.",
      "Mapeei a jornada regulatória do beneficiário e construí os storyboards.",
      "Prototipei em baixa e alta fidelidade no Figma, alinhado ao Design System Gov.br.",
      "Conduzi os testes de usabilidade e analisei os achados.",
      "Converti os achados em ajustes de fluxo e em requisitos documentados."
    ],
    scope: [
      { label: "Período", value: "Ciclo de Discovery em março de 2024" },
      { label: "Oficinas", value: "Quatro, com áreas da ANS e da SGD" },
      { label: "Teste de usabilidade", value: "Oito usuários com perfis distintos" }
    ],
    process: [
      {
        step: "Discovery com as áreas",
        detail:
          "Quatro oficinas para levantar o problema com quem opera a regulação, antes de desenhar qualquer tela."
      },
      {
        step: "Jornada regulatória",
        detail:
          "Mapeei a jornada para enxergar onde o beneficiário trava entre o plano, a operadora e a agência."
      },
      {
        step: "Storyboard",
        detail:
          "Quadro a quadro, para a equipe discutir a sequência do serviço antes de investir em interface."
      },
      {
        step: "Protótipo no Figma",
        detail:
          "Baixa fidelidade para validar fluxo e alta fidelidade para testar interface e linguagem, seguindo o Design System Gov.br."
      },
      {
        step: "Teste com oito usuários",
        detail: "Perfis distintos, para separar problema de interface de problema de regra regulatória."
      },
      {
        step: "Ajuste e documentação",
        detail: "Cada achado virou uma decisão registrada de fluxo, linguagem ou integração."
      }
    ],
    artifacts: [
      "Jornada regulatória do beneficiário",
      "Storyboards da jornada, quadro a quadro",
      "Canvas de MVP do aplicativo",
      "Protótipo navegável de alta fidelidade no Figma",
      "Relatório consolidado com requisitos e proposta de MVP"
    ],
    validation:
      "Os testes envolveram oito usuários com perfis distintos. Os achados levaram a ajustes na navegação, na linguagem das telas, no acompanhamento das solicitações e nas integrações previstas.",
    results: [
      "Jornada regulatória mapeada e validada com as áreas da ANS e da SGD.",
      "Protótipo navegável alinhado ao Design System Gov.br.",
      "Ajustes de navegação, linguagem, acompanhamento de solicitações e integrações decididos a partir dos testes.",
      "Requisitos e proposta de MVP documentados e entregues."
    ],
    nextSteps: [
      "Aumento de downloads do aplicativo, previsto como meta de validação.",
      "Adoção e satisfação do serviço, previstas como plano de medição após a implantação."
    ],
    evidence: [
      {
        type: "figma",
        label: "Protótipo interativo",
        desc: "Protótipo de alta fidelidade no Figma",
        url: "https://www.figma.com/proto/t1p7rsjgNveiiDiSJOM7L8/SGD---ANS?page-id=0%3A1&type=design&node-id=334-3072&viewport=-1844%2C-507%2C1.54&t=lDdqm2gzOBQbD3Tt-1&scaling=scale-down&starting-point-node-id=334%3A3072"
      },
      {
        type: "miro",
        label: "Quadro de mapeamento",
        desc: "Jornada, storyboards e registro dos testes no Miro",
        url: "https://miro.com/app/board/uXjVNlWwktI=/"
      },
      {
        type: "doc",
        label: "Relatório consolidado",
        desc: "Contém nomes e imagens de participantes, então não é publicado aqui"
      }
    ],
    en: {
      title: "Minha ANS Digital",
      summary:
        "Four Discovery workshops, a regulatory journey, storyboards and a high fidelity Figma prototype tested with eight users of different profiles.",
      context:
        "Brazil's National Supplementary Health Agency needed to bring health plan members closer to its digital services: checking coverage, understanding their own plan, filing a complaint and following up on it. The work was carried out with the Government Digital Secretariat.",
      role: [
        "Planned and facilitated the four Discovery workshops with ANS and SGD teams.",
        "Mapped the member's regulatory journey and built the storyboards.",
        "Prototyped in low and high fidelity in Figma, aligned with the Gov.br Design System.",
        "Ran the usability tests and analysed the findings.",
        "Turned the findings into flow changes and documented requirements."
      ],
      scope: [
        { label: "Period", value: "Discovery cycle in March 2024" },
        { label: "Workshops", value: "Four, with ANS and SGD teams" },
        { label: "Usability test", value: "Eight users with different profiles" }
      ],
      process: [
        {
          step: "Discovery with the teams",
          detail:
            "Four workshops to frame the problem with the people who run the regulation, before designing any screen."
        },
        {
          step: "Regulatory journey",
          detail: "Mapped the journey to see where the member gets stuck between the plan, the operator and the agency."
        },
        {
          step: "Storyboard",
          detail: "Frame by frame, so the team could discuss the service sequence before investing in interface."
        },
        {
          step: "Figma prototype",
          detail:
            "Low fidelity to validate the flow and high fidelity to test interface and wording, following the Gov.br Design System."
        },
        {
          step: "Test with eight users",
          detail: "Different profiles, to separate interface problems from regulatory rule problems."
        },
        {
          step: "Adjust and document",
          detail: "Each finding became a recorded decision about flow, wording or integration."
        }
      ],
      artifacts: [
        "Member's regulatory journey",
        "Journey storyboards, frame by frame",
        "App MVP canvas",
        "Navigable high fidelity prototype in Figma",
        "Consolidated report with requirements and MVP proposal"
      ],
      validation:
        "The tests involved eight users with different profiles. The findings led to changes in navigation, screen wording, request tracking and the planned integrations.",
      results: [
        "Regulatory journey mapped and validated with ANS and SGD teams.",
        "Navigable prototype aligned with the Gov.br Design System.",
        "Navigation, wording, request tracking and integration decisions taken from the test findings.",
        "Requirements and MVP proposal documented and delivered."
      ],
      nextSteps: [
        "Increase in app downloads, planned as a validation target.",
        "Service adoption and satisfaction, planned as measurement after rollout."
      ],
      evidence: [
        { type: "figma", label: "Interactive prototype", desc: "High fidelity prototype in Figma" },
        { type: "miro", label: "Mapping board", desc: "Journey, storyboards and test records in Miro" },
        {
          type: "doc",
          label: "Consolidated report",
          desc: "It carries participant names and images, so it is not published here"
        }
      ]
    }
  },

  {
    id: "discovery-servicos-publicos",
    categories: ["Requisitos e Produto", "Service Design e UX"],
    title: "Discovery em quatro órgãos federais",
    summary:
      "Ciclos de Discovery no Ministério da Economia, na SGD, na DTI e no MGI, do mapeamento do ecossistema até o requisito que a equipe de produto usou.",
    context:
      "Quatro órgãos federais com o mesmo tipo de problema: serviços digitais construídos sobre regras densas, sistemas que não conversam entre si e equipes sem um retrato comum do próprio ecossistema. Programas como ComprasGov, Bens Patrimoniais, Luz para Todos e ColaboraGov entraram nesse ciclo.",
    role: [
      "Planejei e facilitei as oficinas de co-criação com servidores, gestores e equipes técnicas.",
      "Mapeei ecossistemas de serviço, jornadas e fluxos de dados de cada órgão.",
      "Construí os service blueprints, os mapas de stakeholders e os canvases usados nas sessões.",
      "Converti o que saiu das oficinas em requisitos funcionais e não funcionais documentados.",
      "Prototipei fluxos e telas quando a frente chegou nesse estágio."
    ],
    scope: [
      { label: "Órgãos", value: "Ministério da Economia, SGD, DTI e MGI" },
      { label: "Programas", value: "ComprasGov, Bens Patrimoniais, Luz para Todos e ColaboraGov" },
      { label: "Formato", value: "Oficinas de co-criação, presenciais e remotas" }
    ],
    process: [
      {
        step: "Escuta com quem opera o serviço",
        detail:
          "Entrevistas e dinâmicas com servidores de áreas diferentes, porque a dor real raramente aparece no documento oficial."
      },
      {
        step: "Mapeamento do ecossistema",
        detail:
          "Diagrama de sistemas, responsáveis e fluxos de dados, para a equipe ver de uma vez o que depende do quê."
      },
      {
        step: "Oficina de co-criação",
        detail:
          "Golden Circle, blueprint e jornada no Miro, para alinhar propósito e sequência antes de discutir solução."
      },
      {
        step: "Canvas de MVP",
        detail:
          "Usado na frente de agente de IA para delimitar escopo, dados, jornada e critérios de avaliação em um quadro só."
      },
      {
        step: "Documentação de requisitos",
        detail:
          "Requisitos funcionais e não funcionais estruturados a partir dos artefatos, entregues às equipes de produto."
      }
    ],
    artifacts: [
      "Service blueprints e mapas de jornada",
      "Mapas de ecossistema e de stakeholders",
      "Canvas de MVP de agente de IA, com escopo, dados, jornada e métricas de avaliação",
      "Diagramas de fluxo de dados",
      "Requisitos funcionais e não funcionais documentados"
    ],
    validation:
      "Cada artefato foi revisado com as áreas donas do serviço dentro da própria oficina, e o que não fechava voltava para a rodada seguinte.",
    results: [
      "Ecossistema de sistemas da DTI mapeado em duas rodadas com as equipes técnicas.",
      "Escopo do agente de IA delimitado com o MGI, com o que está dentro e o que está fora.",
      "Jornadas e prioridades acordadas nas oficinas de ComprasGov e de Bens Patrimoniais.",
      "Requisitos documentados e entregues como insumo direto para as equipes de produto."
    ],
    nextSteps: [],
    evidence: [
      {
        type: "miro",
        label: "Canvas de MVP do agente de IA",
        desc: "Quadro público de escopo, dados, jornada e métricas",
        url: "https://miro.com/app/board/uXjVHPAE3ys=/"
      },
      {
        type: "miro",
        label: "Ecossistema DTI e ColaboraGov",
        desc: "Mapeamento do ecossistema em duas rodadas de oficina",
        url: "https://miro.com/app/board/uXjVJUTrDU0=/?share_link_id=94655737093"
      },
      {
        type: "miro",
        label: "Oficina ComprasGov",
        desc: "Personas, jornadas e priorização do Design Sprint",
        url: "https://miro.com/app/board/uXjVLpKEO7s=/"
      },
      {
        type: "miro",
        label: "Oficina Luz para Todos",
        desc: "Quadro de co-criação do programa",
        url: "https://miro.com/app/board/uXjVID17wec=/"
      }
    ],
    en: {
      title: "Discovery across four federal agencies",
      summary:
        "Discovery cycles at the Ministry of Economy, SGD, DTI and MGI, from ecosystem mapping to the requirements the product team actually used.",
      context:
        "Four federal agencies with the same class of problem: digital services built on dense rules, systems that do not talk to each other, and teams without a shared picture of their own ecosystem. Programs such as ComprasGov, Public Assets, Luz para Todos and ColaboraGov went through this cycle.",
      role: [
        "Planned and facilitated the co-creation workshops with civil servants, managers and technical teams.",
        "Mapped service ecosystems, journeys and data flows for each agency.",
        "Built the service blueprints, stakeholder maps and canvases used in the sessions.",
        "Turned workshop output into documented functional and non-functional requirements.",
        "Prototyped flows and screens when a front reached that stage."
      ],
      scope: [
        { label: "Agencies", value: "Ministry of Economy, SGD, DTI and MGI" },
        { label: "Programs", value: "ComprasGov, Public Assets, Luz para Todos and ColaboraGov" },
        { label: "Format", value: "Co-creation workshops, in person and remote" }
      ],
      process: [
        {
          step: "Listening to the people who run the service",
          detail:
            "Interviews and sessions with staff from different areas, because the real pain rarely shows up in the official document."
        },
        {
          step: "Ecosystem mapping",
          detail: "A diagram of systems, owners and data flows, so the team can see at once what depends on what."
        },
        {
          step: "Co-creation workshop",
          detail: "Golden Circle, blueprint and journey in Miro, to align purpose and sequence before discussing solutions."
        },
        {
          step: "MVP canvas",
          detail: "Used on the AI agent front to bound scope, data, journey and evaluation criteria on a single board."
        },
        {
          step: "Requirements documentation",
          detail: "Functional and non-functional requirements structured from the artifacts and handed to the product teams."
        }
      ],
      artifacts: [
        "Service blueprints and journey maps",
        "Ecosystem and stakeholder maps",
        "AI agent MVP canvas, with scope, data, journey and evaluation metrics",
        "Data flow diagrams",
        "Documented functional and non-functional requirements"
      ],
      validation:
        "Every artifact was reviewed with the teams that own the service inside the workshop itself, and whatever did not hold up went back into the next round.",
      results: [
        "DTI systems ecosystem mapped across two rounds with the technical teams.",
        "AI agent scope bounded with MGI, stating what is in and what is out.",
        "Journeys and priorities agreed in the ComprasGov and Public Assets workshops.",
        "Requirements documented and delivered as direct input to the product teams."
      ],
      nextSteps: [],
      evidence: [
        { type: "miro", label: "AI agent MVP canvas", desc: "Public board with scope, data, journey and metrics" },
        { type: "miro", label: "DTI and ColaboraGov ecosystem", desc: "Ecosystem mapping across two workshop rounds" },
        { type: "miro", label: "ComprasGov workshop", desc: "Personas, journeys and Design Sprint prioritization" },
        { type: "miro", label: "Luz para Todos workshop", desc: "Co-creation board for the program" }
      ]
    }
  },

  {
    id: "guia-acessibilidade",
    categories: ["Acessibilidade", "Service Design e UX"],
    title: "Guia de Boas Práticas para Acessibilidade Digital",
    summary:
      "Guia de 91 páginas com 16 critérios práticos de acessibilidade, produzido para equipes de design, conteúdo e desenvolvimento do governo federal.",
    context:
      "Equipes de governo precisam aplicar WCAG, eMAG e o Design System Gov.br no dia a dia, mas a norma técnica não diz como resolver o caso concreto. O guia nasceu para virar essa norma em critério aplicável, com exemplo do que está certo e do que está errado.",
    role: [
      "Integrei a equipe que produziu o guia, junto ao MGI e à Secretaria de Governo Digital.",
      "Fiz a pesquisa e o benchmarking de referências internacionais de acessibilidade.",
      "Converti norma técnica em critério prático e escrevi trechos do conteúdo.",
      "Montei exemplos corretos e incorretos a partir de telas reais de serviços públicos.",
      "Publiquei o material como artefato Plone na infraestrutura do gov.br."
    ],
    scope: [
      { label: "Entrega", value: "Guia de 91 páginas, publicado em domínio gov.br" },
      { label: "Critérios", value: "16 critérios práticos" },
      { label: "Referências", value: "WCAG 2.2, eMAG e Design System Gov.br" },
      { label: "Público", value: "Equipes de design, conteúdo e desenvolvimento" }
    ],
    process: [
      {
        step: "Pesquisa e benchmarking",
        detail:
          "Levantei referências internacionais e o que já existia no governo, para não reescrever o que já estava resolvido."
      },
      {
        step: "Tradução da norma em critério",
        detail:
          "Cada critério responde uma pergunta prática de quem está construindo a tela, em vez de repetir o texto da norma."
      },
      {
        step: "Exemplo certo e exemplo errado",
        detail:
          "Cada diretriz traz a versão correta ao lado da incorreta, porque comparação ensina mais rápido que definição."
      },
      {
        step: "Revisão com as equipes",
        detail: "O conteúdo foi revisado com as áreas técnicas antes de virar publicação oficial."
      },
      {
        step: "Publicação",
        detail: "Publiquei o guia como artefato Plone na infraestrutura do gov.br."
      }
    ],
    artifacts: [
      "Guia de 91 páginas com 16 critérios práticos",
      "Exemplos corretos e incorretos a partir de telas reais",
      "Recomendações alinhadas a WCAG 2.2, eMAG e Design System Gov.br"
    ],
    validation:
      "O conteúdo passou por revisão das áreas técnicas do MGI e da SGD antes da publicação no domínio oficial.",
    results: [
      "Guia publicado em domínio gov.br e disponível para as equipes do governo federal.",
      "16 critérios práticos documentados, com exemplo aplicado em cada um.",
      "Material de referência para design, conteúdo e desenvolvimento no mesmo documento."
    ],
    nextSteps: [],
    evidence: [
      {
        type: "pdf",
        label: "Abrir o guia completo",
        desc: "91 páginas, documento público",
        url: "/assets/Guia_Acessibilidade_GovBr.pdf"
      }
    ],
    en: {
      title: "Digital Accessibility Good Practice Guide",
      summary:
        "A 91-page guide with 16 practical accessibility criteria, produced for design, content and development teams across the federal government.",
      context:
        "Government teams have to apply WCAG, eMAG and the Gov.br Design System day to day, but the standard does not tell them how to solve the case in front of them. The guide exists to turn that standard into applicable criteria, with an example of what is right and what is wrong.",
      role: [
        "Worked on the team that produced the guide, with MGI and the Government Digital Secretariat.",
        "Researched and benchmarked international accessibility references.",
        "Turned technical standards into practical criteria and wrote parts of the content.",
        "Built the correct and incorrect examples from real public service screens.",
        "Published the material as a Plone artifact on the gov.br infrastructure."
      ],
      scope: [
        { label: "Deliverable", value: "91-page guide, published on a gov.br domain" },
        { label: "Criteria", value: "16 practical criteria" },
        { label: "References", value: "WCAG 2.2, eMAG and the Gov.br Design System" },
        { label: "Audience", value: "Design, content and development teams" }
      ],
      process: [
        {
          step: "Research and benchmarking",
          detail: "Gathered international references and what already existed in government, to avoid rewriting solved problems."
        },
        {
          step: "Turning the standard into criteria",
          detail: "Each criterion answers a practical question from whoever is building the screen, instead of repeating the standard."
        },
        {
          step: "Right example and wrong example",
          detail: "Each guideline shows the correct version next to the incorrect one, because comparison teaches faster than definition."
        },
        {
          step: "Review with the teams",
          detail: "The content was reviewed with technical areas before becoming an official publication."
        },
        { step: "Publication", detail: "I published the guide as a Plone artifact on the gov.br infrastructure." }
      ],
      artifacts: [
        "91-page guide with 16 practical criteria",
        "Correct and incorrect examples drawn from real screens",
        "Recommendations aligned with WCAG 2.2, eMAG and the Gov.br Design System"
      ],
      validation:
        "The content was reviewed by technical areas at MGI and SGD before publication on the official domain.",
      results: [
        "Guide published on a gov.br domain and available to federal government teams.",
        "16 practical criteria documented, each with an applied example.",
        "A single reference covering design, content and development."
      ],
      nextSteps: [],
      evidence: [{ type: "pdf", label: "Open the full guide", desc: "91 pages, public document" }]
    }
  },

  {
    id: "artigo-enase",
    categories: ["Service Design e UX", "Engenharia de Software"],
    title: "Exploring the Role of Service Design in Software Development",
    summary:
      "Estudo de mapeamento sistemático publicado na ENASE 2025. Identificou 393 trabalhos em cinco bases, avaliou 185 textos completos e selecionou 30 estudos.",
    context:
      "Service Design aparece cada vez mais no desenvolvimento de software, mas a literatura estava dispersa: faltava um retrato de como a abordagem vinha sendo usada, com quais métodos e com quais lacunas. O estudo foi conduzido no ITRAC, na Universidade de Brasília.",
    role: [
      "Assino como primeiro autor do estudo, com Júlia de Souza, Elaine Venson e Rejane da Costa Figueiredo.",
      "Atuei na definição do protocolo de busca e dos critérios de inclusão e exclusão.",
      "Fiz a triagem dos textos, a extração dos dados e a escrita dos resultados."
    ],
    scope: [
      { label: "Tipo de estudo", value: "Mapeamento sistemático da literatura" },
      { label: "Bases consultadas", value: "Cinco" },
      { label: "Trabalhos identificados", value: "393" },
      { label: "Textos completos avaliados", value: "185" },
      { label: "Estudos selecionados", value: "30" },
      { label: "Publicação", value: "ENASE 2025, páginas 433 a 440" }
    ],
    process: [
      {
        step: "Definição do protocolo",
        detail:
          "Pergunta de pesquisa, strings de busca e critérios de inclusão e exclusão definidos antes da coleta, para o estudo ser reproduzível."
      },
      { step: "Busca nas bases", detail: "Cinco bases consultadas, resultando em 393 trabalhos identificados." },
      { step: "Triagem", detail: "Aplicação dos critérios até chegar a 185 textos completos avaliados." },
      { step: "Seleção e extração", detail: "30 estudos selecionados para extração de dados e análise." },
      {
        step: "Síntese",
        detail:
          "Análise de como o Service Design é usado no desenvolvimento de software, quais métodos aparecem e onde estão as lacunas."
      }
    ],
    artifacts: [
      "Protocolo de mapeamento sistemático",
      "Planilha de triagem e extração de dados",
      "Artigo completo publicado nos anais da ENASE 2025"
    ],
    validation: "O artigo passou por revisão por pares e foi aceito para publicação e apresentação na ENASE 2025.",
    results: [
      "Mapeamento publicado nos anais da ENASE 2025, páginas 433 a 440.",
      "30 estudos analisados e classificados a partir de 393 trabalhos identificados.",
      "Lacunas de pesquisa apontadas para o uso de Service Design no desenvolvimento de software."
    ],
    nextSteps: [],
    evidence: [
      {
        type: "link",
        label: "DOI 10.5220/0013257300003928",
        desc: "Publicação oficial na base SciTePress",
        url: "https://doi.org/10.5220/0013257300003928"
      },
      {
        type: "pdf",
        label: "Abrir o artigo em PDF",
        desc: "Texto completo do mapeamento sistemático",
        url: "/assets/Exploring the Role of Service Design.pdf"
      }
    ],
    en: {
      title: "Exploring the Role of Service Design in Software Development",
      summary:
        "Systematic mapping study published at ENASE 2025. It identified 393 works across five databases, assessed 185 full texts and selected 30 studies.",
      context:
        "Service Design shows up more and more in software development, but the literature was scattered: there was no picture of how the approach was being used, with which methods and with which gaps. The study was carried out at ITRAC, University of Brasília.",
      role: [
        "I am the first author of the study, with Júlia de Souza, Elaine Venson and Rejane da Costa Figueiredo.",
        "Took part in defining the search protocol and the inclusion and exclusion criteria.",
        "Worked on screening the texts, extracting the data and writing the results."
      ],
      scope: [
        { label: "Study type", value: "Systematic literature mapping" },
        { label: "Databases searched", value: "Five" },
        { label: "Works identified", value: "393" },
        { label: "Full texts assessed", value: "185" },
        { label: "Studies selected", value: "30" },
        { label: "Publication", value: "ENASE 2025, pages 433 to 440" }
      ],
      process: [
        {
          step: "Protocol definition",
          detail:
            "Research question, search strings and inclusion and exclusion criteria defined before collection, so the study is reproducible."
        },
        { step: "Database search", detail: "Five databases searched, returning 393 identified works." },
        { step: "Screening", detail: "Criteria applied down to 185 full texts assessed." },
        { step: "Selection and extraction", detail: "30 studies selected for data extraction and analysis." },
        {
          step: "Synthesis",
          detail:
            "Analysis of how Service Design is used in software development, which methods appear and where the gaps are."
        }
      ],
      artifacts: [
        "Systematic mapping protocol",
        "Screening and data extraction spreadsheet",
        "Full paper published in the ENASE 2025 proceedings"
      ],
      validation: "The paper went through peer review and was accepted for publication and presentation at ENASE 2025.",
      results: [
        "Mapping published in the ENASE 2025 proceedings, pages 433 to 440.",
        "30 studies analysed and classified out of 393 identified works.",
        "Research gaps identified for the use of Service Design in software development."
      ],
      nextSteps: [],
      evidence: [
        { type: "link", label: "DOI 10.5220/0013257300003928", desc: "Official publication on SciTePress" },
        { type: "pdf", label: "Open the paper in PDF", desc: "Full text of the systematic mapping" }
      ]
    }
  },

  {
    id: "respiracao-oral",
    categories: ["Service Design e UX", "Engenharia de Software", "Acessibilidade"],
    title: "Plataforma Respiração Oral",
    summary:
      "Plataforma do curso online sobre respiração oral, construída com fonoaudiólogos da UnB e publicada para o público do projeto de extensão.",
    context:
      "Um projeto de extensão da Universidade de Brasília precisava levar conteúdo de fonoaudiologia sobre respiração oral para profissionais, estudantes e público leigo. O material existia, mas não tinha um lugar próprio, com navegação clara e linguagem acessível para quem não é da área.",
    role: [
      "Levantei os requisitos com as fonoaudiólogas responsáveis pelo projeto.",
      "Defini a arquitetura de informação e a hierarquia do conteúdo do curso.",
      "Desenhei a interface e implementei o front-end.",
      "Ajustei a plataforma a partir dos testes com usuários reais do curso."
    ],
    scope: [
      { label: "Parceria", value: "Projeto de extensão de Fonoaudiologia da UnB" },
      { label: "Público", value: "Profissionais, estudantes e público leigo" },
      { label: "Entrega", value: "Plataforma publicada e em uso" }
    ],
    process: [
      {
        step: "Levantamento com as especialistas",
        detail:
          "Entrevistas com as fonoaudiólogas para entender a sequência didática e o que o público leigo trava primeiro."
      },
      {
        step: "Arquitetura de informação",
        detail: "Hierarquia e navegação definidas antes do layout, para o conteúdo ditar a estrutura."
      },
      {
        step: "Interface e implementação",
        detail: "Desenho e desenvolvimento com foco em leitura confortável e navegação simples."
      },
      { step: "Teste e ajuste", detail: "Validação com usuários reais do curso antes da publicação." }
    ],
    artifacts: [
      "Requisitos levantados com as especialistas",
      "Arquitetura de informação do curso",
      "Interface implementada e publicada"
    ],
    validation: "A plataforma foi validada com usuários reais do curso e ajustada antes da publicação.",
    results: [
      "Plataforma publicada e em uso pelo projeto de extensão.",
      "Conteúdo do curso organizado em uma arquitetura de informação própria.",
      "Código aberto no repositório do projeto."
    ],
    nextSteps: [],
    evidence: [
      {
        type: "link",
        label: "Abrir a plataforma",
        desc: "Site do curso publicado",
        url: "https://site-curso-respiracao-oral.vercel.app"
      },
      {
        type: "github",
        label: "Repositório no GitHub",
        desc: "Código-fonte da plataforma",
        url: "https://github.com/Fonoaudiologia-Respiracao-Oral/Site-Curso-Respiracao-Oral"
      }
    ],
    en: {
      title: "Oral Breathing Platform",
      summary:
        "Platform for the online oral breathing course, built with speech therapists at UnB and published for the extension project's audience.",
      context:
        "A University of Brasília extension project needed to bring speech therapy content about oral breathing to professionals, students and the general public. The material existed but had no home of its own, with clear navigation and language accessible to people outside the field.",
      role: [
        "Gathered requirements with the speech therapists running the project.",
        "Defined the information architecture and the course content hierarchy.",
        "Designed the interface and implemented the front end.",
        "Adjusted the platform based on tests with real course users."
      ],
      scope: [
        { label: "Partnership", value: "UnB Speech Therapy extension project" },
        { label: "Audience", value: "Professionals, students and the general public" },
        { label: "Deliverable", value: "Platform published and in use" }
      ],
      process: [
        {
          step: "Requirements with the specialists",
          detail:
            "Interviews with the speech therapists to understand the teaching sequence and what trips up a lay audience first."
        },
        {
          step: "Information architecture",
          detail: "Hierarchy and navigation defined before layout, so the content drives the structure."
        },
        {
          step: "Interface and implementation",
          detail: "Design and development focused on comfortable reading and simple navigation."
        },
        { step: "Test and adjust", detail: "Validation with real course users before publication." }
      ],
      artifacts: [
        "Requirements gathered with the specialists",
        "Course information architecture",
        "Interface implemented and published"
      ],
      validation: "The platform was validated with real course users and adjusted before publication.",
      results: [
        "Platform published and in use by the extension project.",
        "Course content organized into an information architecture of its own.",
        "Source code open in the project repository."
      ],
      nextSteps: [],
      evidence: [
        { type: "link", label: "Open the platform", desc: "Published course website" },
        { type: "github", label: "GitHub repository", desc: "Platform source code" }
      ]
    }
  },

  {
    id: "acidentes-aereos-etl",
    categories: ["Dados", "Engenharia de Software"],
    title: "ETL e painel de acidentes aeronáuticos",
    summary:
      "Pipeline ETL que consolidou as bases de acidentes aeronáuticos civis do CENIPA, com painel público em Power BI sobre os dados tratados.",
    context:
      "As bases públicas de ocorrências aeronáuticas do CENIPA são fragmentadas, com formatos heterogêneos e registros duplicados. Sem tratamento, qualquer análise sobre segurança de voo parte de dado sujo.",
    role: [
      "Desenhei a arquitetura do pipeline de extração, transformação e carga.",
      "Implementei a ingestão automatizada das bases públicas.",
      "Tratei inconsistências, padronizei campos e removi duplicidades.",
      "Modelei o esquema analítico e construí as visualizações."
    ],
    scope: [
      { label: "Fonte", value: "Bases públicas de ocorrências do CENIPA" },
      { label: "Stack", value: "Python, SQL, DBeaver, Docker e Power BI" },
      { label: "Entrega", value: "Pipeline ETL e painel público" }
    ],
    process: [
      {
        step: "Extração e ingestão",
        detail: "Coleta automatizada das bases públicas, integrando fontes em formatos diferentes."
      },
      {
        step: "Transformação e limpeza",
        detail:
          "Padronização de campos, deduplicação e enriquecimento em Python e SQL, porque o dado bruto não sustenta análise."
      },
      {
        step: "Modelagem analítica",
        detail: "Esquema relacional com camada de staging e camada final, pensado para consulta e não para transação."
      },
      { step: "Visualização", detail: "Painel para explorar ocorrências e recomendações por município e por severidade." }
    ],
    artifacts: [
      "Pipeline ETL versionado no repositório",
      "Modelo de dados com staging e camada consolidada",
      "Painel público em Power BI"
    ],
    validation: "A consistência do resultado foi conferida contra as bases de origem depois de cada carga.",
    results: [
      "Bases fragmentadas do CENIPA consolidadas em um conjunto tratado.",
      "Painel público em Power BI, com ocorrências e recomendações por município e severidade.",
      "Código aberto no repositório do projeto."
    ],
    nextSteps: [],
    evidence: [
      {
        type: "link",
        label: "Abrir o painel no Power BI",
        desc: "Painel público sobre os dados consolidados",
        url: "https://app.powerbi.com/view?r=eyJrIjoiNWY2ZTRmZTQtYjI5ZC00YTFlLTk2OWUtZjkxZmRlZGI5NmIxIiwidCI6ImVjMzU5YmExLTYzMGItNGQyYi1iODMzLWM4ZTZkNDhmODA1OSJ9"
      },
      {
        type: "github",
        label: "Repositório no GitHub",
        desc: "Código do pipeline e das visualizações",
        url: "https://github.com/rodrigogontijoo/acidentes-aereos-etl-visualization"
      }
    ],
    en: {
      title: "Aviation accident ETL and dashboard",
      summary:
        "ETL pipeline consolidating CENIPA's civil aviation accident databases, with a public Power BI dashboard on the processed data.",
      context:
        "CENIPA's public aviation occurrence databases are fragmented, with heterogeneous formats and duplicate records. Without processing, any flight safety analysis starts from dirty data.",
      role: [
        "Designed the extract, transform and load pipeline architecture.",
        "Implemented automated ingestion of the public databases.",
        "Handled inconsistencies, standardized fields and removed duplicates.",
        "Modelled the analytical schema and built the visualizations."
      ],
      scope: [
        { label: "Source", value: "CENIPA public occurrence databases" },
        { label: "Stack", value: "Python, SQL, DBeaver, Docker and Power BI" },
        { label: "Deliverable", value: "ETL pipeline and public dashboard" }
      ],
      process: [
        {
          step: "Extraction and ingestion",
          detail: "Automated collection of the public databases, integrating sources in different formats."
        },
        {
          step: "Transformation and cleaning",
          detail:
            "Field standardization, deduplication and enrichment in Python and SQL, because raw data does not support analysis."
        },
        {
          step: "Analytical modelling",
          detail: "Relational schema with a staging layer and a final layer, designed for querying rather than transactions."
        },
        { step: "Visualization", detail: "Dashboard to explore occurrences and recommendations by city and severity." }
      ],
      artifacts: [
        "ETL pipeline versioned in the repository",
        "Data model with staging and consolidated layers",
        "Public Power BI dashboard"
      ],
      validation: "Output consistency was checked against the source databases after each load.",
      results: [
        "CENIPA's fragmented databases consolidated into a processed dataset.",
        "Public Power BI dashboard with occurrences and recommendations by city and severity.",
        "Source code open in the project repository."
      ],
      nextSteps: [],
      evidence: [
        { type: "link", label: "Open the Power BI dashboard", desc: "Public dashboard on the consolidated data" },
        { type: "github", label: "GitHub repository", desc: "Pipeline and visualization code" }
      ]
    }
  },

  {
    id: "capju",
    categories: ["Engenharia de Software"],
    title: "CAPJu e Debian, contribuição open source",
    summary:
      "Manutenção evolutiva do sistema de gestão de processos judiciais da FGA/UnB e manutenção de pacotes no ecossistema Debian.",
    context:
      "O CAPJu é um sistema aberto de gestão de processos judiciais usado pela 4ª Vara Cível Federal, desenvolvido na Faculdade do Gama da UnB. O Debian Brasil mantém pacotes usados por toda a comunidade. Os dois são projetos reais, com usuário do outro lado e código que precisa continuar funcionando depois que a contribuição entra.",
    role: [
      "Estudei a arquitetura existente do CAPJu e mapeei os módulos antes de tocar no código.",
      "Corrigi bugs reportados no backend e no front-end.",
      "Escrevi testes automatizados para as funcionalidades críticas.",
      "Atualizei a documentação técnica do projeto.",
      "Mantenho e atualizo pacotes no ecossistema Debian, com correção de bugs e melhoria de documentação."
    ],
    scope: [
      { label: "CAPJu", value: "Sistema da 4ª Vara Cível Federal, desenvolvido na FGA/UnB" },
      { label: "Debian", value: "Contribuição na comunidade Debian Brasil desde 2023" },
      { label: "Prática", value: "Ciclos ágeis, revisão por pares e documentação pública" }
    ],
    process: [
      {
        step: "Leitura da arquitetura",
        detail:
          "Mapeamento dos módulos antes de qualquer alteração, porque em código de terceiros o risco está no que não se vê."
      },
      { step: "Correção de bugs", detail: "Investigação das issues reportadas e correção no backend e no front-end." },
      {
        step: "Teste automatizado",
        detail: "Cobertura das funcionalidades críticas, para a correção não voltar na próxima release."
      },
      {
        step: "Documentação",
        detail: "Atualização da documentação técnica, que é o que permite o próximo contribuidor entrar."
      }
    ],
    artifacts: [
      "Correções entregues no repositório do CAPJu",
      "Testes automatizados de funcionalidades críticas",
      "Documentação técnica atualizada",
      "Pacotes mantidos no ecossistema Debian"
    ],
    validation: "As contribuições passaram por revisão por pares nos dois projetos antes de entrar.",
    results: [
      "Bugs corrigidos e testes automatizados no CAPJu.",
      "Documentação técnica atualizada para facilitar a entrada de novos contribuidores.",
      "Contribuição contínua na manutenção de pacotes no Debian."
    ],
    nextSteps: [],
    evidence: [
      {
        type: "link",
        label: "Documentação do CAPJu",
        desc: "Documentação técnica publicada em GitHub Pages",
        url: "https://fga-eps-mds.github.io/2022-2-CAPJu-Doc/#/"
      },
      {
        type: "github",
        label: "Repositório do CAPJu",
        desc: "Código e documentação do projeto",
        url: "https://github.com/fga-eps-mds/2022-2-CAPJu-Doc"
      }
    ],
    en: {
      title: "CAPJu and Debian, open source contribution",
      summary:
        "Maintenance of the judicial process management system from FGA/UnB and package maintenance in the Debian ecosystem.",
      context:
        "CAPJu is an open judicial process management system used by the 4th Federal Civil Court, developed at UnB's Gama Faculty. Debian Brasil maintains packages used across the community. Both are real projects, with users on the other side and code that has to keep working after a contribution lands.",
      role: [
        "Studied CAPJu's existing architecture and mapped the modules before touching the code.",
        "Fixed reported bugs in the backend and the front end.",
        "Wrote automated tests for critical features.",
        "Updated the project's technical documentation.",
        "Maintain and update packages in the Debian ecosystem, fixing bugs and improving documentation."
      ],
      scope: [
        { label: "CAPJu", value: "System for the 4th Federal Civil Court, developed at FGA/UnB" },
        { label: "Debian", value: "Contributing to the Debian Brasil community since 2023" },
        { label: "Practice", value: "Agile cycles, peer review and public documentation" }
      ],
      process: [
        {
          step: "Reading the architecture",
          detail: "Mapping the modules before any change, because in someone else's code the risk is in what you cannot see."
        },
        { step: "Bug fixing", detail: "Investigating reported issues and fixing them in the backend and front end." },
        { step: "Automated testing", detail: "Coverage of critical features, so the fix does not come back in the next release." },
        {
          step: "Documentation",
          detail: "Updating the technical documentation, which is what lets the next contributor get in."
        }
      ],
      artifacts: [
        "Fixes delivered in the CAPJu repository",
        "Automated tests for critical features",
        "Updated technical documentation",
        "Packages maintained in the Debian ecosystem"
      ],
      validation: "Contributions went through peer review in both projects before landing.",
      results: [
        "Bugs fixed and automated tests added in CAPJu.",
        "Technical documentation updated to make it easier for new contributors to start.",
        "Ongoing contribution to package maintenance in Debian."
      ],
      nextSteps: [],
      evidence: [
        { type: "link", label: "CAPJu documentation", desc: "Technical documentation published on GitHub Pages" },
        { type: "github", label: "CAPJu repository", desc: "Project code and documentation" }
      ]
    }
  },

  {
    id: "projeto-amazon",
    categories: ["Engenharia de Software"],
    title: "Arquitetura de software de um e-commerce",
    summary:
      "Modelagem e documentação da arquitetura de um sistema de e-commerce, aplicando padrões GoF e GRASP e notação UML.",
    context:
      "Projeto da disciplina de Arquitetura e Desenho de Software da UnB, em 2023. O desafio era modelar um ecossistema de e-commerce inteiro e defender cada decisão de arquitetura por escrito, em equipe.",
    role: [
      "Elaborei diagramas de classes, sequência, estados e casos de uso.",
      "Apliquei padrões GoF e GRASP na estruturação da solução.",
      "Conduzi a pesquisa de usabilidade e a prototipação dos fluxos de usuário.",
      "Publiquei a documentação com os registros de decisão arquitetural."
    ],
    scope: [
      { label: "Disciplina", value: "Arquitetura e Desenho de Software, UnB, 2023" },
      { label: "Formato", value: "Equipe multidisciplinar, sprints curtas e revisão de artefatos" },
      { label: "Entrega", value: "Documentação pública em GitHub Pages" }
    ],
    process: [
      {
        step: "Modelagem UML",
        detail: "Diagramas de classes, sequência, estados e casos de uso para descrever o sistema antes de implementar."
      },
      { step: "Aplicação de padrões", detail: "Padrões GoF e GRASP escolhidos por problema, não por catálogo." },
      {
        step: "Design de experiência",
        detail: "Pesquisa de usabilidade e prototipação dos fluxos do ecossistema modelado."
      },
      { step: "Registro de decisão", detail: "Documentação publicada com ADRs, para a decisão ficar rastreável." }
    ],
    artifacts: [
      "Diagramas UML de classes, sequência, estados e casos de uso",
      "Registros de decisão arquitetural",
      "Protótipos dos fluxos de usuário",
      "Documentação publicada em GitHub Pages"
    ],
    validation: "Os artefatos passaram por revisão da equipe e da disciplina a cada sprint.",
    results: [
      "Arquitetura completa modelada e documentada publicamente.",
      "Decisões arquiteturais registradas e rastreáveis.",
      "Documentação disponível como referência para outras turmas."
    ],
    nextSteps: [],
    evidence: [
      {
        type: "link",
        label: "Documentação do projeto",
        desc: "GitHub Pages com toda a documentação arquitetural",
        url: "https://unbarqdsw2023-2.github.io/2023.2_G3_ProjetoAmazon/#/"
      },
      {
        type: "github",
        label: "Repositório no GitHub",
        desc: "Código-fonte e artefatos de modelagem",
        url: "https://github.com/UnBArqDsw2023-2/2023.2_G3_ProjetoAmazon"
      }
    ],
    en: {
      title: "E-commerce software architecture",
      summary:
        "Modelling and documentation of an e-commerce system architecture, applying GoF and GRASP patterns and UML notation.",
      context:
        "Project for the Software Architecture and Design course at UnB, in 2023. The challenge was to model a whole e-commerce ecosystem and defend every architectural decision in writing, as a team.",
      role: [
        "Produced class, sequence, state and use case diagrams.",
        "Applied GoF and GRASP patterns to structure the solution.",
        "Ran the usability research and prototyped the user flows.",
        "Published the documentation with the architectural decision records."
      ],
      scope: [
        { label: "Course", value: "Software Architecture and Design, UnB, 2023" },
        { label: "Format", value: "Multidisciplinary team, short sprints and artifact review" },
        { label: "Deliverable", value: "Public documentation on GitHub Pages" }
      ],
      process: [
        {
          step: "UML modelling",
          detail: "Class, sequence, state and use case diagrams to describe the system before implementing it."
        },
        { step: "Pattern application", detail: "GoF and GRASP patterns chosen by problem, not by catalogue." },
        { step: "Experience design", detail: "Usability research and prototyping of the modelled ecosystem's flows." },
        { step: "Decision records", detail: "Documentation published with ADRs, so decisions stay traceable." }
      ],
      artifacts: [
        "UML class, sequence, state and use case diagrams",
        "Architectural decision records",
        "User flow prototypes",
        "Documentation published on GitHub Pages"
      ],
      validation: "Artifacts were reviewed by the team and the course at each sprint.",
      results: [
        "Full architecture modelled and publicly documented.",
        "Architectural decisions recorded and traceable.",
        "Documentation available as a reference for other cohorts."
      ],
      nextSteps: [],
      evidence: [
        { type: "link", label: "Project documentation", desc: "GitHub Pages with the full architectural documentation" },
        { type: "github", label: "GitHub repository", desc: "Source code and modelling artifacts" }
      ]
    }
  }
];

/** Campo do projeto no idioma ativo, caindo para o português quando não há tradução. */
export function campoDoProjeto(project, key, lang) {
  if (lang === "en" && project.en?.[key] !== undefined) return project.en[key];
  return project[key];
}

/**
 * Evidências no idioma ativo. A URL vive só no objeto em português, então
 * link e rótulo nunca saem de sincronia.
 */
export function evidenciasDoProjeto(project, lang) {
  const base = project.evidence || [];
  if (lang !== "en" || !project.en?.evidence) return base;
  return base.map((item, index) => ({ ...item, ...(project.en.evidence[index] || {}) }));
}
