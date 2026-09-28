import { PERFIL } from "../data/translations";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>
          {t.footer.copyright}
          <span className="site-footer__role">{t.footer.role}</span>
        </p>
        <p>
          {t.footer.builtWith}{" "}
          <a href={`${PERFIL.github}/Portifolio`} target="_blank" rel="noopener noreferrer">
            {t.footer.sourceLink}
          </a>
        </p>
      </div>
    </footer>
  );
}
