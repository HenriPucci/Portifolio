import Reveal from "./Reveal";

export default function Experience({ t }) {
  return (
    <section id="trajetoria" className="section" aria-labelledby="trajetoria-title">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2 className="display section__title" id="trajetoria-title">
            {t.experience.heading}
          </h2>
        </Reveal>

        <ol className="timeline">
          {t.experience.items.map((item, index) => (
            <Reveal as="li" className="timeline__item" key={item.role} delay={index * 70}>
              <p className="timeline__period">{item.period}</p>
              <div>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__org">{item.org}</p>
              </div>
              <p className="timeline__desc">{item.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
