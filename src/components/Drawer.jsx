import { CloseIcon } from "./Icons";
import { useDialog } from "../hooks/useDialog";

export default function Drawer({ t, onClose }) {
  const panelRef = useDialog(true, onClose);

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <nav
        className="drawer"
        ref={panelRef}
        tabIndex={-1}
        aria-label={t.menu.title}
      >
        <div className="drawer__head">
          <span className="eyebrow">{t.menu.title}</span>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={t.menu.closeLabel}>
            <CloseIcon />
          </button>
        </div>

        <div className="drawer__nav">
          {t.nav.links.map((link) => (
            <a key={link.id} className="drawer__link" href={`#${link.id}`} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="drawer__foot">
          {t.contact.links.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
