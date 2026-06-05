function ArchiveHousePage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
  
    const rooms = [
      {
        floor: zh ? "三层" : "THIRD FLOOR",
        title: zh ? "FA 的故事" : "The Story of FA",
        label: zh ? "起源" : "ORIGIN",
        text: zh
          ? "关于 Feminist Archive 如何从一个写作计划逐渐形成公共档案。"
          : "How Feminist Archive became a public archive from a practice of writing.",
        page: "our-story",
      },
      {
        floor: zh ? "二层" : "SECOND FLOOR",
        title: zh ? "我们如何编辑" : "How We Edit",
        label: zh ? "编辑室" : "EDITORIAL ROOM",
        text: zh
          ? "阅读、翻译、讨论、修改，以及 Feminist Archive 背后的故事。"
          : "Reading, translating, discussing, revising, and the story behind Feminist Archive.",
        page: "how-we-edit",
      },
      
      {

        floor: zh ? "一层" : "FIRST FLOOR",
      
        title: "Reading Room",
      
        label: zh ? "阅读室" : "READING ROOM",
      
        text: zh
      
          ? "进入 Feminist Archive 为深度阅读者准备的公共书房。"
      
          : "Enter a public room for feminist reading, study, and return.",
      
        page: "reading-room",
      
      },
      {
        floor: zh ? "地面层" : "GROUND FLOOR",
        title: zh ? "投稿与来信" : "Submissions & Letters",
        label: zh ? "前厅" : "FRONT HALL",
        text: zh
          ? "投稿、联系、批评、回应与公共通信。"
          : "Submissions, contact, criticism, responses, and public correspondence.",
        page: "contact-page",
      },
    ];
  
    return (
      <div className="archive-house-page">
        <header className="archive-house-header">
          <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>
  
          <div className="archive-house-small-logo" onClick={onBack}>
            Feminist Archive
          </div>
  
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "进入杂志" : "Magazine"}
          </button>
        </header>
  
        <main className="archive-house-main">
          <section className="archive-house-intro">
            <div className="archive-house-kicker">
              {zh ? "冬季档案馆" : "WINTER ARCHIVE HOUSE"}
            </div>
  
            <h1>Archive House</h1>
  
            <p>
              {zh
                ? "一座想象中的女性主义档案馆：每一层都是一种写作方式，每一扇窗都是一个可以进入的房间。"
                : "An imagined feminist archive building: each floor is a mode of writing, each window a room one may enter."}
            </p>
          </section>
  
          <section className="archive-building">
            <div className="archive-roof">
              <span>FEMINIST ARCHIVE</span>
              <em>EST. 2026</em>
            </div>
  
            <div className="archive-building-body">
              {rooms.map((room, index) => (
                <button
                  key={room.title}
                  className={`archive-window window-${index + 1}`}
                  onClick={() => setCurrentPage(room.page)}
                >
                  <span className="window-floor">{room.floor}</span>
                  <span className="window-label">{room.label}</span>
                  <strong>{room.title}</strong>
                  <p>{room.text}</p>
                </button>
              ))}
            </div>
  
            <div className="archive-door" onClick={() => setCurrentPage("magazine")}>
              <span>{zh ? "进入阅读室" : "ENTER READING ROOM"}</span>
            </div>
          </section>
  
          <section className="archive-house-note">
            <p>
              {zh
                ? "这不是一座真实建筑，而是 Feminist Archive 对公共写作的想象：被保存、被阅读、被争论，并在时间中继续发光。"
                : "This is not a real building, but an image of public writing: preserved, read, argued with, and kept luminous across time."}
            </p>
          </section>
        </main>
  
        <div className="archive-snow snow-1">✦</div>
<div className="archive-snow snow-2">✧</div>
<div className="archive-snow snow-3">✦</div>
<div className="archive-snow snow-4">✧</div>
<div className="archive-snow snow-5">✦</div>
<div className="archive-snow snow-6">✧</div>
<div className="archive-snow snow-7">✦</div>
<div className="archive-snow snow-8">✧</div>
<div className="archive-snow snow-9">✦</div>
<div className="archive-snow snow-10">✧</div>
<div className="archive-snow snow-11">✦</div>
<div className="archive-snow snow-12">✧</div>
      </div>
    );
  }
  
  export default ArchiveHousePage;