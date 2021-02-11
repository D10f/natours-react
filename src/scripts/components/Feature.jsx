const Feature = ({ title, description, icon }) => (
  <article className="feature">
    <i className={`feature__icon has-background ${icon}`}></i>
    <h3 className="feature__heading heading-tertiary small-margin-bottom">{title}</h3>
    <p className="feature__description paragraph">{description}</p>
  </article>
);

export default Feature;
