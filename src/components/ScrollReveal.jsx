import React, { useState, useEffect, useRef } from "react";

export default function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando 10% da seção estiver visível na tela
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: para de observar após animar uma vez
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.1, // Dispara quando 10% do elemento aparece
        rootMargin: "0px 0px -50px 0px" // Dispara um pouquinho antes de tocar o fundo da tela
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`reveal-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}