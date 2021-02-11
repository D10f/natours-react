import { render } from 'react-dom';
import Header     from './scripts/sections/Header';
import About      from './scripts/sections/About';
import Features   from './scripts/sections/Features';
import Tours      from './scripts/sections/Tours';
import Stories    from './scripts/sections/Stories';
import Contact    from './scripts/sections/Contact';
import Footer     from './scripts/sections/Footer';
import Modal      from './scripts/components/Modal';
import UserState  from './scripts/context/userState'

import './styles.scss';

const storiesData = [
  {
    title: 'The Best Strip Of My Life',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'My Life Is Completely Different Now',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];


const App = () => {
  return (
    <UserState stories={storiesData.length}>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories stories={storiesData} />
      <Contact />
      <Footer />
      <Modal />
    </UserState>
  );
};

render(<App />, document.getElementById('root'));
