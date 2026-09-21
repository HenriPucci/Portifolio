import Reveal from "./Reveal";

export default function About({ t }) {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="display" id="sobre-title" style={{ fontSize: "var(--step-3)" }}>
            {t.about.heading}
          </h2>
        </Reveal>

        <div className="about__body">
          <Reveal className="prose" delay={60}>
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "prose__lead" : undefined}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="aside-stack" delay={120}>
            <p className="quote">{t.about.quote}</p>
            <ul className="stats">
              {t.about.stats.map((stat) => (
                <li key={stat.label} className="stat">
                  <span className="stat__value">{stat.value}</span>
                  <span className="stat__label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
