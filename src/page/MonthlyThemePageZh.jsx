import { useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";
import { articles as chineseArticles } from "../data/articles-zh";
import MagazineMenuOverlay from "../components/MagazineMenuOverlay";

const localIssueArticlesZh = [
    {
      hidden: true,
      id: "refusal-and-memory-zh",
      title: "拒绝与记忆的工作",
      category: "文章 / 记忆",
      author: "Feminist Archive",
      date: "2026年3月",
      readTime: "12 分钟阅读",
      image: "/images/文章素材图1.jpg",
      excerpt:
        "拒绝并不只是退场，而是一种历史中断与记忆生成的形式。",
      tags: ["记忆", "拒绝", "档案", "历史"],
      content: `拒绝常常被误解为沉默、撤退或脱离。
  
  但在历史中，拒绝经常以中断的形式出现。它打断制度的连续性，拒绝继承既定角色、既定叙事，以及对服从的既定期待。
  
  记忆恰恰在这些中断中生成。那些制度试图抹除的东西，常常通过碎片化的证词、非正式记录和身体化传递重新返回。
  
  拒绝有时正是在创造一种正式机构未能保存的档案。`,
    },
    {
      hidden: true,
      id: "domestic-labour-zh",
      title: "家务劳动与不可见档案",
      category: "分析 / 劳动",
      author: "编辑部",
      date: "2026年3月",
      readTime: "9 分钟阅读",
      image: "/images/文章素材图3.jpg",
      excerpt:
        "哪些劳动之所以消失，正是因为它们被认为太普通，以至于不值得进入档案？",
      tags: ["劳动", "照护劳动", "性别", "历史"],
      content: `档案从来不是中立的。
  
  家务劳动之所以经常消失，是因为历史上的制度很少把再生产劳动视为具有历史意义的对象。
  
  做饭、清洁、情感照护与不可见的组织劳动支撑着整个社会结构。
  
  然而，这些劳动却常常因为被女性化、日常化和自然化，而没有留下正式记录。`,
    },
    {
      hidden: true,
      id: "ordinary-forms-of-refusal-zh",
      title: "拒绝的日常形式",
      category: "文章 / 生活",
      author: "Feminist Archive",
      date: "2026年3月",
      readTime: "8 分钟阅读",
      image: "/images/文章素材图2.jpg",
      excerpt:
        "拒绝并不总是以断裂的形式出现。有时，它表现为延迟、不透明、撤回，或一句没有完成的话。",
      tags: ["日常生活", "拒绝", "主体性"],
      content: `拒绝常常太安静，以至于无法被识别为拒绝。
  
  它可能表现为延迟，表现为拒绝解释，拒绝被翻译，拒绝随时可用。
  
  这些日常姿态并不在历史之外。相反，它们往往正是历史被最亲密地经历的地方。`,
    },
  ];

const currentIssueArticleIdsZh = [
  "barbie-capitalism-zh",
  "reproduction-is-labour",
  "self-objectification-beauty-myth",
  "postfeminist-self-discipline-internalized-misogyny",
  "butler-women-subject-heterosexual-matrix",
  "butler-sex-natural-or-constructed",
  "butler-coalition-without-unified-women",
  "butler-gender-power-repetition-subversion",
  "butler-repetition-subversion-gender-trouble",
  "butler-origin-myth-sexual-order",
];

const issueArticlesZh = [
  ...localIssueArticlesZh.filter((article) => !article.hidden),
  ...currentIssueArticleIdsZh.map((id) =>
    chineseArticles.find((article) => article.id === id),
  ),
].filter(Boolean);
  
  function MonthlyThemePageZh({ onBack, onOpenArticle, setLanguage, setCurrentPage }) {
    const [newsletterStatus, setNewsletterStatus] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    return (
      <div className="issue-shell">
        {showMenu && (
          <MagazineMenuOverlay
            language="zh"
            setCurrentPage={setCurrentPage}
            onClose={() => setShowMenu(false)}
          />
        )}

        <header className="issue-header">
          <div className="issue-left-nav">
            <button className="issue-menu-button" onClick={() => setShowMenu(true)}>
              菜单
            </button>
            <span>/</span>
            <button className="issue-menu-button" onClick={onBack}>
              主页
            </button>
          </div>
  
          <div className="issue-logo" onClick={onBack}>
            <span>Feminist Archive</span>
            <small>London</small>
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
              <div className="issue-kicker">本月专题 / MONTHLY ISSUE</div>
  
              <h1>六月期刊</h1>

              <p>
                从《性别麻烦》到商品女权，重新追问性别、主体、欲望与资本如何被生产出来。
              </p>
            </div>
          </section>
  
          <section className="issue-intro">
            <section className="issue-meta-strip">
              <span>第 02 期</span>
              <span>2026年6月</span>
              <span>书评</span>
              <span>女性主义</span>
              <span>性别麻烦</span>
              <span>资本主义</span>
            </section>
  
            <div>
              <div className="issue-section-label">编辑札记</div>
              <h2>本期从巴特勒开始，也回到当代商品现场。</h2>
            </div>
  
            <p>
              本期把 Feminist Archive 的《性别麻烦》导读、芭比文章、生育劳动与美貌神话放在同一条阅读路径里：一边追问“妇女”“身体”“性别”如何被权力生产，一边观察资本、劳动制度与美貌标准如何把女性主义问题重新带回日常生活。
            </p>
          </section>
  
          <section className="issue-grid-section">
            <section className="issue-preview-section">
              <div className="issue-section-label">本期内容</div>
  
              <div className="issue-preview-grid">
                <div className="issue-preview-item">
                  <h3>“妇女”这个主体是如何被法律、语言与制度生产出来的</h3>
                </div>
  
                <div className="issue-preview-item">
                  <h3>生理性别是否真的先于文化，还是早已被分类制度塑造</h3>
                </div>
  
                <div className="issue-preview-item">
                  <h3>如果没有统一的“妇女”，女性主义政治如何继续行动</h3>
                </div>
  
                <div className="issue-preview-item">
                  <h3>性别秩序如何靠重复维持，又如何在重复中发生偏移</h3>
                </div>

                <div className="issue-preview-item">
                  <h3>起源神话、自然/文化二元论与异性恋矩阵如何制造“自然”</h3>
                </div>

                <div className="issue-preview-item">
                  <h3>当商品学会自我批判，女性主义如何被重新注入消费系统</h3>
                </div>

                <div className="issue-preview-item">
                  <h3>生育、照护与家务劳动如何被 GDP、工资与市场价值体系隐形化</h3>
                </div>

                <div className="issue-preview-item">
                  <h3>美貌神话如何把外部控制转化为女性对身体的自我监控</h3>
                </div>
              </div>
            </section>
  
            <div className="issue-section-label">本月推荐</div>
  
            <div className="issue-card-grid">
              {issueArticlesZh.map((article) => (
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
            <div className="issue-section-label">阅读路径</div>
  
            <h2>从主体、身体、联盟，到重复与颠覆。</h2>
 
            <p>
              你可以从《性别麻烦》的第一篇导读开始，也可以先进入芭比、生育劳动与美貌神话的文章，观察理论如何在当代资本主义现场重新显影。本期不是给出一个封闭答案，而是搭建一条可以反复返回的思想路径。
            </p>
          </section>
  
          <footer className="issue-footer">
            <section className="issue-newsletter">
              <div className="issue-section-label">通讯</div>
  
              <div className="issue-newsletter-grid">
                <div>
                  <h2>与档案保持联系。</h2>
  
                  <p>
                    每两周收到一封安静的编辑通讯：新文章、档案发现、阅读选择，以及我们认为值得慢慢注意的思想片段。
                  </p>
                </div>
  
                <form
                  className="issue-newsletter-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
  
                    const email = e.target.email.value;

                    setNewsletterStatus("正在订阅...");

                    try {
                      await submitWebsiteForm({
                        type: "Newsletter subscription",
                        email,
                        language: "zh",
                      });

                      setNewsletterStatus("订阅成功，谢谢。");
                      e.target.reset();
                    } catch {
                      setNewsletterStatus("订阅失败，请稍后再试。");
                    }
                  }}
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="你的邮箱地址"
                    required
                  />
  
                  <button type="submit">订阅</button>
  
                  <div className="newsletter-meta">
                    <p className="newsletter-note">
                      {newsletterStatus ||
                        "确认订阅后，即表示你同意接收 Feminist Archive 的邮件。你可以随时取消订阅。"}
                    </p>
  
                    <p className="newsletter-policy">
                      我们不会频繁打扰你。这里只会发送编辑来信、新专题与精心选择的阅读内容。
                    </p>
                  </div>
                </form>
              </div>
            </section>
  
            <div>
              <h2>Feminist Archive</h2>
              <p>
                一个关于文章、档案、理论与长篇批评写作的独立女性主义出版平台。
              </p>
            </div>
  
            <div className="issue-footer-links">
              <button onClick={onBack}>主页</button>
              <button onClick={() => setCurrentPage("submission-page")}>投稿</button>
              <a href="mailto:editorial@feministarchivejournal.org">编辑部</a>
              <a href="https://feministarchivejournal.org">网站</a>
            </div>
          </footer>
        </main>
      </div>
    );
  }
  
  export default MonthlyThemePageZh;
