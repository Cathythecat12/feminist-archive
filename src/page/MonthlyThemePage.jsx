import { articles as englishArticles } from "../data/articles-en";
import { useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";

const localIssueArticles = [
  {
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

const issueArticles = [
  ...localIssueArticles,
  englishArticles.find((article) => article.id === "barbie-capitalism"),
].filter(Boolean);

function MonthlyThemePage({ language, setLanguage, onBack, onOpenArticle }) {
  const [newsletterStatus, setNewsletterStatus] = useState("");
  return (
    <div className="issue-shell">
      <header className="issue-header">
        <div className="issue-left-nav">
          <button className="issue-menu-button" onClick={onBack}>
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
                ? "Archive of Refusal"
                : "Archive of Refusal"}
            </h1>

            <p>
              {language === "zh"
                ? "A curated issue on refusal, memory, invisible labour, and forms of life that resist easy incorporation."
                : "A curated issue on refusal, memory, invisible labour, and forms of life that resist easy incorporation."}
            </p>
          </div>
        </section>

        <section className="issue-intro">
        <section className="issue-meta-strip">
  <span>ISSUE 01</span>
  <span>MARCH 2026</span>
  <span>REFUSAL</span>
  <span>MEMORY</span>
  <span>LABOUR</span>
  <span>ARCHIVE</span>
</section>
          <div>
            <div className="issue-section-label">EDITORIAL NOTE</div>
            <h2>Refusal is not retreat.</h2>
          </div>

          <p>
            This issue approaches refusal as an interruption of order rather
            than a simple act of withdrawal. It gathers essays, theoretical
            fragments, and archival reflections on memory, labour, language, and
            the forms of life that do not easily enter public record.
          </p>
        </section>

        <section className="issue-grid-section">
        <section className="issue-preview-section">
  <div className="issue-section-label">IN THIS ISSUE</div>

  <div className="issue-preview-grid">
    <div className="issue-preview-item">
      <h3>Why refusal is not silence</h3>
    </div>

    <div className="issue-preview-item">
      <h3>How domestic labour disappears from history</h3>
    </div>

    <div className="issue-preview-item">
      <h3>Writing that resists easy consumption</h3>
    </div>

    <div className="issue-preview-item">
      <h3>The politics of unfinished lives</h3>
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

          <h2>Read slowly. Return often. Archive what disappears.</h2>

          <p>
            Feminist Archive treats each monthly issue as a reading environment:
            a temporary constellation of essays, notes, images, and historical
            fragments. The aim is not speed, but return.
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
