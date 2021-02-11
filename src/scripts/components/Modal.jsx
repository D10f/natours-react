import { useContext } from 'react';
import Button from './Button';
import UserContext from '../context/userContext/userContext';

const Modal = () => {

  const { closeModal, openModal, showModal, users } = useContext(UserContext);

  const modalTitle = 'Start Booking Now';

  return (users &&
    <aside className={showModal ? "modal modal--open" : "modal"} id="modal">
      <a className="modal__close" href="#section-tours" onClick={closeModal}>&times;</a>
      <article className="modal__content">

        <div className="modal__images">
          {
            users.map(user => (
              <picture className="modal__image-box" key={Math.random()}>
                <img className="modal__image" src={user.picture.large} alt="user picture" />
              </picture>
            ))
          }
        </div>

        <header className="section-header has-background modal__header">
          <h2 className="section-header__headline">{modalTitle}</h2>
        </header>

        <h3 className="heading-tertiary modal__title">Important &ndash; Please read the terms and conditions first</h3>
        <p className="paragraph paragraph--wrap modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="btn btn--green btn--rounded modal__btn">Book Now</button>

      </article>
    </aside>
  );
};

export default Modal;

// <picture className="modal__image-box">
//   <img className="modal__image" src="../assets/img/nat-8.jpg" />
// </picture>

// <picture className="modal__image-box">
//   <img className="modal__image" src="../assets/img/nat-9.jpg" />
// </picture>
