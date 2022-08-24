import { Link } from "react-router-dom";

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
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/allarticles">Articles</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
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
