import { useMemo, useState } from "react";
import { CATEGORIES, PROJECTS } from "../data/projects";
import { mediaDe } from "../data/media";
import { ArrowIcon } from "./Icons";
import Reveal from "./Reveal";

function ProjectCard({ project, t, translate, lang, onOpen, index }) {
  const tags = project.tags?.length ? project.tags : [project.tag];
  const cover = mediaDe(project.id)?.cover;
  const coverAlt = cover && lang === "en" ? cover.altEn || cover.alt : cover?.alt;

  return (
    <Reveal as="article" className="card" delay={Math.min(index, 5) * 60}>
      <div className={`card__media ${cover ? "" : "card__media--empty"}`}>
        {cover ? (
          <img
            src={cover.src}
            alt={coverAlt}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <span aria-hidden="true">{tags[0]}</span>
        )}
      </div>

      <div className="card__body">
        <p className="card__tags">{tags.map((tag) => t.projects.categoryLabels[tag]).join(" · ")}</p>
        <h3 className="card__title">
          <button type="button" onClick={() => onOpen(project)}>
            {translate(project, "title")}
          </button>
        </h3>
        <p className="card__summary">{translate(project, "summary")}</p>
        <p className="card__footer">
          <span>{t.projects.cta}</span>
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </p>
      </div>
    </Reveal>
  );
}

export default function Projects({ t, translate, lang, onOpen }) {
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    if (category === "Todos") return PROJECTS;
    return PROJECTS.filter((project) =>
      project.tags ? project.tags.includes(category) : project.tag === category
    );
  }, [category]);

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2 className="display" id="projetos-title" style={{ fontSize: "var(--step-3)" }}>
            {t.projects.heading}
          </h2>
        </Reveal>

        <Reveal>
          <div className="filters" role="group" aria-label={t.projects.filterLabel}>
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                className="filter"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {t.projects.categoryLabels[item]}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="visually-hidden" role="status">
          {t.projects.resultCount(filtered.length)}
        </p>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              project={project}
              t={t}
              translate={translate}
              lang={lang}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
