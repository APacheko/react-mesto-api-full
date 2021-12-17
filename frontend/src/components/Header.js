import React from "react";
import logo from '../images/logo.svg';
import { Link, Route } from "react-router-dom";

export default function Header({email, onSignOut}) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
      <div className="header__container">
      <Route exact path="/">
        <p className="header__email">{email}</p>
        <Link className="header__link" to="/sign-in" onClick={onSignOut}>Выйти</Link>
      </Route>
      <Route exact path="/sign-in">
        <Link className="header__link" to="/sign-up" >Регистрация</Link>
      </Route>
      <Route exact path="/sign-up">
        <Link className="header__link" to="/sign-in" >Войти</Link>
      </Route>
      </div>
    </header>
  )
}

