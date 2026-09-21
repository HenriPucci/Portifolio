import { useCallback, useState } from "react";
import { ArrowIcon, ArtifactIcon, CloseIcon } from "./Icons";
import { useDialog } from "../hooks/useDialog";
import { mediaDe } from "../data/media";

export default function ProjectModal({ project, t, translate, lang, onClose }) {
  const [zoom, setZoom] = useState(null);

  // com a imagem ampliada aberta, Esc e clique fora fecham só a imagem
  const handleClose = useCallback(() => {
    if (zoom) setZoom(null);
    else onClose();
  }, [zoom, onClose]);

  const panelRef = useDialog(true, handleClose);
  const tags = project.tags?.length ? project.tags : [project.tag];
  const workshopDetail = translate(project, "workshopDetail");
  const media = mediaDe(project.id);
  const legenda = (item) => (lang === "en" ? item.captionEn || item.caption : item.caption);
  const alternativo = (item) => (lang === "en" ? item.altEn || item.alt : item.alt);

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

        <p className="modal__tags">{tags.map((tag) => t.projects.categoryLabels[tag]).join(" · ")}</p>
        <h2 className="modal__title" id="modal-title">
          {translate(project, "title")}
        </h2>

        <div className="modal__block">
          <h3 className="modal__label">{t.modal.contextLabel}</h3>
          <p className="modal__text">{translate(project, "context")}</p>
        </div>

        {media?.gallery?.length > 0 && (
          <div className="modal__block">
            <h3 className="modal__label">{t.modal.galleryLabel}</h3>
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
          </div>
        )}

        {workshopDetail && (
          <div className="modal__block callout">
            <h3 className="modal__label">{t.modal.workshopLabel}</h3>
            <p>{workshopDetail}</p>
          </div>
        )}

        <div className="modal__block">
          <h3 className="modal__label">{t.modal.processLabel}</h3>
          <ol className="process">
            {translate(project, "process").map((step, index) => (
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
        </div>

        <div className="modal__block">
          <h3 className="modal__label">{t.modal.artifactsLabel}</h3>
          <ul className="artifacts">
            {project.artifacts.map((artifact) => {
              const content = (
                <>
                  <span className="artifact__icon" aria-hidden="true">
                    <ArtifactIcon type={artifact.type} />
                  </span>
                  <span>
                    <span className="artifact__label">{artifact.label}</span>
                    <span className="artifact__desc">{artifact.desc}</span>
                  </span>
                  <span className="artifact__cue">
                    {artifact.url ? <ArrowIcon /> : t.modal.restricted}
                  </span>
                </>
              );

              return (
                <li key={artifact.label}>
                  {artifact.url ? (
                    <a
                      className="artifact"
                      href={artifact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="artifact artifact--static">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

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
