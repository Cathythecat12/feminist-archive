/* import { useMemo, useState } from "react";
import { articles } from "./data/articles";

const text = {
  en: {
    siteName: "Feminist Archive",
    siteTagline:
      "A feminist platform for theory, essays, and archival writing.",
    navHome: "Home",
    navArchive: "Archive",
    navSubmit: "Submit",
    navContact: "Contact",
    navGuidelines: "Guidelines",
    navDonate: "Donate",
    heroEyebrow: "Independent feminist publication",
    heroTitle: "Writing, theory, and archive for a searchable feminist public.",
    heroText:
      "Feminist Archive is conceived as both a magazine and a knowledge platform: a place for essays, critical interventions, research writing, translations, testimony, and long-form reflection.",
    heroSubmit: "Submit writing",
    heroBrowse: "Browse archive",
    themeLabel: "This month",
    themeTitle: "Archive of Refusal",
    themeText:
      "On dissent, memory, and the forms of life that resist easy incorporation.",
    aboutLabel: "About the platform",
    aboutTitle: "A magazine in form, an archive in structure.",
    aboutText:
      "The aim is not only to publish texts, but to organise them by theme, concept, and keyword, so that feminist writing remains searchable, reusable, and historically meaningful.",
    archiveLabel: "Archive",
    archiveTitle: "Search and browse",
    archivePlaceholder: "Search by title, author, concept, or keyword...",
    submitLabel: "Submit",
    submitTitle: "Editorial review before publication",
    submitText:
      "Submissions are reviewed manually. We welcome essays, theoretical fragments, interventions, translations, reviews, lecture texts, and archival notes.",
    submitNote1: "Chinese preferred, bilingual work welcome",
    submitNote2: "Pen names and anonymous publication possible on request",
    submitNote3: "Editorial outcomes: accept / revision / decline",
    submitGuidelines: "Submission guidelines: please read here",
    formTitle: "Title",
    formAuthor: "Author / Pen name",
    formEmail: "Email",
    formKeywords: "Keywords / Tags",
    formAbstract: "Abstract / editorial note",
    formBody: "Paste your writing here...",
    formButton: "Submit",
    successTitle: "Submission received",
    successText1:
      "Your submission has been recorded. Please wait for editorial review.",
    successText2:
      "If your piece is accepted, or if there are points worth further revision and discussion, we will contact you.",
    successText3:
      "We are sorry that not every submission will receive a reply.",
    successText4:
      "To avoid delays and confusion in the review process, please do not submit the same piece repeatedly, though different submissions are always welcome. If you have any questions, please contact submissions@feministarchive.org. Thank you.",
    contactLabel: "Contact",
    contactTitle: "Contact and support",
    contactText:
      "For editorial enquiries, collaboration, or donation support, you can later add your email and external funding links here.",
    donationLink: "Donation link",
    guidelinesTitle: "Submission Guidelines",
    guidelinesIntro:
      "We welcome writing that is theoretically grounded, conceptually rigorous, and attentive to contemporary social reality.",
    guidelines1:
      "Arguments should be clearly developed and supported. We welcome writing that has a definite line of thought and can sustain its claims.",
    guidelines2:
      "We especially welcome analysis that engages with contemporary social phenomena, history, and real conditions of life, rather than remaining purely abstract.",
    guidelines3:
      "When factual claims are made, they should be carefully verified and supported by accurate sources.",
    guidelines4:
      "For example, if a submission states that car safety testing has historically relied on male body models, this claim should be fact-checked and accompanied by a reliable source.",
    guidelines5:
      "We welcome essays, theoretical fragments, interventions, translations, reviews, lecture texts, and archival notes, provided that they are serious, readable, and intellectually responsible.",
    guidelines6:
      "Chinese submissions are especially welcome. Bilingual work is also welcome, and the platform may later support translation and parallel publication.",
    backToHome: "← Back to home",
    donateTitle: "Support us",
    donateText:
      "Feminist Archive is an independent project sustained by its readers. If you wish to support the continuation of this platform, you may do so through the following channels.",
    donateAfdian: "Afdian (placeholder)",
    donateCoffee: "Buy Me a Coffee (placeholder)",
    contactPageTitle: "Contact",
    contactPageIntro:
      "We are an independent platform for feminist writing and archiving. If you have any questions, please contact us through the addresses below.",
    contactGeneral: "General enquiries: general@feministarchive.org",
    contactSubmission: "Submission enquiries: submissions@feministarchive.org",
    contactCritique: "Criticism and suggestions: criticism@feministarchive.org",
    contactNote1:
      "If you find factual errors in an article, or hold a different view, please contact the relevant address.",
    contactNote2:
      "If you have a systematic critique of an article, please submit it in the form of a serious written piece. If accepted, it may later be linked alongside the relevant article.",
    monthlyPageTitle: "Archive of Refusal",
    monthlyPageIntro:
      "A monthly selection on dissent, memory, and forms of life that resist easy incorporation.",
    monthlySection1: "Featured this month",
    monthlySection2: "Critical Notes",
    monthlySection3: "Reading Margins",
    footerHome: "Home",
    footerArchive: "Archive",
    footerSubmit: "Submit",
    footerContact: "Contact",
  },
  zh: {
    siteName: "Feminist Archive",
    siteTagline: "一个女性主义理论、文章与档案写作平台。",
    navHome: "主页",
    navArchive: "归档",
    navSubmit: "投稿",
    navContact: "联系",
    navGuidelines: "投稿标准",
    navDonate: "捐助",
    heroEyebrow: "独立女性主义出版平台",
    heroTitle: "为可检索的女性主义公共写作而设的理论、文章与档案平台。",
    heroText:
      "Feminist Archive 既是一本杂志，也是一种知识平台：它容纳论文、批评性介入、研究型写作、翻译、证词与长篇思考。",
    heroSubmit: "我要投稿",
    heroBrowse: "浏览归档",
    themeLabel: "本月主题",
    themeTitle: "拒绝的档案",
    themeText: "关于抵抗、记忆，以及那些拒绝被轻易收编的生活形式。",
    aboutLabel: "关于平台",
    aboutTitle: "形式上是杂志，结构上是档案库。",
    aboutText:
      "这个平台的目标不只是发布文章，而是按主题、概念与关键词组织文本，使女性主义写作可以被检索、再利用，并在历史中留下痕迹。",
    archiveLabel: "归档",
    archiveTitle: "搜索与浏览",
    archivePlaceholder: "按标题、作者、概念或关键词搜索……",
    submitLabel: "投稿",
    submitTitle: "发表前人工审核",
    submitText:
      "所有投稿都将经过人工审核。我们欢迎论文、理论片段、批评性介入、翻译、书评、讲稿与档案性写作。请在右侧信息格式填写，并跳转到邮箱后点击发送。若操作失败，可手动发送至submissions@feministarchive.org，",
    submitNote1: "同样欢迎英文写作，通过后，会刊登在Feminist Archive英文版块",
    submitNote2: "可使用笔名，必要时可匿名发表",
    submitNote3: "编辑结果：接受 / 修改后重投 / 拒绝",
    submitGuidelines: "投稿标准请看这里",
    formTitle: "标题",
    formAuthor: "作者 / 笔名",
    formEmail: "邮箱",
    formKeywords: "关键词 / 标签",
    formAbstract: "摘要 / 给编辑的说明",
    formBody: "请把正文粘贴在这里……",
    formButton: "提交",
    successTitle: "投稿成功",
    successText1: "你的稿件已被记录。接下来请等待人工审核。收到自动回复的确认邮件即代表发送成功。",
    successText2:
      "如果稿件通过，或有值得进一步修改与讨论之处，我们会联系你。请耐心等待。",
    successText3: "为避免造成更久的审稿和记录的混乱，请勿重复投稿，但欢迎投递不同文章。若有任何疑问，请联系general@feministarchive.org，非常感谢。",
    successText4: "很抱歉，由于我们收到的投稿量巨大，并非每一份投稿都会收到回复。",
    contactLabel: "联系",
    contactTitle: "联系与支持",
    contactText:
      "之后你可以在这里加入编辑邮箱、合作方式和捐助链接。",
    donationLink: "捐助链接",
    guidelinesTitle: "投稿标准",
    guidelinesIntro:
      "我们欢迎立论清楚、概念严谨、并且能够面对现实社会问题的写作。",
    guidelines1:
      "文章应当有清晰的发展脉络与论证基础。我们欢迎有明确问题意识、能够支撑自身判断的写作。",
    guidelines2:
      "我们尤其欢迎与现实社会现象、历史处境与具体生活条件相结合的分析，而不只是停留在抽象概念层面。",
    guidelines3:
      "凡涉及事实性判断，都应认真核对，并尽量提供准确可靠的信息来源。",
    guidelines4:
      "例如：如果文章提出“汽车安全测试长期以来是按照男性人体模型设计的”，则需要核实这一说法，并引用可靠来源。",
    guidelines5:
      "我们欢迎论文、理论片段、批评性介入、翻译、书评、讲稿与档案性文字，但它们都应当具有认真、可读且负责任的写作态度。作者名/笔名需稍微正式，谢谢。",
    guidelines6:
      "我们欢迎双语写作。未来平台可进一步支持译文与平行发布。",
    backToHome: "← 返回主页",
    donateTitle: "支持我们",
    donateText:
      "Feminist Archive 是一个由读者支持的独立项目。如果你希望支持平台持续运作，可以通过以下方式。",
    donateAfdian: "爱发电（占位）",
    donateCoffee: "Buy Me a Coffee（占位）",
    contactPageTitle: "联系",
    contactPageIntro:
      "我们是一个独立的女性主义写作与档案平台。如有任何问题，请通过以下邮箱联系。",
    contactGeneral: "常规问题：general@feministarchive.org",
    contactSubmission: "投稿问题：submissions@feministarchive.org",
    contactCritique: "批评建议：criticism@feministarchive.org",
    contactNote1:
      "如果在文章中发现错误或有不同意见，请联系上述criticism@feministarchive.org邮箱。",
    contactNote2:
      "若对相关文章有系统性的观点批判，请同样以专业文章方式写作发送至此邮箱；若通过审核，会连接在相关文章旁。",
    monthlyPageTitle: "拒绝的档案",
    monthlyPageIntro:
      "一个关于抵抗、记忆与不可收编之生活形式的月度专题。",
    monthlySection1: "本月精选",
    monthlySection2: "批评札记",
    monthlySection3: "阅读边栏",
    footerHome: "主页",
    footerArchive: "归档",
    footerSubmit: "投稿",
    footerContact: "联系",
  },
};

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState("main");
  const [language, setLanguage] = useState("en");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const t = text[language];

  const categories =
    language === "zh"
      ? ["All", "Essay", "Archive", "Intervention"]
      : ["All", "Essay", "Archive", "Intervention"];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;

      const haystack = [
        article.title,
        article.author,
        article.category,
        article.excerpt,
        ...article.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = haystack.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const navButtonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: "inherit",
    cursor: "pointer",
    font: "inherit",
  };

  const footerButtonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: "inherit",
    cursor: "pointer",
    font: "inherit",
  };

  const themeCardStyle = {
    cursor: "pointer",
  };

  const specialPageBoxStyle = {
    marginTop: "24px",
    background: "var(--paper)",
    border: "1px solid var(--line)",
    borderRadius: "24px",
    padding: "28px",
    lineHeight: 1.9,
  };

  if (currentPage === "guidelines") {
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
                <div className="section-label">{t.navGuidelines}</div>
                <h2>{t.guidelinesTitle}</h2>
              </div>
            </div>

            <div style={specialPageBoxStyle}>
              <p style={{ color: "var(--muted)", marginTop: 0 }}>
                {t.guidelinesIntro}
              </p>

              <ul style={{ paddingLeft: "20px", color: "var(--muted)" }}>
                <li>{t.guidelines1}</li>
                <li>{t.guidelines2}</li>
                <li>{t.guidelines3}</li>
                <li>{t.guidelines4}</li>
                <li>{t.guidelines5}</li>
                <li>{t.guidelines6}</li>
              </ul>

              <div style={{ marginTop: "28px" }}>
              <button
  className="button button-light"
  onClick={() => setCurrentPage("main")}
>
  {language === "zh" ? "← 返回归档" : "← Back to archive"}
</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (currentPage === "monthly-theme") {

    return renderMonthlyTheme();
  
  }
  if (currentPage === "article-detail") {

    return renderArticleDetail();
  
  }

  function renderMonthlyTheme() {
    const featuredSet =
      language === "zh"
        ? [
            {
              title: "拒绝作为中断形式",
              excerpt:
                "拒绝并非单纯退出，而是一种对连续性的中断。它迫使我们重新思考：哪些生活形式还能继续，哪些叙事必须被打断。",
              linkText: "阅读文章",
              image: "/images/2.png",
            },
            {
              title: "记忆如何逃离制度化",
              excerpt:
                "当一切经验都被归档、管理与命名时，记忆本身如何仍保留其不驯性，仍维持一种无法被完全翻译的剩余。",
              linkText: "阅读文章",
              image: "/images/3.png",
            },
            {
              title: "不可收编的写作",
              excerpt:
                "有些写作并不寻求被整合进既有知识秩序，而是在语言内部保留裂缝，使思想保持一种开放而危险的状态。",
              linkText: "阅读文章",
              image: "/images/4.png",
            },
          ]
        : [
            {
              title: "Refusal as Interruption",
              excerpt:
                "Refusal is not merely withdrawal but a break within continuity, forcing us to ask what forms of life may still continue and which narratives must be interrupted.",
              linkText: "Read article",
              image: "/images/2.png",
            },
            {
              title: "How Memory Escapes Administration",
              excerpt:
                "When experience is endlessly classified and managed, memory may still preserve an unruly remainder that resists full translation.",
              linkText: "Read article",
              image: "/images/3.png",
            },
            {
              title: "Writing Against Incorporation",
              excerpt:
                "Certain forms of writing do not seek integration into existing knowledge systems, but preserve a crack within language itself.",
              linkText: "Read article",
              image: "/images/4.png",
            },
          ];
  
    const fragment =
      language === "zh"
        ? {
            year: "1913",
            title: "英国妇女参政游行",
            text: "1913年，英国妇女社会与政治联盟（WSPU）在伦敦发起大规模游行，争取女性选举权。该行动展示了女性以集体力量挑战法律和政治排斥的早期现代图景。",
            image:
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
          }
        : {
            year: "1913",
            title: "Suffrage Procession in Britain",
            text: "In 1913, members of the WSPU organised major public processions in London demanding women’s suffrage, marking an early modern scene of collective resistance to legal and political exclusion.",
            image:
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
          };
  
    const topics =
      language === "zh"
        ? [
            "羞耻与女性可见性",
            "平台时代的意识形态依附",
            "家务劳动与历史书写",
          ]
        : [
            "Shame and feminine visibility",
            "Ideological attachment in platform culture",
            "Domestic labour and historical writing",
          ];
  
    const margins =
      language === "zh"
        ? [
            "档案并不是静止仓库，而是不断决定什么可被记住、什么被排除的机制。",
            "并非所有可见之物都会进入历史；很多经验恰恰因为过于日常而消失。",
          ]
        : [
            "An archive is never a neutral storehouse, but a mechanism deciding what may be remembered and what is excluded.",
            "Not everything visible enters history; much disappears precisely because it is too ordinary.",
          ];
  
    return (
      <div className="site-shell monthly-gallery-shell">
        <header className="site-header monthly-gallery-header">
          <div className="brand-block">
            <div className="site-name">{t.siteName}</div>
            <div className="site-tagline">
              {language === "zh"
                ? "当女性书写历史"
                : "When women write history"}
            </div>
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
  
        <main className="monthly-gallery-page">
          <section className="monthly-gallery-hero">
            <div className="monthly-gallery-hero-copy">
              <div className="monthly-gallery-kicker">
                {language === "zh" ? "本月主题 / MONTHLY THEME" : "MONTHLY THEME"}
              </div>
  
              <h1 className="monthly-gallery-title">
                {language === "zh" ? "拒绝作为\n中断形式" : "REFUSAL AS\nINTERRUPTION"}
              </h1>
  
              <div className="monthly-gallery-subtitle">
                {language === "zh"
                  ? "REFUSAL AS INTERRUPTION"
                  : "A CURATED READING OF REFUSAL"}
              </div>
  
              <p className="monthly-gallery-summary">
                {language === "zh"
                  ? "拒绝并不是退出，而是一种对秩序的中断。它迫使我们重新思考：哪些生活形式还能继续，哪些叙事必须被改写。"
                  : "Refusal is not retreat, but an interruption of order. It asks what forms of life may still continue, and which narratives must be rewritten."}
              </p>
  
              <div className="monthly-gallery-date">
                {language === "zh" ? "03 / 2026" : "03 / 2026"}
              </div>
            </div>
  
            <div className="monthly-gallery-hero-image" />
          </section>
  
          <section className="monthly-curated-section">
            <div className="monthly-gallery-kicker">
              {language === "zh" ? "精选文章 / CURATED READINGS" : "CURATED READINGS"}
            </div>
  
            <div className="monthly-curated-grid">
              {featuredSet.map((item, index) => (
                <article key={index} className="monthly-curated-card">
                  <div
                    className="monthly-curated-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="monthly-curated-card-body">
                    <div className="monthly-curated-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.excerpt}</p>
                    <div className="monthly-curated-link">{item.linkText} ⟶</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
  
          <section className="monthly-curatorial-band">
            <div className="monthly-curatorial-copy">
              <div className="monthly-gallery-kicker">
                {language === "zh" ? "策展导语 / CURATORIAL NOTE" : "CURATORIAL NOTE"}
              </div>
  
              <h2>
                {language === "zh"
                  ? "拒绝并不是退出，\n而是一种对秩序的中断。"
                  : "Refusal is not retreat,\nbut an interruption of order."}
              </h2>
  
              <p>
                {language === "zh"
                  ? "本月专题试图以更缓慢、更具展览感的阅读方式，重新组织“拒绝”的意义。它并不只是政治口号，而是与记忆、羞耻、制度、照护劳动以及主体的形成方式交织在一起。"
                  : "This month’s section reconsiders refusal through a slower, more exhibition-like mode of reading, linking it to memory, shame, institutions, care labour, and subject formation."}
              </p>
  
              <p>
                {language === "zh"
                  ? "因此，这一页并不是普通的信息列表，而更像一册专题画册：图像、文章与边注共同构成一种被策划的阅读路径。"
                  : "This page is less an information list than a visual dossier, where image, essay, and marginal note form a curated path of reading."}
              </p>
            </div>
  
            <div className="monthly-curatorial-image-wrap">
              <div className="monthly-curatorial-image monthly-curatorial-image-top" />
              <div className="monthly-curatorial-image monthly-curatorial-image-bottom" />
            </div>
          </section>
  
          <section className="monthly-appendix-grid">
            <div className="monthly-appendix-card">
              <div className="monthly-gallery-kicker">
                {language === "zh" ? "热门议题 / POPULAR DISCUSSIONS" : "POPULAR DISCUSSIONS"}
              </div>
              <ul className="monthly-appendix-list">
                {topics.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="monthly-appendix-card">
              <div className="monthly-gallery-kicker">
                {language === "zh" ? "阅读边栏 / READING MARGINS" : "READING MARGINS"}
              </div>
              <div className="monthly-margins-stack">
                {margins.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
  
            <div className="monthly-appendix-card monthly-fragment-single">
              <div className="monthly-gallery-kicker">
                {language === "zh" ? "历史碎片 / HISTORICAL FRAGMENT" : "HISTORICAL FRAGMENT"}
              </div>
  
              <div className="monthly-fragment-layout">
                <div
                  className="monthly-fragment-thumb"
                  style={{ backgroundImage: `url(${fragment.image})` }}
                />
                <div className="monthly-fragment-text">
                  <div className="monthly-fragment-year">{fragment.year}</div>
                  <h3>{fragment.title}</h3>
                  <p>{fragment.text}</p>
                </div>
              </div>
            </div>
          </section>
  
          <div className="monthly-gallery-back-row">
            <button
              className="button button-dark"
              onClick={() => setCurrentPage("main")}
            >
              {language === "zh" ? "返回首页 / BACK TO HOME" : "BACK TO HOME"}
            </button>
          </div>
        </main>
      </div>
    );
  }
  function renderAllArticlesPage() {
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
                <div className="section-label">
                  {language === "zh" ? "全部文章" : "All Articles"}
                </div>
                <h2>
                  {language === "zh" ? "文章索引与检索" : "Article Index and Search"}
                </h2>
              </div>
            </div>
  
            <div className="archive-tools">
              <input
                className="search-input"
                type="text"
                placeholder={
                  language === "zh"
                    ? "按标题、作者、概念或关键词搜索……"
                    : "Search by title, author, concept, or keyword..."
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
  
              <div className="category-row">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={
                      activeCategory === category
                        ? "category-pill active"
                        : "category-pill"
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
  
            <div className="all-articles-list">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="all-articles-item"
                  onClick={() => {
                    setSelectedArticle(article);
                    setCurrentPage("article-detail");
                  }}
                >
                  <div className="all-articles-meta">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
  
                  <h3>{article.title}</h3>
                  <p className="article-author">By {article.author}</p>
                  <p className="all-articles-excerpt">{article.excerpt}</p>
  
                  <div className="tag-row">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
  
            <div style={{ marginTop: "30px" }}>
              <button
                className="button button-dark"
                onClick={() => setCurrentPage("main")}
              >
                {language === "zh" ? "← 返回首页" : "← Back to home"}
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }
  function renderArticleDetail() {
    if (!selectedArticle) return null;
  
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
            <div style={{ marginBottom: "28px" }}>
              <button
                className="button button-light"
                onClick={() => setCurrentPage("main")}
              >
                {t.backToHome}
              </button>
            </div>
  
            <article className="article-detail-page">
              <div className="article-meta">
                <span>{selectedArticle.category}</span>
                <span>{selectedArticle.date}</span>
              </div>
  
              <h1 className="article-detail-title">{selectedArticle.title}</h1>
  
              <p className="article-author">By {selectedArticle.author}</p>
  
              <div className="tag-row" style={{ marginBottom: "26px" }}>
                {selectedArticle.tags.map((tag) => (
                  <span key={tag} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
  
              <div className="article-detail-content">
                {selectedArticle.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </section>
        </main>
      </div>
    );
  }


  if (currentPage === "donate") {
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
                <div className="section-label">{t.navDonate}</div>
                <h2>{t.donateTitle}</h2>
              </div>
            </div>

            <div style={specialPageBoxStyle}>
              <p style={{ color: "var(--muted)", marginTop: 0 }}>{t.donateText}</p>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  marginTop: "24px",
                }}
              >
                <a
  href="https://www.ifdian.net/a/FeministArchive"
  target="_blank"
  rel="noopener noreferrer"
  className="button button-light"
>
  {language === "zh" ? "爱发电支持" : "Support on Afdian"}
</a>

<a
  href="https://buymeacoffee.com/feministarchive"
  target="_blank"
  rel="noopener noreferrer"
  className="button button-light"
>
  {language === "zh" ? "Buy Me a Coffee" : "Buy Me a Coffee"}
</a>
<a
  href="https://ko-fi.com/feministarchive"
  target="_blank"
  rel="noopener noreferrer"
  className="button button-light"
>
  {language === "zh" ? "Ko-fi 支持" : "Support on Ko-fi"}
</a>
              </div>

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

  if (currentPage === "contact-page") {
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
                <div className="section-label">{t.navContact}</div>
                <h2>{t.contactPageTitle}</h2>
              </div>
            </div>

            <div style={specialPageBoxStyle}>
              <p style={{ color: "var(--muted)", marginTop: 0 }}>
                {t.contactPageIntro}
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  marginTop: "24px",
                }}
              >
                <a href="mailto:general@feministarchive.org">
                  {t.contactGeneral}
                </a>
                <a href="mailto:submissions@feministarchive.org">
                  {t.contactSubmission}
                </a>
                <a href="mailto:criticism@feministarchive.org">
                  {t.contactCritique}
                </a>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  color: "var(--muted)",
                  lineHeight: 1.9,
                }}
              >
                <p>{t.contactNote1}</p>
                <p>{t.contactNote2}</p>
              </div>

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
            flexDirection: "column",
            gap: "14px",
            alignItems: "flex-end",
          }}
        >
          <nav className="top-nav">
            <button style={navButtonStyle} onClick={() => setCurrentPage("main")}>
              {t.navHome}
            </button>
            <a href="#archive">{t.navArchive}</a>
            <a href="#submit">{t.navSubmit}</a>
            <button
              style={navButtonStyle}
              onClick={() => setCurrentPage("contact-page")}
            >
              {t.navContact}
            </button>
          </nav>

          <div style={{ display: "flex", gap: "10px" }}>
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
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-left">
            <div className="eyebrow">{t.heroEyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>

            <div className="hero-actions">
              <a className="button button-dark" href="#submit">
                {t.heroSubmit}
              </a>
              <a className="button button-light" href="#archive">
                {t.heroBrowse}
              </a>
            </div>
          </div>

          <aside className="hero-right">

            <div
              className="theme-card"
              style={themeCardStyle}
              /*onClick={() => setCurrentPage("monthly-theme")}</aside>*/
            /* >
              <div className="theme-label">{t.themeLabel}</div>
              <h2>{t.themeTitle}</h2>
              <p>{t.themeText}</p>
            </div>
           
          </aside>
        </section>
       
        <section className="section-intro">
          <div>
            <div className="section-label">{t.aboutLabel}</div>
            <h2>{t.aboutTitle}</h2>
          </div>
          <p>{t.aboutText}</p>
        </section>

        <section id="archive" className="archive-section">
          <div className="section-heading">
            <div>
              <div className="section-label">{t.archiveLabel}</div>
              <h2>{t.archiveTitle}</h2>
            </div>
          </div>

          <div className="archive-tools">
            <input
              className="search-input"
              type="text"
              placeholder={t.archivePlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="category-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "category-pill active"
                      : "category-pill"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="article-grid">
            {filteredArticles.map((article) => (
              <article
              key={article.id}
              className="article-card"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedArticle(article);
                setCurrentPage("article-detail");
              }}
            >
                <div className="article-meta">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <h3>{article.title}</h3>
                <p className="article-author">By {article.author}</p>
                <p className="article-excerpt">{article.excerpt}</p>

                <div className="tag-row">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="submit" className="submit-section">
          <div className="submit-left">
            <div className="section-label">{t.submitLabel}</div>
            <h2>{t.submitTitle}</h2>
            <p>{t.submitText}</p>

            <ul className="submission-notes">
              <li>{t.submitNote1}</li>
              <li>{t.submitNote2}</li>
              <li>{t.submitNote3}</li>
            </ul>

            <p style={{ marginTop: "18px", color: "var(--muted)" }}>
              <button
                onClick={() => setCurrentPage("guidelines")}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "inherit",
                  textDecoration: "underline",
                  cursor: "pointer",
                  font: "inherit",
                }}
              >
                {t.submitGuidelines}
              </button>
            </p>
          </div>

          {isSubmitted ? (
            <div className="submit-form">
            <div className="section-label">{t.submitLabel}</div>
          
            <h2 style={{ marginTop: 0 }}>{t.successTitle}</h2>
          
            <div
              style={{
                marginTop: "12px",
                display: "grid",
                gap: "14px",
                color: "var(--muted)",
                lineHeight: 1.9,
              }}
            >
              <p style={{ margin: 0 }}>{t.successText1}</p>
          
              <p style={{ margin: 0 }}>{t.successText2}</p>
          
              <p style={{ margin: 0 }}>
                {t.successText3}
              </p>
          
              <p style={{ margin: 0 }}>
                {t.successText4}
              </p>
            </div>
          
            <div style={{ marginTop: "22px" }}>
              <button
                type="button"
                className="button button-dark"
                onClick={() => setIsSubmitted(false)}
              >
                {language === "zh" ? "继续编辑" : "Edit again"}
              </button>
            </div>
          </div>

          ) : (
            <form
  className="submit-form"
  onSubmit={(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title");
    const author = formData.get("author");
    const email = formData.get("email");
    const keywords = formData.get("keywords");
    const abstract = formData.get("abstract");
    const content = formData.get("content");

    const subject =
      language === "zh"
        ? `新投稿：${title}`
        : `New Submission: ${title}`;

    const body =
      language === "zh"
        ? `标题：${title}

作者 / 笔名：${author}

邮箱：${email}

关键词 / 标签：${keywords}

摘要 / 给编辑的说明：
${abstract}

------------------------

正文：
${content}`
        : `Title: ${title}

Author / Pen name: ${author}

Email: ${email}

Keywords / Tags: ${keywords}

Abstract / Editorial note:
${abstract}

------------------------

Content:
${content}`;

    window.location.href = `mailto:cathy-1234@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
  }}
>
<div className="form-row">
  <input name="title" type="text" placeholder={t.formTitle} />
  <input name="author" type="text" placeholder={t.formAuthor} />
</div>

<div className="form-row">
  <input name="email" type="email" placeholder={t.formEmail} />
  <input name="keywords" type="text" placeholder={t.formKeywords} />
</div>

<textarea name="abstract" placeholder={t.formAbstract} rows="5" />
<textarea name="content" placeholder={t.formBody} rows="10" />

              <button type="submit" className="button button-dark">
                {t.formButton}
              </button>
            </form>
          )}
        </section>

        <section id="contact" className="contact-section">
          <div>
            <div className="section-label">{t.contactLabel}</div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>

          <div className="contact-links">
            <a href="mailto:editor@feministarchive.org">
              editor@feministarchive.org
            </a>
            <button
              onClick={() => setCurrentPage("donate")}
              style={{
                textAlign: "left",
                padding: "14px 16px",
                border: "1px solid var(--line)",
                borderRadius: "18px",
                background: "var(--paper)",
                cursor: "pointer",
                font: "inherit",
              }}
            >
              {t.donationLink}
            </button>
            <button
              onClick={() => setCurrentPage("guidelines")}
              style={{
                textAlign: "left",
                padding: "14px 16px",
                border: "1px solid var(--line)",
                borderRadius: "18px",
                background: "var(--paper)",
                cursor: "pointer",
                font: "inherit",
              }}
            >
              {t.navGuidelines}
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>© 2026 Feminist Archive</div>
        <div className="footer-links">
          <button style={footerButtonStyle} onClick={() => setCurrentPage("main")}>
            {t.footerHome}
          </button>
          <a href="#archive">{t.footerArchive}</a>
          <a href="#submit">{t.footerSubmit}</a>
          <button
            style={footerButtonStyle}
            onClick={() => setCurrentPage("contact-page")}
          >
            {t.footerContact}
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;

*/
import "./index.css";

function App() {
  return (
    <main className="maintenance-page">
      <section className="maintenance-card">
        <div className="maintenance-label">FEMINIST ARCHIVE</div>

        <h1>Site under maintenance</h1>

        <p className="maintenance-intro">
          Feminist Archive is currently being prepared and refined.
        </p>

        <p>
          We are working on the full site and will return with a more complete
          platform for feminist writing, critical reflection, and archival work.
        </p>

        <p>
          For enquiries, submissions, or editorial matters, please contact us
          temporarily at:
        </p>

        <a className="maintenance-email" href="mailto:submissions@feministarchivejournal.org">
        submissions@feministarchivejournal.org
        </a>

        <div className="maintenance-footer">
          Rigorous writing · Critical reflection · Archival work
        </div>
      </section>
    </main>
  );
}

export default App;

