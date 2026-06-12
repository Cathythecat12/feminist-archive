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
        className={`magazine-menu-panel ${zh ? "zh" : "en"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="magazine-menu-topline">
          <button className="magazine-menu-close" onClick={onClose}>
            <span>×</span>
            {zh ? "关闭" : "Close"}
          </button>
        </div>

        <div className="magazine-menu-body">
          <nav className="magazine-menu-routes" aria-label="Editorial sections">
            <button onClick={() => goTo("writing-page")}>
              <span>{zh ? "写作" : "Writing"}</span>
              <em>
                {zh
                  ? "以女性主义、精神分析与批判理论进入权力、性别与日常生活。"
                  : "Feminist, psychoanalytic and critical approaches to power, gender and everyday life."}
              </em>
            </button>

            <button onClick={() => goTo("reviews-page")}>
              <span>{zh ? "书评 / 导读" : "Reviews / Guides"}</span>
              <em>
                {zh
                  ? "对仍在扰动当下的书籍、概念与思想传统进行细读、导读与书评。"
                  : "Close readings of books, concepts and theoretical traditions that continue to unsettle the present."}
              </em>
            </button>

            <button onClick={() => goTo("archive-page")}>
              <span>{zh ? "归档" : "Archive"}</span>
              <em>
                {zh
                  ? "保存文章、概念、作者与那些不应被信息流吞没的思想痕迹。"
                  : "Essays, concepts, authors and traces of thought that should not disappear into feeds."}
              </em>
            </button>

            <button onClick={() => goTo("reading-room")}>
              <span>{zh ? "阅读室" : "Reading Room"}</span>
              <em>
                {zh
                  ? "为深度阅读准备的书房：书籍、导读、路径与缓慢学习。"
                  : "A room for slower study: books, guides, reading paths and return."}
              </em>
            </button>
          </nav>

          <div className="magazine-menu-side">
            <nav className="magazine-menu-secondary" aria-label="Explore">
              <span>{zh ? "探索" : "Explore"}</span>
              <button onClick={() => goTo("guidelines")}>
                {zh ? "投稿指南" : "Submission Guide"}
              </button>
              <button onClick={() => goTo("monthly-theme")}>
                {zh ? "六月期刊" : "June Issue"}
              </button>
              <button onClick={() => goTo("summer-update")}>
                {zh ? "夏日更新" : "Summer Update"}
              </button>
            </nav>

            <nav className="magazine-menu-tertiary" aria-label="About and support">
              <div>
                <span>{zh ? "关于我们" : "About us"}</span>
                <button onClick={() => goTo("our-story")}>
                  {zh ? "我们的故事" : "Our Story"}
                </button>
                <button onClick={() => goTo("contact-page")}>
                  {zh ? "联系" : "Contact"}
                </button>
              </div>

              <div>
                <span>{zh ? "支持我们" : "Support us"}</span>
                <button onClick={() => goTo("newsletter-page")}>
                  {zh ? "通讯" : "Newsletter"}
                </button>
                <button onClick={() => goTo("donation-drive")}>
                  {zh ? "捐助" : "Donate"}
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className="magazine-menu-footer">
          <p>
            {zh
              ? "一个独立女性主义出版平台：写作、书评、导读与档案保存。"
              : "An independent feminist publication for essays, reviews, guides, and archival writing."}
          </p>

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
