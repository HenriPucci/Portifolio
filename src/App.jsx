import React, { useState, useEffect } from "react";
import { CATEGORIES, PROJECTS, SKILLS } from "./data/projects";
import { ArrowIcon } from "./components/Icons";
import Modal from "./components/Modal";

// Configurações de Cores Temáticas
const THEME = {
  bg: "#0D0D0D",
  surface: "#141414",
  border: "#ffffff10",
  accent: "#E8C872",
  textPrimary: "#F0EDE6",
  textSecondary: "#888",
  textMuted: "#555"
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [openProject, setOpenProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const filteredProjects = activeCategory === "Todos"
    ? PROJECTS
    : PROJECTS.filter(p => p.tag === activeCategory);

  return (
    <div style={{ background: THEME.bg, color: THEME.textPrimary, minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(24px, 6vw, 80px)",
        background: scrolled ? "rgba(13,13,13,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${THEME.border}` : "none",
        transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72
      }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: THEME.textPrimary, letterSpacing: "-0.05em" }}>
          HP.
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {["sobre", "experiência", "projetos", "contato"].map(s => (
            <a key={s} href={`#${s}`} style={{
              fontSize: 12, color: THEME.textSecondary, textDecoration: "none",
              textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 500,
              transition: "color 0.2s"
            }}
              onMouseEnter={e => { e.target.style.color = THEME.textPrimary; }}
              onMouseLeave={e => { e.target.style.color = THEME.textSecondary; }}
            >
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 clamp(24px, 8vw, 120px)",
        paddingTop: 80
      }}>
        <div style={{ maxWidth: 840 }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: THEME.accent, marginBottom: 24 }}>
            Mente de Engenheiro • Foco na Experiência do Usuário
          </div>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 400,
            lineHeight: 1.1, letterSpacing: "-0.02em",
            color: THEME.textPrimary, marginBottom: 32
          }}>
            Henrique Pucci
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.8, color: THEME.textSecondary, maxWidth: 620, marginBottom: 48 }}>
            Graduando em Engenharia de Software na UnB focado em UX/UI e Service Design. Especialista na facilitação de **oficinas de co-criação no Miro**, modelagem de requisitos complexos e entrega técnica escalável direto no código.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projetos" style={{
              padding: "14px 28px", background: THEME.accent, color: "#0D0D0D",
              borderRadius: 8, fontSize: 13, fontWeight: 600,
              textDecoration: "none", letterSpacing: 0.5
            }}>
              Explorar Cases Práticos
            </a>
            <a href="#contato" style={{ padding: "14px 28px", border: `1px solid ${THEME.border}`, color: THEME.textPrimary, borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
              Falar Comigo
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${THEME.border}` }}>
        <div style={{ maxWidth: 940, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: THEME.accent, marginBottom: 16 }}>
              A Interseção
            </div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, color: THEME.textPrimary, lineHeight: 1.25 }}>
              Unindo dinâmicas de workshop e código limpo.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: THEME.textSecondary, marginBottom: 20 }}>
              Minha atuação equilibra a liderança técnica em design com a engenharia de requisitos. Desenvolvo dinâmicas estratégicas para converter incertezas em fluxos de usabilidade limpos, documentados e acessíveis.
            </p>
            <div className="flex gap-8 flex-wrap pt-3">
              {[
                { label: "Mapeamento e Workshops", value: "Miro + Scrum" },
                { label: "Publicação Internacional", value: "ENASE 2025" },
                { label: "Padrões de Acessibilidade", value: "WCAG / e-MAG" }
              ].map((s, i) => (
                <div key={i} style={{ minWidth: 120 }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: THEME.textPrimary }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: THEME.textMuted, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${THEME.border}` }}>
        <div style={{ maxWidth: 940 }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: THEME.accent, marginBottom: 12 }}>
            Portfólio
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 400, color: THEME.textPrimary, marginBottom: 40 }}>
            Estudos de Caso Completos
          </h2>

          <div style={{ display: "flex", gap: 8, marginBottom: 44, flexWrap: "wrap" }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "8px 18px", borderRadius: 20,
                border: `1px solid ${activeCategory === cat ? THEME.accent : THEME.border}`,
                background: activeCategory === cat ? `${THEME.accent}12` : "transparent",
                color: activeCategory === cat ? THEME.accent : THEME.textSecondary,
                fontSize: 12, fontWeight: 500, cursor: "pointer", transition: "all 0.2s"
              }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setOpenProject(p)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "32px 0", gap: 24, borderBottom: `1px solid ${THEME.border}`,
                  cursor: "pointer", transition: "all 0.2s"
                }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector(".pj-title").style.color = THEME.accent;
                  e.currentTarget.querySelector(".pj-arrow").style.opacity = "1";
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector(".pj-title").style.color = THEME.textPrimary;
                  e.currentTarget.querySelector(".pj-arrow").style.opacity = "0.3";
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2, color: THEME.accent }}>
                      {p.tag}
                    </span>
                    <span style={{ fontSize: 10, color: THEME.textMuted }}>•</span>
                    <span style={{ fontSize: 10, color: THEME.textSecondary, fontWeight: 500 }}>
                      Possui Oficina Prática
                    </span>
                  </div>
                  <div className="pj-title" style={{
                    fontFamily: "'DM Serif Display', serif", fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: 400, color: THEME.textPrimary, transition: "color 0.2s", marginBottom: 8
                  }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 13, color: THEME.textSecondary, lineHeight: 1.5 }}>{p.summary}</div>
                </div>
                <div className="pj-arrow" style={{ color: THEME.accent, opacity: 0.3, transition: "opacity 0.2s" }}>
                  <ArrowIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HABILIDADES GRID */}
      <section style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${THEME.border}` }}>
        <div style={{ maxWidth: 940 }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: THEME.accent, marginBottom: 48 }}>
            Stack & Ferramentas
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40 }}>
            {SKILLS.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: THEME.textMuted, marginBottom: 20 }}>
                  {s.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.items.map((item, j) => (
                    <span key={j} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 20, border: `1px solid ${THEME.border}`, color: THEME.textSecondary }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: "120px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${THEME.border}`, textAlign: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: THEME.accent, marginBottom: 24 }}>
          Handoff
        </div>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: THEME.textPrimary, marginBottom: 48, lineHeight: 1.2 }}>
          Pronto para o próximo projeto?
        </h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "E-mail", url: "mailto:pucci.rique1234@gmail.com" },
            { label: "LinkedIn", url: "https://linkedin.com/in/henrique-pucci" },
            { label: "GitHub", url: "https://github.com/HenriPucci" }
          ].map((c, i) => (
            <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" style={{
              padding: "12px 24px", border: `1px solid ${THEME.border}`, borderRadius: 8, color: THEME.textPrimary, fontSize: 13,
              fontWeight: 500, textDecoration: "none", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = THEME.accent; e.currentTarget.style.color = THEME.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = THEME.border; e.currentTarget.style.color = THEME.textPrimary; }}
            >
              {c.label}
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "40px", borderTop: `1px solid ${THEME.border}`, fontSize: 11, color: THEME.textMuted }}>
        © 2026 Henrique Pucci · Construído nativamente em React & Style Objects
      </footer>

      {/* MODAL POPUP SYSTEM */}
      {openProject && (
        <Modal project={openProject} onClose={() => setOpenProject(null)} theme={THEME} />
      )}
    </div>
  );
}