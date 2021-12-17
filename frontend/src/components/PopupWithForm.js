import React from 'react';

function PopupWithForm({ name, isOpen, title, children, textBtn, onClose, onSubmit }) {
  return (
    <article className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <form className="popup__container" name={name} onSubmit={onSubmit} noValidate>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__save-btn" type="submit">{textBtn}</button>
        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={onClose}></button>
      </form>
    </article>
  )
}

export default PopupWithForm;
