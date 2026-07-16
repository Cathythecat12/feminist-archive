import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { articles as englishArticles } from "../data/articles-en";
import { articles as chineseArticles } from "../data/articles-zh";

const isParallaxEssay = (article) => {
  const detail = article.kickerDetail || "";
  return /FA\s*Special Essay/i.test(detail) || detail.includes("FA 特别文章");
};

function ParallaxPage({ language, onBack, onOpenArticle, setCurrentPage }) {
  const zh = language === "zh";
  const [lightMode, setLightMode] = useState(false);
  const articles = (zh ? chineseArticles : englishArticles).filter(
    (article) => !article.hidden && isParallaxEssay(article),
  );
  const featuredArticle =
    englishArticles.find((article) => article.id === "pansexualism-freudian-psychoanalysis") ||
    articles[0];

  return (
    <div className={`parallax-page${lightMode ? " is-light" : ""}`}>
      <header className="parallax-topbar">
        <div className="parallax-topbar-left">
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
          <span>/</span>
          <button onClick={onBack}>{zh ? "返回" : "Back"}</button>
        </div>

        <button
          className="parallax-home-link"
          onClick={() => setCurrentPage("parallax-about-page")}
        >
          {zh ? "思想余温" : "Parallax"}
        </button>

        <div className="parallax-topbar-right">
          <button onClick={() => setCurrentPage("newsletter-page")}>
            {zh ? "通讯" : "Newsletter"}
          </button>
          <span>/</span>
          <button
            type="button"
            className="parallax-mode-toggle"
            onClick={() => setLightMode((value) => !value)}
            aria-pressed={lightMode}
          >
            {lightMode ? "Dark mode" : "Bright mode"}
          </button>
        </div>
      </header>

      <main className="parallax-main">
        <section className="parallax-hero">
          <div className="parallax-hero-copy">
            <div className="parallax-hero-kicker">
              {zh ? "FEMINIST ARCHIVE / 思想副刊" : "FEMINIST ARCHIVE / CRITICAL SERIES"}
            </div>

            <h1 className={zh ? undefined : "parallax-hero-wordmark-title"}>
              {zh ? (
                "思想余温"
              ) : (
                <img
                  className="parallax-hero-wordmark"
                  src="/images/parallax.png"
                  alt="Parallax"
                />
              )}
            </h1>
            <p className="parallax-subtitle">
              {zh
                ? "哲学、意识形态与当代现实的批判性写作"
                : "Philosophy, ideology, and critical writing on the present"}
            </p>

            <p className="parallax-intro">
              {zh
                ? "Parallax 是 Feminist Archive 用于哲学、意识形态批判、历史探究，以及当代生活批判性写作的空间。这里发布关于重要思想家、思想传统、精神分析、资本主义、媒体、劳动，以及那些塑造我们如何理解世界的日常意识形态形式的文章。"
                : "Parallax is Feminist Archive’s space for philosophy, ideology critique, historical inquiry, and critical writing on contemporary life. It publishes essays on major thinkers, intellectual traditions, psychoanalysis, capitalism, media, labour, and the ordinary forms of ideology that shape how we see the world."}
            </p>
          </div>

          {featuredArticle && (
            <article
              className="parallax-featured-essay"
              onClick={() => onOpenArticle(featuredArticle)}
            >
              <div className="parallax-featured-image">
                <img src={featuredArticle.image} alt="" />
              </div>
              <h2>
                “Pansexualism”: The Vulgarized Interpretation of Freudian
                Psychoanalysis as the Reduction of All Mental Activity to Sexual Desire
              </h2>
            </article>
          )}
        </section>

        <section className="parallax-list-head">
          <span>{zh ? "FA 特别文章" : "FA Special Essay"}</span>
          <span>{zh ? `${articles.length} 篇` : `${articles.length} essays`}</span>
        </section>

        <section className="parallax-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              className="parallax-card"
              onClick={() => onOpenArticle(article)}
            >
              <div className="parallax-card-image">
                <img src={article.image || "/images/文章素材图5.png"} alt="" />
              </div>
              <div className="parallax-card-meta">
                <span>{article.kickerDetail}</span>
                <span>{article.date}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="parallax-card-footer">
                <span>{article.author || "Feminist Archive"}</span>
                <em>{zh ? "阅读全文 →" : "Read essay →"}</em>
              </div>
            </article>
          ))}
        </section>

        <section className="parallax-about">
          <div className="parallax-about-label">
            {zh ? "什么是 Parallax?" : "What is Parallax?"}
          </div>

          {zh ? (
            <>
              <p>
                Parallax 是 Feminist Archive 旗下的 essay 栏目，聚焦于哲学、意识形态批判、历史探究，以及对当代生活的批判性写作。
              </p>
              <p>
                这里收录关于哲学问题、重要思想家与思想传统的意识形态批判、历史与理论知识，以及对当下社会热点与现实问题的批判性分析。并非每一个问题都直接从女性主义出发；有些问题起于精神分析、技术、劳动、媒体、资本主义、知识、主体性，或那些悄无声息地组织着我们如何理解世界的日常意识形态形式。
              </p>
              <p>
                Parallax 沿着这些看似“侧面”的路径展开，但并不脱离 Feminist Archive 更广泛的思想方向。它关心权力如何变成常识，意识形态如何在日常生活中扎根，历史如何滞留于当下，以及现代文化如何塑造欲望、主体性与政治生活。
              </p>
              <p>
                如果说 Feminist Archive 指向的是一个女性主义的思想工程，那么 Parallax 便是它更开阔的一种观看角度：它面向那些希望深化思考、建立自己的批判框架，并进一步理解为何女性主义与进步思想在今天仍然必要的读者。
              </p>
            </>
          ) : (
            <>
              <p>
                Parallax is Feminist Archive’s essay series for philosophy, ideology critique, historical inquiry, and critical writing on contemporary life.
              </p>
              <p>
                This is a space for essays on philosophy, the ideological critique of major thinkers and intellectual traditions, historical and theoretical knowledge, and critical reflections on current events. Not every question begins with feminism directly. Some begin with psychoanalysis, technology, labour, media, capitalism, knowledge, subjectivity, or the ordinary forms of ideology that quietly organize how we see the world.
              </p>
              <p>
                Parallax follows these side paths without departing from the broader intellectual commitments of Feminist Archive. It asks how power becomes common sense, how ideology takes hold in everyday life, how history lingers in the present, and how modern culture shapes desire, subjectivity, and political life.
              </p>
              <p>
                If Feminist Archive names a feminist intellectual project, Parallax is one of its wider angles of vision: a space for readers who want to deepen their thinking, build their own critical framework, and better understand the conditions that make feminist and progressive thought necessary in the first place.
              </p>
            </>
          )}
        </section>
      </main>

      <footer className="parallax-footer">
        <div>
          <span>{zh ? "继续阅读" : "Continue reading"}</span>
          <button onClick={() => setCurrentPage("newsletter-page")}>
            {zh ? "订阅通讯" : "Subscribe to the newsletter"}
          </button>
        </div>

        <div className="parallax-follow-block">
          <span>{zh ? "关注 Feminist Archive" : "Follow Feminist Archive"}</span>
          <nav aria-label="Feminist Archive social links">
            <a href="https://www.instagram.com/feministarchivejournal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/feminist-archive-3b110b405" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://bsky.app/profile/feministarchive.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
              <SiBluesky />
            </a>
            <a href="https://x.com/FeministArchiv" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default ParallaxPage;
