import { useContext } from 'react';
import UserContext from '../context/userContext';

const Card = ({ details, idx }) => {

  const { openModal } = useContext(UserContext);

  const {
    title,
    duration,
    capacity,
    tourGuides,
    accomodation,
    difficulty,
    price
  } = details;

  return (
    <article className="card">
      <div className="card__side card__side--front">

        <header className="card__heading">
          <div className={`card__picture card__picture--${idx}`}>&nbsp;</div>
          <h3 className="card__title">
            <span className={`card__title--text card__title--text-${idx}`}>{title}</span>
          </h3>
        </header>

        <ul className="card__details">
          <li className="card__item">{duration}</li>
          <li className="card__item">{capacity}</li>
          <li className="card__item">{tourGuides}</li>
          <li className="card__item">{accomodation}</li>
          <li className="card__item">{difficulty}</li>
        </ul>
      </div>

      <div className={`card__side card__side--back card__side--back-${idx}`}>
        <header className="card__cta">
          <p className="card__only">Only</p>
          <p className="card__price">{`$${price / 100}`}</p>
          <button className="btn btn--rounded btn--white" onClick={openModal}>Book now!</button>
        </header>
      </div>
    </article>
  );
};

export default Card;
