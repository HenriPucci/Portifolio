import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// O jsdom não implementa matchMedia, usado para detectar preferência de movimento.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false
  });
}

// IntersectionObserver alimenta a revelação por scroll: aqui tudo entra visível.
if (!window.IntersectionObserver) {
  window.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
    }
    observe(element) {
      this.callback([{ isIntersecting: true, target: element, boundingClientRect: { top: 0 } }]);
    }
    unobserve() {}
    disconnect() {}
  };
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (callback) => window.setTimeout(() => callback(Date.now()), 0);
  window.cancelAnimationFrame = (id) => window.clearTimeout(id);
}

Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  vi.restoreAllMocks();
});
