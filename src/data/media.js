/**
 * Imagens reais dos artefatos de cada projeto: quadros do Miro, páginas dos
 * relatórios, telas de protótipo e produtos publicados.
 * Capas em 16:10 para os cards, versões maiores para a galeria do modal.
 */

const BASE = "/assets/projetos";

export const MEDIA = {
  "discovery-servicos-publicos": {
    cover: {
      src: `${BASE}/discovery-canvas-mvp-capa.webp`,
      alt: "Canvas MVP de agente de IA preenchido com post-its, dividido em oito blocos.",
      altEn: "MVP canvas for an AI agent filled with sticky notes, split into eight blocks."
    },
    gallery: [
      {
        src: `${BASE}/discovery-canvas-mvp.webp`,
        source: "Miro",
        caption:
          "Canvas MVP de agente de IA construído com o MGI: contexto, persona, escopo, dados, jornada e métricas em um quadro só.",
        captionEn:
          "MVP canvas for an AI agent built with MGI: context, persona, scope, data, journey and metrics on a single board.",
        alt: "Quadro dividido em oito blocos numerados, cada um com post-its coloridos.",
        altEn: "Board split into eight numbered blocks, each filled with colored sticky notes."
      },
      {
        src: `${BASE}/discovery-ecossistema.webp`,
        source: "Miro",
        caption:
          "Mapeamento do ecossistema de sistemas da DTI, construído em duas rodadas de oficina com as equipes técnicas.",
        captionEn:
          "Mapping of the DTI systems ecosystem, built across two workshop rounds with the technical teams.",
        alt: "Sequência de quadros de oficina com diagramas de sistemas e o círculo dourado.",
        altEn: "Row of workshop frames with system diagrams and a golden circle exercise."
      },
      {
        src: `${BASE}/discovery-jornada.webp`,
        source: "Miro",
        caption:
          "Jornada macro do usuário montada por um dos grupos durante a oficina do ComprasGov.",
        captionEn: "Macro user journey built by one of the groups during the ComprasGov workshop.",
        alt: "Linha de oito etapas numeradas com post-its descrevendo cada passo do usuário.",
        altEn: "Row of eight numbered steps with sticky notes describing each user action."
      },
      {
        src: `${BASE}/discovery-personas.webp`,
        source: "Miro",
        caption:
          "Quadro de definição de personas usado na oficina, separado em comportamento, perfil e necessidades.",
        captionEn:
          "Persona definition board used in the workshop, split into behavior, profile and needs.",
        alt: "Três colunas de post-its sob os títulos comportamento, perfil e necessidades.",
        altEn: "Three columns of sticky notes under the headings behavior, profile and needs."
      }
    ]
  },

  "ans-sgd": {
    cover: {
      src: `${BASE}/ans-storyboard-capa.webp`,
      alt: "Storyboard com telas de aplicativo desenhadas em sequência.",
      altEn: "Storyboard with app screens drawn in sequence."
    },
    gallery: [
      {
        src: `${BASE}/ans-storyboard.webp`,
        source: "Miro",
        caption:
          "Storyboard da jornada da persona no aplicativo da ANS, quadro a quadro, do login gov.br até a avaliação do atendimento.",
        captionEn:
          "Storyboard of the persona journey in the ANS app, frame by frame, from gov.br login to service rating.",
        alt: "Dez quadros numerados com telas de aplicativo e comentários em post-it.",
        altEn: "Ten numbered frames with app screens and sticky note comments."
      },
      {
        src: `${BASE}/ans-teste-usuario.webp`,
        source: "Miro",
        caption:
          "Teste de usabilidade do protótipo, com as observações de cada participante organizadas por tarefa.",
        captionEn:
          "Usability test of the prototype, with each participant's observations organized by task.",
        alt: "Quadro de teste de usuário com colunas de post-its por tarefa.",
        altEn: "User test board with columns of sticky notes per task."
      },
      {
        src: `${BASE}/ans-mvp.webp`,
        source: "Relatório",
        caption: "Proposta de MVP consolidada no relatório entregue à ANS e à SGD.",
        captionEn: "MVP proposal consolidated in the report delivered to ANS and SGD.",
        alt: "Página de relatório com a descrição do MVP em tópicos.",
        altEn: "Report page describing the MVP in bullet points."
      }
    ]
  },

  "guia-acessibilidade": {
    cover: {
      src: `${BASE}/guia-capa-capa.webp`,
      alt: "Capa do guia Cidadania Web com ilustração de pessoa usando um notebook.",
      altEn: "Cover of the Cidadania Web guide with an illustration of a person using a laptop."
    },
    gallery: [
      {
        src: `${BASE}/guia-capa.webp`,
        source: "gov.br",
        caption:
          "Cidadania Web, o Guia Brasileiro de Acessibilidade Digital e Inclusão, publicado no domínio oficial do governo federal.",
        captionEn:
          "Cidadania Web, the Brazilian Guide to Digital Accessibility and Inclusion, published on the federal government's official domain.",
        alt: "Capa do guia com o título Cidadania Web e a marca gov.br.",
        altEn: "Guide cover with the title Cidadania Web and the gov.br logo."
      },
      {
        src: `${BASE}/guia-exemplos.webp`,
        source: "gov.br",
        caption:
          "O guia explica cada diretriz com exemplo real de tela, o código correspondente e a fonte.",
        captionEn:
          "The guide explains each guideline with a real screen example, the matching code and the source.",
        alt: "Página com capturas de tela de portais do governo e trechos de código HTML.",
        altEn: "Page with screenshots of government portals and HTML code snippets."
      },
      {
        src: `${BASE}/guia-alternativo.webp`,
        source: "gov.br",
        caption:
          "Trecho sobre texto alternativo: o que está correto, o que está errado e por quê.",
        captionEn: "Section on alternative text: what is correct, what is wrong and why.",
        alt: "Página mostrando exemplo correto de texto alternativo em uma imagem.",
        altEn: "Page showing a correct alternative text example on an image."
      },
      {
        src: `${BASE}/guia-navegacao.webp`,
        source: "gov.br",
        caption:
          "Diretriz de consistência de navegação, com exemplo incorreto retirado de um serviço real.",
        captionEn:
          "Navigation consistency guideline, with an incorrect example taken from a real service.",
        alt: "Página comparando duas versões de uma mesma tela de assinatura de documento.",
        altEn: "Page comparing two versions of the same document signing screen."
      }
    ]
  },

  "anac-oficinas": {
    cover: {
      src: `${BASE}/anac-capa-capa.webp`,
      alt: "Capa do relatório Safety Intelligence da ANAC.",
      altEn: "Cover of the ANAC Safety Intelligence report."
    },
    gallery: [
      {
        src: `${BASE}/anac-capa.webp`,
        source: "Relatório",
        caption: "Relatório da oficina de Lean Inception do Safety Intelligence, junho de 2024.",
        captionEn: "Report from the Safety Intelligence Lean Inception workshop, June 2024.",
        alt: "Capa de relatório com o logotipo da ANAC e o título Safety Intelligence.",
        altEn: "Report cover with the ANAC logo and the title Safety Intelligence."
      },
      {
        src: `${BASE}/anac-obstaculos.webp`,
        source: "Relatório",
        caption:
          "Obstáculos levantados pelos grupos, consolidados em matriz junto com o sonho de produto.",
        captionEn:
          "Obstacles raised by the groups, consolidated into a matrix alongside the product vision.",
        alt: "Matriz com células de texto descrevendo obstáculos por grupo.",
        altEn: "Matrix with text cells describing obstacles per group."
      },
      {
        src: `${BASE}/anac-problemas.webp`,
        source: "Relatório",
        caption:
          "Problemas enunciados no formato quem, tem o problema, onde, quando e por quê.",
        captionEn: "Problems stated in the who, has the problem, where, when and why format.",
        alt: "Tabela colorida com cinco colunas de enunciado de problema.",
        altEn: "Color-coded table with five problem statement columns."
      }
    ]
  },

  "artigo-enase": {
    cover: {
      src: `${BASE}/enase-artigo-capa.webp`,
      alt: "Primeira página do artigo científico publicado na ENASE 2025.",
      altEn: "First page of the scientific paper published at ENASE 2025."
    },
    gallery: [
      {
        src: `${BASE}/enase-artigo.webp`,
        source: "SciTePress",
        caption:
          "Primeira página do artigo publicado nos anais da ENASE 2025, com resumo e referências.",
        captionEn:
          "First page of the paper published in the ENASE 2025 proceedings, with abstract and references.",
        alt: "Página de artigo acadêmico em duas colunas com título, autores e resumo.",
        altEn: "Two-column academic paper page with title, authors and abstract."
      }
    ]
  },

  "respiracao-oral": {
    cover: {
      src: `${BASE}/respiracao-home-capa.webp`,
      alt: "Página inicial azul do curso Respiração Oral.",
      altEn: "Blue homepage of the Oral Breathing course."
    },
    gallery: [
      {
        src: `${BASE}/respiracao-home.webp`,
        source: "No ar",
        caption:
          "Página inicial da plataforma do curso, no ar e em uso pelo projeto de extensão da UnB.",
        captionEn: "Course platform homepage, live and in use by the UnB extension project.",
        alt: "Tela inicial do curso com o título manuscrito e o menu de seções.",
        altEn: "Course home screen with handwritten title and the section menu."
      }
    ]
  },

  "acidentes-aereos-etl": {
    cover: {
      src: `${BASE}/etl-dashboard-capa.webp`,
      alt: "Painel de Power BI com gráficos de ocorrências aeronáuticas.",
      altEn: "Power BI dashboard with charts of aviation occurrences."
    },
    gallery: [
      {
        src: `${BASE}/etl-dashboard.webp`,
        source: "Power BI",
        caption:
          "Painel público construído sobre o pipeline ETL, com ocorrências e recomendações por município e severidade.",
        captionEn:
          "Public dashboard built on top of the ETL pipeline, with occurrences and recommendations by city and severity.",
        alt: "Dashboard com gráfico de barras por município e por severidade calculada.",
        altEn: "Dashboard with bar charts by city and by calculated severity."
      }
    ]
  },

  capju: {
    cover: {
      src: `${BASE}/capju-docs-capa.webp`,
      alt: "Site de documentação do projeto CAPJu.",
      altEn: "CAPJu project documentation site."
    },
    gallery: [
      {
        src: `${BASE}/capju-docs.webp`,
        source: "GitHub Pages",
        caption: "Documentação técnica do CAPJu publicada em GitHub Pages.",
        captionEn: "CAPJu technical documentation published on GitHub Pages.",
        alt: "Página de documentação com menu lateral e conteúdo técnico.",
        altEn: "Documentation page with a side menu and technical content."
      }
    ]
  },

  "projeto-amazon": {
    cover: {
      src: `${BASE}/amazon-docs-capa.webp`,
      alt: "Site de documentação de arquitetura do Projeto Amazon.",
      altEn: "Architecture documentation site of the Amazon Project."
    },
    gallery: [
      {
        src: `${BASE}/amazon-docs.webp`,
        source: "GitHub Pages",
        caption:
          "Documentação de arquitetura publicada em GitHub Pages, com diagramas UML e registros de decisão.",
        captionEn:
          "Architecture documentation published on GitHub Pages, with UML diagrams and decision records.",
        alt: "Página inicial da documentação com sumário dos artefatos do projeto.",
        altEn: "Documentation homepage with a summary of the project artifacts."
      }
    ]
  }
};

export function mediaDe(projectId) {
  return MEDIA[projectId] || null;
}
