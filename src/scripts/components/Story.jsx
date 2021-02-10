const Story = ({ title, description, user }) => {

  return (
    <article className="story">
      <figure className="story__shape">
        <img
          srcSet={`${user.picture} 200w, ${user.picture} 2000w`}
          sizes="(max-width: 600px) 33vw, (max-width: 900px) 22vw, 258px"
          src={user.picture}
          alt="User Avatar"
          className="story__thumbnail"
        />
        <figcaption className="story__caption">{user.name}</figcaption>
      </figure>
      <header className="story__header">
        <h3 className="heading-tertiary">{title}</h3>
        <p className="paragraph">{description}</p>
      </header>
    </article>
  );
};

export default Story;
