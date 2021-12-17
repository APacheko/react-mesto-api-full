import React from 'react';


function ImagePopup(props) {
  const { card, onClose } = props;
  return (
    <article className={`popup popup_type_full-screen ${card.link ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_full-screen">
        <figure className='popup__figure'>
          <img className="popup__full-screen" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={onClose}></button>
      </div>
    </article>
  );
}

export default ImagePopup;