import React, { Component } from 'react';
import './navbar.css';
const arrow = require('../../images/arrow.svg');

class Navbar extends Component {
  render() {
    return <div className="navbar">
      <a className="link navbar__link" href="#">Рекомендации</a>
      <a className="link navbar__link" href="#">Личный Кабинет</a>
      <a className="link navbar__link" href="#">Загрузить данные ВУЗа</a>
      <button className="button navbar__button">Вход <img src={arrow}></img></button>
    </div>
  };
}

export default Navbar;
