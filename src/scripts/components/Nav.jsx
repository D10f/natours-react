const Nav = () => (
    <nav className="navigation">
      <input className="navigation__checkbox" type="checkbox" id="navigation-toggle" />
      <label className="navigation__button" htmlFor="navigation-toggle" >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <ul className="navigation__menu">
        <li className="navigation__item"><a className="navigation__link" href="#"><span>01 </span>About Natours</a></li>
        <li className="navigation__item"><a className="navigation__link" href="#"><span>02 </span>Your Benefits</a></li>
        <li className="navigation__item"><a className="navigation__link" href="#"><span>03 </span>Popular Tours</a></li>
        <li className="navigation__item"><a className="navigation__link" href="#"><span>04 </span>Stories</a></li>
        <li className="navigation__item"><a className="navigation__link" href="#"><span>05 </span>Book Now</a></li>
      </ul>
    </nav>
  );

export default Nav;
