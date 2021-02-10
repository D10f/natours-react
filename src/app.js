import { render } from 'react-dom';
import Header     from './scripts/sections/Header';
import About      from './scripts/sections/About';
import Features   from './scripts/sections/Features';
import Tours      from './scripts/sections/Tours';
import Stories    from './scripts/sections/Stories';
import Contact    from './scripts/sections/Contact';
import Footer     from './scripts/sections/Footer';
import UserState  from './scripts/context/userState'

import './styles.scss';

const App = () => {
  return (
    <UserState>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Contact />
      <Footer />
    </UserState>
  );
};

render(<App />, document.getElementById('root'));
