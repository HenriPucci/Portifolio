import React, { useState } from "react";
import { CATEGORIES, PROJECTS } from "./data/projects";
import { ArrowIcon, AccessibilityIcon } from "./components/Icons";
import Modal from "./components/Modal";
import ScrollReveal from "./components/ScrollReveal";
import { TRANSLATIONS } from "./data/translations";
import perfilImg from "./assets/perfil_portifolio.png";

const THEME = {
  bg: "#09090B",
  surface: "#18181B",
  surfaceActive: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  border: "rgba(245, 158, 11, 0.12)",
  borderHover: "rgba(251, 191, 36, 0.35)",
  accent: "#FEF3C7",
  neonPurple: "#F59E0B",
  neonMagenta: "#FBBF24",
  textPrimary: "#FAFAFA",
  textSecondary: "#A1A1AA",
  textMuted: "#52525B"
};

const CONTRAST_THEME = {
  bg: "#000000",
  surface: "#111111",
  surfaceActive: "#FFFF00",
  border: "#FFFFFF",
  borderHover: "#FFFF00",
  accent: "#FFFF00",
  neonPurple: "#FFFF00",
  neonMagenta: "#FFFF00",
  textPrimary: "#FFFFFF",
  textSecondary: "#FFFFFF",
  textMuted: "#FFFF00"
};

