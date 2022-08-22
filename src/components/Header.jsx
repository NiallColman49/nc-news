import Logo from "../northcoders-logo.svg";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <div className="logo">
            <a href="https://www.northcoders.com">
              <img src={Logo} alt="" />
            </a>
          </div>
          <nav className="main-nav">
            <ul className="menu">
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Users</a>
              </li>
              <li>
                <a href="">Topics</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
