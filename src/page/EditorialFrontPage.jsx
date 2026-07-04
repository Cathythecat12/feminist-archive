import { ArrowRight, Bookmark, Search } from "lucide-react";
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
  const articles = (zh ? chineseArticles : englishArticles).filter(
    (article) => !article.hidden,
  );
  const heroArticle =
    articles.find((article) => article.id.includes("football")) || articles[0];
  const remainingArticles = articles.filter((article) => article.id !== heroArticle?.id);
  const peekArticles = remainingArticles.slice(0, 4);
  const gridArticles = [heroArticle, ...remainingArticles].filter(Boolean);

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
        magazine: "杂志",
        readingRoom: "阅读室",
        newsletter: "通讯",
        switchLanguage: "EN",
        heroKicker: "FEMINIST ARCHIVE / 今日首页",
        heroButton: "阅读文章",
        peekTitle: "继续向下阅读",
        peekNote: "下面还有更多文章",
        latestTitle: "今日混合",
        allTitle: "全部文章",
        readEssay: "阅读文章",
        footerTagline: "一个独立的女性主义理论、文章与档案写作平台。",
        sections: "栏目",
        support: "支持我们",
        contact: "联系",
        donate: "捐助",
        parallax: "思想余温",
      }
    : {
        archive: "Archive",
        magazine: "Magazine",
        readingRoom: "Reading Room",
        newsletter: "Newsletter",
        switchLanguage: "中文",
        heroKicker: "FEMINIST ARCHIVE / FRONT PAGE",
        heroButton: "Read essay",
        peekTitle: "Continue reading",
        peekNote: "More essays below",
        latestTitle: "Today's Mix",
        allTitle: "All Essays",
        readEssay: "Read essay",
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
      <header className="editorial-front-header">
        <nav className="editorial-front-nav editorial-front-nav-left" aria-label="Primary">
          <button onClick={() => goToPage("magazine")}>{labels.magazine}</button>
          <span>/</span>
          <button onClick={() => goToPage("archive-page")}>{labels.archive}</button>
          <button onClick={() => goToPage("reading-room")}>{labels.readingRoom}</button>
          <Search size={20} strokeWidth={1.7} aria-hidden="true" />
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
          <section className="editorial-front-hero">
            <img src={heroArticle.image} alt="" aria-hidden="true" />
            <div className="editorial-front-hero-shade" />
            <div className="editorial-front-hero-copy">
              <span>{labels.heroKicker}</span>
              <h1>{heroArticle.title}</h1>
              {heroArticle.excerpt && <p>{heroArticle.excerpt}</p>}
              <button onClick={() => openArticle(heroArticle)}>
                {labels.heroButton}
                <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </button>
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

        <section className="editorial-front-latest">
          <div className="editorial-front-section-head">
            <span>FEMINIST ARCHIVE</span>
            <h2>{labels.latestTitle}</h2>
          </div>

          <div className="editorial-front-card-grid">
            {gridArticles.slice(0, 4).map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                zh={zh}
                onOpen={openArticle}
                label={labels.readEssay}
                color={hoverColors[index % hoverColors.length]}
              />
            ))}
          </div>
        </section>

        <section className="editorial-front-all">
          <div className="editorial-front-section-head editorial-front-section-head-line">
            <span>{gridArticles.length} {zh ? "篇" : "entries"}</span>
            <h2>{labels.allTitle}</h2>
          </div>

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
