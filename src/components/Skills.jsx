import Reveal from "./Reveal";

export default function Skills({ t }) {
  return (
    <section id="habilidades" className="section" aria-labelledby="habilidades-title">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2 className="display" id="habilidades-title" style={{ fontSize: "var(--step-3)" }}>
            {t.skills.heading}
          </h2>
        </Reveal>

        <div className="skills-grid">
          {t.skills.categories.map((group, index) => (
            <Reveal className="skill-card" key={group.category} delay={Math.min(index, 5) * 60}>
              <h3 className="skill-card__title">{group.category}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
