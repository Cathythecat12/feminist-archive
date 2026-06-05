function SubmissionGuidelinesPage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
  
    const steps = [
      {
        no: "01",
        title: zh ? "从现实开始，但不要停在现实" : "Begin with reality, but do not stop there",
        text: zh
          ? "我们喜欢从社会现象出发的写作，但希望作者继续追问：这种现象背后有什么结构？它如何组织主体、欲望、劳动、语言与权力？"
          : "We welcome writing that begins from social phenomena, but we ask writers to go further: what structures lie beneath it? How does it organise subjectivity, desire, labour, language, and power?",
      },
      {
        no: "02",
        title: zh ? "让哲学成为分析方法" : "Use philosophy as a method of analysis",
        text: zh
          ? "哲学不只是引用理论家的名字，而是一种把表面现象重新组织为问题的能力。我们欢迎历史、精神分析、女性主义、马克思主义、后结构主义与批判理论的交叉写作。"
          : "Philosophy is not merely the citation of theorists. It is the ability to reorganise appearances into problems. We welcome writing across history, psychoanalysis, feminism, Marxism, post-structuralism, and critical theory.",
      },
      {
        no: "03",
        title: zh ? "标题应当有力量" : "Titles should carry force",
        text: zh
          ? "一个好的标题可以带有反讽、幽默、张力或深刻含义。它不只是概括文章，而是打开文章的思想伤口。"
          : "A good title may contain irony, humour, tension, or philosophical depth. It should not merely summarise the essay, but open its wound.",
      },
      {
        no: "04",
        title: zh ? "事实仍然重要" : "Facts still matter",
        text: zh
          ? "强有力的理论判断需要可靠材料支撑。请尽量核查历史、数据、新闻、法律、档案和学术来源。思想越尖锐，事实基础越需要稳固。"
          : "Powerful theoretical claims need reliable grounding. Please verify historical claims, data, news, laws, archives, and academic sources wherever possible. The sharper the thought, the stronger the factual base should be.",
      },
    ];
  
    const sources = [
      "JSTOR",
      "Google Scholar",
      "Internet Archive",
      "Google Books",
      "Library catalogues",
      "Official reports",
      "Academic journals",
      "Museum archives",
    ];
  
    const books = [
      "Virginia Woolf — A Room of One’s Own",
      "bell hooks — Feminist Theory",
      "Sara Ahmed — Living a Feminist Life",
      "Silvia Federici — Caliban and the Witch",
      "Walter Benjamin — Illuminations",
      "Susan Sontag — Against Interpretation",
      "Hélène Cixous — The Laugh of the Medusa",
      "Mark Fisher — Capitalist Realism",
      "Jacques Lacan — Écrits",
      "Slavoj Žižek — The Sublime Object of Ideology",
    ];
  
    return (
      <div className="guidelines-academy-page">
        <div className="guidelines-dust dust-1">✦</div>
        <div className="guidelines-dust dust-2">✧</div>
        <div className="guidelines-dust dust-3">✦</div>
        <div className="guidelines-little-reader reader-1">
          <span />
        </div>
        <div className="guidelines-little-reader reader-2">
          <span />
        </div>
  
        <header className="guidelines-academy-header">
          <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>
  
          <div
            className="guidelines-academy-logo"
            onClick={() => setCurrentPage("main")}
          >
            Feminist Archive
          </div>
  
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
        </header>
  
        <main className="guidelines-academy-main">
          <section className="guidelines-academy-hero">
            <div className="guidelines-kicker">
              {zh ? "投稿指导" : "SUBMISSION GUIDELINES"}
            </div>
  
            <h1>
              {zh
                ? "如何为档案写作。"
                : "How to write for the archive."}
            </h1>
  
            <p>
              {zh
                ? "如果你想发表一篇文章，并希望得到最细致的帮助，这里是 Feminist Archive 的写作指导。我们关心的不只是文章是否完成，而是一个思想如何被慢慢写出来。"
                : "If you want to publish an essay and seek careful editorial guidance, this is our writing guide. Feminist Archive is interested not only in completed texts, but in how thought is slowly formed through writing."}
            </p>
          </section>
  
          <section className="guidelines-editor-note">
            <span>{zh ? "编辑札记" : "EDITORIAL NOTE"}</span>
            <p>
              {zh
                ? "我们不寻找快速内容。我们寻找能够停留、返回、争论、被保存的文字。"
                : "We are not looking for fast content. We are looking for writing that can remain, return, be argued with, and be preserved."}
            </p>
            <div className="guidelines-pencil" aria-hidden="true" />
          </section>
  
          <section className="guidelines-steps">
            {steps.map((step) => (
              <article key={step.no} className="guidelines-step-card">
                <div className="guidelines-step-no">{step.no}</div>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </section>
  
          <section className="guidelines-title-lab">
            <div>
              <span>{zh ? "标题实验室" : "TITLE LAB"}</span>
              <h2>
                {zh
                  ? "标题不是标签，而是思想的入口。"
                  : "A title is not a label. It is an entrance into thought."}
              </h2>
            </div>
  
            <div className="title-examples">
              <div>
                <em>{zh ? "较弱" : "Weaker"}</em>
                <p>Barbie and Feminism</p>
              </div>
  
              <div>
                <em>{zh ? "更好" : "Stronger"}</em>
                <p>Barbie: A Commodity of Freedom?</p>
              </div>
  
              <div>
                <em>{zh ? "我们喜欢" : "We like"}</em>
                <p>The archive remembers what culture forgets.</p>
              </div>
            </div>
          </section>
  
          <section className="guidelines-research-room">
            <div className="research-copy">
              <span>{zh ? "研究与事实" : "RESEARCH ROOM"}</span>
              <h2>{zh ? "理论仍然需要落地。" : "Theory still needs grounding."}</h2>
              <p>
                {zh
                  ? "我们欢迎大胆判断，但不鼓励未经核查的断言。你可以从以下渠道寻找材料、事实、历史文献和学术讨论。"
                  : "We welcome bold arguments, but not unchecked assertions. These are useful places to begin when looking for materials, facts, historical documents, and scholarly discussions."}
              </p>
            </div>
  
            <div className="research-source-grid">
              {sources.map((source) => (
                <div key={source}>{source}</div>
              ))}
            </div>
          </section>
  
          <section className="guidelines-editing-room">
            <h2>{zh ? "我们如何编辑" : "How we edit"}</h2>
  
            <div className="editing-columns">
              <p>
                {zh
                  ? "编辑不是把你的文字磨平，而是帮助文章更清楚地成为它自己。我们可能会帮助你调整结构、强化标题、澄清论证、压缩重复，或让一段真正有力量的句子被看见。"
                  : "Editing is not the flattening of voice. It is the work of helping a text become more itself. We may help with structure, titles, argument, repetition, rhythm, or with making a powerful sentence visible."}
              </p>
  
              <p>
                {zh
                  ? "我们不会强迫所有文章变成同一种学术语气。Feminist Archive 更关心思想的密度、写作的责任感、语言的质地，以及作者是否真的承担自己的判断。"
                  : "We do not force all writing into one academic tone. Feminist Archive cares about density of thought, responsibility of writing, texture of language, and whether the author truly carries their claims."}
              </p>
            </div>
          </section>
  
          <section className="guidelines-founder-shelf">
            <div className="guidelines-founder-head">
              <div>
                <div className="guidelines-kicker">
                  {zh ? "创始人推荐书目" : "FOUNDER’S SHELF"}
                </div>
    
                <h2>
                  {zh
                    ? "进入档案之前，可以先进入这些书。"
                    : "Before entering the archive, enter these books."}
                </h2>
              </div>

              <button
                className="guidelines-reading-entry"
                onClick={() => setCurrentPage("reading-room")}
              >
                <span>{zh ? "我们为你建造了一个阅读室！" : "We built a reading room for you."}</span>
                <b>{zh ? "进入阅读室 →" : "Enter the room →"}</b>
              </button>
            </div>
  
            <div className="book-shelf">
              {books.map((book) => (
                <div className="book-spine" key={book}>
                  {book}
                </div>
              ))}
            </div>
          </section>
  
          <section className="guidelines-final-check">
            <h2>{zh ? "投稿前，请问自己：" : "Before submitting, ask:"}</h2>
  
            <div className="checklist-grid">
              <p>{zh ? "这篇文章真的在思考吗？" : "Does this piece think?"}</p>
              <p>{zh ? "它是否说出了某种不容易说出的东西？" : "Does it say something difficult to say?"}</p>
              <p>{zh ? "它是否让读者慢下来？" : "Does it slow the reader down?"}</p>
              <p>{zh ? "它是否承担了自己的判断？" : "Does it take responsibility for its claims?"}</p>
            </div>
  
            <button onClick={() => setCurrentPage("submission-page")}>
              {zh ? "进入投稿页面 →" : "Open submission form →"}
            </button>
          </section>
        </main>
      </div>
    );
  }
  
  export default SubmissionGuidelinesPage;
