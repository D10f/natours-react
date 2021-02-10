import Button from '../components/Button';

import logo from '../../../assets/img/logo-white.png';

const Header = () => {

  const title = 'Outdoors';
  const subtitle = 'Is where life happens';

  return (
    <section className="header">
      <picture className="header__logo-box">
        <img className="header__logo-img" src={logo} alt="Natours logo" />
      </picture>

      <header className="primary-headline">
        <h1 className="primary-headline--title">{title}</h1>
        <p className="primary-headline--subtitle">{subtitle}</p>
        <Button color='white' style='rounded' animation={true} text='Discover our tours' />
      </header>
    </section>
  );
};

export default Header;
