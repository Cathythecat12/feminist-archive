function NewsPage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
    const tickerWords = zh
      ? [
          "印刷实验",
          "编辑通讯",
          "档案房间",
          "六月期刊",
          "声音散文",
          "阅读室",
          "女性主义写作",
          "书评导读",
          "公共档案",
          "缓慢出版",
          "理论札记",
          "网站更新",
          "投稿指南",
          "编辑计划",
        ]
      : [
          "PRINT EXPERIMENT",
          "EDITORIAL LETTER",
          "ARCHIVE ROOM",
          "NEW ISSUE",
          "AUDIO ESSAYS",
          "READING ROOM",
          "FEMINIST WRITING",
          "REVIEWS AND GUIDES",
          "PUBLIC ARCHIVE",
          "SLOW PUBLISHING",
          "THEORY NOTES",
          "WEBSITE UPDATE",
          "SUBMISSION GUIDE",
          "EDITORIAL PLANS",
        ];
  
    const newsItems = [
      {
        date: zh ? "2026 年 5 月" : "MAY 2026",
        type: zh ? "编辑公告" : "EDITORIAL NOTICE",
        title: zh ? "我们正在考虑出版纸质书籍" : "We are considering a printed volume",
        text: zh
          ? "Feminist Archive 正在探索是否将部分文章、档案片段、编辑札记与专题写作整理为小型纸质出版物。我们希望它不是普通合集，而是一件可以被保存、翻阅、带走的档案物。"
          : "Feminist Archive is exploring the possibility of collecting selected essays, archival fragments, editorial notes, and issue-based writing into a small printed volume. We want it to be not merely a compilation, but an archival object that can be kept, carried, and returned to.",
        tag: "PRINT",
      },
      {
        date: zh ? "2026 年 5 月" : "MAY 2026",
        type: zh ? "通讯" : "NEWSLETTER",
        title: zh ? "编辑通讯正在筹备中" : "Our editorial letter is being prepared",
        text: zh
          ? "我们将发送低频、高质量的编辑通讯：新文章、阅读路径、档案片段与缓慢形成的思想。没有商业推销，没有无聊消息，也不会频繁轰炸你的邮箱。"
          : "We are preparing a low-frequency, high-quality editorial letter: new essays, reading paths, archival fragments, and slowly formed thoughts. No commercial promotion, no empty updates, and no inbox bombardment.",
        tag: "LETTER",
      },
      {
        date: zh ? "2026 年 6 月" : "JUNE 2026",
        type: zh ? "编辑计划" : "EDITORIAL PLAN",
        title: zh ? "新的专题页正在形成" : "A new issue environment is taking shape",
        text: zh
          ? "我们正在尝试让每一个专题都拥有自己的颜色、排版、阅读节奏和档案结构，使它不仅是一组文章，而是一种可以进入的阅读环境。"
          : "We are experimenting with issue pages that carry their own colour, typography, reading rhythm, and archival structure, so that each issue becomes not only a set of essays but an environment one may enter.",
        tag: "ISSUE",
      },
      {
        date: zh ? "2026 年夏季" : "SUMMER 2026",
        type: zh ? "声音实验" : "AUDIO EXPERIMENT",
        title: zh ? "我们正在构想声音档案" : "We are imagining an audio archive",
        text: zh
          ? "未来 Feminist Archive 可能会尝试短篇理论声音散文、文章朗读、编辑来信与档案式播客，让文字以更缓慢、更亲密的形式被听见。"
          : "Feminist Archive may experiment with short theoretical audio essays, readings, editorial letters, and archival podcast forms, allowing writing to be heard in slower and more intimate ways.",
        tag: "AUDIO",
      },
    ];
  
    return (
      <div className="news-page">
        <header className="news-header">
          <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>
  
          <div className="news-logo" onClick={() => setCurrentPage("main")}>
            Feminist Archive
          </div>
  
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
        </header>
  
        <main className="news-main">
          <section className="news-hero">
            <div className="news-kicker">
              {zh ? "编辑部消息" : "EDITORIAL DISPATCHES"}
            </div>
  
            <h1>{zh ? "News from the archive." : "News from the archive."}</h1>
  
            <p>
              {zh
                ? "一些来自 Feminist Archive 内部的缓慢消息：出版计划、专题更新、编辑实验、未来项目与那些还在形成中的想法。"
                : "Small movements inside Feminist Archive: publishing plans, issue updates, editorial experiments, future projects, and ideas still in formation."}
            </p>
          </section>
  
          <section className="news-ticker">
            {[0, 1].map((group) => (
              <div className="news-ticker-track" aria-hidden={group === 1} key={group}>
                {tickerWords.map((word) => (
                  <span key={`${group}-${word}`}>{word}</span>
                ))}
              </div>
            ))}
          </section>
  
          <section className="news-pinned">
            <div>
              <span>{zh ? "置顶" : "PINNED NOTE"}</span>
              <h2>
                {zh
                  ? "我们并不急于发布每一条消息。"
                  : "Not every announcement needs urgency."}
              </h2>
            </div>
  
            <p>
              {zh
                ? "Feminist Archive 的消息页不是热点页面，而是一个编辑公告栏。这里记录那些正在生长、尚未完成、但已经值得被公开保存的计划。"
                : "The news page of Feminist Archive is not a feed of urgency, but an editorial noticeboard. It records plans that are growing, unfinished, and already worth keeping in public."}
            </p>
          </section>
  
          <section className="news-list">
            {newsItems.map((item, index) => (
              <article className="news-card" key={item.title}>
                <div className="news-date-stamp">
                  <span>{item.date}</span>
                  <em>{String(index + 1).padStart(2, "0")}</em>
                </div>
  
                <div className="news-card-body">
                  <div className="news-card-topline">
                    <span>{item.type}</span>
                    <b>{item.tag}</b>
                  </div>
  
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </section>
  
          <section className="news-closing">
            <h2>
              {zh
                ? "Some things in the archive move slowly."
                : "Some things in the archive move slowly."}
            </h2>
  
            <p>
              {zh
                ? "如果你想知道这些计划如何展开，可以订阅我们的编辑通讯。"
                : "To follow these plans as they unfold, subscribe to our editorial letter."}
            </p>
  
            <button onClick={() => setCurrentPage("newsletter-page")}>
              {zh ? "进入通讯页面 →" : "Go to newsletter →"}
            </button>
          </section>
        </main>
      </div>
    );
  }
  
  export default NewsPage;
