import React, { Component } from 'react'
// import { Link } from 'react-scroll';
import Scroll from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link';

// import { HashLink as Link } from 'react-router-hash-link';

import './Nav.css';



class Nav extends Component {

  refWelcome = React.createRef()
  refEthics = React.createRef()
  refWashU = React.createRef()
  refWritingReporting = React.createRef()
  refWritingExperience = React.createRef()

  // constructor(props) {
  //   super(props);
  //   this.scrollToContent = this.scrollToContent.bind(this);
  // }
  componentDidMount() {
    this.setState({ loaded: true })
  }

  handleScrollTo = (elRef) => {
    // Incase the ref supplied isn't ref.current
    const el = elRef.current ? elRef.current : elRef
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  render() {
      return (
        <article>
        <header>
          <h1>Navigation</h1>
        </header>
        <nav>
          <ul>
            <li onClick={() => { this.handleScrollTo(this.refWelcome) }}>
              Welcome
            </li>
            <li onClick={() => { this.handleScrollTo(this.refEthics) }}>
              Reporting and Journalism Ethics 
            </li>
            <li onClick={() => { this.handleScrollTo(this.refWashU) }}>
              Washington University 101 
            </li>            
            <li onClick={() => { this.handleScrollTo(this.refWritingReporting) }}>
              Writing from Reporting 
            </li>
            <li onClick={() => { this.handleScrollTo(this.refWritingExperience) }}>
            Writing from Experience 
            </li>
          </ul>
        </nav>
        <div className="spacer"></div>
        <div ref={this.refWelcome}>
          <h2>Welcome to Student Life</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="spacer"></div>
        <div ref={this.refEthics}>
          <h2>Journalism Ethics</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="spacer"></div>
        <div ref={this.refWashU}>
          <h2>Washigton University 101</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="spacer"></div>
        <div ref={this.refWritingReporting}>
          <h2>Writing from Reporting</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={this.refWritingExperience}>
          <h2>Writing from Experience</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </article>     
      );
    }
  }

export default Nav; 