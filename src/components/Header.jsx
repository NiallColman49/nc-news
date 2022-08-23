import Logo from "../northcoders-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="menu">
              <li>
                <Link to="/allarticles">Articles</Link>
              </li>
              <li>
                <a>Users</a>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </nav>
          <button className="hamburger">
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
