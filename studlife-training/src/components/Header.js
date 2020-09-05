import React from 'react'
import logo from './assets/logo-studentlife-white.svg';
import './Header.css';

function Header() {
  return (
    <div className = "site-header">
        <a href = "studlife.com/">
            <img className = "logo" src = {logo} />
        </a>
        <p className = "header-text">The independent newspaper of Washington University in St. Louis</p>
    </div>
    )
}

export default Header