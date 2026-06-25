import { articles as englishArticles } from "../data/articles-en";
import { articles as chineseArticles } from "../data/articles-zh";

import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { SiBluesky } from "react-icons/si";
import { useState, useEffect } from "react";
import MagazineMenuOverlay from "../components/MagazineMenuOverlay";

const SHOW_PARLOUR_LINK = false;

function MagazinePage({ language, onBack, onOpenArticle, setCurrentPage }) {
  const articles = language === "zh" ? chineseArticles : englishArticles;
  const visibleArticles = articles.filter((article) => !article.hidden);

  const heroArticle =
    visibleArticles.find((article) => article.id === "refusal-and-memory") ||
    visibleArticles[0];
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    
    const searchResults = visibleArticles.filter((article) => {
      const q = searchQuery.trim().toLowerCase();
    
      if (!q) return false;
    
      return (
        article.title?.toLowerCase().includes(q) ||
        article.excerpt?.toLowerCase().includes(q) ||
        article.category?.toLowerCase().includes(q) ||
        article.author?.toLowerCase().includes(q) ||
        article.content?.toLowerCase().includes(q) ||
        article.tags?.join(" ").toLowerCase().includes(q)
      );
    });
    
    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === "Escape") {
          setShowSearch(false);
          setShowMenu(false);
          setSearchQuery("");
        }
      };
    
      window.addEventListener("keydown", handleEsc);
    
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);
    return (
        <div className="magazine-page">
          {showMenu && (
            <MagazineMenuOverlay
              language={language}
              setCurrentPage={setCurrentPage}
              onClose={() => setShowMenu(false)}
            />
          )}
      
          {showSearch && (
            <div className="magazine-search-overlay">
              <div className="magazine-search-panel">
      
                <button
                  className="magazine-search-close"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                  }}
                >
                  ×
                </button>
      
                <div className="magazine-search-label">
                  {language === "zh"
                    ? "搜索档案"
                    : "SEARCH THE ARCHIVE"}
                </div>
      
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === "zh"
                      ? "搜索标题、作者、关键词、正文……"
                      : "Search title, author, keyword, text..."
                  }
                />
      
                <div className="magazine-search-results">
      
                  {searchQuery &&
                    searchResults.length === 0 && (
                      <p className="magazine-search-empty">
                        {language === "zh"
                          ? "没有找到相关文章。"
                          : "No essays found."}
                      </p>
                    )}
      
                  {searchResults
                    .slice(0, 6)
                    .map((article) => (
                      <article
                        key={article.id}
                        className="magazine-search-result"
                        onClick={() => {
                          setShowSearch(false);
                          setSearchQuery("");
                          onOpenArticle(article);
                        }}
                      >
                        <span>{article.category}</span>
      
                        <h3>{article.title}</h3>
      
                        <p>{article.excerpt}</p>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          )}
      
            <header className="magazine-topbar">
        <div className="magazine-left">
          <button onClick={() => setShowMenu(true)}>MENU</button>
          <span>/</span>
          <button onClick={() => setShowSearch(true)}>⌕</button>

          <div className="magazine-socials">



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

        <div className="magazine-logo" onClick={onBack}>
          Feminist Archive
        </div>

        <div className="magazine-right">
          <button onClick={() => setCurrentPage("donation-drive")}>DONATE</button>
          <button onClick={() => setCurrentPage("newsletter-page")}>
  NEWSLETTER
</button>
        </div>
      </header>

      <section
  className="magazine-video-hero"
  onClick={() => onOpenArticle(heroArticle)}
>
  <video
    className="magazine-hero-video"
    autoPlay
    muted
    loop
    playsInline
    poster={heroArticle?.image || "//images/文章素材图4.png"}
  >
    <source src="/images/magazine-hero.mp4" type="video/mp4" />
  </video>

  <div className="magazine-video-shade" />

  <div className="magazine-video-content">
    <div className="magazine-video-kicker">
      {language === "zh" ? "本月专题" : "THIS MONTH"}
    </div>

    <h1>
      {language === "zh"
        ? "写作、书评与女性主义探索"
        : "Writing, Reviews, and Feminist Inquiry"}
    </h1>

  </div>
</section>
      <section className="magazine-manifesto">

  <div className="manifesto-left">
    ARCHIVE / THEORY / MEMORY
  </div>

  <div className="manifesto-right">
    Feminist writing should not disappear into feeds,
    algorithms, or institutional silence.
  </div>

</section>

    

      <section className="magazine-all-grid">
        {visibleArticles.slice(4).map((article) => (
          <article
            key={article.id}
            className="magazine-card"
            onClick={() => onOpenArticle(article)}
          >
            <div
              className="magazine-card-image"
              style={{
                backgroundImage: `url(${article.image || "/images/文章素材图5.png"})`,
              }}
            />
            <div className="magazine-card-meta">{article.category}</div>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span>{article.author}</span>
          </article>
        ))}
      </section>
      <section className="magazine-featured">
        <div className="magazine-section-title">
          {language === "zh" ? "本月推荐" : "POPULAR THIS MONTH"}
        </div>

        <div className="magazine-card-grid">
          {visibleArticles.slice(0, 4).map((article) => (
            <article
              key={article.id}
              className="magazine-card"
              onClick={() => onOpenArticle(article)}
            >
              <div
                className="magazine-card-image"
                style={{
                  backgroundImage: `url(${article.image || "/images/文章素材图6.png"})`,
                }}
              />

              <div className="magazine-card-meta">
                {article.category}
              </div>

              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <span>{article.author}</span>
            </article>
          ))}
        </div>
      </section>
      
      <footer className="magazine-footer">
        <div>
          <div className="magazine-footer-logo">Feminist Archive</div>
          <p>
            {language === "zh"
              ? "一个独立的女性主义理论、文章与档案写作刊物。"
              : "An independent journal of feminist theory, essays, and archival writing."}
          </p>
          <div className="magazine-footer-socials">

  <a
    href="https://instagram.com/feministarchivejournal"
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

</div>
        </div>

        <div>
          <h4>{language === "zh" ? "栏目" : "SECTIONS"}</h4>
          <button onClick={onBack}>{language === "zh" ? "主页" : "Home"}</button>
          <button onClick={() => setCurrentPage("archive-page")}>
            {language === "zh" ? "归档" : "Archive"}
          </button>
          <button onClick={() => setCurrentPage("contact-page")}>
  {language === "zh" ? "联系" : "Contact"}
</button>
        </div>

        <div>
          <h4>{language === "zh" ? "支持我们" : "SUPPORT US"}</h4>
          <button onClick={() => setCurrentPage("donation-drive")}>
            {language === "zh" ? "捐助" : "Donate"}
          </button>
          <button onClick={() => setCurrentPage("newsletter-page")}>
  {language === "zh" ? "通讯" : "Newsletter"}
</button>
          <button onClick={() => setCurrentPage("news-page")}>
  {language === "zh" ? "消息" : "News"}
</button>
{SHOW_PARLOUR_LINK && (
  <button
    className="parlour-secret-link"
    onClick={() => setCurrentPage("parlour")}
  >
    {language === "zh" ? "沙龙" : "The Parlour"}
  </button>
)}
          <button
            className="magazine-footer-parallax"
            onClick={() => setCurrentPage("parallax")}
          >
            {language === "zh" ? "思想余温" : "Parallax"}
          </button>

        </div>
        

        
      </footer>
    </div>

);

}
export default MagazinePage;
