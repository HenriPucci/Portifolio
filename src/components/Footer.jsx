export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>{t.footer.copyright}</p>
        <p>
          {t.footer.builtWith}{" "}
          <a href="https://github.com/HenriPucci/Portifolio" target="_blank" rel="noopener noreferrer">
            {t.footer.sourceLink}
          </a>
        </p>
      </div>
    </footer>
  );
}
