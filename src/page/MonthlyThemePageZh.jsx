import { useState } from "react";
import { submitWebsiteForm } from "../utils/formSubmit";
import { articles as chineseArticles } from "../data/articles-zh";

const localIssueArticlesZh = [
    {
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

const issueArticlesZh = [
  ...localIssueArticlesZh,
  chineseArticles.find((article) => article.id === "barbie-capitalism-zh"),
].filter(Boolean);
  
  function MonthlyThemePageZh({ onBack, onOpenArticle, setLanguage }) {
    const [newsletterStatus, setNewsletterStatus] = useState("");
    return (
      <div className="issue-shell">
        <header className="issue-header">
          <div className="issue-left-nav">
            <button className="issue-menu-button" onClick={onBack}>
              菜单
            </button>
            <span>/</span>
            <button className="issue-menu-button" onClick={onBack}>
              主页
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
              <div className="issue-kicker">本月专题 / MONTHLY ISSUE</div>
  
              <h1>拒绝的档案</h1>
  
              <p>
                一个关于拒绝、记忆、不可见劳动，以及那些抵抗被轻易吸纳的生活形式的专题。
              </p>
            </div>
          </section>
  
          <section className="issue-intro">
            <section className="issue-meta-strip">
              <span>第 01 期</span>
              <span>2026年3月</span>
              <span>拒绝</span>
              <span>记忆</span>
              <span>劳动</span>
              <span>档案</span>
            </section>
  
            <div>
              <div className="issue-section-label">编辑札记</div>
              <h2>拒绝不是退场。</h2>
            </div>
  
            <p>
              本期将拒绝理解为对秩序的中断，而不是简单的撤退。它汇集文章、理论片段与档案式反思，讨论记忆、劳动、语言，以及那些不容易进入公共记录的生活形式。
            </p>
          </section>
  
          <section className="issue-grid-section">
            <section className="issue-preview-section">
              <div className="issue-section-label">本期内容</div>
  
              <div className="issue-preview-grid">
                <div className="issue-preview-item">
                  <h3>为什么拒绝不是沉默</h3>
                </div>
  
                <div className="issue-preview-item">
                  <h3>家务劳动如何从历史中消失</h3>
                </div>
  
                <div className="issue-preview-item">
                  <h3>抵抗快速消费的写作</h3>
                </div>
  
                <div className="issue-preview-item">
                  <h3>未完成生活的政治</h3>
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
  
            <h2>慢慢阅读。反复返回。保存那些正在消失的东西。</h2>
  
            <p>
              Feminist Archive 将每一期专题视为一个阅读环境：一组暂时聚合的文章、札记、图像与历史片段。它的目标不是速度，而是返回。
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
              <a href="mailto:submissions@feministarchivejournal.org">投稿</a>
              <a href="mailto:editorial@feministarchivejournal.org">编辑部</a>
              <a href="https://feministarchivejournal.org">网站</a>
            </div>
          </footer>
        </main>
      </div>
    );
  }
  
  export default MonthlyThemePageZh;
