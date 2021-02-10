const ContactForm = () => {
  return (
    <form className="form">
      <div className="form__group">
        <input className="form__input" id="name" placeholder="Full Name" required />
        <label className="form__label" htmlFor="name">Full Name</label>
      </div>

      <div className="form__group">
        <input className="form__input" id="email" placeholder="Email Address" required />
        <label className="form__label" htmlFor="email">Email Address</label>
      </div>

      <div className="form__group form__group--horizontal small-padding-left">
        <div className="form__group--radio">
          <input className="form__input--radio" id="small" name="size" type="radio" />
          <label className="form__label--radio" htmlFor="small">
            <span className="form__radio-button"></span>
            Small Tour Group
          </label>
        </div>

        <div className="form__group--radio">
          <input className="form__input--radio" id="large" name="size" type="radio" />
          <label className="form__label--radio" htmlFor="large">
            <span className="form__radio-button"></span>
            Large Tour Group
          </label>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
