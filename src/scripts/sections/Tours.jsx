import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const tourData = [
  {
    title: 'The Sea Explorer',
    duration: '3 Day Tour',
    capacity: 'Up To 30 People',
    tourGuides: '2 Tour Guides',
    accomodation: 'Sleep In Cozy Hotels',
    difficulty: 'Difficulty: Easy',
    price: 29900
  },
  {
    title: 'The Forest Hiker',
    duration: '7 Day Tour',
    capacity: 'Up To 40 People',
    tourGuides: '6 Tour Guides',
    accomodation: 'Sleep In Provided Tents',
    difficulty: 'Difficulty: Medium',
    price: 59900
  },
  {
    title: 'The Snow Adventure',
    duration: '5 Day Tour',
    capacity: 'Up To 15 People',
    tourGuides: '3 Tour Guides',
    accomodation: 'Sleep In Provided Tents',
    difficulty: 'Difficulty: Hard',
    price: 79900
  }
];

const Tours = () => {

  const sectionTitle = 'Most Popular Tours';

  return (
    <section className="section-tours" id="section-tours">

      <SectionHeader sectionTitle={sectionTitle} />

      <div className="row row--gap-4">
        {
          tourData.map((tour, idx) => (
            <Card details={tour} idx={idx + 1} key={Math.random()} />
          ))
        }
      </div>

      <footer className="is-centered medium-margin-top">
        <Button color='green' style='rounded' text='Discover All Our Tours' />
      </footer>

    </section>
  );
};

export default Tours;
