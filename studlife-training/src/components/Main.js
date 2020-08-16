import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import firebase from './firebase.js'; 
import 'react-tabs/style/react-tabs.css';
import './Main.css';

const modules = ['Welcome to Student Life', 'Reporting 101', 'Washington University 101', 'News & Writing from Reporting', 'Opinion & Writing from Experience', 'Inclusive Reporting'];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeInput: '',
      reportingInput: '',
      washuInput: '',
      newsInput: '',
      opinionInput: '',
      inclusiveInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <>
        <Tabs defaultIndex = {1} onSelect={index => console.log(index)}>
          <TabList>
            <Tab>Welcome to Student Life</Tab>
            <Tab>Reporting 101</Tab>
            <Tab>The basics of Washington University</Tab>
            <Tab>News and Writing from Reporting</Tab>
            <Tab>Opinion and Writing from Experience</Tab>
            <Tab>Inclusive Reporting</Tab>
          </TabList>
          <TabPanel>
            Text for tab 1
              <form>
                <input type="text" name="welcomeInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.welcomeInput}/>
                <button>Submit</button>
              </form>
          </TabPanel>
          <TabPanel>Text for tab 2
              <form>
                <input type="text" name="reportingInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.reportingInput}/>
                <button>Submit</button>
              </form>
          </TabPanel>
          <TabPanel>Text for tab 3
              <form>
                <input type="text" name="washuInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.washuInput}/>
                <button>Submit</button>
              </form>
          </TabPanel>
          <TabPanel>Text for tab 4
              <form>
                <input type="text" name="newsInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.newsInput}/>
                <button>Submit</button>
              </form>
              </TabPanel>
          <TabPanel>Text for tab 5
              <form>
                <input type="text" name="opinionInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.opinionInput}/>
                <button>Submit</button>
              </form>
              </TabPanel>
          <TabPanel>Text for tab 6
              <form>
                <input type="text" name="inclusiveInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.inclusiveInput}/>
                <button>Submit</button>
              </form>
              </TabPanel>
        </Tabs>
        </>
    )
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}
export default Main;