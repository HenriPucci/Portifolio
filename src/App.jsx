import { useCallback, useMemo, useState } from "react";
import { TRANSLATIONS } from "./data/translations";
import { usePreferences } from "./hooks/usePreferences";
import { useActiveSection } from "./hooks/useActiveSection";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AccessibilityPanel from "./components/AccessibilityPanel";

const SECTION_IDS = ["home", "sobre", "trajetoria", "projetos", "contato"];

export default function App() {
  const {
    lang,
    toggleLang,
    highContrast,
    toggleContrast,
    fontStep,
    setFontStep,
    fontStepCount
  } = usePreferences();

  const [openProject, setOpenProject] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isA11yOpen, setA11yOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  const activeSection = useActiveSection(SECTION_IDS);

  const closeProject = useCallback(() => setOpenProject(null), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeA11y = useCallback(() => setA11yOpen(false), []);

  const headerProps = useMemo(
    () => ({ t, activeSection, lang, onToggleLang: toggleLang, onOpenMenu: () => setMenuOpen(true) }),
    [t, activeSection, lang, toggleLang]
  );

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t.skipLink}
      </a>

      <Header {...headerProps} />

      <main id="conteudo">
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} lang={lang} onOpen={setOpenProject} />
        <Skills t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />

      {isMenuOpen && <Drawer t={t} onClose={closeMenu} />}

      {openProject && (
        <ProjectModal project={openProject} t={t} lang={lang} onClose={closeProject} />
      )}

      <AccessibilityPanel
        t={t}
        isOpen={isA11yOpen}
        onToggle={() => setA11yOpen((open) => !open)}
        onClose={closeA11y}
        highContrast={highContrast}
        onToggleContrast={toggleContrast}
        fontStep={fontStep}
        onFontStep={setFontStep}
        fontStepCount={fontStepCount}
      />
    </>
  );
}
