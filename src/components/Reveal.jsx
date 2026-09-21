import { useEffect, useRef, useState } from "react";

/**
 * Revela o conteúdo quando ele entra na tela. Quem pediu menos movimento
 * recebe o conteúdo já visível, sem transição.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...rest }) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [visible, setVisible] = useState(prefersReduced);
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReduced || visible) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReduced, visible]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
