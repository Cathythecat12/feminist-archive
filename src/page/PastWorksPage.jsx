import { Bookmark } from "lucide-react";
import { articles as englishArticles } from "../data/articles-en";
import { articles as chineseArticles } from "../data/articles-zh";

function PastWorksPage({ language, onBack, onOpenArticle, setCurrentPage }) {
  const zh = language === "zh";
  const articles = (zh ? chineseArticles : englishArticles).filter(
    (article) => !article.hidden,
  );

  return (
    <div className="past-works-page">
      <header className="past-works-topbar">
        <div className="past-works-nav-left">
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
          <span>/</span>
          <button onClick={onBack}>
            {zh ? "七月期刊" : "July Issue"}
          </button>
        </div>

        <button className="past-works-logo" onClick={() => setCurrentPage("main")}>
          Feminist Archive
        </button>

        <div className="past-works-nav-right">
          <button onClick={() => setCurrentPage("donation-drive")}>
            {zh ? "捐助" : "Donate"}
          </button>
          <span>/</span>
          <button onClick={() => setCurrentPage("newsletter-page")}>
            {zh ? "通讯" : "Newsletter"}
          </button>
        </div>
      </header>

      <main className="past-works-main">
        <section className="past-works-title-row">
          <div>
            <div className="past-works-kicker">
              {zh ? "FEMINIST ARCHIVE / 往期作品" : "FEMINIST ARCHIVE / PAST WORKS"}
            </div>
            <h1>{zh ? "阅读往期作品" : "Read Past Works"}</h1>
          </div>

          <span>{zh ? `${articles.length} 篇` : `${articles.length} entries`}</span>
        </section>

        <section className="past-works-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              className="past-works-card"
              onClick={() => onOpenArticle(article)}
            >
              <div className="past-works-image-wrap">
                <img
                  src={article.image || "/images/文章素材图5.png"}
                  alt={article.title}
                  loading="lazy"
                />
              </div>

              <div className="past-works-meta">
                <Bookmark size={17} strokeWidth={2} aria-hidden="true" />
                <span>{article.category || (zh ? "文章" : "Essay")}</span>
              </div>

              <h2>{article.title}</h2>

              {article.excerpt && <p>{article.excerpt}</p>}

              <div className="past-works-author">
                <span>{article.author || "Feminist Archive"}</span>
                {(article.readTime || article.date) && (
                  <small>{article.readTime || article.date}</small>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default PastWorksPage;
