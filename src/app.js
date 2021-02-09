import { render } from 'react-dom';
import Header from './scripts/components/Header';

import './styles.scss';

const App = () => {
  return (
    <Header />
  )
};

render(<App />, document.getElementById('root'));
