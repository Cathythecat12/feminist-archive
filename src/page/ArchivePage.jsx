import { useMemo, useState } from "react";

function ArchivePage({ language, articles, onBack, onOpenArticle }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories =
    language === "zh"
      ? ["All", "Writing", "Reviews", "Archive"]
      : ["All", "Writing", "Reviews", "Archive"];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      if (article.hidden) return false;

      const matchesCategory =
        category === "All" || article.category === category;

      const haystack = [
        article.title,
        article.author,
        article.category,
        article.date,
        article.excerpt,
        ...(article.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && haystack.includes(query.toLowerCase());
    });
  }, [articles, query, category]);

  return (
    <div className="site-shell archive-index-page">
      <header className="site-header">
        <div className="brand-block">
          <div className="site-name" onClick={onBack}>
            Feminist Archive
          </div>

          <div className="site-tagline">
            {language === "zh"
              ? "一个可检索的女性主义文章、概念、作者与介入档案。"
              : "A searchable archive of essays, concepts, authors, and interventions."}
          </div>
        </div>

        <button className="category-pill" onClick={onBack}>
          {language === "zh" ? "返回主页" : "Back home"}
        </button>
      </header>

      <main className="archive-index-main">
        <div className="section-label">
          {language === "zh" ? "归档索引" : "ARCHIVE INDEX"}
        </div>

        <h1 className="archive-index-title">
          {language === "zh" ? "完整归档" : "Full Archive"}
        </h1>

        <p className="archive-index-intro">
          {language === "zh"
            ? "搜索文章、档案札记、批评介入、作者、关键词与概念。"
            : "Search across essays, archival notes, interventions, authors, keywords, and concepts."}
        </p>

        <input
          className="archive-index-search"
          type="text"
          placeholder={
            language === "zh"
              ? "按标题、作者、概念、关键词或标签搜索……"
              : "Search by title, author, concept, keyword, or tag..."
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
<div className="archive-index-count">
  {language === "zh"
    ? `当前显示 ${filteredArticles.length} 篇文章`
    : `${filteredArticles.length} entries found`}
</div>
        <div className="archive-index-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "category-pill active" : "category-pill"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="archive-index-list">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="archive-index-item"
              onClick={() => onOpenArticle(article)}
            >
                
              <div className="archive-index-meta">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>

              <h2>{article.title}</h2>

              <p className="archive-index-author">
                {language === "zh" ? "作者：" : "By "}
                {article.author}
              </p>

              <p className="archive-index-excerpt">{article.excerpt}</p>

              <div className="tag-row">
                {(article.tags || []).map((tag) => (
                  <span key={tag} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="archive-index-open">

  {language === "zh" ? "打开条目 →" : "Open entry →"}

</div>
            </article>
          ))}
        </section>

        <button className="contact-home-link" onClick={onBack}>
          {language === "zh" ? "← 返回主页" : "← Back to home"}
        </button>
      </main>
    </div>
  );
}

export default ArchivePage;