const ToolBadges = () => {
  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "flex-start", alignItems: "center", opacity: 0.35, marginTop: 8, flexWrap: "wrap" }}>
      <span style={{ fontSize: "calc(11px + var(--fs-offset))", fontFamily: "mono", letterSpacing: 1, border: "1px solid currentColor", padding: "3px 8px", borderRadius: 6 }}>FIGMA</span>
      <span style={{ fontSize: "calc(11px + var(--fs-offset))", fontFamily: "mono", letterSpacing: 1, border: "1px solid currentColor", padding: "3px 8px", borderRadius: 6 }}>MIRO</span>
      <span style={{ fontSize: "calc(11px + var(--fs-offset))", fontFamily: "mono", letterSpacing: 1, border: "1px solid currentColor", padding: "3px 8px", borderRadius: 6 }}>REACT</span>
      <span style={{ fontSize: "calc(11px + var(--fs-offset))", fontFamily: "mono", letterSpacing: 1, border: "1px solid currentColor", padding: "3px 8px", borderRadius: 6 }}>GIT</span>
      <span style={{ fontSize: "calc(11px + var(--fs-offset))", fontFamily: "mono", letterSpacing: 1, border: "1px solid currentColor", padding: "3px 8px", borderRadius: 6 }}>WCAG</span>
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [openProject, setOpenProject] = useState(null);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSizeOffset, setFontSizeModifier] = useState(0);
  const [isAccessMenuOpen, setIsAccessMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [lang, setLang] = useState("pt");

  const currentTheme = isHighContrast ? CONTRAST_THEME : THEME;
  const T = TRANSLATIONS[lang];

  const [formStatus, setFormStatus] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("ENVIANDO");
    const formData = new FormData(e.target);
    const FORMSPREEE_ENDPOINT = "https://formspree.io/f/mvznjqap";

    try {
      const response = await fetch(FORMSPREEE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus("SUCESSO");
        e.target.reset();
      } else {
        setFormStatus("ERRO");
      }
    } catch (error) {
      setFormStatus("ERRO");
    }
  };

  const getP = (project, field) => {
    if (lang === 'en' && project.translations?.en?.[field] !== undefined) {
      return project.translations.en[field];
    }
    return project[field];
  };

  const filteredProjects = activeCategory === "Todos"
    ? PROJECTS
    : PROJECTS.filter(p =>
        p.tags ? p.tags.includes(activeCategory) : p.tag === activeCategory
      );

  return (
    <div style={{
      background: currentTheme.bg,
      color: currentTheme.textPrimary,
      minHeight: "100vh",
      fontFamily: "'Outfit', sans-serif",
      position: "relative",
      "--fs-offset": `${fontSizeOffset}px`,
      transition: "background 0.3s, color 0.3s"
    }} role="main">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { scroll-behavior: smooth; overflow-x: hidden; background: ${currentTheme.bg}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${currentTheme.bg}; }
        ::-webkit-scrollbar-thumb { background: #27272A; border-radius: 3px; }
        .access-btn:focus { outline: 2px solid ${currentTheme.accent}; }
        .hero-text-col { text-align: left; align-items: flex-start; }
        .hero-cta-wrapper { justify-content: flex-start; }
        @media (max-width: 960px) {
          .hero-text-col { text-align: center !important; align-items: center !important; }
          .hero-cta-wrapper { justify-content: center !important; }
        }
        @media (max-width: 585px) {
          .nav-pill { display: none !important; }
        }
      `}</style>

      {!isHighContrast && (
        <>
          <div style={{ position: "absolute", top: "-10%", left: "30%", width: "80vw", height: "60vw", background: "radial-gradient(circle, rgba(245, 158, 11, 0.025) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "10%", right: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(251, 191, 36, 0.02) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
        </>
      )}

      {/* HERO SECTION */}
      <section id="home" aria-label={T.hero.ariaLabel} style={{
        minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "100px clamp(24px, 6vw, 100px) 40px", position: "relative", zIndex: 1
      }}>
        <div style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "clamp(32px, 5vw, 80px)", alignItems: "center", justifyItems: "center" }}>

          <div className="hero-text-col" style={{ maxWidth: 680, width: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(54px, 7.5vw, 92px) + var(--fs-offset))", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em", color: currentTheme.accent }}>
              Henrique Pucci
            </h1>
            <div style={{ background: isHighContrast ? "none" : "linear-gradient(to right, #FBBF24, #D97706)", color: isHighContrast ? currentTheme.textPrimary : "transparent", WebkitBackgroundClip: isHighContrast ? "none" : "text", WebkitTextFillColor: isHighContrast ? "initial" : "transparent", fontSize: "calc(clamp(20px, 3vw, 30px) + var(--fs-offset))", fontWeight: 600, letterSpacing: "-0.02em", marginTop: 2 }}>
              {T.hero.subtitle}
            </div>
            <ToolBadges />
            <p style={{ fontSize: "calc(clamp(16px, 2vw, 18px) + var(--fs-offset))", lineHeight: 1.7, color: currentTheme.textSecondary, fontWeight: 300, marginTop: 14 }}>
              {T.hero.description}
            </p>
            <div className="hero-cta-wrapper" style={{ display: "flex", marginTop: 20 }}>
              <a href="#contato" aria-label={T.hero.ctaAriaLabel} style={{ padding: "14px 40px", border: `1px solid ${currentTheme.border}`, background: "rgba(255,255,255,0.02)", color: currentTheme.textPrimary, borderRadius: "50px", fontSize: "calc(14px + var(--fs-offset))", fontWeight: 500, textDecoration: "none", transition: "all 0.25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(245,158,11,0.25)"; e.currentTarget.style.borderColor = currentTheme.borderHover; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = currentTheme.border; }}
              >
                {T.hero.cta}
              </a>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <div style={{ width: "clamp(320px, 34vw, 450px)", height: "clamp(320px, 34vw, 450px)", borderRadius: isHighContrast ? "0px" : "30% 70% 40% 60% / 50% 40% 60% 50%", border: `2px solid ${currentTheme.borderHover}`, padding: "14px", background: currentTheme.surface, boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 0 60px rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img src={perfilImg} alt="Fotografia de perfil de Henrique Pucci" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
            </div>
          </div>

        </div>
      </section>

      {/* MENU NAV */}
      <nav role="navigation" aria-label="Menu Principal" style={{ width: "100%", display: "flex", justifyContent: "center", padding: "32px 24px", position: "relative", zIndex: 10 }}>
        <div className="nav-pill" style={{ display: "flex", gap: 4, background: currentTheme.surface, border: `1px solid ${currentTheme.border}`, padding: "6px", borderRadius: isHighContrast ? "0px" : "14px", justifyContent: "center", alignItems: "center", width: "fit-content", boxShadow: "0 24px 50px rgba(0,0,0,0.4), 0 0 40px rgba(245,158,11,0.08)" }}>
          {T.nav.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="nav-link"
              style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, letterSpacing: "1.5px", color: currentTheme.textSecondary, textDecoration: "none", padding: "10px 24px", borderRadius: isHighContrast ? "0px" : "10px", transition: "all 0.22s ease", display: "inline-block" }}
              onMouseEnter={e => {
                e.currentTarget.style.color = currentTheme.textPrimary;
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.textShadow = "0 0 16px rgba(245,158,11,0.9), 0 0 32px rgba(245,158,11,0.4)";
                e.currentTarget.style.background = "rgba(245,158,11,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = currentTheme.textSecondary;
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.textShadow = "none";
                e.currentTarget.style.background = "transparent";
              }}
            >{link.label}</a>
          ))}
        </div>
      </nav>

      {/* SEÇÃO: SOBRE MIM */}
      <ScrollReveal>
        <section id="sobre" aria-label={T.about.ariaLabel} style={{ padding: "120px clamp(24px, 6vw, 100px)", borderTop: `1px solid ${currentTheme.border}`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ maxWidth: 840, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
            <div style={{ fontSize: "calc(14px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: currentTheme.neonPurple }}>{T.about.label}</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(38px, 5.5vw, 56px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, lineHeight: 1.1, maxWidth: 780 }}>
              {T.about.heading[0]}<br />{T.about.heading[1]}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 22, textAlign: "justify", marginTop: 12 }}>
              {T.about.paragraphs.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} style={{ fontSize: "calc(16px + var(--fs-offset))", lineHeight: 1.85, color: currentTheme.textSecondary, fontWeight: 300 }} />
              ))}
            </div>
            <div style={{ padding: "24px 32px", borderRadius: isHighContrast ? "0px" : 14, background: "rgba(24,24,27,0.5)", border: `1px solid ${currentTheme.border}`, display: "flex", gap: 18, alignItems: "start", textAlign: "left", maxWidth: 720, width: "100%", marginTop: 20 }}>
              <span style={{ fontSize: "calc(22px + var(--fs-offset))", color: currentTheme.neonMagenta, lineHeight: 1 }} aria-hidden="true">✦</span>
              <p style={{ fontSize: "calc(13.5px + var(--fs-offset))", lineHeight: 1.6, color: currentTheme.textPrimary, fontWeight: 400 }}>{T.about.quote}</p>
            </div>
            <div style={{ display: "flex", gap: "clamp(32px, 5vw, 64px)", flexWrap: "wrap", justifyContent: "center", marginTop: 28, borderTop: `1px solid ${currentTheme.border}`, paddingTop: 36, width: "100%" }}>
              {T.about.stats.map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(28px + var(--fs-offset))", color: currentTheme.accent }}>{s.value}</div>
                  <div style={{ fontSize: "calc(11px + var(--fs-offset))", color: currentTheme.textMuted, marginTop: 4, letterSpacing: 0.5, textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SEÇÃO: TRAJETÓRIA */}
      <ScrollReveal>
        <section id="experiência" aria-label={T.experience.ariaLabel} style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${currentTheme.border}` }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ fontSize: "calc(14px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple, marginBottom: 48 }}>{T.experience.label}</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {T.experience.items.map((exp, i, arr) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, padding: "48px 0", borderBottom: i < arr.length - 1 ? `1px solid ${currentTheme.border}` : "none" }}>
                  <div>
                    <div style={{ fontSize: "calc(20px + var(--fs-offset))", fontWeight: 600, color: currentTheme.textPrimary, marginBottom: 8 }}>{exp.role}</div>
                    <div style={{ fontSize: "calc(15px + var(--fs-offset))", color: currentTheme.neonMagenta, fontWeight: 500 }}>{exp.org}</div>
                  </div>
                  <p style={{ fontSize: "calc(16px + var(--fs-offset))", lineHeight: 1.85, color: currentTheme.textSecondary, fontWeight: 300 }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SEÇÃO: MEUS PROJETOS */}
      <ScrollReveal>
        <section id="projetos" aria-label={T.projects.ariaLabel} style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${currentTheme.border}` }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <div style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple, marginBottom: 12 }}>{T.projects.label}</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(32px, 4vw, 44px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, marginBottom: 20 }}>{T.projects.heading}</h2>

            <div style={{ display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ padding: "10px 22px", borderRadius: isHighContrast ? "0px" : "30px", border: `1px solid ${activeCategory === cat ? currentTheme.borderHover : currentTheme.border}`, background: activeCategory === cat ? currentTheme.surfaceActive : "transparent", color: activeCategory === cat ? "#000000" : currentTheme.textSecondary, fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(245,158,11,0.22)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >{T.projects.categoryLabels[cat]}</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              {filteredProjects.map((p) => (
                <div key={p.id} onClick={() => setOpenProject(p)}
                  style={{ background: currentTheme.surface, border: `1px solid ${currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "20px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, cursor: "pointer", transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(245,158,11,0.07)" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 24px 48px rgba(0,0,0,0.4), 0 0 32px rgba(245,158,11,0.2)"; e.currentTarget.style.borderColor = currentTheme.borderHover; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,158,11,0.07)"; e.currentTarget.style.borderColor = currentTheme.border; }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "calc(10px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: currentTheme.neonMagenta }}>
                        {(p.tags && p.tags.length > 1 ? p.tags : [p.tag]).map(t => T.projects.categoryLabels[t]).join(" · ")}
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "calc(20px + var(--fs-offset))", fontWeight: 500, color: currentTheme.textPrimary, lineHeight: 1.3 }}>{getP(p, 'title')}</div>
                    <p style={{ fontSize: "calc(13px + var(--fs-offset))", color: currentTheme.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>{getP(p, 'summary')}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", borderTop: `1px solid ${currentTheme.border}`, paddingTop: 16, marginTop: "auto" }}>
                    <span style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 500, color: currentTheme.accent }}>{T.projects.cta}</span>
                    <div style={{ color: currentTheme.neonMagenta }}><ArrowIcon /></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* SEÇÃO: SERVIÇOS E STACKS */}
      <ScrollReveal>
        <section style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${currentTheme.border}` }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <div style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple, marginBottom: 12 }}>{T.skills.label}</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(32px, 4vw, 44px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, marginBottom: 48 }}>{T.skills.heading}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
              {T.skills.categories.map((s, i) => (
                <div key={i} style={{ padding: "32px", borderRadius: isHighContrast ? "0px" : "20px", background: currentTheme.surface, border: `1px solid ${currentTheme.border}`, boxShadow: "0 4px 20px rgba(245,158,11,0.07)" }}>
                  <div style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: currentTheme.accent, marginBottom: 24, borderBottom: `1px solid ${currentTheme.border}`, paddingBottom: 12 }}>{s.category}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {s.items.map((item, j) => (
                      <span key={j} style={{ fontSize: "calc(12px + var(--fs-offset))", padding: "6px 14px", borderRadius: isHighContrast ? "0px" : 30, border: `1px solid ${currentTheme.border}`, color: currentTheme.textSecondary, background: "rgba(255,255,255,0.01)" }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SEÇÃO DE CONTATO */}
      <ScrollReveal>
        <section id="contato" style={{ padding: "120px clamp(24px, 6vw, 100px)", borderTop: `1px solid ${currentTheme.border}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "64px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, textAlign: "left" }}>
              <div style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple }}>{T.contact.label}</div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(36px, 4.5vw, 54px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, lineHeight: 1.15 }}>{T.contact.heading}</h2>
              <p style={{ color: currentTheme.textSecondary, fontSize: "calc(15px + var(--fs-offset))", lineHeight: 1.7, fontWeight: 300, marginBottom: 12 }}>{T.contact.description}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 320 }}>
                {T.contact.links.map((c, i) => (
                  <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
                    style={{ padding: "14px 20px", border: `1px solid ${currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "10px", color: currentTheme.textPrimary, fontSize: "calc(13px + var(--fs-offset))", textDecoration: "none", background: currentTheme.surface, display: "flex", flexDirection: "column", gap: 2, transition: "all 0.25s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(245,158,11,0.22)"; e.currentTarget.style.borderColor = currentTheme.borderHover; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = currentTheme.border; }}
                  >
                    <span style={{ fontSize: "calc(10px + var(--fs-offset))", color: currentTheme.neonPurple, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.platform}</span>
                    <span style={{ fontWeight: 400, color: currentTheme.textSecondary, marginTop: 2 }}>{c.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} style={{ background: "rgba(24, 24, 27, 0.4)", border: `1px solid ${currentTheme.border}`, padding: "40px", borderRadius: isHighContrast ? "0px" : "16px", display: "flex", flexDirection: "column", gap: 24, boxShadow: "0 30px 60px rgba(0,0,0,0.3), 0 0 40px rgba(245,158,11,0.07)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                <label htmlFor="name-input" style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: currentTheme.textSecondary }}>{T.form.nameLabel}</label>
                <input id="name-input" type="text" name="name" required placeholder={T.form.namePlaceholder} onFocus={() => setFocusedInput("name")} onBlur={() => setFocusedInput(null)} style={{ padding: "14px 18px", background: "#0D0D11", border: `1px solid ${focusedInput === "name" ? currentTheme.accent : currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "8px", color: currentTheme.textPrimary, fontSize: "calc(14px + var(--fs-offset))", fontFamily: "inherit", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                <label htmlFor="email-input" style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: currentTheme.textSecondary }}>{T.form.emailLabel}</label>
                <input id="email-input" type="email" name="email" required placeholder={T.form.emailPlaceholder} onFocus={() => setFocusedInput("email")} onBlur={() => setFocusedInput(null)} style={{ padding: "14px 18px", background: "#0D0D11", border: `1px solid ${focusedInput === "email" ? currentTheme.accent : currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "8px", color: currentTheme.textPrimary, fontSize: "calc(14px + var(--fs-offset))", fontFamily: "inherit", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                <label htmlFor="msg-input" style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: currentTheme.textSecondary }}>{T.form.messageLabel}</label>
                <textarea id="msg-input" name="message" required rows="5" placeholder={T.form.messagePlaceholder} onFocus={() => setFocusedInput("message")} onBlur={() => setFocusedInput(null)} style={{ padding: "14px 18px", background: "#0D0D11", border: `1px solid ${focusedInput === "message" ? currentTheme.accent : currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "8px", color: currentTheme.textPrimary, fontSize: "calc(14px + var(--fs-offset))", fontFamily: "inherit", outline: "none", resize: "none" }} />
              </div>
              <button type="submit" disabled={formStatus === "ENVIANDO" || formStatus === "SUCESSO"} style={{ padding: "14px", background: formStatus === "SUCESSO" ? "#10B981" : currentTheme.textPrimary, color: formStatus === "SUCESSO" ? "#FAFAFA" : currentTheme.bg, border: "none", borderRadius: isHighContrast ? "0px" : "8px", fontSize: "calc(14px + var(--fs-offset))", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease-in-out", marginTop: 8, boxShadow: "0 8px 24px rgba(245,158,11,0.2)" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(245,158,11,0.38)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,158,11,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                {formStatus === "" && T.form.submit}
                {formStatus === "ENVIANDO" && T.form.sending}
                {formStatus === "SUCESSO" && T.form.success}
              </button>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "40px", borderTop: `1px solid ${currentTheme.border}`, fontSize: "calc(11px + var(--fs-offset))", color: currentTheme.textMuted }}>
        {T.footer}
      </footer>

      {/* MODAL */}
      {openProject && (
        <Modal project={openProject} onClose={() => setOpenProject(null)} theme={currentTheme} lang={lang} modalT={T.modal} getP={getP} categoryLabels={T.projects.categoryLabels} />
      )}

      {/* BOTÃO HAMBURGUER */}
      <button
        onClick={() => setIsSideMenuOpen(true)}
        aria-label={T.sideMenu.openLabel}
        style={{
          position: "fixed", top: 24, right: 24, zIndex: 9998,
          width: 44, height: 44, borderRadius: isHighContrast ? "0px" : "10px",
          background: currentTheme.surface, border: `1px solid ${currentTheme.border}`,
          color: currentTheme.textPrimary, cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
          boxShadow: "0 8px 24px rgba(245,158,11,0.18)", padding: 0
        }}
      >
        <span style={{ width: 20, height: 2, background: currentTheme.textPrimary, borderRadius: 2, display: "block" }} />
        <span style={{ width: 20, height: 2, background: currentTheme.textPrimary, borderRadius: 2, display: "block" }} />
        <span style={{ width: 20, height: 2, background: currentTheme.textPrimary, borderRadius: 2, display: "block" }} />
      </button>

      {/* BOTÃO DE IDIOMA */}
      <button
        onClick={() => setLang(lang === "pt" ? "en" : "pt")}
        aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
        style={{
          position: "fixed", top: 24, right: 76, zIndex: 9998,
          width: 44, height: 44, borderRadius: isHighContrast ? "0px" : "10px",
          background: currentTheme.surface, border: `1px solid ${currentTheme.borderHover}`,
          color: currentTheme.neonMagenta, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px rgba(245,158,11,0.18)",
          fontSize: "calc(11px + var(--fs-offset))", fontWeight: 700, letterSpacing: 1,
          fontFamily: "'Outfit', sans-serif"
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(251,191,36,0.12)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,158,11,0.35)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = currentTheme.surface; e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,158,11,0.18)"; }}
      >
        {T.langToggle}
      </button>

      {/* MENU LATERAL */}
      {isSideMenuOpen && (
        <>
          <div
            onClick={() => setIsSideMenuOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 9998, backdropFilter: "blur(4px)" }}
          />
          <nav
            role="navigation"
            aria-label={T.sideMenu.title}
            style={{
              position: "fixed", top: 0, right: 0, height: "100vh", width: "clamp(260px, 30vw, 320px)",
              background: currentTheme.surface, borderLeft: `1px solid ${currentTheme.border}`,
              zIndex: 9999, display: "flex", flexDirection: "column", padding: "40px 32px",
              boxShadow: "-24px 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.06)",
              animation: "slideIn 0.25s ease"
            }}
          >
            <style>{`@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
              <span style={{ fontSize: "calc(10px + var(--fs-offset))", fontWeight: 600, letterSpacing: 2, color: currentTheme.neonPurple, textTransform: "uppercase" }}>{T.sideMenu.title}</span>
              <button
                onClick={() => setIsSideMenuOpen(false)}
                aria-label={T.sideMenu.closeLabel}
                style={{ background: "none", border: "none", color: currentTheme.textSecondary, cursor: "pointer", padding: 4, lineHeight: 1, fontSize: 20 }}
              >✕</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {T.sideMenu.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  onClick={() => setIsSideMenuOpen(false)}
                  style={{
                    fontSize: "calc(22px + var(--fs-offset))", fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400, color: currentTheme.textPrimary, textDecoration: "none",
                    padding: "12px 0", borderBottom: `1px solid ${currentTheme.border}`,
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = currentTheme.neonMagenta}
                  onMouseLeave={e => e.currentTarget.style.color = currentTheme.textPrimary}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://linkedin.com/in/henrique-pucci" target="_blank" rel="noopener noreferrer" style={{ fontSize: "calc(12px + var(--fs-offset))", color: currentTheme.textSecondary, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: currentTheme.neonPurple }}>↗</span> LinkedIn
              </a>
              <a href="https://github.com/HenriPucci" target="_blank" rel="noopener noreferrer" style={{ fontSize: "calc(12px + var(--fs-offset))", color: currentTheme.textSecondary, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: currentTheme.neonPurple }}>↗</span> GitHub
              </a>
            </div>
          </nav>
        </>
      )}

      {/* PAINEL DE ACESSIBILIDADE */}
      <div style={{ position: "fixed", bottom: "clamp(16px, 3vw, 24px)", left: "clamp(16px, 3vw, 24px)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
        {isAccessMenuOpen && (
          <div style={{ background: "rgba(24, 24, 27, 0.95)", backdropFilter: "blur(16px)", border: `1px solid ${currentTheme.border}`, padding: "18px", borderRadius: isHighContrast ? "0px" : "14px", display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 20px 48px rgba(0,0,0,0.6)", width: "clamp(200px, 60vw, 240px)", textAlign: "left" }}>
            <div style={{ fontSize: "calc(10px + var(--fs-offset))", fontWeight: 700, letterSpacing: 1.5, color: "#60A5FA", borderBottom: `1px solid rgba(59,130,246,0.2)`, paddingBottom: 8, textTransform: "uppercase" }}>{T.accessibility.title}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "calc(12px + var(--fs-offset))", color: currentTheme.textPrimary }}>{T.accessibility.contrast}</span>
              <button onClick={() => setIsHighContrast(!isHighContrast)} className="access-btn" style={{ padding: "5px 10px", background: "#2563EB", color: "#FFFFFF", border: "none", borderRadius: 6, fontSize: "calc(10px + var(--fs-offset))", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>{isHighContrast ? T.accessibility.deactivate : T.accessibility.activate}</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: "calc(12px + var(--fs-offset))", color: currentTheme.textPrimary }}>{T.accessibility.textSize}</span>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => setFontSizeModifier(prev => Math.max(0, prev - 2))} className="access-btn" style={{ flex: 1, padding: "7px", background: currentTheme.surface, color: "#93C5FD", border: "1px solid rgba(59,130,246,0.25)", cursor: "pointer", borderRadius: 6, fontSize: "calc(13px + var(--fs-offset))", fontWeight: 700, transition: "border-color 0.2s" }}>A−</button>
                <button onClick={() => setFontSizeModifier(prev => Math.min(8, prev + 2))} className="access-btn" style={{ flex: 1, padding: "7px", background: currentTheme.surface, color: "#93C5FD", border: "1px solid rgba(59,130,246,0.25)", cursor: "pointer", borderRadius: 6, fontSize: "calc(13px + var(--fs-offset))", fontWeight: 700, transition: "border-color 0.2s" }}>A+</button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsAccessMenuOpen(!isAccessMenuOpen)}
          aria-label={T.accessibility.openLabel}
          aria-expanded={isAccessMenuOpen}
          className="access-btn"
          style={{
            width: 44, height: 44,
            borderRadius: isHighContrast ? "0px" : "50%",
            background: isAccessMenuOpen ? "#1D4ED8" : "#2563EB",
            color: "#FFFFFF",
            border: `1px solid ${isAccessMenuOpen ? "rgba(59,130,246,0.8)" : "rgba(59,130,246,0.4)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#1D4ED8"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,99,235,0.55)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = isAccessMenuOpen ? "#1D4ED8" : "#2563EB"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.35)"; }}
        >
          <AccessibilityIcon />
        </button>
      </div>

    </div>
  );
}
