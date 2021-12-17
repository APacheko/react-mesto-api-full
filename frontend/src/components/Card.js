import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }


  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__btn-delete ${isOwn ? 'card__btn-delete_active' : ''}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes === undefined ? false : card.likes.some(i => i === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__btn-like ${isLiked ? 'card__btn-like-active' : ''}`;

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="лайк" type="button"></button>
          <p className="card__like-counter">{card.likes === undefined ? false : card.likes.length}</p>
        </div>
        <button className={cardDeleteButtonClassName} type="button" aria-label="удалить" onClick={handleDeleteClick}></button>
      </div>
    </li>
  );
}

export default Card;