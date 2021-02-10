import SectionHeader from './SectionHeader';

const Modal = () => {

  const modalTitle = 'Start Booking Now';

  return (
    <aside class="modal" id="modal">
      <a class="modal__close" href="#section-tours">&times;</a>
      <article class="modal__content">

        <div class="row row--horizontal paddingless-on-tablet marginless">
          <div class="column row--horizontal column--third column--hide-on-small">

            <picture class="modal__image-box">
              <img class="modal__image" src="../assets/img/nat-8.jpg" />
            </picture>

            <picture class="modal__image-box">
              <img class="modal__image" src="../assets/img/nat-9.jpg" />
            </picture>

          </div>

          <div class="column column--left small-padding-left">

            <SectionHeader sectionTitle={modalTitle} />
            <h3 class="heading-tertiary small-padding-bottom">Important &ndash; Please read the terms and conditions first</h3>
            <p class="paragraph paragraph--wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button color='green' style='rounded' text='Book Now' />

          </div>
        </div>
      </article>
    </aside>
  );
};

export default Modal;
