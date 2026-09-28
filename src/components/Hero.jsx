import { ArrowIcon } from "./Icons";
import { PERFIL } from "../data/translations";
import recorte from "../assets/henrique-recorte-limpo.webp";

export default function Hero({ t }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <div>
          <p className="eyebrow enter" style={{ "--enter-delay": "0ms" }}>
            {t.hero.eyebrow}
          </p>
          <h1 className="hero__name enter" id="hero-title" style={{ "--enter-delay": "80ms" }}>
            {PERFIL.nome}
          </h1>
          <p className="hero__role enter" style={{ "--enter-delay": "160ms" }}>
            {t.hero.role}
          </p>
          <p className="hero__lede enter" style={{ "--enter-delay": "240ms" }}>
            {t.hero.lede}
          </p>

          <div className="hero__actions enter" style={{ "--enter-delay": "320ms" }}>
            <a className="btn btn--primary" href="#projetos">
              {t.hero.ctaPrimary}
              <span className="btn__arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a
              className="btn btn--ghost"
              href={PERFIL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.ctaLinkedin}
            </a>
            <a className="btn btn--quiet" href="#contato">
              {t.hero.ctaContact}
            </a>
          </div>

          <ul className="proof enter" style={{ "--enter-delay": "400ms" }}>
            {t.hero.proof.map((item) => (
              <li key={item} className="proof__item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="portrait enter" style={{ "--enter-delay": "200ms" }}>
          <span className="portrait__ring" aria-hidden="true" />
          <span className="portrait__shape">
            <img
              className="portrait__img"
              src={recorte}
              alt={t.hero.portraitAlt}
              width="375"
              height="449"
              fetchpriority="high"
              decoding="async"
            />
          </span>
        </figure>
      </div>
    </section>
  );
}
