function ParlourPage({ language, onBack, setCurrentPage }) {
    const zh = language === "zh";
  
    return (
      <div className="parlour-page">
        <header className="parlour-header">
          <button onClick={onBack}>← {zh ? "返回" : "Back"}</button>
  
          <div className="parlour-logo" onClick={() => setCurrentPage("magazine")}>
            The Parlour
          </div>
  
          <button onClick={() => setCurrentPage("magazine")}>
            {zh ? "杂志" : "Magazine"}
          </button>
        </header>
  
        <main className="parlour-main">
          <section className="parlour-hero">
            <div className="parlour-kicker">
              {zh ? "柔软物件的档案室" : "A ROOM OF SOFT OBJECTS"}
            </div>
  
            <h1>
              {zh
                ? "关于粉色、镜子、蛋糕、玩偶与女性主体。"
                : "On pinkness, mirrors, cakes, dolls, and feminine subjectivity."}
            </h1>
  
            <p>
              {zh
                ? "The Parlour 不是一个甜美房间，而是一间女性主义沙龙：在这里，柔软、装饰、欲望和美被重新作为理论对象阅读。"
                : "The Parlour is not a room of sweetness, but a feminist salon where softness, ornament, desire, and beauty are read as theoretical objects."}
            </p>
          </section>
  
          <section className="parlour-rooms">
            <article>
              <span>MIRROR ROOM</span>
              <h2>{zh ? "镜子" : "Mirrors"}</h2>
              <p>{zh ? "凝视、自我形象与被观看的身体。" : "Gaze, self-image, and the body made visible."}</p>
            </article>
  
            <article>
              <span>CAKE TABLE</span>
              <h2>{zh ? "蛋糕" : "Cakes"}</h2>
              <p>{zh ? "消费、甜美、阶级与女性化享乐。" : "Consumption, sweetness, class, and feminised pleasure."}</p>
            </article>
  
            <article>
              <span>DOLL CABINET</span>
              <h2>{zh ? "玩偶" : "Dolls"}</h2>
              <p>{zh ? "商品身体、粉色资本主义与主体投射。" : "Commodity bodies, pink capitalism, and projected subjectivity."}</p>
            </article>
  
            <article>
              <span>LETTER SOFA</span>
              <h2>{zh ? "来信" : "Letters"}</h2>
              <p>{zh ? "未寄出的信、私密写作与情感档案。" : "Unsent letters, private writing, and affective archives."}</p>
            </article>
          </section>
        </main>
      </div>
    );
  }
  
  export default ParlourPage;