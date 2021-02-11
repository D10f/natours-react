import SectionHeader from '../components/SectionHeader';
import Composition from '../components/Composition';

import img1      from '../../../assets/img/nat-1.jpg';
import img1Large from '../../../assets/img/nat-1-large.jpg';
import img2      from '../../../assets/img/nat-2.jpg';
import img2Large from '../../../assets/img/nat-2-large.jpg';
import img3      from '../../../assets/img/nat-3.jpg';
import img3Large from '../../../assets/img/nat-3-large.jpg';

const About = () => {

  const title = 'Exciting tours for adventurous people';
  const images = {
    img1: [img1, img1Large],
    img2: [img2, img2Large],
    img3: [img3, img3Large]
  };

  return (
    <section className="section-about">
      <SectionHeader sectionTitle={title} />

      <div className="row medium-margin-top">
        <article className="column">
          <h3 className="heading-tertiary small-margin-bottom">You're going to fall in love with nature</h3>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <h3 className="heading-tertiary small-margin-bottom">Live adventures like you never have before</h3>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <a className="btn-text" href="#">Learn More &rarr;</a>
        </article>

        <aside className="column column--stretch">
          <div className="composition">
            {
              Object.values(images).map((img, idx) => (
                <Composition key={Math.random()} img={img[0]} imgLarge={img[1]} idx={idx} />
              ))
            }
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
