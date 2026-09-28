import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { PROJECTS } from "../src/data/projects";

describe("estrutura da página", () => {
  it("tem um único h1, landmarks e link de pular para o conteúdo", () => {
    render(<App />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    const pular = screen.getByRole("link", { name: /pular para o conteúdo/i });
    expect(pular).toHaveAttribute("href", "#conteudo");
    expect(document.querySelector("#conteudo")).not.toBeNull();
  });

  it("mostra o cargo alvo no topo", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Henrique Pucci");
    expect(screen.getByText("Analista de Requisitos e Produto")).toBeInTheDocument();
  });

  it("oferece os caminhos de ação no topo", () => {
    const { container } = render(<App />);
    const topo = within(container.querySelector("#home"));

    expect(topo.getByRole("link", { name: /ver projetos/i })).toBeInTheDocument();
    expect(topo.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(topo.getByRole("link", { name: /falar comigo/i })).toBeInTheDocument();
  });

  it("não oferece download de currículo", () => {
    render(<App />);
    expect(screen.queryByRole("link", { name: /currículo|curriculo|\bCV\b/i })).not.toBeInTheDocument();
    for (const link of screen.getAllByRole("link")) {
      expect(link.getAttribute("href") || "").not.toMatch(/Curriculo/i);
      expect(link.hasAttribute("download")).toBe(false);
    }
  });

  it("abre todo link externo de forma segura", () => {
    render(<App />);
    for (const link of screen.getAllByRole("link")) {
      if (link.getAttribute("target") === "_blank") {
        expect(link.getAttribute("rel") || "", link.textContent).toContain("noopener");
        expect(link.getAttribute("rel") || "", link.textContent).toContain("noreferrer");
      }
    }
  });
});

describe("idioma", () => {
  it("troca o conteúdo e o lang do documento", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(document.documentElement.lang).toBe("pt-BR");

    await user.click(screen.getByRole("button", { name: /switch to english/i }));

    expect(document.documentElement.lang).toBe("en");
    expect(screen.getByText("Requirements and Product Analyst")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /case studies/i })).toBeInTheDocument();
  });
});

describe("lista de projetos", () => {
  it("lista todos os casos na ordem definida", () => {
    render(<App />);
    const titulos = screen
      .getAllByRole("button")
      .filter((botao) => botao.closest(".card__title"))
      .map((botao) => botao.textContent);

    expect(titulos).toHaveLength(PROJECTS.length);
    expect(titulos[0]).toBe(PROJECTS[0].title);
  });
});
