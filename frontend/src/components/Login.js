import React from "react";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="auth">
      <p className="auth__title">Вход</p>
      <form onSubmit={handleSubmit} className="form" name="sign-in">
        <input onChange={handleEmailChange} value={email} className="form__input" type="email" name="email" placeholder="Email" required/>
        <input onChange={handlePasswordChange} value={password} className="form__input" type="password" name="password" placeholder="Пароль" minLength="2" maxLength="40" required />
        <button className="form__btn" type="submit" onClick={handleSubmit}>Войти</button>
      </form>
    </div>
  )
}
export default Login;