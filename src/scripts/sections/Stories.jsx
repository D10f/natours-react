import { useEffect, useContext } from 'react';

import SectionHeader from '../components/SectionHeader';
import Story from '../components/Story';
import BgVideo from '../components/BgVideo';
import UserContext from '../context/userContext';

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

const Stories = () => {

  const { getUsers, users, loading } = useContext(UserContext);

  useEffect(() => getUsers(), []);

  const sectionTitle = 'We Make People Genuinely Happy';

  if (loading) return <p>Loading...</p>
  // if (users) {
  //   console.log(users);
  //   return <p>Users </p>
  // }

  return (
    <section className="section-stories">

      <SectionHeader sectionTitle={sectionTitle} />
      <BgVideo src="../assets/vids/video"/>

      <div className="row">
        <div className="column">
          {
            storiesData.map(({ title, description }, idx) => (
              <Story title={title} description={description} user={users[idx]} key={Math.random()} />
            ))
          }
        </div>
      </div>

      <footer className="is-centered medium-margin-top">
        <a className="btn-text" href="#">More Stories &rarr;</a>
      </footer>
    </section>
  );
};

export default Stories;
