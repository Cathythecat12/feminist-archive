function ParallaxAboutPage({ language, setCurrentPage }) {
  const zh = language === "zh";

  return (
    <div className="parallax-page parallax-about-page">
      <header className="parallax-topbar">
        <div className="parallax-topbar-left">
          <button onClick={() => setCurrentPage("parallax")}>
            {zh ? "返回 Parallax" : "Back to Parallax"}
          </button>
        </div>

        <button className="parallax-home-link" onClick={() => setCurrentPage("parallax")}>
          Parallax
        </button>

        <div className="parallax-topbar-right">
          <button onClick={() => setCurrentPage("editorial-front")}>
            Feminist Archive
          </button>
        </div>
      </header>

      <main className="parallax-about-page-main">
        <article className="parallax-about-essay">
          <p className="parallax-about-essay-kicker">Feminist Archive / Critical Series</p>
          <h1>Why Aren’t All Our Essays Directly About Feminism?</h1>

          <p>
            At first glance, some of our essays may seem only loosely connected to
            feminism. You might find pieces on philosophy, psychoanalysis,
            capitalism, technology, history, sport, or contemporary culture alongside
            essays that engage directly with feminist theory.
          </p>
          <p>This is intentional.</p>
          <p>
            Feminism is not only a collection of topics. It is also a way of asking
            questions. To understand how gender operates, we must also understand how
            power operates. To understand patriarchy, we must also understand
            capitalism, ideology, labour, knowledge, desire, media, and the histories
            that shape our present.
          </p>
          <p>
            Many of these questions do not begin with feminism directly. Yet they
            help build the intellectual foundations that make feminist thinking
            possible.
          </p>
          <p>That is why Parallax exists.</p>
          <p>
            In astronomy, parallax describes how the same object appears differently
            when viewed from another position. We borrow the term because changing
            one’s perspective often reveals what remained invisible before. Essays in
            Parallax approach contemporary life from adjacent angles: philosophy,
            ideology critique, history, political economy, psychoanalysis, and
            reflections on current events. They are not departures from Feminist
            Archive, but parallel paths leading toward a deeper understanding of the
            same world.
          </p>
          <p>
            We hope these essays create a wider space for reading, questioning, and
            critical thought. We also hope they make Feminist Archive accessible to
            readers who may not begin with feminism, but who are willing to think
            seriously about the conditions that make feminism and other emancipatory
            traditions necessary.
          </p>
          <p>
            Feminist Archive is committed not only to feminist thought, but to the
            broader pursuit of justice, critical inquiry, and intellectual freedom.
          </p>
        </article>
      </main>
    </div>
  );
}

export default ParallaxAboutPage;
