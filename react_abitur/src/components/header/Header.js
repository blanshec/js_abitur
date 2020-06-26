import React, { Component } from 'react';
import './header.css';
import Navbar from '../navbar/Navbar';

class Header extends Component {
  render() {
    return <div className="header">
      <h1 className="header__title">Абитур</h1>
      <Navbar />
    </div>
  };
}

export default Header;
