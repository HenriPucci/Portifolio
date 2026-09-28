import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { PROJECTS } from "../src/data/projects";

const cards = () =>
  screen.getAllByRole("button").filter((botao) => botao.closest(".card__title"));

describe("filtros de projeto", () => {
  it("filtra por categoria e expõe o estado selecionado", async () => {
    const user = userEvent.setup();
    render(<App />);

    const dados = screen.getByRole("button", { name: "Dados" });
    expect(dados).toHaveAttribute("aria-pressed", "false");

    await user.click(dados);

    expect(dados).toHaveAttribute("aria-pressed", "true");
    const esperados = PROJECTS.filter((projeto) => projeto.categories.includes("Dados"));
    expect(cards()).toHaveLength(esperados.length);
  });

  it("limpa o filtro e volta a mostrar todos", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Acessibilidade" }));
    expect(cards().length).toBeLessThan(PROJECTS.length);

    await user.click(screen.getByRole("button", { name: /limpar filtro/i }));

    expect(cards()).toHaveLength(PROJECTS.length);
    expect(screen.getByRole("button", { name: "Todos" })).toHaveAttribute("aria-pressed", "true");
  });

  it("anuncia a quantidade de resultados", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Dados" }));
    const esperados = PROJECTS.filter((projeto) => projeto.categories.includes("Dados")).length;

    const contador = screen.getAllByRole("status").find((no) => /projetos? encontrados?/.test(no.textContent));
    expect(contador.textContent).toContain(String(esperados));
  });

  it("chega aos filtros pelo teclado", async () => {
    const user = userEvent.setup();
    render(<App />);

    const dados = screen.getByRole("button", { name: "Dados" });
    dados.focus();
    await user.keyboard("{Enter}");

    expect(dados).toHaveAttribute("aria-pressed", "true");
  });
});

describe("estudo de caso", () => {
  it("abre pelo teclado, prende o foco e devolve ao fechar", async () => {
    const user = userEvent.setup();
    render(<App />);

    const gatilho = cards()[0];
    gatilho.focus();
    await user.keyboard("{Enter}");

    const dialogo = await screen.findByRole("dialog");
    expect(dialogo).toHaveAttribute("aria-modal", "true");
    await waitFor(() => expect(dialogo.contains(document.activeElement)).toBe(true));

    await user.keyboard("{Escape}");

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(document.activeElement).toBe(gatilho);
  });

  it("mostra as seções do caso, com metas separadas dos resultados", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(cards()[0]);
    const dialogo = await screen.findByRole("dialog");

    for (const secao of [
      /contexto/i,
      /meu papel/i,
      /escopo e participantes/i,
      /processo/i,
      /artefatos e requisitos/i,
      /validação/i,
      /resultados comprovados/i,
      /métricas propostas/i,
      /evidências/i
    ]) {
      expect(within(dialogo).getByRole("heading", { name: secao })).toBeInTheDocument();
    }

    expect(within(dialogo).getByText(/ainda não medidas/i)).toBeInTheDocument();
  });

  it("marca como não publicada a evidência sem link", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(cards()[0]);
    const dialogo = await screen.findByRole("dialog");

    expect(within(dialogo).getByText(/não publicado/i)).toBeInTheDocument();
    for (const link of within(dialogo).queryAllByRole("link")) {
      expect(link.getAttribute("href") || "").not.toMatch(/\/assets\/ANAC\//);
    }
  });
});

describe("formulário de contato", () => {
  it("recusa envio inválido antes de chamar a rede", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    render(<App />);

    await user.type(screen.getByLabelText("Nome"), "Teste");
    await user.type(screen.getByLabelText("E-mail"), "endereco-invalido");
    await user.type(screen.getByLabelText("Mensagem"), "Olá");
    await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(await screen.findByText(/preencha nome, e-mail válido e mensagem/i)).toBeInTheDocument();
  });

  it("envia e confirma quando os dados estão completos", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, status: 200 });
    render(<App />);

    await user.type(screen.getByLabelText("Nome"), "Recrutadora");
    await user.type(screen.getByLabelText("E-mail"), "recrutadora@empresa.com");
    await user.type(screen.getByLabelText("Mensagem"), "Temos uma vaga de analista de requisitos.");
    await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(await screen.findByText(/mensagem enviada/i)).toBeInTheDocument();
  });

  it("avisa quando o envio falha", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: false, status: 500 });
    render(<App />);

    await user.type(screen.getByLabelText("Nome"), "Recrutadora");
    await user.type(screen.getByLabelText("E-mail"), "recrutadora@empresa.com");
    await user.type(screen.getByLabelText("Mensagem"), "Temos uma vaga.");
    await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(await screen.findByText(/não consegui enviar agora/i)).toBeInTheDocument();
  });
});

describe("preferências de acessibilidade", () => {
  it("liga o alto contraste e guarda a escolha", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /abrir opções de acessibilidade/i }));
    await user.click(screen.getByRole("button", { name: "Ligado" }));

    expect(document.documentElement.dataset.theme).toBe("contrast");
    expect(JSON.parse(window.localStorage.getItem("hp:preferencias")).highContrast).toBe(true);
  });

  it("aumenta o tamanho do texto", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /abrir opções de acessibilidade/i }));
    await user.click(screen.getByRole("button", { name: /texto muito grande/i }));

    expect(document.documentElement.style.getPropertyValue("--fs-scale")).toBe("1.25");
  });
});
