import { useEffect, useRef } from "react";
import { AccessibilityIcon } from "./Icons";

export default function AccessibilityPanel({
  t,
  isOpen,
  onToggle,
  onClose,
  highContrast,
  onToggleContrast,
  fontStep,
  onFontStep,
  fontStepCount
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onPointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) onClose();
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className="a11y" ref={wrapperRef}>
      {isOpen && (
        <div className="a11y__panel" id="painel-acessibilidade">
          <p className="a11y__title">{t.a11y.title}</p>

          <div className="a11y__row">
            <span className="a11y__row-label" id="rotulo-contraste">
              {t.a11y.contrast}
            </span>
            <div className="a11y__options" role="group" aria-labelledby="rotulo-contraste">
              <button
                type="button"
                className="a11y__option"
                aria-pressed={!highContrast}
                onClick={() => highContrast && onToggleContrast()}
              >
                {t.a11y.off}
              </button>
              <button
                type="button"
                className="a11y__option"
                aria-pressed={highContrast}
                onClick={() => !highContrast && onToggleContrast()}
              >
                {t.a11y.on}
              </button>
            </div>
          </div>

          <div className="a11y__row">
            <span className="a11y__row-label" id="rotulo-texto">
              {t.a11y.textSize}
            </span>
            <div className="a11y__options" role="group" aria-labelledby="rotulo-texto">
              {Array.from({ length: fontStepCount }, (_, step) => (
                <button
                  key={step}
                  type="button"
                  className="a11y__option"
                  aria-pressed={fontStep === step}
                  aria-label={t.a11y.textSizeOption(step)}
                  onClick={() => onFontStep(step)}
                >
                  {["A", "A+", "A++"][step]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="a11y__fab"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="painel-acessibilidade"
        aria-label={t.a11y.openLabel}
      >
        <AccessibilityIcon />
      </button>
    </div>
  );
}
