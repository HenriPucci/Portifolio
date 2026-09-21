import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "hp:preferencias";
const FONT_SCALES = [1, 1.125, 1.25];

function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Preferências do visitante (idioma, contraste, tamanho de texto).
 * Persistem no navegador e são reaplicadas no <html> para que CSS e
 * leitores de tela enxerguem o estado real da página.
 */
export function usePreferences() {
  const [lang, setLang] = useState(() => readStored().lang || "pt");
  const [highContrast, setHighContrast] = useState(() => Boolean(readStored().highContrast));
  const [fontStep, setFontStep] = useState(() => {
    const step = Number(readStored().fontStep);
    return Number.isInteger(step) && step >= 0 && step < FONT_SCALES.length ? step : 0;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang === "en" ? "en" : "pt-BR";
    root.dataset.theme = highContrast ? "contrast" : "dark";
    root.style.setProperty("--fs-scale", String(FONT_SCALES[fontStep]));
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lang, highContrast, fontStep }));
    } catch {
      /* navegação anônima ou storage bloqueado: preferência vale só nesta sessão */
    }
  }, [lang, highContrast, fontStep]);

  const toggleLang = useCallback(() => setLang((current) => (current === "pt" ? "en" : "pt")), []);
  const toggleContrast = useCallback(() => setHighContrast((current) => !current), []);

  return {
    lang,
    toggleLang,
    highContrast,
    toggleContrast,
    fontStep,
    setFontStep,
    fontStepCount: FONT_SCALES.length
  };
}
