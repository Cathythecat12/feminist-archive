import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Bookmark, Search, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import MagazineMenuOverlay from "../components/MagazineMenuOverlay";
import { articles as englishArticles } from "../data/articles-en";
import { articles as chineseArticles } from "../data/articles-zh";

const hoverColors = [
  "#6f7f88",
  "#8a6f68",
  "#697f70",
  "#8b7a59",
  "#6d7086",
  "#7f6f7b",
  "#5f7d80",
  "#8a7460",
];

function EditorialFrontPage({ language, setLanguage, setCurrentPage, onOpenArticle }) {
  const zh = language === "zh";
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const articles = (zh ? chineseArticles : englishArticles).filter(
    (article) => !article.hidden,
  );
  const heroArticle =
    articles.find((article) => article.id.includes("football")) || articles[0];
  const remainingArticles = articles.filter((article) => article.id !== heroArticle?.id);
  const peekArticles = remainingArticles.slice(0, 4);
  const gridArticles = [heroArticle, ...remainingArticles].filter(Boolean);
  const searchableArticles = useMemo(() => articles, [articles]);
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return searchableArticles.filter((article) => {
      const haystack = [
        article.title,
        article.excerpt,
        article.category,
        article.kickerDetail,
        article.author,
        article.tags?.join(" "),
        Array.isArray(article.content) ? article.content.join(" ") : article.content,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [searchQuery, searchableArticles]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowMenu(false);
        setShowSearch(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openArticle = (article) => {
    onOpenArticle(article);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const labels = zh
    ? {
        archive: "归档",
        home: "首页",
        menu: "菜单",
        magazine: "杂志",
        readingRoom: "阅读室",
        newsletter: "通讯",
        switchLanguage: "EN",
        heroButton: "阅读文章",
        peekTitle: "继续向下阅读",
        peekNote: "下面还有更多文章",
        readEssay: "阅读文章",
        search: "搜索",
        searchPlaceholder: "搜索标题、作者、关键词、正文……",
        searchEmpty: "没有找到相关文章。",
        searchHint: "输入关键词，查找 Feminist Archive 文章。",
        footerTagline: "一个独立的女性主义理论、文章与档案写作平台。",
        sections: "栏目",
        support: "支持我们",
        contact: "联系",
        donate: "捐助",
        parallax: "思想余温",
      }
    : {
        archive: "Archive",
        home: "Home",
        menu: "Menu",
        magazine: "Magazine",
        readingRoom: "Reading Room",
        newsletter: "Newsletter",
        switchLanguage: "中文",
        heroButton: "Read essay",
        peekTitle: "Continue reading",
        peekNote: "More essays below",
        readEssay: "Read essay",
        search: "Search",
        searchPlaceholder: "Search titles, authors, keywords, text...",
        searchEmpty: "No essays found.",
        searchHint: "Type a keyword to search Feminist Archive essays.",
        footerTagline:
          "An independent journal of feminist theory, essays, and archival writing.",
        sections: "Sections",
        support: "Support Us",
        contact: "Contact",
        donate: "Donate",
        parallax: "Parallax",
      };

  return (
    <div className="editorial-front-page">
      <div className="editorial-front-pull-reveal" aria-hidden="true" />

      {showMenu && (
        <MagazineMenuOverlay
          language={language}
          setCurrentPage={setCurrentPage}
          onClose={() => setShowMenu(false)}
          panelClassName="editorial-front-menu"
        />
      )}

      {showSearch && (
        <div className="editorial-front-search-overlay" role="dialog" aria-modal="true">
          <div className="editorial-front-search-panel">
            <button
              className="editorial-front-search-close"
              type="button"
              aria-label={zh ? "关闭搜索" : "Close search"}
              onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
              }}
            >
              <X size={20} strokeWidth={1.7} aria-hidden="true" />
            </button>

            <span>{labels.search}</span>
            <input
              autoFocus
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={labels.searchPlaceholder}
            />
            {!searchQuery && <p>{labels.searchHint}</p>}

            <div className="editorial-front-search-results">
              {searchQuery && searchResults.length === 0 && (
                <p className="editorial-front-search-empty">{labels.searchEmpty}</p>
              )}

              {searchResults.slice(0, 8).map((article) => (
                <article
                  key={article.id}
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                    openArticle(article);
                  }}
                >
                  <span>{article.category || article.kickerDetail}</span>
                  <h3>{article.title}</h3>
                  {article.excerpt && <p>{article.excerpt}</p>}
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      <header className="editorial-front-header">
        <nav className="editorial-front-nav editorial-front-nav-left" aria-label="Primary">
          <button onClick={() => goToPage("main")}>{labels.home}</button>
          <span>/</span>
          <button onClick={() => setShowMenu(true)}>{labels.menu}</button>
          <button
            className="editorial-front-search-trigger"
            type="button"
            aria-label={labels.search}
            onClick={() => setShowSearch(true)}
          >
            <Search size={22} strokeWidth={1.55} aria-hidden="true" />
          </button>
        </nav>

        <button
          className="editorial-front-logo"
          onClick={() => goToPage("editorial-front")}
        >
          Feminist Archive
        </button>

        <nav className="editorial-front-nav editorial-front-nav-right" aria-label="Utility">
          <button onClick={() => goToPage("newsletter-page")}>{labels.newsletter}</button>
          <span>/</span>
          <button onClick={() => setLanguage(zh ? "en" : "zh")}>
            {labels.switchLanguage}
          </button>
        </nav>
      </header>

      <main className="editorial-front-main">
        {heroArticle && (
          <section
            className="editorial-front-hero"
            role="button"
            tabIndex={0}
            aria-label={`${labels.heroButton}: ${heroArticle.title}`}
            onClick={() => openArticle(heroArticle)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openArticle(heroArticle);
              }
            }}
          >
            <img src={heroArticle.image} alt="" aria-hidden="true" />
            <div className="editorial-front-hero-shade" />
            <div className="editorial-front-hero-copy">
              <h1>{heroArticle.title}</h1>
              {heroArticle.excerpt && <p>{heroArticle.excerpt}</p>}
            </div>
          </section>
        )}

        <section className="editorial-front-peek" aria-label={labels.peekTitle}>
          <div className="editorial-front-peek-head">
            <h2>{labels.peekTitle}</h2>
            <span>{labels.peekNote}</span>
          </div>

          <div className="editorial-front-peek-track">
            {peekArticles.map((article, index) => (
              <article
                key={article.id}
                className="editorial-front-peek-card"
                style={{ "--front-hover": hoverColors[index % hoverColors.length] }}
                onClick={() => openArticle(article)}
              >
                <img src={article.image || "/images/文章素材图5.png"} alt={article.title} />
                <div>
                  <span>{article.category || (zh ? "文章" : "Essay")}</span>
                  <h3>{article.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-front-all">
          <div className="editorial-front-river">
            {gridArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                zh={zh}
                onOpen={openArticle}
                label={labels.readEssay}
                color={hoverColors[index % hoverColors.length]}
                compact
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="editorial-front-footer">
        <div>
          <button onClick={() => goToPage("editorial-front")}>Feminist Archive</button>
          <p>{labels.footerTagline}</p>
        </div>

        <nav aria-label={labels.sections}>
          <span>{labels.sections}</span>
          <button onClick={() => goToPage("magazine")}>{labels.magazine}</button>
          <button onClick={() => goToPage("archive-page")}>{labels.archive}</button>
          <button onClick={() => goToPage("parallax")}>{labels.parallax}</button>
          <button onClick={() => goToPage("contact-page")}>{labels.contact}</button>
        </nav>

        <nav aria-label={labels.support}>
          <span>{labels.support}</span>
          <button onClick={() => goToPage("donation-drive")}>{labels.donate}</button>
          <button onClick={() => goToPage("newsletter-page")}>{labels.newsletter}</button>
          <div className="editorial-front-socials" aria-label="Social media">
            <a
              href="https://www.instagram.com/feministarchivejournal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/feminist-archive/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://bsky.app/profile/feministarchive.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bluesky"
            >
              <SiBluesky />
            </a>
            <a
              href="https://www.youtube.com/channel/UCnw53eUKlZOK3Znp1AvY0Cw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

function ArticleCard({ article, zh, onOpen, label, color, compact = false }) {
  return (
    <article
      className={`editorial-front-card ${compact ? "is-compact" : ""}`}
      style={{ "--front-hover": color }}
      onClick={() => onOpen(article)}
    >
      <div className="editorial-front-card-image">
        <img src={article.image || "/images/文章素材图5.png"} alt={article.title} />
      </div>

      <div className="editorial-front-card-meta">
        <Bookmark size={16} strokeWidth={1.9} aria-hidden="true" />
        <span>{article.kickerDetail || article.category || (zh ? "文章" : "Essay")}</span>
      </div>

      <h3>{article.title}</h3>

      {article.excerpt && <p>{article.excerpt}</p>}

      <div className="editorial-front-card-bottom">
        <span>{article.author || "Feminist Archive"}</span>
        <em>
          {label}
          <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
        </em>
      </div>
    </article>
  );
}

export default EditorialFrontPage;
