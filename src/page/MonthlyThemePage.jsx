export default function MonthlyThemePage({
    t,
    language,
    setLanguage,
    setCurrentPage,
  }) {
    return (
      <div className="site-shell">
        <header className="site-header">
          <div className="brand-block">
            <div className="site-name">{t.siteName}</div>
            <div className="site-tagline">{t.siteTagline}</div>
          </div>
  
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className={
                language === "en" ? "category-pill active" : "category-pill"
              }
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              className={
                language === "zh" ? "category-pill active" : "category-pill"
              }
              onClick={() => setLanguage("zh")}
            >
              中文
            </button>
          </div>
        </header>
  
        <main>
          <section className="archive-section" style={{ borderTop: "none" }}>
            <div className="section-heading">
              <div>
                <div className="section-label">{t.themeLabel}</div>
                <h2>{t.monthlyPageTitle}</h2>
              </div>
            </div>
  
            <div
              style={{
                marginTop: "24px",
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "28px",
                lineHeight: 1.9,
                color: "var(--muted)",
              }}
            >
              <p style={{ marginTop: 0 }}>{t.monthlyPageIntro}</p>
  
              <div style={{ marginTop: "28px" }}>
                <button
                  className="button button-dark"
                  onClick={() => setCurrentPage("main")}
                >
                  {t.backToHome}
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }