import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm name="card" title="Новое место" textBtn="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__field">
        <input onChange={handleChangeName} value={name || ''} className="popup__item popup__item_type_img-name" type="text" name="imageName" id="image" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__txt-error" id="image-error">#</span>
        <input onChange={handleChangeLink} value={link || ''} className="popup__item popup__item_type_img-link" type="url" name="imgLink" id="url" placeholder="Ссылка на фотографию" required />
        <span className="popup__txt-error" id="url-error">#</span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;