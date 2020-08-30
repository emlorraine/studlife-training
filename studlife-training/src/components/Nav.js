import React, { Component } from 'react'
import {Route, Switch} from "react-router";
import Scroll from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';
import ReadMoreReact from 'read-more-react';


class Nav extends Component {
  refWelcome = React.createRef()
  refEthics = React.createRef()
  refWashU = React.createRef()
  refWritingReporting = React.createRef()
  refWritingExperience = React.createRef()
  refSubmit= React.createRef()
  componentDidMount() {
    this.setState(
      { loaded: true })
  }
  handleScrollTo = (elRef) => {
    const el = elRef.current ? elRef.current : elRef
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
}

  render() {
      return (
        <article>
        <nav>
        <div className = "sidebar-css">
          <ul>
            <li onClick={() => { this.handleScrollTo(this.refWelcome) }} className = "nav-header">
              Welcome
            </li>
            <li onClick={() => { this.handleScrollTo(this.refEthics) }} className = "nav-header">
              Reporting and Journalism Ethics 
            </li>
            <li onClick={() => { this.handleScrollTo(this.refWashU) }} className = "nav-header">
              Washington University 101 
            </li>            
            <li onClick={() => { this.handleScrollTo(this.refWritingReporting) }} className = "nav-header">
              Writing from Reporting 
            </li>
            <li onClick={() => { this.handleScrollTo(this.refWritingExperience) }} className = "nav-header">
              Writing from Experience 
            </li>
            <li onClick={() => { this.handleScrollTo(this.refSubmit) }} className = "nav-header">
              Submit  
            </li>          
            </ul>
          </div>
        </nav>
        <div className = "main-css">
        <div className="spacer"></div>
        <div ref={this.refWelcome}>
          <h2 className = "main-header">Welcome to Student Life</h2>
          <p className = "nav-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
        </div>
        <div className="spacer"></div>
        <div ref={this.refEthics}>
          <h2 className = "nav-content-header">Journalism Ethics</h2>
          <p className = "nav-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        <div className="spacer"></div>
        <div ref={this.refWashU}>
          <h2 className = "nav-content-header">Washigton University 101</h2>
          <p className = "nav-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="spacer"></div>
        <div ref={this.refWritingReporting}>
          <h2 className = "nav-content-header">Writing from Reporting</h2>
          <p className = "nav-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={this.refWritingExperience}>
          <h2 className = "nav-content-header">Writing from Experience</h2>
          <p className = "nav-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={this.refSubmit}>
          <h2 className = "nav-content-header">Submit</h2>
          <p className = "nav-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div> 
      </article>  
      )
    }
  }
export default Nav; 