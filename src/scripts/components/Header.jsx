const Header = () => {

  const title = 'Outdoors';
  const subtitle = 'Is where life happens';

  return (
    <section className="header">
      <picture className="header__logo-box">
        <img className="header__logo-img" src="../assets/img/logo-white.png" alt="Natours logo" />
      </picture>

      <header className="primary-headline">
        <h1 className="primary-headline--title">{title}</h1>
        <p className="primary-headline--subtitle">{subtitle}</p>
        <button className="btn btn--white btn--animated">Discover our tours</button>
      </header>
    </section>
  );
};

export default Header;
