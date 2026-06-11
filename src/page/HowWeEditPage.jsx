function HowWeEditPage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
    const process = [
      {
        no: "01",
        title: zh ? "慢读" : "Slow reading",
        text: zh
          ? "先让文章安静地展开，而不是立刻把它变成结论。"
          : "We let the text unfold before turning it into a decision.",
      },
      {
        no: "02",
        title: zh ? "结构" : "Structure",
        text: zh
          ? "看见段落之间的呼吸、论证的方向，以及还没有说清楚的地方。"
          : "We look for rhythm, argument, and the places where thought still needs room.",
      },
      {
        no: "03",
        title: zh ? "修订" : "Revision",
        text: zh
          ? "修改不是磨平声音，而是让一个判断更准确地抵达读者。"
          : "Revision is not flattening a voice, but helping it arrive with precision.",
      },
      {
        no: "04",
        title: zh ? "保存" : "Archive",
        text: zh
          ? "一篇文章完成后，它也成为档案的一部分，被放置、被返回、被继续阅读。"
          : "Once published, a text becomes part of an archive: placed, returned to, and read again.",
      },
    ];
  
    return (
      <div className={`how-edit-studio-page ${zh ? "how-edit-studio-page-zh" : ""}`}>
        <header className="how-edit-studio-header">
          <button className="how-edit-back-button" onClick={onBack}>← {zh ? "返回" : "Back"}</button>
          <button
            className="how-edit-header-logo"
            onClick={() => setCurrentPage("main")}
            aria-label="Feminist Archive"
          >
            <img src="/images/编辑室logo.png" alt="Feminist Archive" />
          </button>
          <button onClick={() => setCurrentPage("contact-page")}>
            {zh ? "联系" : "Contact"}
          </button>
        </header>
  
        <main className="how-edit-studio-main">
          <section className="how-edit-studio-hero">
            <div className="how-edit-studio-meta">
              <span>Feminist Archive</span>
              <span>{zh ? "编辑工作室 / 2026" : "Editorial studio / 2026"}</span>
              <span>{zh ? "慢出版" : "Slow publishing"}</span>
            </div>

            <div className="how-edit-rebuild-notice">
              {zh
                ? "我们正在重新建设这个板块，敬请期待！"
                : "We are rebuilding this section. Please stay tuned."}
            </div>
  
            <div className="how-edit-studio-poster">
              <img
                className="how-edit-deco how-edit-deco-wordmark"
                src="/images/线条插图1.png"
                alt=""
                aria-hidden="true"
              />
              <div className="how-edit-vertical-note">
                {zh ? "编辑不是后台" : "editing is not backstage"}
              </div>

              <div className="how-edit-hero-copy">
                <span>{zh ? "HOW WE EDIT / 我们如何编辑" : "HOW WE EDIT"}</span>
                <h1>{zh ? "一间安静的编辑工作室。" : "A quiet editorial studio."}</h1>
                <p>
                  {zh
                    ? "Feminist Archive 不把写作变成快速内容。我们阅读、整理、修改、排版、保存，然后让文本以自己的速度进入公共空间。"
                    : "Feminist Archive does not turn writing into fast content. We read, arrange, revise, typeset, preserve, and let texts enter public space at their own pace."}
                </p>
              </div>
            </div>
          </section>

          <section className="how-edit-photo-outline">
            <img
              className="how-edit-photo-deco"
              src="/images/线条插图2.png"
              alt=""
              aria-hidden="true"
            />
            <div className="how-edit-photo-frame main-frame">
              <span>{zh ? "幕后照片 01" : "studio photograph 01"}</span>
            </div>
            <div className="how-edit-photo-frame small-frame">
              <span>{zh ? "手稿 / 桌面" : "notes / desk"}</span>
            </div>
            <div className="how-edit-photo-frame tall-frame">
              <span>{zh ? "编辑过程" : "editing process"}</span>
            </div>
          </section>
  
          <section className="how-edit-studio-collage">
            <div className="how-edit-collage-note">
              <span>{zh ? "桌面笔记" : "desk note"}</span>
              <h2>{zh ? "编辑是一种照看。" : "Editing is a form of care."}</h2>
              <p>
                {zh
                  ? "它不是把作者的声音改成另一种声音，而是帮助文章找到自己的重心、速度和清晰度。"
                  : "It does not replace a writer’s voice. It helps an essay find its weight, pace, and clarity."}
              </p>
            </div>

            <div className="how-edit-line-table" aria-hidden="true">
              <span className="table-bottle" />
              <span className="table-book one" />
              <span className="table-book two" />
              <span className="table-cup" />
              <span className="table-paper" />
            </div>
          </section>
  
          <section className="how-edit-studio-process">
            {process.map((item) => (
              <article key={item.no}>
                <span>{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </section>
  
          <section className="how-edit-studio-whiteboard">
            <article>
              <span>{zh ? "工作台笔记" : "Studio Note"}</span>
              <h2>
                {zh
                  ? "每一篇文章，都要找到自己的形式。"
                  : "Every essay has to find its own form."}
              </h2>
              <p>
                {zh
                  ? "有些文章适合密集论证，有些文章需要空白、图片、引文、慢慢浮现的节奏。编辑的工作，就是辨认它本来应当长成什么样。"
                  : "Some essays need dense argument; others need space, images, quotations, or a slower rhythm. Editorial work means recognising the form a text is asking for."}
              </p>
            </article>

            <div className="how-edit-mini-board" aria-hidden="true">
              <span />
              <p>argument<br />rhythm<br />image<br />archive</p>
            </div>
          </section>
  
          <section className="how-edit-studio-quote">
            <p>
              {zh
                ? "我们不把写作变成内容。我们把文本当作需要被照顾、被放置、被保存的公共事物。"
                : "We do not turn writing into content. We treat texts as public things that need to be cared for, placed, and preserved."}
            </p>
          </section>

          <section className="how-edit-bottom-sketch" aria-hidden="true">
            <img src="/images/编辑插图.PNG" alt="" />
          </section>
        </main>
      </div>
    );
  }
  
  export default HowWeEditPage;
