import React from 'react'
import './Footer.css';
import logo from './assets/logo-studentlife-white.svg';

function Footer() {
  return (
    <div className = "footer-container">
        <img className = "footer-logo" src = {logo} />
        <p class="footer-text">news@studlife.com</p>
        <p class="footer-text">Washington University in St. Louis</p>
        <p class="footer-text">314-935-5995</p>
        <p class="footer-text">© Washington University Student Life Media, Inc. - All rights reserved</p>
    </div>
    )
}

export default Footer