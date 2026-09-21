import { useEffect, useState } from "react";
import { MenuIcon } from "./Icons";

export default function Header({ t, activeSection, lang, onToggleLang, onOpenMenu }) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const lido = total > 0 ? Math.min(1, window.scrollY / total) : 0;
      document.documentElement.style.setProperty("--progress", lido.toFixed(4));
      setStuck(window.scrollY > 24);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`site-header ${stuck ? "is-stuck" : ""}`}>
      <div className="shell site-header__inner">
        <a className="brand" href="#home">
          <span className="brand__dot" aria-hidden="true" />
          Henrique Pucci
        </a>

        <nav className="nav nav--desktop" aria-label={t.nav.ariaLabel}>
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              className={`nav__link ${activeSection === link.id ? "is-active" : ""}`}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <button
            type="button"
            className="icon-btn icon-btn--label"
            onClick={onToggleLang}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para português"}
          >
            {t.langToggle}
          </button>
          <button
            type="button"
            className="icon-btn menu-trigger"
            onClick={onOpenMenu}
            aria-label={t.menu.openLabel}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      <span className="progress" aria-hidden="true" />
    </header>
  );
}
