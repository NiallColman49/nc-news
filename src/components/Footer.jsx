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
            <a>0333 050 4368</a>
          </div>
          <div className="footer--column socials">
            <ul>
              <li>
                <a className="instagram">
                  <img src={Instagram} alt="Instagram icon" />
                </a>
              </li>
              <li>
                <a className="twitter">
                  <img src={Twitter} alt="Twitter icon" />
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
