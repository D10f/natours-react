import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {

  const sectionTitle = 'Start Booking Now';

  return (
    <section className="section-contact">
      <div className="row">
        <div className="column column--stretch">
          <article className="contact-form">
            <SectionHeader sectionTitle={sectionTitle} />
            <ContactForm />
            <footer className="medium-margin-top">
              <Button color='green' style='rounded' text='Next Step &rarr;'/>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
