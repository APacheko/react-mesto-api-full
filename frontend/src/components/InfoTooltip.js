import React from 'react';
import successImage from "../images/success.svg";
import failImage from "../images/fail.svg";

function InfoTooltip({ isOpen, isRegister, onClose }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_tooltip">
        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={onClose}></button>
        <img src={isRegister ? successImage : failImage} className="popup__tooltip-image" alt={isRegister ? 'Успешно' : 'Ошибка'}></img>
        <h2 className="popup__title popup__title_type_tooltip">{isRegister ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;