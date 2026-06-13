import { useEffect, useState } from "react";
import { articles as chineseArticles } from "../data/articles-zh";
import { articles as englishArticles } from "../data/articles-en";

const booksEn = [
  {
    id: "room-of-ones-own",
    title: "A Room of One’s Own",
    author: "Virginia Woolf",
    year: "1929",
    category: "Classic Feminist Text",
    path: "Begin Here",
    cover: "/books/covers/room-of-ones-own.jpg",
    pdf: "/books/pdfs/room-of-ones-own.pdf",
    guide: true,
    note: "A beginning point for thinking about writing, money, space, and women’s intellectual life.",
  },
  {
    id: "second-sex",
    title: "The Second Sex",
    author: "Simone de Beauvoir",
    year: "1949",
    category: "Theory & Critique",
    path: "Classic Feminism",
    cover: "/books/covers/second-sex.jpg",
    pdf: "/books/pdfs/second-sex.pdf",
    guide: false,
    note: "A foundational text for thinking womanhood as historical condition, not biological destiny.",
  },
  {
    id: "women-and-economics",
    title: "Women and Economics",
    author: "Charlotte Perkins Gilman",
    year: "1898",
    category: "Classic Feminist Text",
    path: "Body & Labour",
    cover: "/covers/womenandeconomics-en.png",
    pdf: "/pdfs/Women_and_Economics_FeministArchive_full.pdf",
    guide: false,
    note: "A classic argument on women’s economic dependence, domestic labour, and the social organisation of gender.",
  },
  {
    id: "caliban-and-the-witch",
    title: "Caliban and the Witch",
    author: "Silvia Federici",
    year: "2004",
    category: "Body & Labour",
    path: "Body & Labour",
    cover: "",
    pdf: "",
    guide: true,
    note: "A future guide to capitalism, witch-hunts, women’s bodies, and reproductive labour.",
  },
  {
    id: "gender-trouble-en",
    title: "Gender Trouble",
    author: "Judith Butler",
    year: "1990",
    category: "Theory / Gender",
    path: "Theory & Critique",
    cover: "/covers/gender-trouble-zh.png",
    pdf: "",
    guide: true,
    note: "A guide to gender, identity, performativity, the heterosexual matrix, and the production of subjects.",
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    author: "Feminist Archive",
    year: "",
    category: "Reading Room",
    path: "Future Shelf",
    cover: "",
    pdf: "",
    guide: false,
    note: "A place reserved for a future feminist classic.",
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    author: "Feminist Archive",
    year: "",
    category: "Reading Room",
    path: "Future Shelf",
    cover: "",
    pdf: "",
    guide: false,
    note: "A place reserved for a future reading guide.",
  },
];

const booksZh = [
    {
        id: "gender-trouble-zh",
        title: "性别麻烦",
        author: "朱迪斯·巴特勒",
        year: "1990 / 1999",
        category: "理论 / 性别",
        path: "理论入门",
        cover: "/covers/gender-trouble-zh.png",
        pdf: "/pdfs/gender-trouble-zh.pdf",
        guide: true,
        note: "关于性别、身份、操演性、异性恋矩阵与主体规范的重要理论入口。适合希望深入理解当代女性主义与酷儿理论的读者。",
      },
  {
    id: "woolf-zh",
    title: "一间自己的房间",
    author: "弗吉尼亚·伍尔夫",
    year: "",
    category: "经典 / 写作",
    path: "从这里开始",
    cover: "/covers/room-zh.png",
    pdf: "/pdfs/room-zh.pdf",
    guide: false,
    note: "关于女性写作、金钱、空间与知识生活的经典文本。",
  },
  {
    id: "beauvoir-zh",
    title: "即将上架",
    author: "西蒙·德·波伏娃",
    year: "",
    category: "阅读室",
    path: "未来书架",
    cover: "/covers/thesecondsex-zh.png",
    pdf: "",
    guide: false,
    note: "这里将放置新的女性主义经典文本。",
  },
  {
    id: "caliban-and-the-witch",
    title: "卡利班与女巫",
    author: "西尔维娅·费代里奇",
    year: "2004",
    category: "身体与劳动",
    path: "身体与劳动",
    cover: "",
    pdf: "",
    guide: true,
    note: "关于资本主义、猎巫、女性身体与再生产劳动的导读将在这里继续建设。",
  },
  {
    id: "coming-soon-zh-2",
    title: "即将上架",
    author: "Feminist Archive",
    year: "",
    category: "阅读室",
    path: "未来书架",
    cover: "",
    pdf: "",
    guide: false,
    note: "这里将放置新的导读、解读或阅读路径。",
  },
];

