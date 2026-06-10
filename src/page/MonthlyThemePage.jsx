import { articles as englishArticles } from "../data/articles-en";
import { useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";
import MagazineMenuOverlay from "../components/MagazineMenuOverlay";

const localIssueArticles = [
  {
    hidden: true,
    id: "refusal-and-memory",
    title: "Refusal and the Work of Memory",
    category: "Essay / Memory",
    author: "Feminist Archive",
    date: "March 2026",
    readTime: "12 min read",
    image: "/images/文章素材图1.jpg",
    excerpt:
      "On refusal not as withdrawal, but as a form of historical interruption and memory-making.",
    tags: ["memory", "refusal", "archive", "history"],
    content: `Refusal is often misunderstood as silence, retreat, or disengagement. Yet historically, refusal has frequently operated as interruption.

It disrupts institutional continuity by refusing inherited roles, inherited narratives, and inherited expectations of obedience.

Memory emerges precisely through these interruptions. What institutions attempt to erase often returns through fragmented testimony, informal records, and embodied transmission.

To refuse is sometimes to create an archive that formal institutions failed to preserve.`,
  },

  {
    hidden: true,
    id: "domestic-labour",
    title: "Domestic Labour and Invisible Archives",
    category: "Analysis / Labour",
    author: "Editorial Team",
    date: "March 2026",
    readTime: "9 min read",
    image: "/images/文章素材图3.jpg",
    excerpt:
      "What forms of labour disappear precisely because they appear too ordinary to be archived?",
    tags: ["labour", "care work", "gender", "history"],
    content: `The archive is never neutral.

Domestic labour often disappears because institutions historically refused to classify reproductive labour as historically significant.

Cooking, cleaning, emotional care, and invisible organisational work sustain entire social structures.

Yet these forms of labour frequently remain undocumented precisely because they are feminised and normalised.`,
  },

  {
    hidden: true,
    id: "ordinary-forms-of-refusal",
    title: "The Ordinary Forms of Refusal",
    category: "Essay / Life",
    author: "Feminist Archive",
    date: "March 2026",
    readTime: "8 min read",
    image: "/images/文章素材图2.jpg",
    excerpt:
      "Refusal does not always appear as rupture. Sometimes it appears as delay, opacity, withdrawal, or an unfinished sentence.",
    tags: ["everyday life", "refusal", "subjectivity"],
    content: `Refusal often appears too quietly to be recognised as refusal.

It may take the form of delay, refusal to explain, refusal to be translated, refusal to become available.

These ordinary gestures are not outside history. They are often where history is most intimately lived.`,
  },
];

const currentIssueArticleIds = [
  "barbie-capitalism",
  "reproduction-is-labour",
  "self-objectification-beauty-myth",
];

const issueArticles = [
  ...localIssueArticles.filter((article) => !article.hidden),
  ...currentIssueArticleIds.map((id) =>
    englishArticles.find((article) => article.id === id),
  ),
].filter(Boolean);

function MonthlyThemePage({ language, setLanguage, onBack, onOpenArticle, setCurrentPage }) {
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="issue-shell">
      {showMenu && (
        <MagazineMenuOverlay
          language={language}
          setCurrentPage={setCurrentPage}
          onClose={() => setShowMenu(false)}
        />
      )}

      <header className="issue-header">
        <div className="issue-left-nav">
          <button className="issue-menu-button" onClick={() => setShowMenu(true)}>
            MENU
          </button>
          <span>/</span>
          <button className="issue-menu-button" onClick={onBack}>
            HOME
          </button>
        </div>

        <div className="issue-logo" onClick={onBack}>
          Feminist Archive
        </div>

        <div className="issue-right-nav">
          <button
            className="issue-menu-button"
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <span>/</span>
          <button
            className="issue-menu-button"
            onClick={() => setLanguage("zh")}
          >
            中文
          </button>
        </div>
      </header>

      <main className="issue-main">
        <section className="issue-hero">
          <div className="issue-hero-image" />

          <div className="issue-hero-overlay">
            <div className="issue-kicker">
              {language === "zh" ? "MONTHLY ISSUE / 本月专题" : "MONTHLY ISSUE"}
            </div>

            <h1>
              {language === "zh"
                ? "六月期刊"
                : "June Issue"}
            </h1>

            <p>
              {language === "zh"
                ? "A monthly issue on commodity feminism, reproductive labour, self-objectification, and the invisible structures that organize gendered life."
                : "A monthly issue on commodity feminism, reproductive labour, self-objectification, and the invisible structures that organize gendered life."}
            </p>
          </div>
        </section>

        <section className="issue-intro">
        <section className="issue-meta-strip">
  <span>ISSUE 02</span>
  <span>JUNE 2026</span>
  <span>WRITING</span>
  <span>REVIEWS</span>
  <span>FEMINISM</span>
  <span>LABOUR</span>
</section>
          <div>
            <div className="issue-section-label">EDITORIAL NOTE</div>
            <h2>This issue begins with the body, labour, and the politics of visibility.</h2>
          </div>

          <p>
            This month brings together essays on commodity feminism,
            reproductive labour, bodily discipline, and the invisible structures
            that make gendered life feel natural. It follows how capitalism,
            care work, beauty standards, and gender norms produce the conditions
            through which women are seen, valued, and disciplined.
          </p>
        </section>

        <section className="issue-grid-section">
        <section className="issue-preview-section">
  <div className="issue-section-label">IN THIS ISSUE</div>

  <div className="issue-preview-grid">
    <div className="issue-preview-item">
      <h3>How commodity feminism turns critique into consumption</h3>
    </div>

    <div className="issue-preview-item">
      <h3>Why reproductive labour remains outside economic visibility</h3>
    </div>

    <div className="issue-preview-item">
      <h3>How beauty standards discipline women into self-surveillance</h3>
    </div>

    <div className="issue-preview-item">
      <h3>What feminist writing can recover from hidden forms of labour</h3>
    </div>
  </div>
</section>
          <div className="issue-section-label">FEATURED THIS MONTH</div>

          <div className="issue-card-grid">
            {issueArticles.map((article) => (
              <article
                key={article.id}
                className="issue-card"
                onClick={() => onOpenArticle(article)}
              >
                <div
                  className="issue-card-image"
                  style={{ backgroundImage: `url(${article.image})` }}
                />

                <div className="issue-card-meta">
                  <span>{article.category}</span>
                </div>

                <h2>{article.title}</h2>

                <p>{article.excerpt}</p>

                <div className="issue-card-footer">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="issue-bottom-note">
          <div className="issue-section-label">READING PATH</div>

          <h2>Read across commodities, bodies, labour, and gendered life.</h2>

          <p>
            This issue gathers essays that move between feminist theory and
            contemporary cultural life: from Barbie and commodity feminism to
            reproductive labour, beauty myths, and the gendered structures that
            make power feel ordinary.
          </p>
        </section>
        <footer className="issue-footer">
        <section className="issue-newsletter">
  <div className="issue-section-label">
    NEWSLETTER
  </div>

  <div className="issue-newsletter-grid">
    <div>
      <h2>Stay with the archive.</h2>

      <p>
        Receive a quiet editorial letter every two weeks:
        new essays, archival recoveries, reading selections,
        and fragments of thought we believe deserve slower attention.
      </p>
    </div>

    <form
  className="issue-newsletter-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    setNewsletterStatus("Subscribing...");

    try {
      await submitWebsiteForm({
        type: "Newsletter subscription",
        email,
        language: "en",
      });

      setNewsletterStatus("Subscribed. Thank you.");
      e.target.reset();
    } catch {
      setNewsletterStatus("Could not subscribe. Please try again later.");
    }
  }}
>
  <input
    name="email"
    type="email"
    placeholder="Your email address"
    required
  />

  <button type="submit">
    Subscribe
  </button>

  <div className="newsletter-meta">
    <p className="newsletter-note">
      {newsletterStatus ||
        "By subscribing, you agree to receive emails from Feminist Archive. You can unsubscribe at any time."}
    </p>

    <p className="newsletter-policy">
      We write infrequently: only editorial letters, new issues, and carefully
      selected readings.
    </p>
  </div>
</form>
  </div>
</section>
  <div>
    <h2>Feminist Archive</h2>
    <p>
      An independent journal of essays, archives, theory, and long-form
      critical writing.
    </p>
  </div>
  

  <div className="issue-footer-links">
    <button onClick={onBack}>Home</button>
    <a href="mailto:submissions@feministarchivejournal.org">Submit</a>
    <a href="mailto:editorial@feministarchivejournal.org">Editorial</a>
    <a href="https://feministarchivejournal.org">Website</a>
  </div>
</footer>
      </main>
    </div>
  );
}

export default MonthlyThemePage;
