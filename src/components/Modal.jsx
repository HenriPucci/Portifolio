import React, { useEffect, useRef } from "react";
import { CloseIcon, ArtifactIcon, ArrowIcon } from "./Icons";

export default function Modal({ project, onClose, theme, lang, modalT, getP, categoryLabels }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const keyHandler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", keyHandler);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", keyHandler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const title = getP(project, 'title');
  const context = getP(project, 'context');
  const workshopDetail = getP(project, 'workshopDetail');
  const process = getP(project, 'process');

  return (
    <div
      className="animate-backdrop"
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)",
        zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 16px"
      }}
    >
      <div
        ref={ref}
        className="animate-modal-content"
        style={{
          background: theme.surface, border: `1px solid ${theme.border}`,
          borderRadius: 16, width: "100%", maxWidth: 720,
          maxHeight: "88vh", overflowY: "auto",
          padding: "40px", position: "relative"
        }}
      >

        <button onClick={onClose} style={{
          position: "absolute", top: 20, right: 20,
          background: "none", border: "none", cursor: "pointer",
          color: theme.textSecondary, padding: 8, borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s"
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#ffffff08"; e.currentTarget.style.color = theme.textPrimary; }}
          onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = theme.textSecondary; }}
        >
          <CloseIcon />
        </button>

        <div style={{
          display: "inline-block", fontSize: 11, fontWeight: 600,
          textTransform: "uppercase", letterSpacing: 1.5,
          color: theme.accent, marginBottom: 12
        }}>
          {(project.tags && project.tags.length > 1 ? project.tags : [project.tag]).map(t => categoryLabels[t]).join(" · ")}
        </div>

        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 400,
          color: theme.textPrimary, lineHeight: 1.25, margin: "0 0 20px"
        }}>
          {title}
        </h2>

        <div style={{ marginBottom: 28 }}>
          <h4 style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: theme.textMuted, marginBottom: 8 }}>
            {modalT.contextLabel}
          </h4>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: theme.textSecondary }}>
            {context}
          </p>
        </div>

        {workshopDetail && (
          <div style={{
            marginBottom: 32, padding: "16px 20px", borderRadius: 10,
            background: "#ffffff03", borderLeft: `3px solid ${theme.accent}`
          }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2, color: theme.accent, marginBottom: 6 }}>
              {modalT.workshopLabel}
            </h4>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: theme.textPrimary }}>
              {workshopDetail}
            </p>
          </div>
        )}

        <div style={{ marginBottom: 32 }}>
          <h3 style={{
            fontSize: 11, fontWeight: 600, textTransform: "uppercase",
            letterSpacing: 1.5, color: theme.textMuted, margin: "0 0 16px"
          }}>
            {modalT.processLabel}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {process.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 16 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  border: `1px solid ${theme.border}`, background: "#ffffff06",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: 10, fontWeight: 600, color: theme.accent
                }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: theme.textPrimary, marginBottom: 4 }}>
                    {p.step}
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: theme.textSecondary }}>
                    {p.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: 11, fontWeight: 600, textTransform: "uppercase",
            letterSpacing: 1.5, color: theme.textMuted, margin: "0 0 12px"
          }}>
            {modalT.artifactsLabel}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {project.artifacts.map((a, i) => {
              const hasUrl = !!a.url;
              const Tag = hasUrl ? "a" : "div";
              const tagProps = hasUrl
                ? { href: a.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Tag
                  key={i}
                  {...tagProps}
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "12px 16px", borderRadius: 10,
                    border: `1px solid ${theme.border}`,
                    background: hasUrl ? "transparent" : "#ffffff01",
                    textDecoration: "none", transition: "all 0.2s",
                    opacity: hasUrl ? 1 : 0.6,
                    cursor: hasUrl ? "pointer" : "default"
                  }}
                  onMouseEnter={e => {
                    if (hasUrl) {
                      e.currentTarget.style.background = "#ffffff05";
                      e.currentTarget.style.borderColor = "#ffffff20";
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = hasUrl ? "transparent" : "#ffffff01";
                    e.currentTarget.style.borderColor = theme.border;
                  }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: "#ffffff06", display: "flex",
                    alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <ArtifactIcon type={a.type} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: theme.textPrimary }}>{a.label}</div>
                    <div style={{ fontSize: 11, color: theme.textSecondary, marginTop: 1 }}>{a.desc}</div>
                  </div>
                  <div style={{ flexShrink: 0, color: hasUrl ? theme.accent : theme.textMuted, fontSize: 11 }}>
                    {hasUrl ? <ArrowIcon /> : modalT.restricted}
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
