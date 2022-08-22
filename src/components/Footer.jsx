import Twitter from "../twitter-icon.svg";
import Instagram from "../instagram-icon.svg";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer--column">
            <p>
              Manchester Technology Centre
              <br />
              103 Oxford Rd, M1 7ED
            </p>
          </div>
          <div className="footer--column">
            <a href="">0333 050 4368</a>
          </div>
          <div className="footer--column socials">
            <ul>
              <li>
                <a className="instagram" href="https://www.instagram.com/">
                  <img src={Instagram} alt="" />
                </a>
              </li>
              <li>
                <a className="twitter" href="https://twitter.com/">
                  <img src={Twitter} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a>© 2022 Northcoders news</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
