import { articles as englishArticles } from "../data/articles-en";
import { articles as chineseArticles } from "../data/articles-zh";

const CATEGORY_COPY = {
  writing: {
    category: "Writing",
    en: {
      eyebrow: "FEMINIST ARCHIVE / WRITING",
      title: "Writing",
      script: "nothing speaks for itself",
      intro:
        "Feminist, psychoanalytic and critical approaches to power, gender and everyday life.",
      note:
        "This is where Feminist Archive asks why certain forms of power come to feel ordinary, desirable, or beyond critique.",
      empty: "No writing entries are available yet.",
      meta: "Essay",
    },
    zh: {
      eyebrow: "FEMINIST ARCHIVE / 写作",
      title: "写作",
      script: "nothing speaks for itself",
      intro: "以女性主义、精神分析与批判理论进入权力、性别与日常生活。",
      note: "这里追问的是：为什么某些权力形式会被我们理解为普通、合理、值得欲望，甚至不可批判。",
      empty: "还没有可显示的写作条目。",
      meta: "文章",
    },
  },
  reviews: {
    category: "Reviews",
    en: {
      eyebrow: "FEMINIST ARCHIVE / REVIEWS & GUIDES",
      title: "Reviews / Guides",
      script: "reading is a method",
      intro: "Close readings of books, concepts and theoretical traditions that continue to unsettle the present.",
      note:
        "Reviews and guides are treated here as forms of return: a way to read slowly with books that still disturb the present.",
      empty: "No review or guide entries are available yet.",
      meta: "Review",
    },
    zh: {
      eyebrow: "FEMINIST ARCHIVE / 书评与导读",
      title: "书评 / 导读",
      script: "reading is a method",
      intro: "对仍在扰动当下的书籍、概念与思想传统进行细读、导读与书评。",
      note: "书评与导读在这里是一种返回：重新慢读那些仍然改变我们理解现实的文本。",
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
        <div className="magazine-category-nav-left">
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
          <button onClick={() => setCurrentPage("newsletter-page")}>
            {zh ? "通讯" : "Newsletter"}
          </button>
          <button onClick={() => setCurrentPage("donation-drive")}>
            {zh ? "捐助" : "Donate"}
          </button>
        </div>

        <button className="magazine-category-logo" onClick={onBack}>
          <span>Feminist Archive</span>
          <em>{zh ? "写作 · 书评 · 档案" : "essays · reviews · archives"}</em>
        </button>

        <div className="magazine-category-nav-right">
          <button onClick={() => setCurrentPage(type === "writing" ? "reviews-page" : "writing-page")}>
            {type === "writing"
              ? zh
                ? "书评 / 导读"
                : "Reviews / Guides"
              : zh
                ? "写作"
                : "Writing"}
          </button>
        </div>
      </header>

      <main>
        <section className="magazine-category-hero">
          <div className="magazine-category-eyebrow">{copy.eyebrow}</div>
          <div className="magazine-category-script">
            {copy.script}
          </div>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
          <div className="magazine-category-editorial-note">{copy.note}</div>
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
                <div className="magazine-category-card-author">
                  {article.author || "Feminist Archive"}
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default MagazineCategoryPage;
