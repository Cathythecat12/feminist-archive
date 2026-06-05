import { useState, useRef, useEffect } from "react";

function NewsletterPrivacyPage({
  language,
  onBack,
  setCurrentPage,
}) {
  const zh = language === "zh";

  const [activeSection, setActiveSection] = useState(0);

  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
  });

  const hoverTimeout = useRef(null);

  const handleHover = (index) => {
    clearTimeout(hoverTimeout.current);

    hoverTimeout.current = setTimeout(() => {
      setActiveSection(index);
    }, 120);
  };

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout.current);
    };
  }, []);

  const sections = zh
    ? [
        [
          "01",
          "我们为什么写通讯",
          "Feminist Archive 的通讯不是频繁推送，也不是营销邮件。它是一封缓慢的编辑来信，只在有真正值得分享的文章、阅读路径、档案更新或项目说明时发送。",
        ],

        [
          "02",
          "我们收集什么",
          "我们只收集你主动填写的邮箱地址，用来向你发送 Feminist Archive 的通讯。我们不会要求你提供真实姓名、身份信息、住址或其他不必要的信息。",
        ],

        [
          "03",
          "我们如何使用你的邮箱",
          "你的邮箱只会用于发送与 Feminist Archive 相关的内容，包括新文章、专题更新、阅读室内容、编辑札记和少量项目通知。它不会被用于无关用途。",
        ],

        [
          "04",
          "发送频率",
          "我们不会频繁打扰你的邮箱。每一次发送都应当有明确的阅读价值，而不是为了维持存在感、制造流量或占据你的注意力。",
        ],

        [
          "05",
          "退订与删除",
          "你可以随时退订。你也可以联系我们，要求更新或删除你的邮箱记录。订阅是一种自愿的阅读关系，而不是一种绑定。",
        ],

        [
          "06",
          "这份说明",
          "如果未来通讯的发送方式发生变化，我们会更新这份说明。最后更新：2026年6月1日。",
        ],
      ]
    : [
        [
          "01",
          "Why we write",
          "The Feminist Archive newsletter is not a stream of frequent updates or promotional messages. It is a slow editorial letter, sent only when there is something meaningful to share: a new essay, a reading path, an archival note, or a project update.",
        ],

        [
          "02",
          "What we collect",
          "We collect only the email address you voluntarily provide in order to receive Feminist Archive letters. We do not ask for your legal name, address, identity details, or any information that is not needed.",
        ],

        [
          "03",
          "How we use your email",
          "Your email is used only to send materials related to Feminist Archive: new essays, issue updates, reading-room notes, editorial letters, and occasional project announcements. It will not be used for unrelated purposes.",
        ],

        [
          "04",
          "How often we write",
          "We do not intend to disturb your inbox frequently. Each letter should have a reason to arrive. The newsletter exists for meaningful reading, not for noise, traffic, or attention capture.",
        ],

        [
          "05",
          "Leaving the list",
          "You may unsubscribe at any time. You may also contact us to update or remove your email record. Subscription is a voluntary readerly relation, not a binding attachment.",
        ],

        [
          "06",
          "This note",
          "If the way we send letters changes in the future, this note will be updated. Last updated: 1 June 2026.",
        ],
      ];


  return (
    <div
      className="privacy-lux-page"
      style={{
        "--cursor-x": `${cursor.x}%`,
        "--cursor-y": `${cursor.y}%`,
      }}
      onMouseMove={(event) => {
        setCursor({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        });
      }}
    >
      <div className="privacy-lux-orb" />

      <header className="privacy-lux-top">
        <button onClick={onBack}>← {zh ? "返回通讯" : "Back"}</button>
        <div>FEMINIST ARCHIVE</div>
        <button onClick={() => setCurrentPage("main")}>{zh ? "主页" : "Home"}</button>
      </header>

      <main className="privacy-lux-canvas">
        <section className="privacy-lux-hero">
          <div className="privacy-lux-cell privacy-lux-title">
            <span className="privacy-lux-label">{zh ? "读者关系说明" : "Reader Relation Note"}</span>
            <h1>Newsletter Privacy Policy</h1>
            <p>
              {zh
                ? "一份关于缓慢来信、克制更新与读者自主性的说明。"
                : "A note on slow letters, restrained updates, and reader autonomy."}
            </p>
          </div>

          <div className="privacy-lux-cell privacy-lux-logo">
            <strong>FA</strong>
            <span>Slow Letters / 2026</span>
          </div>

          <div className="privacy-lux-cell privacy-lux-promise">
            <span className="privacy-lux-label">{zh ? "编辑承诺" : "Editorial Promise"}</span>
            <p>
              {zh
                ? "通讯不是占有注意力，而是邀请一次缓慢阅读。我们不会频繁打扰，也不会把你的邮箱用于 Feminist Archive 以外的目的。"
                : "A letter should not capture attention. It should invite reading. We do not write frequently, and we do not use your email beyond Feminist Archive."}
            </p>
          </div>

          <div className="privacy-lux-cell privacy-lux-words">
            <span>SOFT</span>
            <span>SLOW</span>
            <span>MEANINGFUL</span>
          </div>
        </section>

        <section className="privacy-lux-marquee">
          <div>
            <span>READERLY RELATION</span>
            <span>NO NOISE</span>
            <span>MEANINGFUL LETTERS</span>
            <span>LEAVE ANYTIME</span>
            <span>ARCHIVE USE ONLY</span>
          </div>
        </section>

        <section className="privacy-lux-board">
          <aside className="privacy-lux-index">
            <span className="privacy-lux-label">{zh ? "目录" : "Index"}</span>
            {sections.map(([num, title], index) => (
  <button
    key={title}
    className={activeSection === index ? "active" : ""}
    onPointerEnter={() => handleHover(index)}
    onFocus={() => handleHover(index)}
    onClick={() => setActiveSection(index)}
  >
    <i>{num}</i>
    <span>{title}</span>
  </button>
))}
          </aside>

          <div className="privacy-lux-list">
          {sections.map(([num, title, text], index) => (
  <article
    key={title}
    className={
      activeSection === index
        ? "active privacy-content"
        : "privacy-content"
    }
    onPointerEnter={() => handleHover(index)}
    onClick={() => setActiveSection(index)}
  >
    <div className="privacy-lux-num">{num}</div>
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    <b>{activeSection === index ? "−" : "+"}</b>
  </article>
))}
          </div>
        </section>

        <footer className="privacy-lux-footer">
          <span>FEMINIST ARCHIVE</span>
          <span>{zh ? "高质量邮件 / 克制更新 / 自愿订阅" : "Meaningful letters / restrained updates / voluntary subscription"}</span>
        </footer>
      </main>
    </div>
  );
}

export default NewsletterPrivacyPage;