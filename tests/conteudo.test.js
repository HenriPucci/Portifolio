import { describe, expect, it } from "vitest";
import { CATEGORIES, PROJECTS } from "../src/data/projects";
import { TRANSLATIONS, PERFIL } from "../src/data/translations";

/** Junta todo o texto de um objeto, para varrer o conteúdo inteiro de uma vez. */
function todoOTexto(valor) {
  if (typeof valor === "string") return valor;
  if (Array.isArray(valor)) return valor.map(todoOTexto).join(" ");
  if (valor && typeof valor === "object") return Object.values(valor).map(todoOTexto).join(" ");
  return "";
}

const TEXTO = `${todoOTexto(TRANSLATIONS)} ${todoOTexto(PROJECTS)}`;

describe("fatos do perfil", () => {
  it("não descreve a graduação como em andamento", () => {
    for (const termo of ["último semestre", "last semester", "cursando", "em formação", "currently studying"]) {
      expect(TEXTO.toLowerCase()).not.toContain(termo.toLowerCase());
    }
  });

  it("declara o inglês como avançado", () => {
    expect(TEXTO.toLowerCase()).not.toContain("inglês intermediário");
    expect(TEXTO.toLowerCase()).not.toContain("english (intermediate)");
    expect(TRANSLATIONS.pt.about.languages.value).toContain("avançado");
    expect(TRANSLATIONS.en.about.languages.value).toContain("advanced");
  });

  it("registra a formação concluída com colação pendente", () => {
    expect(TRANSLATIONS.pt.about.education.detail).toMatch(/colação de grau/i);
    expect(TRANSLATIONS.en.about.education.detail).toMatch(/graduation ceremony/i);
  });

  it("posiciona o cargo alvo nos dois idiomas", () => {
    expect(TRANSLATIONS.pt.hero.role).toBe("Analista de Requisitos e Produto");
    expect(TRANSLATIONS.en.hero.role).toBe("Requirements and Product Analyst");
    expect(PERFIL.cargo).toBe("Analista de Requisitos e Produto");
  });

  it("descreve a atuação desde 2021", () => {
    expect(TRANSLATIONS.pt.hero.lede).toContain("2021");
    expect(TRANSLATIONS.en.hero.lede).toContain("2021");
  });
});

describe("publicação ENASE", () => {
  const artigo = PROJECTS.find((projeto) => projeto.id === "artigo-enase");

  it("é apresentada como mapeamento sistemático, não como pesquisa empírica", () => {
    expect(artigo.summary.toLowerCase()).toContain("mapeamento sistemático");
    expect(TEXTO.toLowerCase()).not.toContain("pesquisa empírica");
    expect(TEXTO.toLowerCase()).not.toContain("empirical research");
  });

  it("mostra os números do estudo e o DOI", () => {
    const escopo = todoOTexto(artigo.scope);
    expect(escopo).toContain("393");
    expect(escopo).toContain("185");
    expect(escopo).toContain("30");
    expect(escopo).toContain("433");
    expect(artigo.evidence.some((item) => item.url?.includes("10.5220/0013257300003928"))).toBe(true);
  });
});

describe("guia de acessibilidade", () => {
  const guia = PROJECTS.find((projeto) => projeto.id === "guia-acessibilidade");

  it("cita 91 páginas e 16 critérios", () => {
    const texto = todoOTexto(guia);
    expect(texto).toContain("91");
    expect(texto).toContain("16 critérios");
  });

  it("cita WCAG 2.2 sem apagar a experiência com 2.1", () => {
    expect(todoOTexto(guia.scope)).toContain("WCAG 2.2");
    expect(TRANSLATIONS.pt.skills.categories.flatMap((grupo) => grupo.items)).toContain("WCAG 2.1");
  });
});

describe("resultados e metas", () => {
  it("separa métrica proposta de resultado entregue", () => {
    const anac = PROJECTS.find((projeto) => projeto.id === "anac-oficinas");
    const resultados = todoOTexto(anac.results).toLowerCase();
    expect(resultados).not.toContain("redução");
    expect(todoOTexto(anac.nextSteps).toLowerCase()).toContain("redução do lead time");
  });

  it("descreve as participações da ANAC como presenças e não como pessoas únicas", () => {
    const anac = PROJECTS.find((projeto) => projeto.id === "anac-oficinas");
    const participacoes = anac.scope.find((item) => item.label === "Participações registradas");
    expect(participacoes.value).toMatch(/não por pessoas únicas/i);
  });

  it("não publica percentual de impacto inventado", () => {
    // URLs carregam % de codificação, então saem da varredura
    const semUrls = todoOTexto(PROJECTS).replace(/https?:\/\/\S+/g, "");
    expect(semUrls).not.toMatch(/\d+\s?%/);
  });
});

