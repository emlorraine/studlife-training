import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Main from './Main.js';
// import './NavBar.css';

class NavBar extends Component {
  constructor(props){
    super(props)
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
  }
getRefsFromChild(childRefs) {
    this.setState({
    });
}


refWelcome = React.createRef()
refEthics = React.createRef()
refWashU = React.createRef()
refWritingReporting = React.createRef()
refWritingExperience = React.createRef()
refSubmit= React.createRef()

handleScrollTo = (elRef) => {
    const el = elRef.current ? elRef.current : elRef
     el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
}

render() {
    return (
        <div className = "sidebar-css">
          <ul>
            <li onClick={() => { this.handleScrollTo(this.refWelcome) }} className = "nav-header">
              Welcome
            </li>
            <li onClick={() => { this.handleScrollTo(this.refEthics) }} className = "nav-header">
              Reporting and Ethics 
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
        )
    }
}
export default NavBar; 