function ReadingRoomPage({
  language,
  onBack,
  onOpenArticle,
  setCurrentPage,
  initialShowGuides = false,
  initialGuideBookId = "gender-trouble",
}) {
  const zh = language === "zh";
  const books = zh ? booksZh : booksEn;
  const initialBook = books.find((book) => book.id === initialGuideBookId) || books[0];
  const [activeBook, setActiveBook] = useState(initialBook);
  const [showGuides, setShowGuides] = useState(initialShowGuides);
  const [activeGuideBookId, setActiveGuideBookId] = useState(initialBook.id);
  const sourceArticles = zh ? chineseArticles : englishArticles;
  const genderTroubleGuideOrder = [
    "butler-women-subject-heterosexual-matrix",
    "butler-sex-natural-or-constructed",
    "butler-coalition-without-unified-women",
    "butler-gender-power-repetition-subversion",
    "butler-repetition-subversion-gender-trouble",
    "butler-origin-myth-sexual-order",
  ];
  const guideArticles = [
    ...genderTroubleGuideOrder
      .map((id) => sourceArticles.find((article) => article.id === id))
      .filter(Boolean),
    ...sourceArticles.filter(
      (article) => !genderTroubleGuideOrder.includes(article.id)
    ),
  ];
  const activeGuideBook =
    books.find((book) => book.id === activeGuideBookId) ||
    books.find((book) => book.id === initialGuideBookId) ||
    books[0];
  const isCalibanGuide = activeGuideBook?.id === "caliban-and-the-witch";

  useEffect(() => {
    if (showGuides) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [showGuides]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowGuides(initialShowGuides);
      const nextBook =
        books.find((book) => book.id === initialGuideBookId) || books[0];

      setActiveBook(nextBook);
      setActiveGuideBookId(nextBook.id);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [books, initialGuideBookId, initialShowGuides]);

  if (showGuides) {
    if (isCalibanGuide) {
      return (
        <div className="reading-guide-page reading-guide-page-book">
          <header className="reading-room-header">
            <button onClick={() => setShowGuides(false)}>
              ← {zh ? "返回书架" : "Back to shelf"}
            </button>

            <div className="reading-room-logo" onClick={() => setCurrentPage("main")}>
              Feminist Archive
              <span>{zh ? "经典导读计划" : "classic guide programme"}</span>
            </div>

            <button onClick={() => setCurrentPage("magazine")}>
              {zh ? "杂志" : "Magazine"}
            </button>
          </header>

          <main className="reading-guide-main">
            <section className="reading-guide-hero book-guide-placeholder">
              <div className="reading-guide-meta-grid">
                <span>Feminist Archive</span>
                <span>{zh ? "阅读室" : "Reading Room"}</span>
                <span>{zh ? "《卡利班与女巫》" : "Caliban and the Witch"}</span>
                <span>{zh ? "建设中" : "In progress"}</span>
              </div>

              <div className="reading-room-kicker">
                {zh ? "READING GUIDE / 导读占位" : "READING GUIDE / PLACEHOLDER"}
              </div>

              <h1>{zh ? "《卡利班与女巫》导读" : "Caliban and the Witch Guide"}</h1>

              <p>
                {zh
                  ? "这里会放置 Feminist Archive 对《卡利班与女巫》的导读、关键词、章节说明与延伸阅读。页面已经先建好，未来可以继续补充正文。"
                  : "This page is reserved for the Feminist Archive guide to Caliban and the Witch: keywords, chapter notes, context, and further reading will be added here."}
              </p>
            </section>

            <section className="book-guide-staging">
              <div>
                <span>{zh ? "书籍" : "Book"}</span>
                <h2>{activeGuideBook.title}</h2>
                <p>
                  {activeGuideBook.author} {activeGuideBook.year && `· ${activeGuideBook.year}`}
                </p>
              </div>

              <div>
                <span>{zh ? "未来内容" : "Future notes"}</span>
                <p>
                  {zh
                    ? "这里将加入关于原始积累、猎巫、身体规训、再生产劳动与资本主义形成的导读。"
                    : "Future notes will cover primitive accumulation, witch-hunts, bodily discipline, reproductive labour, and the formation of capitalism."}
                </p>
              </div>
            </section>
          </main>
        </div>
      );
    }

    return (
      <div className="reading-guide-page">
        <header className="reading-room-header">
          <button onClick={() => setShowGuides(false)}>
            ← {zh ? "返回书架" : "Back to shelf"}
          </button>

          <div className="reading-room-logo" onClick={() => setCurrentPage("main")}>
            Feminist Archive
            <span>{zh ? "经典导读计划" : "classic guide programme"}</span>
          </div>

          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
        </header>

        <main className="reading-guide-main">
          <section className="reading-guide-hero">
            <div className="reading-guide-meta-grid">
              <span>Feminist Archive</span>
              <span>{zh ? "经典导读计划" : "Classic guide programme"}</span>
              <span>{zh ? "《性别麻烦》" : "Gender Trouble"}</span>
              <span>{zh ? "持续更新" : "Ongoing"}</span>
            </div>

            <div className="reading-room-kicker">
              {zh ? "READING GUIDES / 阅读导读" : "READING GUIDES"}
            </div>

            <h1>
              {zh ? "从一篇文章开始，进入一座理论房间。" : "Enter theory through essays."}
            </h1>

            <p>
              {zh
                ? "我们旨在推出更多导读，帮助所有女性主义者理解经典书籍，学习理论，并用理论武装自己。"
                : "A collection of guides, essays, and reading paths from Feminist Archive."}
            </p>
          </section>

          <section className="reading-guide-feature">
            <div>
              <span>{zh ? "第一篇导读" : "First guide"}</span>
              <h2>{guideArticles[0]?.title}</h2>
              <p>{guideArticles[0]?.excerpt}</p>
            </div>

            <button
              onClick={() => guideArticles[0] && onOpenArticle(guideArticles[0])}
            >
              {zh ? "进入文章" : "Read essay"}
            </button>
          </section>

          <section className="reading-guide-index">
            {guideArticles.map((article, index) => (
              <article
                className="reading-guide-row"
                key={article.id}
                onClick={() => onOpenArticle(article)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <p>{article.category}</p>
                  <h3>{article.title}</h3>
                  <em>{article.excerpt}</em>
                </div>

                <strong>{zh ? "阅读" : "Read"}</strong>
              </article>
            ))}
          </section>

          <section className="reading-guide-support">
            <div>
              <span>{zh ? "支持导读计划" : "Support the guides"}</span>
              <h2>
                {zh
                  ? "让经典女性主义与哲学导读继续免费开放。"
                  : "Keep feminist and philosophical reading guides free."}
              </h2>
              <p>
                {zh
                  ? "Feminist Archive 持续为公共读者写作免费的经典女性主义书籍与哲学书籍导读。这个计划不依赖广告，也不设置付费墙，所有支持都来自读者赞助。如果你愿意让我们坚持下去，欢迎赞助。"
                  : "Feminist Archive writes free guides to classic feminist and philosophical books for public readers. This work has no paywall and no advertising; it is sustained by reader support."}
              </p>
            </div>

            <a
              href={
                zh
                  ? "https://www.ifdian.net/a/FeministArchive"
                  : "https://ko-fi.com/feministarchive"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {zh ? "赞助 Feminist Archive" : "Support Feminist Archive"}
            </a>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="reading-room-page">
      <header className="reading-room-header">
        <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>

        <div className="reading-room-logo" onClick={() => setCurrentPage("main")}>
          Feminist Archive
          <span>{zh ? "公共阅读室" : "public reading room"}</span>
        </div>

        <button onClick={() => setCurrentPage("magazine")}>
          {zh ? "杂志" : "Magazine"}
        </button>
      </header>

      <main className="reading-room-main">
        <section className="reading-room-hero">
          <div className="reading-room-kicker">
            {zh ? "READING ROOM / 阅读室" : "READING ROOM"}
          </div>

          <h1>
            {zh ? "为深度阅读者准备的女性主义书房。" : "A public room for feminist reading."}
          </h1>

          <p>
            {zh
              ? "这里整理的是为学习、讨论与深度阅读女性主义而准备的书籍。女性主义思想不应被锁在学院、价格、语言或身份门槛之后，而应向所有愿意思考的人敞开。"
              : "A room of books gathered for readers who want to study feminism seriously, slowly, and publicly. Feminist thought should remain open to anyone willing to read, think, and return."}
          </p>
        </section>

        <section className="reading-room-paths">
          {(zh
            ? ["从这里开始", "理论入门", "身体与劳动", "档案与记忆", "未来书架"]
            : ["Begin Here", "Classic Feminism", "Theory & Critique", "Archive & Memory", "Future Shelf"]
          ).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="reading-room-shelf-layout">
          <aside className="reading-room-detail-card">
            <div className="reading-room-detail-label">
              {zh ? "当前书籍" : "CURRENT BOOK"}
            </div>

            <h2>{activeBook.title}</h2>
            <p className="reading-room-author">
              {activeBook.author} {activeBook.year && `· ${activeBook.year}`}
            </p>

            <p>{activeBook.note}</p>

            <div className="reading-room-detail-actions">
              {activeBook.pdf ? (
                <a href={activeBook.pdf} target="_blank" rel="noopener noreferrer">
                  {zh ? "阅读 PDF" : "Read PDF"}
                </a>
              ) : (
                <button disabled>{zh ? "尚未上架" : "Coming soon"}</button>
              )}

              {activeBook.guide ? (
                <button
                  onClick={() => {
                    setActiveGuideBookId(activeBook.id);
                    setShowGuides(true);
                  }}
                >
                  {zh ? "阅读导读" : "Read guide"}
                </button>
              ) : (
                <button disabled>{zh ? "导读待补充" : "Guide soon"}</button>
              )}
            </div>
          </aside>

          <section className="reading-room-bookshelf">
            {books.map((book) => (
              <article
                key={book.id}
                className={
                  activeBook.id === book.id
                    ? "reading-book-card active"
                    : "reading-book-card"
                }
                onClick={() => setActiveBook(book)}
              >
                <div className="reading-book-cover-wrap">
                  {book.cover ? (
                    <img src={book.cover} alt={book.title} />
                  ) : (
                    <div className="reading-book-placeholder">
                      <span>FA</span>
                      <strong>{zh ? "即将上架" : "Coming Soon"}</strong>
                    </div>
                  )}

                  <div className="reading-book-hover">
                    <span>{book.guide ? (zh ? "含导读" : "Guide available") : book.path}</span>
                  </div>
                </div>

                <div className="reading-book-info">
                  <span>{book.category}</span>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              </article>
            ))}
          </section>
        </section>

        <section className="reading-room-note">
          <div>{zh ? "阅读说明" : "EDITORIAL NOTE"}</div>
          <h2>{zh ? "慢慢阅读，反复返回。" : "Read slowly. Return often."}</h2>
          <p>
            {zh
              ? "Reading Room 不是一个普通书单，而是 Feminist Archive 为读者准备的学习路径。未来每本书都可以附带导读、关键词、背景说明、延伸阅读与编辑札记。"
              : "The Reading Room is not a simple list of books. It is a reading environment prepared by Feminist Archive. Each book may later include guides, keywords, background notes, further reading, and editorial commentary."}
          </p>
        </section>
        <section className="reading-room-garden">

  <img
    src="/images/插图.png"
    alt=""
  />

  {language === "zh" ? (
    <>
      <p className="garden-text">
        我们相信会长出绿洲。
      </p>

      
    </>
  ) : (
    <>
      <p className="garden-text">
        We believe an oasis will grow.
      </p>

    
    </>
  )}

</section>
      </main>
    </div>
  );
}

export default ReadingRoomPage;
