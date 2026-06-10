import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

function MagazineMenuOverlay({ language, setCurrentPage, onClose }) {
  const zh = language === "zh";

  const goTo = (page) => {
    onClose();
    setCurrentPage(page);
  };

  return (
    <div className="magazine-menu-overlay" onClick={onClose}>
      <div
        className="magazine-menu-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="magazine-menu-topline">
          <button className="magazine-menu-close" onClick={onClose}>
            <span>×</span>
            {zh ? "关闭" : "Close"}
          </button>

          <div className="magazine-menu-socials" aria-label="Follow us">
            <a
              href="https://www.instagram.com/feministarchivejournal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://bsky.app/profile/feministarchive.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiBluesky />
            </a>
            <a
              href="https://x.com/FeministArchiv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCnw53eUKlZOK3Znp1AvY0Cw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="magazine-menu-body">
          <nav className="magazine-menu-routes" aria-label="Magazine sections">
            <button onClick={() => goTo("writing-page")}>
              <span>{zh ? "写作" : "Writing"}</span>
              <em>
                {zh
                  ? "批判、经验、记忆与权力之间的女性主义长篇写作。"
                  : "Critical essays across memory, power, everyday life, and feminist thought."}
              </em>
            </button>

            <button onClick={() => goTo("reviews-page")}>
              <span>{zh ? "书评 / 导读" : "Reviews / Guides"}</span>
              <em>
                {zh
                  ? "对经典书籍、思想文本与关键概念的导读和书评。"
                  : "Guides and reviews for books, theory, and key feminist concepts."}
              </em>
            </button>
          </nav>

          <nav className="magazine-menu-secondary" aria-label="Site links">
            <button onClick={() => goTo("archive-page")}>
              {zh ? "归档" : "Archive"}
            </button>
            <button onClick={() => goTo("reading-room")}>
              {zh ? "阅读室" : "Reading Room"}
            </button>
            <button onClick={() => goTo("contact-page")}>
              {zh ? "联系" : "Contact"}
            </button>
          </nav>
        </div>

        <div className="magazine-menu-footer">
          <p>
            {zh
              ? "Feminist Archive 是一个独立女性主义写作、书评与档案平台。"
              : "An independent feminist platform for essays, reviews, guides, and archival writing."}
          </p>

          <div className="magazine-menu-actions">
            <button onClick={() => goTo("newsletter-page")}>
              {zh ? "通讯" : "Newsletter"}
            </button>
            <button onClick={() => goTo("donation-drive")}>
              {zh ? "捐助" : "Donate"}
            </button>
          </div>

          <div className="magazine-menu-follow">
            <span>{zh ? "关注我们" : "Follow us"}</span>
            <a
              href="https://www.instagram.com/feministarchivejournal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://bsky.app/profile/feministarchive.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiBluesky />
            </a>
            <a
              href="https://x.com/FeministArchiv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCnw53eUKlZOK3Znp1AvY0Cw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagazineMenuOverlay;
