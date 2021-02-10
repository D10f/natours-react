import logoSmall from '../../../assets/img/logo-green-small-1x.png';
import logoSmall2x from '../../../assets/img/logo-green-small-2x.png';
import logoGreen from '../../../assets/img/logo-green-1x.png';
import logoGreen2x from '../../../assets/img/logo-green-2x.png';

const footerNav = [
  'Company',
  'Contact Us',
  'Careers',
  'Privacy Policy',
  'Terms'
];

const Footer = () => {

  return (
    <footer className="footer">
      <picture className="footer__logo-box medium-margin-bottom">
        <source
          srcSet={`${logoSmall} 1x, ${logoSmall2x} 2x`}
          media="(max-width: 600px)"
        />
        <img
          srcSet={`${logoGreen} 1x, ${logoGreen2x} 2x`}
          src="../assets/img/logo-green-2x.png"
          className="footer__logo-img"
          alt="Full Logo"
        />
      </picture>

      <div className="row row--gap-5">
        <div className="column">
          <nav className="footer__navigation">
            <ul className="footer__menu">
              {
                footerNav.map((link, idx) => (
                  <li className="footer__item" key={Math.random()}>
                    <a className="footer__link" href="#">{link}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>

        <div className="column is-right">
          <p className="footer__copyright">
            Original design by <a className="footer__link" href="#">Jonas Schmedtmann</a> for his course: "Advanced CSS and SASS".
          </p>
          <p className="footer__copyright">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
