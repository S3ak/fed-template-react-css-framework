function HomePage() {
  return (
    <>
      <section role="search"></section>

      <article role="doc-introduction">
        <h2>List</h2>

        <img
          src="/placeholder.jpg"
          loading="lazy"
          alt="…"
          className="u-img hero-image"
          width="1024"
          height="1024"
        />

        <p>_REPLACE_INTRODUCTION_</p>
      </article>

      <section role="list">
        <div id="js-list-container">_LOADING_INDICATOR_GOES_HERE_</div>
      </section>
    </>
  );
}

export default HomePage;
