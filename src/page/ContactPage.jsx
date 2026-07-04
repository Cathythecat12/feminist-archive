import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";
  
  import { FaXTwitter } from "react-icons/fa6";
  import { SiBluesky } from "react-icons/si";
  
  function ContactPage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
  
    return (
        
        <div className="editorial-contact-page floral-contact">
        <header className="editorial-contact-header">
          <div className="editorial-contact-left">
            <button onClick={onBack}>MENU</button>
            <span>/</span>
            <button onClick={() => setCurrentPage("donation-drive")}>
              DONATE
            </button>
          </div>
  
          <div className="editorial-contact-logo" onClick={onBack}>
            Feminist Archive
            <span>{zh ? "女性主义公共写作" : "public feminist writing"}</span>
          </div>
  
          <button className="editorial-contact-back" onClick={onBack}>
            {zh ? "返回" : "Back"}
          </button>
        </header>
  
        <main className="psyche-contact-main">
  <h1 className={`psyche-contact-title ${zh ? "" : "psyche-contact-title-en"}`}>
    {zh ? "联系" : "Contact"}
  </h1>

  <section className="psyche-contact-block">
    <h2>{zh ? "反馈" : "Feedback"}</h2>
    <p>
      {zh
        ? "我们温柔地欢迎来自读者的反馈、问题与更正。由于 Feminist Archive 仍是一个小型独立出版项目，我们也许无法逐一回复每一封邮件，但每一封来信都会被认真阅读。"
        : "We warmly welcome feedback, questions, and corrections from readers. Feminist Archive is still a small independent publication, so we may not be able to respond personally to every email, but every message is read with care."}
    </p>
    <p>
      {zh ? "一般问题请联系 " : "For general enquiries, please contact "}
      <a href="mailto:general@feministarchivejournal.org">
        general@feministarchivejournal.org
      </a>
      .
    </p>
  </section>

  <section className="psyche-contact-block">
    <h2>{zh ? "编辑联系" : "Editorial"}</h2>
    <p>
      {zh
        ? "如果你发现事实错误、希望提出编辑建议、合作、采访或更正式的批评性回应，请写信给编辑部。"
        : "For corrections, editorial questions, collaborations, interviews, or more formal critical responses, please write to the editorial address."}
    </p>
    <p>
      <a href="mailto:editorial@feministarchivejournal.org">
        editorial@feministarchivejournal.org
      </a>
    </p>
  </section>

  <section className="psyche-contact-block">
    <h2>{zh ? "投稿" : "Submissions"}</h2>
    <p>
      {zh
        ? "我们接受文章、理论片段、翻译、档案文本、书评与批评性介入。投稿请尽量附上简短介绍与文本方向。"
        : "We accept essays, theoretical fragments, translations, archive texts, reviews, and critical interventions. Please include a short note about the piece and its direction."}
    </p>
    <p>
      <a href="mailto:submissions@feministarchivejournal.org">
        submissions@feministarchivejournal.org
      </a>
    </p>
  </section>

  <section className="psyche-contact-block">
    <h2>{zh ? "社交媒体" : "Social media"}</h2>
    <p>
      {zh
        ? "你也可以在社交媒体上找到我们。我们会在那里发布新文章、档案片段、封面图像与编辑更新。"
        : "You can also find us elsewhere. We share new essays, archival fragments, cover images, and editorial updates across our social platforms."}
    </p>

    <div className="psyche-contact-socials">
      <a href="https://www.instagram.com/feministarchivejournal/" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href="https://bsky.app/profile/feministarchive.bsky.social" target="_blank" rel="noopener noreferrer">
        Bluesky
      </a>
      <a href="https://x.com/FeministArchiv" target="_blank" rel="noopener noreferrer">
        X
      </a>
      <a
        className="psyche-contact-social-icon"
        href="https://www.facebook.com/profile.php?id=61590423616711"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
    </div>
  </section>

  <section className="psyche-contact-block">
    <h2>{zh ? "我们欢迎投稿封面照片！" : "Cover image submissions are welcome!"}</h2>
    <p>
      {zh
        ? "如果你有适合 Feminist Archive 气质的摄影、绘画或电脑绘制图像，也欢迎把作品传给我们。它不需要专业设备，只要你觉得它能让这个网站更美。"
        : "If you have photographs, drawings, or digital images that feel right for Feminist Archive, we would be glad to see them. They do not need professional equipment; they only need to feel at home here."}
    </p>
    <button
      className="psyche-contact-inline-button"
      onClick={() => setCurrentPage("cover-submission")}
    >
      {zh ? "进入封面照片投稿页面" : "Go to cover submission page"}
    </button>
  </section>
</main>
  
        <footer className="editorial-contact-footer">
          <div>
            <div className="editorial-contact-footer-logo">
              Feminist Archive
            </div>
  
            <p>
              {zh
                ? "一个女性主义理论、文章与档案写作平台。"
                : "An independent journal of feminist theory, essays, and archival writing."}
            </p>
  
            <div className="editorial-contact-socials">
              <a href="https://www.instagram.com/feministarchivejournal/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
  
              <a href="https://bsky.app/profile/feministarchive.bsky.social" target="_blank" rel="noopener noreferrer">
                <SiBluesky />
              </a>
  
              <a href="https://x.com/FeministArchiv" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>

              <a href="https://www.facebook.com/profile.php?id=61590423616711" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
  
              <a href="https://www.youtube.com/channel/UCnw53eUKlZOK3Znp1AvY0Cw" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
  
          <div>
            <h4>SECTIONS</h4>
            <button onClick={onBack}>{zh ? "主页" : "Home"}</button>
            <button onClick={() => setCurrentPage("magazine")}>
              {zh ? "杂志" : "Magazine"}
            </button>
            <button onClick={() => setCurrentPage("archive-page")}>
              {zh ? "归档" : "Archive"}
            </button>
          </div>
  
          <div>
            <h4>SUPPORT US</h4>
            <button onClick={() => setCurrentPage("donation-drive")}>
              {zh ? "捐助" : "Donate"}
            </button>
            <button onClick={() => setCurrentPage("newsletter-page")}>
  {zh ? "通讯" : "Newsletter"}
</button>
          </div>
        </footer>
      </div>
    );
  }
  
  export default ContactPage;
