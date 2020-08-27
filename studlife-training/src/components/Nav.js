import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Nav.css';


class Nav extends Component {
    render() {
      return (
        <nav className="nav" id="navbar">
          <div className="nav-content">          
            <ul className="nav-items">
              <li className="nav-item">Welcome to Student Life</li>
              <li className="nav-item">Journalism Ethics</li>
              <li className="nav-item">Washigton University 101</li>
              <li className="nav-item">Writing from Reporting</li>
              <li className="nav-item">Writing from Experience</li>
            </ul>
          </div>
        </nav>
      );
    }
  }

export default Nav; 