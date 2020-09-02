import React, { Component } from 'react'
import {Route, Switch} from "react-router";
import Scroll from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link';

import ReadMoreReact from 'read-more-react';

import ReactMarkdown from 'react-markdown';
import reportingMarkdown from './assets/reportingText.md';
import reportingActivityMarkdown from './assets/reportingActivity.md';
import newsMarkdown from './assets/newsText.md';
import newsActivityMarkdown from './assets/newsActivity.md';
import experienceMarkdown from './assets/experienceText.md';
import experienceActivityMarkdown from './assets/experienceActivity.md';
import washUMarkdown from './assets/washUText.md';
import washUActivityMarkdown from './assets/washUActivity.md';
import ethicsTextMarkdown from './assets/ethicsText.md';
import ethicsImage from './assets/spj-code-of-ethics.png';

import './Nav.css';


class Nav extends Component {
  constructor(props){
    super(props)
    this.state = { reportingText: null }
    this.state = { reportingActivityMarkdown: null }
    this.state = { newsMarkdown: null }
    this.state = { newsActivityMarkdown: null }
    this.state = { experienceMarkdown: null }
    this.state = { experienceActivityMarkdown: null }
    this.state = { washUMarkdown: null }
    this.state = { washUActivityMarkdown: null }
    this.state = { ethicsMarkdown: null }
  }
  refWelcome = React.createRef()
  refEthics = React.createRef()
  refWashU = React.createRef()
  refWritingReporting = React.createRef()
  refWritingExperience = React.createRef()
  refSubmit= React.createRef()
  

  componentDidMount() {
    this.setState(
      
      { loaded: true })
    
    fetch(reportingMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ reportingText: text })
    })
    fetch(reportingActivityMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ reportingActivityMarkdown: text })
    })
    fetch(newsMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ newsMarkdown: text })
    })
    fetch(newsActivityMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ newsActivityMarkdown: text })
    })
    fetch(experienceMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ experienceMarkdown: text })
    })
    fetch(experienceActivityMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ experienceActivityMarkdown: text })
    })
    fetch(washUMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ washUMarkdown: text })
    })
    fetch(washUActivityMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ washUActivityMarkdown: text })
    })
    fetch(ethicsTextMarkdown).then((response) => response.text()).then((text) => {
      this.setState({ ethicsMarkdown: text })
    })

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
        </div>
        <div className="spacer"></div>
        <div ref={this.refEthics}>
          <h2 className = "nav-content-header">Reporting Basics</h2>
          <ReactMarkdown className = "nav-content" source={this.state.reportingText} />
          <ReactMarkdown className = "nav-content" source={this.state.ethicsMarkdown} />
          <a href = "spj.org/ethicscode.asp#:~:text=Ethical%20journalism%20should%20be%20accurate,the%20accuracy%20of%20their%20work."><img src={ethicsImage} class = "img"/> </a>
          <ReactMarkdown className = "nav-content" source={this.state.reportingActivityMarkdown} />        
          </div>
        <div className="spacer"></div>
        <div ref={this.refWashU}>
          <h2 className = "nav-content-header">Washigton University 101</h2>
          <ReactMarkdown className = "nav-content" source={this.state.washUMarkdown} />
          <ReactMarkdown className = "nav-content" source={this.state.washUActivityMarkdown} />
        </div>
        <div className="spacer"></div>
        <div ref={this.refWritingReporting}>
          <h2 className = "nav-content-header">Writing from Reporting</h2>
          <ReactMarkdown className = "nav-content" source={this.state.newsMarkdown} />
          <ReactMarkdown className = "nav-content" source={this.state.newsActivityMarkdown} />

        </div>
        <div ref={this.refWritingExperience}>
          <h2 className = "nav-content-header">Writing from Experience</h2>
          <ReactMarkdown className = "nav-content" source={this.state.experienceMarkdown} />
          <ReactMarkdown className = "nav-content" source={this.state.experienceActivityMarkdown} />
        </div>
        <div ref={this.refSubmit}>
          <h2 className = "nav-content-header">Submit</h2>
        </div>
        </div> 
      </article>  
      )
    }
  }
export default Nav; 