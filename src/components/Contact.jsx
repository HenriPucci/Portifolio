import { useState } from "react";
import Reveal from "./Reveal";
import { PERFIL } from "../data/translations";
import { CheckIcon, CopyIcon, DownloadIcon } from "./Icons";

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mvznjqap";
const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact({ t }) {
  const [status, setStatus] = useState("idle");
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERFIL.email);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2400);
    } catch {
      // sem permissão de área de transferência: o endereço continua visível e clicável
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // campo isca: robô preenche, pessoa não vê
    if (form.elements.website?.value) return;

    const dados = new FormData(form);
    const nome = String(dados.get("name") || "").trim();
    const email = String(dados.get("email") || "").trim();
    const mensagem = String(dados.get("message") || "").trim();

    if (!nome || !mensagem || !EMAIL_VALIDO.test(email)) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");

    try {
      const resposta = await fetch(ENDPOINT, {
        method: "POST",
        body: dados,
        headers: { Accept: "application/json" }
      });

      if (!resposta.ok) throw new Error(`Formspree respondeu ${resposta.status}`);

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const rotuloEnvio = {
    idle: t.form.submit,
    invalid: t.form.submit,
    sending: t.form.sending,
    ok: t.form.submit,
    error: t.form.retry
  }[status];

  const mensagemStatus = {
    ok: t.form.success,
    error: t.form.error,
    invalid: t.form.invalid
  }[status];

  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className="shell contact-grid">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="display section__title" id="contato-title">
            {t.contact.heading}
          </h2>
          <p className="section__intro">{t.contact.description}</p>

          <div className="email-row">
            <a className="email-row__address" href={`mailto:${PERFIL.email}`}>
              {PERFIL.email}
            </a>
            <button type="button" className="btn btn--ghost btn--sm" onClick={copiarEmail} aria-label={t.contact.copyAria}>
              <span aria-hidden="true">{copiado ? <CheckIcon /> : <CopyIcon />}</span>
              {copiado ? t.contact.copied : t.contact.copy}
            </button>
          </div>
          <p className="visually-hidden" role="status">
            {copiado ? t.contact.copied : ""}
          </p>

          <div className="contact-links">
            <a
              className="contact-link"
              href={PERFIL.curriculo}
              download={PERFIL.curriculoDownload}
            >
              <span>
                <span className="contact-link__platform">PDF</span>
                <span className="contact-link__label">{t.contact.resume}</span>
              </span>
              <span aria-hidden="true">
                <DownloadIcon />
              </span>
            </a>
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
                  <span className="contact-link__label">{link.label}</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form className="form" onSubmit={handleSubmit} noValidate>
            <h3 className="form__title">{t.form.title}</h3>

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
            >
              {rotuloEnvio}
            </button>

            <p
              className={`form__status ${
                status === "ok" ? "form__status--ok" : mensagemStatus ? "form__status--error" : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {mensagemStatus}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
