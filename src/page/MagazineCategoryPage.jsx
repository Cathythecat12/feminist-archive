import { articles as englishArticles } from "../data/articles-en";
import { articles as chineseArticles } from "../data/articles-zh";

const CATEGORY_COPY = {
  writing: {
    category: "Writing",
    en: {
      eyebrow: "FEMINIST ARCHIVE / WRITING",
      title: "Writing",
      intro:
        "Critical essays that move between memory, power, everyday life, and feminist thought.",
      empty: "No writing entries are available yet.",
      meta: "Essay",
    },
    zh: {
      eyebrow: "FEMINIST ARCHIVE / 写作",
      title: "写作",
      intro: "批判、记忆与经验之间，带来思考的女性主义写作。",
      empty: "还没有可显示的写作条目。",
      meta: "文章",
    },
  },
  reviews: {
    category: "Reviews",
    en: {
      eyebrow: "FEMINIST ARCHIVE / REVIEWS & GUIDES",
      title: "Reviews / Guides",
      intro: "Guides and reviews for classic books, theoretical texts, and key feminist concepts.",
      empty: "No review or guide entries are available yet.",
      meta: "Review",
    },
    zh: {
      eyebrow: "FEMINIST ARCHIVE / 书评与导读",
      title: "书评 / 导读",
      intro: "对经典书籍、思想文本与关键概念的导读和书评。",
      empty: "还没有可显示的书评或导读条目。",
      meta: "书评",
    },
  },
};

function MagazineCategoryPage({
  language,
  type,
  onBack,
  setCurrentPage,
  onOpenArticle,
}) {
  const zh = language === "zh";
  const copy = CATEGORY_COPY[type]?.[zh ? "zh" : "en"] || CATEGORY_COPY.writing.en;
  const category = CATEGORY_COPY[type]?.category || "Writing";
  const articles = zh ? chineseArticles : englishArticles;
  const visibleArticles = articles.filter(
    (article) => !article.hidden && article.category === category
  );

  return (
    <div className="magazine-category-page">
      <header className="magazine-category-topbar">
        <button onClick={() => setCurrentPage("magazine")}>
          {zh ? "杂志" : "Magazine"}
        </button>
        <button className="magazine-category-logo" onClick={onBack}>
          Feminist Archive
        </button>
        <button onClick={() => setCurrentPage(type === "writing" ? "reviews-page" : "writing-page")}>
          {type === "writing"
            ? zh
              ? "书评 / 导读"
              : "Reviews / Guides"
            : zh
              ? "写作"
              : "Writing"}
        </button>
      </header>

      <main>
        <section className="magazine-category-hero">
          <div className="magazine-category-eyebrow">{copy.eyebrow}</div>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
        </section>

        <section className="magazine-category-list-head">
          <span>{zh ? "最新" : "Latest"}</span>
          <span>{zh ? `${visibleArticles.length} 篇` : `${visibleArticles.length} entries`}</span>
        </section>

        {visibleArticles.length === 0 ? (
          <p className="magazine-category-empty">{copy.empty}</p>
        ) : (
          <section className="magazine-category-grid">
            {visibleArticles.map((article) => (
              <article
                key={article.id}
                className="magazine-category-card"
                onClick={() => onOpenArticle(article)}
              >
                <div
                  className="magazine-category-card-image"
                  style={{
                    backgroundImage: `url(${article.image || "/images/文章素材图5.png"})`,
                  }}
                />
                <div className="magazine-category-card-meta">
                  <span>{copy.meta}</span>
                  <span>{article.date}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default MagazineCategoryPage;
