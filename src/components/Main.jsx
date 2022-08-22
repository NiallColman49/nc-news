const Main = () => {
  return (
    <>
      <main>
        <div className="container home-wrapper page-wrap">
          <div className="intro">
            <p>
              <span className="underline">The Northcoders</span> news articles.
              Original reporting and incisive analysis, direct from the HQ every
              morning. Available for everyone,
              <span className="underline"> funded by readers.</span>
            </p>
          </div>
          <ul className="featured-projects">
            <li>
              <a href="link-to-topics"> Topics </a>
            </li>
            <li>
              <a href="link to articles"> Articles </a>
            </li>
            <li>
              <a href="link to categories">Categories</a>
            </li>
            <li>
              <a href="link to user"> Usernames </a>
            </li>
            <li>
              <a href="link to response"> Response </a>
            </li>
            <li>
              <a href="Link to comments"> Comments </a>
            </li>
            <li>
              <a href="Link to subscribe"> Subscribe </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Main;