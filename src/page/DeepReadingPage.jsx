function DeepReadingPage({ language, onBack, setCurrentPage }) {
  const zh = language === "zh";

  return (
    <div className="deep-reading-page">
      <header className="reading-room-header deep-reading-header">
        <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>

        <div className="reading-room-logo" onClick={() => setCurrentPage("main")}>
          Feminist Archive
          <span>{zh ? "深度阅读" : "deep reading"}</span>
        </div>

        <button onClick={() => setCurrentPage("magazine")}>
          {zh ? "杂志" : "Magazine"}
        </button>
      </header>

      <main className="deep-reading-main">
        <section className="deep-reading-hero">
          <div className="reading-room-kicker">
            {zh ? "DEEP READING / 深度阅读" : "DEEP READING"}
          </div>

          <h1>{zh ? "为已经进入理论深处的读者。" : "For readers already inside the work of theory."}</h1>

          <p>
            {zh
              ? "这个页面将为已经熟悉一些女性主义理论、并希望更深入探索思想的读者准备。"
              : "For readers who already have some familiarity with feminist theory and would like to explore ideas in greater depth."}
          </p>
        </section>

        <section className="deep-reading-placeholder">
          <span>{zh ? "页面建设中" : "Page in preparation"}</span>
          <p>
            {zh
              ? "这里已经先建立为独立页面。具体栏目、阅读路径与文本结构会在下一步继续补充。"
              : "This section has been created as a standalone page. Its columns, reading paths, and text structure can be added next."}
          </p>
        </section>
      </main>
    </div>
  );
}

export default DeepReadingPage;
