function OurStoryPage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
  
    return (
      <div className="our-story-page">
        <header className="our-story-header">
          <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>
  
          <div className="our-story-logo" onClick={() => setCurrentPage("main")}>
            Feminist Archive
          </div>
  
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
        </header>
  
        <main className="our-story-main">
          <section className="our-story-hero">
            <div className="our-story-kicker">
              {zh ? "我们的故事" : "OUR STORY"}
            </div>
  
            <h1>
              {zh
                ? "一座档案馆，先从一个人的写作开始。"
                : "An archive begins as a private refusal to let thought disappear."}
            </h1>
  
            <p>
              {zh
                ? "Feminist Archive 不是从机构、基金或出版工业中诞生的。它首先来自一种非常朴素的需要：把认真写下来的东西保存下来，并让它们找到读者。"
                : "Feminist Archive did not begin as an institution, a fund, or a publishing machine. It began with a simple need: to preserve serious writing and let it find readers."}
            </p>
          </section>
  
          <section className="our-story-timeline">
            <div className="our-story-line" />
  
            <article>
              <span>01</span>
              <h2>{zh ? "从私人写作开始" : "Private writing"}</h2>
              <p>
                {zh
                  ? "最初，它只是一些文章、笔记、批评和理论片段。它们不是为了快速传播而写，而是为了留下某种无法被简化的思想痕迹。"
                  : "At first, there were essays, notes, criticisms, and theoretical fragments. They were not written for speed, but to leave traces of thought that could not be easily simplified."}
              </p>
            </article>
  
            <article>
              <span>02</span>
              <h2>{zh ? "反对内容化" : "Against content"}</h2>
              <p>
                {zh
                  ? "我们不希望女性主义写作只是变成社交媒体上的短暂内容。它应当能够被返回、被重读、被争论，并在时间中继续存在。"
                  : "We do not want feminist writing to become only temporary content in social feeds. It should be returned to, reread, argued with, and allowed to remain alive across time."}
              </p>
            </article>
  
            <article>
              <span>03</span>
              <h2>{zh ? "成为公共档案" : "Becoming public"}</h2>
              <p>
                {zh
                  ? "于是 Feminist Archive 逐渐成为一个公共空间：它不是单纯展示文章，而是组织思想、保存材料、创造阅读路径。"
                  : "Feminist Archive gradually became a public space: not simply a place to display writing, but a structure for organising thought, preserving materials, and creating reading paths."}
              </p>
            </article>
  
            <article>
              <span>04</span>
              <h2>{zh ? "继续生长" : "Still growing"}</h2>
              <p>
                {zh
                  ? "它仍然很小，也仍然在形成中。但正因为如此，它可以保持独立、缓慢和认真。"
                  : "It remains small, and still in formation. But this is also what allows it to remain independent, slow, and serious."}
              </p>
            </article>
          </section>
  
          <section className="our-story-closing">
            <h2>
              {zh
                ? "Feminist Archive 是一座正在建造中的房子。"
                : "Feminist Archive is a house still being built."}
            </h2>
  
            <p>
              {zh
                ? "每一篇文章、每一封来信、每一次阅读，都是这座房子里新亮起的一盏灯。"
                : "Every essay, every letter, every act of reading is another light turning on inside it."}
            </p>
  
            <button onClick={() => setCurrentPage("magazine")}>
              {zh ? "进入阅读室 →" : "Enter the reading room →"}
            </button>
          </section>
        </main>
      </div>
    );
  }
  
  export default OurStoryPage;