import { useCallback, useState } from "react";
import { ArrowIcon, ArtifactIcon, CloseIcon } from "./Icons";
import { useDialog } from "../hooks/useDialog";
import { mediaDe } from "../data/media";
import { campoDoProjeto, evidenciasDoProjeto } from "../data/projects";

/** Bloco padrão de seção do estudo de caso. */
function Bloco({ label, children, note, className = "" }) {
  return (
    <section className={`modal__block ${className}`.trim()}>
      <h3 className="modal__label">{label}</h3>
      {note && <p className="modal__note">{note}</p>}
      {children}
    </section>
  );
}

function ListaSimples({ items }) {
  return (
    <ul className="tick-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProjectModal({ project, t, lang, onClose }) {
  const [zoom, setZoom] = useState(null);

  // com a imagem ampliada aberta, Esc e clique fora fecham só a imagem
  const handleClose = useCallback(() => {
    if (zoom) setZoom(null);
    else onClose();
  }, [zoom, onClose]);

  const panelRef = useDialog(true, handleClose);
  const campo = (key) => campoDoProjeto(project, key, lang);
  const media = mediaDe(project.id);
  const evidencias = evidenciasDoProjeto(project, lang);

  const legenda = (item) => (lang === "en" ? item.captionEn || item.caption : item.caption);
  const alternativo = (item) => (lang === "en" ? item.altEn || item.alt : item.alt);

  const role = campo("role") || [];
  const scope = campo("scope") || [];
  const process = campo("process") || [];
  const fronts = campo("fronts") || [];
  const artifacts = campo("artifacts") || [];
  const results = campo("results") || [];
  const nextSteps = campo("nextSteps") || [];
  const validation = campo("validation");

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && handleClose()}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={panelRef}
        tabIndex={-1}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label={t.modal.close}>
          <CloseIcon />
        </button>

        <p className="modal__tags">
          {project.categories.map((item) => t.projects.categoryLabels[item]).join(" · ")}
        </p>
        <h2 className="modal__title" id="modal-title">
          {campo("title")}
        </h2>

        <Bloco label={t.modal.contextLabel}>
          <p className="modal__text">{campo("context")}</p>
        </Bloco>

        {role.length > 0 && (
          <Bloco label={t.modal.roleLabel} className="callout">
            <ListaSimples items={role} />
          </Bloco>
        )}

        {scope.length > 0 && (
          <Bloco label={t.modal.scopeLabel}>
            <dl className="facts">
              {scope.map((item) => (
                <div className="facts__row" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Bloco>
        )}

        {media?.gallery?.length > 0 && (
          <Bloco label={t.modal.galleryLabel}>
            <div className="gallery">
              {media.gallery.map((item) => (
                <figure className="shot" key={item.src}>
                  <button
                    type="button"
                    className="shot__button"
                    onClick={() => setZoom(item)}
                    aria-label={`${t.modal.zoom}: ${legenda(item)}`}
                  >
                    <img src={item.src} alt={alternativo(item)} loading="lazy" decoding="async" />
                    <span className="shot__badge">{item.source}</span>
                  </button>
                  <figcaption className="shot__caption">{legenda(item)}</figcaption>
                </figure>
              ))}
            </div>
          </Bloco>
        )}

        {process.length > 0 && (
          <Bloco label={t.modal.processLabel}>
            <ol className="process">
              {process.map((step, index) => (
                <li className="process__item" key={step.step}>
                  <span className="process__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <p className="process__step">{step.step}</p>
                    <p className="process__detail">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Bloco>
        )}

        {fronts.length > 0 && (
          <Bloco label={t.modal.frontsLabel}>
            <dl className="facts facts--stack">
              {fronts.map((front) => (
                <div className="facts__row" key={front.name}>
                  <dt>{front.name}</dt>
                  <dd>{front.detail}</dd>
                </div>
              ))}
            </dl>
          </Bloco>
        )}

        {artifacts.length > 0 && (
          <Bloco label={t.modal.artifactsLabel}>
            <ListaSimples items={artifacts} />
          </Bloco>
        )}

        {validation && (
          <Bloco label={t.modal.validationLabel}>
            <p className="modal__text">{validation}</p>
          </Bloco>
        )}

        {results.length > 0 && (
          <Bloco label={t.modal.resultsLabel}>
            <ListaSimples items={results} />
          </Bloco>
        )}

        {nextSteps.length > 0 && (
          <Bloco label={t.modal.nextStepsLabel} note={t.modal.nextStepsNote} className="modal__block--future">
            <ListaSimples items={nextSteps} />
          </Bloco>
        )}

        {evidencias.length > 0 && (
          <Bloco label={t.modal.evidenceLabel}>
            <ul className="artifacts">
              {evidencias.map((item) => {
                const conteudo = (
                  <>
                    <span className="artifact__icon" aria-hidden="true">
                      <ArtifactIcon type={item.type} />
                    </span>
                    <span>
                      <span className="artifact__label">{item.label}</span>
                      <span className="artifact__desc">{item.desc}</span>
                    </span>
                    <span className="artifact__cue">
                      {item.url ? <ArrowIcon /> : t.modal.restricted}
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.url ? (
                      <a className="artifact" href={item.url} target="_blank" rel="noopener noreferrer">
                        {conteudo}
                      </a>
                    ) : (
                      <div className="artifact artifact--static">{conteudo}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Bloco>
        )}

        {zoom && (
          <div className="zoom" onClick={() => setZoom(null)}>
            <img src={zoom.src} alt={alternativo(zoom)} />
            <p className="zoom__caption">{legenda(zoom)}</p>
            <button type="button" className="zoom__close" aria-label={t.modal.closeZoom}>
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
