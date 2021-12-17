import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="auth">
      <p className="auth__title">Регистрация</p>
      <form onSubmit={handleSubmit} className="form" name="sign-up">
        <input onChange={handleEmailChange} value={email} className="form__input" type="email" name="email" placeholder="Email" />
        <input onChange={handlePasswordChange} value={password} className="form__input" type="password" name="password" placeholder="Пароль" minLength="2" maxLength="40" required />
        <button className="form__btn" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
      </form>
      <p className="auth__text">Уже зарегистрированы? <Link to="/sign-in" className="auth__link">Войти</Link></p>
    </div>
  )
}
export default Register;