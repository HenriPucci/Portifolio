import { useState } from "react";
import Reveal from "./Reveal";

const ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mvznjqap";

export default function Contact({ t }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // campo isca: robô preenche, pessoa não vê
    if (form.elements.website?.value) return;

    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error(`Formspree respondeu ${response.status}`);

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const submitLabel = {
    idle: t.form.submit,
    sending: t.form.sending,
    ok: t.form.submit,
    error: t.form.retry
  }[status];

  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className="shell contact-grid">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2
            className="display"
            id="contato-title"
            style={{ fontSize: "var(--step-3)", margin: "var(--space-2) 0 var(--space-3)" }}
          >
            {t.contact.heading}
          </h2>
          <p style={{ color: "var(--text-2)", maxWidth: "38ch" }}>{t.contact.description}</p>

          <div className="contact-links">
            {t.contact.links.map((link) => (
              <a
                key={link.platform}
                className="contact-link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span className="contact-link__platform">{link.platform}</span>
                  <span className="contact-link__label" style={{ display: "block" }}>
                    {link.label}
                  </span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form className="form" onSubmit={handleSubmit} noValidate={false}>
            <div className="field">
              <label className="field__label" htmlFor="campo-nome">
                {t.form.nameLabel}
              </label>
              <input
                className="field__control"
                id="campo-nome"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder={t.form.namePlaceholder}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="campo-email">
                {t.form.emailLabel}
              </label>
              <input
                className="field__control"
                id="campo-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder={t.form.emailPlaceholder}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="campo-mensagem">
                {t.form.messageLabel}
              </label>
              <textarea
                className="field__control"
                id="campo-mensagem"
                name="message"
                rows="5"
                required
                placeholder={t.form.messagePlaceholder}
              />
            </div>

            <div className="visually-hidden" aria-hidden="true">
              <label htmlFor="campo-site">{t.form.honeypot}</label>
              <input id="campo-site" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              className="btn btn--primary form__submit"
              disabled={status === "sending"}
              style={{ justifyContent: "center" }}
            >
              {submitLabel}
            </button>

            <p
              className={`form__status ${
                status === "ok" ? "form__status--ok" : status === "error" ? "form__status--error" : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {status === "ok" && t.form.success}
              {status === "error" && t.form.error}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
