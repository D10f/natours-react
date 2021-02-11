import { useEffect, useContext } from 'react';

import SectionHeader from '../components/SectionHeader';
import Story from '../components/Story';
import BgVideo from '../components/BgVideo';
import UserContext from '../context/userContext/userContext';

const Stories = ({ stories }) => {

  const { getUsers, users, loading } = useContext(UserContext);

  useEffect(() => getUsers(), []);

  const sectionTitle = 'We Make People Genuinely Happy';

  if (loading) return <p>Loading...</p>

  return (
    <section className="section-stories">

      <SectionHeader sectionTitle={sectionTitle} />
      <BgVideo src="../assets/vids/video"/>

      <div className="row">
        <div className="column">
          {
            stories.map(({ title, description }, idx) => (
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