describe("estrutura dos estudos de caso", () => {
  it("todos os projetos trazem as seções obrigatórias", () => {
    for (const projeto of PROJECTS) {
      expect(projeto.id, "id").toBeTruthy();
      expect(projeto.context.length, `${projeto.id} contexto`).toBeGreaterThan(40);
      expect(projeto.role.length, `${projeto.id} papel`).toBeGreaterThan(0);
      expect(projeto.scope.length, `${projeto.id} escopo`).toBeGreaterThan(0);
      expect(projeto.process.length, `${projeto.id} processo`).toBeGreaterThan(0);
      expect(projeto.artifacts.length, `${projeto.id} artefatos`).toBeGreaterThan(0);
      expect(projeto.validation.length, `${projeto.id} validação`).toBeGreaterThan(20);
      expect(projeto.results.length, `${projeto.id} resultados`).toBeGreaterThan(0);
      expect(projeto.evidence.length, `${projeto.id} evidências`).toBeGreaterThan(0);
    }
  });

  it("usa primeira pessoa no campo de papel", () => {
    for (const projeto of PROJECTS) {
      const proibidos = ["participei", "ajudei", "auxiliei"];
      const papel = todoOTexto(projeto.role).toLowerCase();
      for (const termo of proibidos) expect(papel, projeto.id).not.toContain(termo);
    }
  });

  it("mantém paridade entre português e inglês", () => {
    for (const projeto of PROJECTS) {
      expect(projeto.en, projeto.id).toBeTruthy();
      expect(projeto.en.role.length, `${projeto.id} papel`).toBe(projeto.role.length);
      expect(projeto.en.scope.length, `${projeto.id} escopo`).toBe(projeto.scope.length);
      expect(projeto.en.process.length, `${projeto.id} processo`).toBe(projeto.process.length);
      expect(projeto.en.results.length, `${projeto.id} resultados`).toBe(projeto.results.length);
      expect(projeto.en.nextSteps.length, `${projeto.id} metas`).toBe(projeto.nextSteps.length);
      expect(projeto.en.evidence.length, `${projeto.id} evidências`).toBe(projeto.evidence.length);
    }
  });

  it("usa apenas categorias declaradas", () => {
    for (const projeto of PROJECTS) {
      expect(projeto.categories.length, projeto.id).toBeGreaterThan(0);
      for (const categoria of projeto.categories) {
        expect(CATEGORIES, projeto.id).toContain(categoria);
      }
    }
  });

  it("ordena os casos pelo posicionamento desejado", () => {
    expect(PROJECTS.slice(0, 4).map((projeto) => projeto.id)).toEqual([
      "anac-oficinas",
      "ans-sgd",
      "discovery-servicos-publicos",
      "guia-acessibilidade"
    ]);
  });
});

describe("links e privacidade", () => {
  const evidencias = PROJECTS.flatMap((projeto) => projeto.evidence);

  it("não aponta para relatórios com dados de participantes", () => {
    for (const item of evidencias) {
      expect(item.url || "").not.toMatch(/\/assets\/ANAC\//);
      expect(item.url || "").not.toMatch(/Relat[óo]rio\s+-\s+ANS/i);
    }
  });

  it("usa https em todo link externo", () => {
    for (const item of evidencias) {
      if (item.url && !item.url.startsWith("/")) {
        expect(item.url, item.label).toMatch(/^https:\/\//);
      }
    }
  });

  it("aponta o currículo para um arquivo dentro de public", () => {
    expect(PERFIL.curriculo).toBe("/assets/Curriculo_Henrique_Pucci.pdf");
    expect(PERFIL.curriculoDownload).toMatch(/\.pdf$/);
  });
});

describe("escrita", () => {
  it("não usa travessão nem meia-risca no texto do site", () => {
    expect(TEXTO).not.toContain("—");
    expect(TEXTO).not.toContain("–");
  });
});
