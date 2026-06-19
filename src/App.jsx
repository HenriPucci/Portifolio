import React, { useState } from "react";
import { CATEGORIES, PROJECTS, SKILLS } from "./data/projects";
import { ArrowIcon } from "./components/Icons";
import Modal from "./components/Modal";
import ScrollReveal from "./components/ScrollReveal";

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

  const currentTheme = isHighContrast ? CONTRAST_THEME : THEME;

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
      `}</style>

      {!isHighContrast && (
        <>
          <div style={{ position: "absolute", top: "-10%", left: "30%", width: "80vw", height: "60vw", background: "radial-gradient(circle, rgba(245, 158, 11, 0.025) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "10%", right: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(251, 191, 36, 0.02) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
        </>
      )}

      {/* HERO SECTION */}
      <section id="home" aria-label="Apresentação Inicial" style={{
        minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "100px clamp(24px, 6vw, 100px) 40px", position: "relative", zIndex: 1
      }}>
        <div style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "80px", alignItems: "center", justifyItems: "center" }}>
          
          <div style={{ maxWidth: 680, width: "100%", display: "flex", flexDirection: "column", gap: 14, textAlign: "left", alignItems: "flex-start" }}>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(54px, 7.5vw, 92px) + var(--fs-offset))", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em", color: currentTheme.accent }}>
              Henrique Pucci
            </h1>
            <div style={{ background: isHighContrast ? "none" : "linear-gradient(to right, #FBBF24, #D97706)", color: isHighContrast ? currentTheme.textPrimary : "transparent", WebkitBackgroundClip: isHighContrast ? "none" : "text", WebkitTextFillColor: isHighContrast ? "initial" : "transparent", fontSize: "calc(clamp(20px, 3vw, 30px) + var(--fs-offset))", fontWeight: 600, letterSpacing: "-0.02em", marginTop: 2 }}>
              Engenheiro de Software | UX/UI & Service Designer | Analista de Requisitos
            </div>
            <ToolBadges />
            <p style={{ fontSize: "calc(clamp(16px, 2vw, 18px) + var(--fs-offset))", lineHeight: 1.7, color: currentTheme.textSecondary, fontWeight: 300, marginTop: 14 }}>
              Formando em Engenharia de Software pela UnB com especialização em UX/UI e Service Design. Transformando regras de negócios governamentais complexas em experiências digitais fluidas e acessíveis.
            </p>
            <div style={{ display: "flex", marginTop: 20 }}>
              <a href="#contato" aria-label="Navegar até a seção de formulário de contato" style={{ padding: "14px 40px", border: `1px solid ${currentTheme.border}`, background: "rgba(255,255,255,0.02)", color: currentTheme.textPrimary, borderRadius: "50px", fontSize: "calc(14px + var(--fs-offset))", fontWeight: 500, textDecoration: "none", transition: "all 0.25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.3)"; e.currentTarget.style.borderColor = currentTheme.borderHover; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = currentTheme.border; }}
              >
                Entrar em contato
              </a>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <div style={{ width: "clamp(320px, 34vw, 450px)", height: "clamp(320px, 34vw, 450px)", borderRadius: isHighContrast ? "0px" : "30% 70% 40% 60% / 50% 40% 60% 50%", border: `2px solid ${currentTheme.borderHover}`, padding: "14px", background: currentTheme.surface, boxShadow: "0 32px 64px rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img src="/assets/perfil.jpeg" alt="Fotografia de perfil de Henrique Pucci" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
            </div>
          </div>

        </div>
      </section>

      {/* MENU NAV */}
      <nav role="navigation" aria-label="Menu Principal" style={{ width: "100%", display: "flex", justifyContent: "center", padding: "32px 24px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", gap: 4, background: currentTheme.surface, border: `1px solid ${currentTheme.border}`, padding: "6px", borderRadius: isHighContrast ? "0px" : "14px", justifyContent: "center", alignItems: "center", width: "fit-content", boxShadow: "0 24px 50px rgba(0,0,0,0.4)" }}>
          {[{ label: "HOME", url: "#home" }, { label: "SOBRE", url: "#sobre" }, { label: "TRAJETÓRIA", url: "#experiência" }, { label: "PROJETOS", url: "#projetos" }, { label: "CONTATO", url: "#contato" }].map((link, idx) => (
            <a key={idx} href={link.url} style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, letterSpacing: "1.5px", color: currentTheme.textSecondary, textDecoration: "none", padding: "10px 24px", borderRadius: isHighContrast ? "0px" : "10px" }}>{link.label}</a>
          ))}
        </div>
      </nav>

      {/* SEÇÃO: SOBRE MIM */}
      <ScrollReveal>
        <section id="sobre" aria-label="Sobre Henrique Pucci" style={{ padding: "120px clamp(24px, 6vw, 100px)", borderTop: `1px solid ${currentTheme.border}`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ maxWidth: 840, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
            <div style={{ fontSize: "calc(14px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: currentTheme.neonPurple }}>Sobre mim</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(38px, 5.5vw, 56px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, lineHeight: 1.1, maxWidth: 780 }}>Design focado nas pessoas,<br />sustentado pela engenharia.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 22, textAlign: "justify", fontSize: "calc(16px + var(--fs-offset))", lineHeight: 1.85, color: currentTheme.textSecondary, fontWeight: 300, marginTop: 12 }}>
              <p>Sou estudante de Engenharia de Software na Universidade de Brasília (UnB), cruzando o meu último semestre de graduação em 2026. Desenvolvi um perfil analítico e híbrido cuja principal missão é atuar como ponte: traduzir fluxos de negócios e regras de arquitetura complexas em jornadas digitais que sejam impecáveis, inclusivas e fáceis de usar.</p>
              <p>Minha atuação é profundamente ancorada nas metodologias de <strong>Pesquisa em UX/UI, Service Design e estratégia de produto</strong>. Sou especialista em mapear ecossistemas de serviços densos e facilitar workshops de co-criação. Utilizo frameworks estruturados no Miro — como Service Blueprints detalhados e mapas de jornada do usuário — para decodificar problemas substituíveis e transformá-los em requisitos acionáveis, documentados e prototipados em alta fidelidade no Figma.</p>
              <p>Essa paixão pela experiência humana permitiu que eu gerasse impacto real na transformação digital pública brasileira. Atuei diretamente no levantamento estratégico de Discovery junto ao Ministério da Economia e colaborei ativamente na estruturação de padrões nacionais de acessibilidade, desenvolvendo componentes e diretrizes para o Guia Brasileiro de Acessibilidade Digital e Inclusão junto à SGD e ao Ministério da Gestão e Inovação (MGI), aplicando conceitos estritos de WCAG e eMAG.</p>
              <p>Como diferencial de engenharia, garanto que minhas soluções funcionem tanto no pixel quanto no código. Sustento minhas decisões de design com proficiência em manipulação e análise de dados utilizando SQL, Docker, DBeaver e Power BI, tendo inclusive desenvolvido arquiteturas completas de ETL para a consolidação de bases de acidentes aeronáuticos civis. Além disso, mantenho proximidade com a cultura do software livre através de contribuições ativas no ecossistema Linux/Debian e no sistema de gestão processual CAPJu.</p>
            </div>
            <div style={{ padding: "24px 32px", borderRadius: isHighContrast ? "0px" : 14, background: "rgba(24,24,27,0.5)", border: `1px solid ${currentTheme.border}`, display: "flex", gap: 18, alignItems: "start", textAlign: "left", maxWidth: 720, width: "100%", marginTop: 20 }}>
              <span style={{ fontSize: "calc(22px + var(--fs-offset))", color: currentTheme.neonMagenta, lineHeight: 1 }} aria-hidden="true">✦</span>
              <p style={{ fontSize: "calc(13.5px + var(--fs-offset))", lineHeight: 1.6, color: currentTheme.textPrimary, fontWeight: 400 }}>Acredito que design sem dados é palpite, mas código sem usabilidade é desperdício. Minha meta é desenhar produtos digitais de alta performance técnica que façam sentido real para a vida das pessoas.</p>
            </div>
            <div style={{ display: "flex", gap: "clamp(32px, 5vw, 64px)", flexWrap: "wrap", justifyContent: "center", marginTop: 28, borderTop: `1px solid ${currentTheme.border}`, paddingTop: 36, width: "100%" }}>
              {[{ label: "Ministérios atendidos", value: "4" }, { label: "Publicação internacional", value: "ENASE 2025" }, { label: "Projetos open source", value: "Debian + CAPJu" }].map((s, i) => (
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
        <section id="experiência" aria-label="Trajetória Profissional" style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${currentTheme.border}` }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ fontSize: "calc(14px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple, marginBottom: 48 }}>Trajetória Profissional</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { role: "Bolsista de Transformação Digital & UX", org: "ITRAC / UnB / Ministério da Economia / DTI / SGD", desc: "Aplicação de dinâmicas de Discovery e levantamento de requisitos para modernização de serviços públicos. Desenvolvimento de artefatos de UX para garantir uma jornada do usuário fluida e eficiente." },
                { role: "Bolsista – Acessibilidade Digital", org: "Ministério da Gestão e Inovação (MGI)", desc: "Desenvolvimento do Guia Brasileiro de Acessibilidade Digital e Inclusão com a SGD. Publicação interna no domínio gov.br como artefato Plone." },
                { role: "Contribuidor Open Source", org: "CAPJu & Debian Brasil Team", desc: "Participação no projeto CAPJu para gestão de processos judiciais. Manutenção e atualização de pacotes para o Debian, correção de bugs e melhoria de documentação." }
              ].map((exp, i, arr) => (
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
        <section id="projetos" aria-label="Portfólio de Projetos" style={{ padding: "100px clamp(24px, 8vw, 120px)", borderTop: `1px solid ${currentTheme.border}` }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <div style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple, marginBottom: 12 }}>Meus Projetos</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(32px, 4vw, 44px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, marginBottom: 20 }}>Trabalhos Selecionados</h2>
            
            <div style={{ display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ padding: "10px 22px", borderRadius: isHighContrast ? "0px" : "30px", border: `1px solid ${activeCategory === cat ? currentTheme.borderHover : currentTheme.border}`, background: activeCategory === cat ? currentTheme.surfaceActive : "transparent", color: activeCategory === cat ? "#000000" : currentTheme.textSecondary, fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >{cat}</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              {filteredProjects.map((p) => (
                <div key={p.id} onClick={() => setOpenProject(p)}
                  style={{ background: currentTheme.surface, border: `1px solid ${currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "20px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, cursor: "pointer", transition: "all 0.25s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 24px 48px rgba(0,0,0,0.5)"; e.currentTarget.style.borderColor = currentTheme.borderHover; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = currentTheme.border; }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "calc(10px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: currentTheme.neonMagenta }}>{(p.tags && p.tags.length > 1 ? p.tags : [p.tag]).join(" · ")}</span>
                    </div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "calc(20px + var(--fs-offset))", fontWeight: 500, color: currentTheme.textPrimary, lineHeight: 1.3 }}>{p.title}</div>
                    <p style={{ fontSize: "calc(13px + var(--fs-offset))", color: currentTheme.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>{p.summary}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", borderTop: `1px solid ${currentTheme.border}`, paddingTop: 16, marginTop: "auto" }}>
                    <span style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 500, color: currentTheme.accent }}>Clique para Ver Mais</span>
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
            <div style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple, marginBottom: 12 }}>Serviços & Stacks</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(32px, 4vw, 44px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, marginBottom: 48 }}>Habilidades Estratégicas</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
              {SKILLS.map((s, i) => (
                <div key={i} style={{ padding: "32px", borderRadius: isHighContrast ? "0px" : "20px", background: currentTheme.surface, border: `1px solid ${currentTheme.border}` }}>
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
              <div style={{ fontSize: "calc(12px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: currentTheme.neonPurple }}>Contato</div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "calc(clamp(36px, 4.5vw, 54px) + var(--fs-offset))", fontWeight: 400, color: currentTheme.textPrimary, lineHeight: 1.15 }}>Vamos construir algo incrível juntos.</h2>
              <p style={{ color: currentTheme.textSecondary, fontSize: "calc(15px + var(--fs-offset))", lineHeight: 1.7, fontWeight: 300, marginBottom: 12 }}>Tem um desafio complexo de UX, arquitetura de sistemas ou design de serviços? Escreva uma mensagem diretamente no formulário ao lado para falar comigo agora mesmo.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 320 }}>
                {[
                  { label: "Conectar via LinkedIn", url: "https://linkedin.com/in/henrique-pucci", platform: "LinkedIn" },
                  { label: "Explorar repositórios no GitHub", url: "https://github.com/HenriPucci", platform: "GitHub" }
                ].map((c, i) => (
                  <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
                    style={{ padding: "14px 20px", border: `1px solid ${currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "10px", color: currentTheme.textPrimary, fontSize: "calc(13px + var(--fs-offset))", textDecoration: "none", background: currentTheme.surface, display: "flex", flexDirection: "column", gap: 2, transition: "all 0.25s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.4)"; e.currentTarget.style.borderColor = currentTheme.borderHover; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = currentTheme.border; }}
                  >
                    <span style={{ fontSize: "calc(10px + var(--fs-offset))", color: currentTheme.neonPurple, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.platform}</span>
                    <span style={{ fontWeight: 400, color: currentTheme.textSecondary, marginTop: 2 }}>{c.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} style={{ background: "rgba(24, 24, 27, 0.4)", border: `1px solid ${currentTheme.border}`, padding: "40px", borderRadius: isHighContrast ? "0px" : "16px", display: "flex", flexDirection: "column", gap: 24, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                <label htmlFor="name-input" style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: currentTheme.textSecondary }}>Nome</label>
                <input id="name-input" type="text" name="name" required placeholder="Seu nome" onFocus={() => setFocusedInput("name")} onBlur={() => setFocusedInput(null)} style={{ padding: "14px 18px", background: "#0D0D11", border: `1px solid ${focusedInput === "name" ? currentTheme.accent : currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "8px", color: currentTheme.textPrimary, fontSize: "calc(14px + var(--fs-offset))", fontFamily: "inherit", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                <label htmlFor="email-input" style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: currentTheme.textSecondary }}>E-mail</label>
                <input id="email-input" type="email" name="email" required placeholder="seu@email.com" onFocus={() => setFocusedInput("email")} onBlur={() => setFocusedInput(null)} style={{ padding: "14px 18px", background: "#0D0D11", border: `1px solid ${focusedInput === "email" ? currentTheme.accent : currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "8px", color: currentTheme.textPrimary, fontSize: "calc(14px + var(--fs-offset))", fontFamily: "inherit", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                <label htmlFor="msg-input" style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: currentTheme.textSecondary }}>Mensagem</label>
                <textarea id="msg-input" name="message" required rows="5" placeholder="Escreva sua mensagem aqui..." onFocus={() => setFocusedInput("message")} onBlur={() => setFocusedInput(null)} style={{ padding: "14px 18px", background: "#0D0D11", border: `1px solid ${focusedInput === "message" ? currentTheme.accent : currentTheme.border}`, borderRadius: isHighContrast ? "0px" : "8px", color: currentTheme.textPrimary, fontSize: "calc(14px + var(--fs-offset))", fontFamily: "inherit", outline: "none", resize: "none" }} />
              </div>
              <button type="submit" disabled={formStatus === "ENVIANDO" || formStatus === "SUCESSO"} style={{ padding: "14px", background: formStatus === "SUCESSO" ? "#10B981" : currentTheme.textPrimary, color: formStatus === "SUCESSO" ? "#FAFAFA" : currentTheme.bg, border: "none", borderRadius: isHighContrast ? "0px" : "8px", fontSize: "calc(14px + var(--fs-offset))", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease-in-out", marginTop: 8 }}>
                {formStatus === "" && "Enviar Mensagem"}
                {formStatus === "ENVIANDO" && "Disparando e-mail..."}
                {formStatus === "SUCESSO" && "✓ Mensagem enviada com sucesso!"}
              </button>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "40px", borderTop: `1px solid ${currentTheme.border}`, fontSize: "calc(11px + var(--fs-offset))", color: currentTheme.textMuted }}>
        © 2026 Henrique Pucci · Estética Carbon & Volcanic Amber · Acessível WCAG
      </footer>

      {/* MODAL POPUP SYSTEM (POSICIONADO CORRETAMENTE FORA DAS SEÇÕES) */}
      {openProject && (
        <Modal project={openProject} onClose={() => setOpenProject(null)} theme={currentTheme} />
      )}

      {/* MENU LATERAL DE NAVEGAÇÃO */}
      <button
        onClick={() => setIsSideMenuOpen(true)}
        aria-label="Abrir menu de navegação"
        style={{
          position: "fixed", top: 24, right: 24, zIndex: 9998,
          width: 44, height: 44, borderRadius: isHighContrast ? "0px" : "10px",
          background: currentTheme.surface, border: `1px solid ${currentTheme.border}`,
          color: currentTheme.textPrimary, cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)", padding: 0
        }}
      >
        <span style={{ width: 20, height: 2, background: currentTheme.textPrimary, borderRadius: 2, display: "block" }} />
        <span style={{ width: 20, height: 2, background: currentTheme.textPrimary, borderRadius: 2, display: "block" }} />
        <span style={{ width: 20, height: 2, background: currentTheme.textPrimary, borderRadius: 2, display: "block" }} />
      </button>

      {isSideMenuOpen && (
        <>
          <div
            onClick={() => setIsSideMenuOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 9998, backdropFilter: "blur(4px)" }}
          />
          <nav
            role="navigation"
            aria-label="Menu Lateral"
            style={{
              position: "fixed", top: 0, right: 0, height: "100vh", width: "clamp(260px, 30vw, 320px)",
              background: currentTheme.surface, borderLeft: `1px solid ${currentTheme.border}`,
              zIndex: 9999, display: "flex", flexDirection: "column", padding: "40px 32px",
              boxShadow: "-24px 0 60px rgba(0,0,0,0.5)",
              animation: "slideIn 0.25s ease"
            }}
          >
            <style>{`@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
              <span style={{ fontSize: "calc(10px + var(--fs-offset))", fontWeight: 600, letterSpacing: 2, color: currentTheme.neonPurple, textTransform: "uppercase" }}>Navegação</span>
              <button
                onClick={() => setIsSideMenuOpen(false)}
                aria-label="Fechar menu"
                style={{ background: "none", border: "none", color: currentTheme.textSecondary, cursor: "pointer", padding: 4, lineHeight: 1, fontSize: 20 }}
              >✕</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                { label: "Home", url: "#home" },
                { label: "Sobre", url: "#sobre" },
                { label: "Trajetória", url: "#experiência" },
                { label: "Projetos", url: "#projetos" },
                { label: "Contato", url: "#contato" }
              ].map((link, idx) => (
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

      {/* COMPONENTE: PAINEL FLUTUANTE DE ACESSIBILIDADE NATIVO (♿) */}
      <div style={{ position: "fixed", bottom: "24px", left: "24px", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
        {isAccessMenuOpen && (
          <div style={{ background: "rgba(24, 24, 27, 0.9)", backdropFilter: "blur(12px)", border: `1px solid ${currentTheme.border}`, padding: "20px", borderRadius: isHighContrast ? "0px" : "12px", display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 20px 40px rgba(0,0,0,0.5)", width: "240px", textAlign: "left" }}>
            <div style={{ fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, letterSpacing: 1, color: currentTheme.accent, borderBottom: `1px solid ${currentTheme.border}`, paddingBottom: 6 }}>FERRAMENTAS DE ACESSIBILIDADE</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "calc(13px + var(--fs-offset))", color: currentTheme.textPrimary }}>Alto Contraste</span>
              <button onClick={() => setIsHighContrast(!isHighContrast)} className="access-btn" style={{ padding: "6px 12px", background: currentTheme.textPrimary, color: currentTheme.bg, border: "none", borderRadius: 4, fontSize: "calc(11px + var(--fs-offset))", fontWeight: 600, cursor: "pointer" }}>{isHighContrast ? "Desativar" : "Ativar"}</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: "calc(13px + var(--fs-offset))", color: currentTheme.textPrimary }}>Tamanho do Texto</span>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => setFontSizeModifier(prev => Math.max(0, prev - 2))} className="access-btn" style={{ flex: 1, padding: "6px", background: currentTheme.surface, color: currentTheme.textPrimary, border: `1px solid ${currentTheme.border}`, cursor: "pointer", borderRadius: 4, fontSize: "calc(12px + var(--fs-offset))", fontWeight: "bold" }}>A-</button>
                <button onClick={() => setFontSizeModifier(prev => Math.min(8, prev + 2))} className="access-btn" style={{ flex: 1, padding: "6px", background: currentTheme.surface, color: currentTheme.textPrimary, border: `1px solid ${currentTheme.border}`, cursor: "pointer", borderRadius: 4, fontSize: "calc(12px + var(--fs-offset))", fontWeight: "bold" }}>A+</button>
              </div>
            </div>
          </div>
        )}
        <button onClick={() => setIsAccessMenuOpen(!isAccessMenuOpen)} className="access-btn" style={{ width: "48px", height: "44px", borderRadius: isHighContrast ? "0px" : "50%", background: currentTheme.surfaceActive, color: isHighContrast ? "#000000" : "#FAFAFA", border: `1px solid ${currentTheme.border}`, fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>♿</button>
      </div>

    </div>
  );
}