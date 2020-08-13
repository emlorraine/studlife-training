import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import './Main.css';

const modules = ['Welcome to Student Life', 'Reporting 101', 'Washington University 101', 'News & Writing from Reporting', 'Opinion & Writing from Experience', 'Inclusive Reporting'];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Tabs defaultIndex = {1} onSelect={index => console.log(index)}>
          <TabList>
            <Tab>Welcome to Student Life</Tab>
            <Tab>Reporting 101</Tab>
            <Tab>The basics of Washington University</Tab>
            <Tab>News and Writing from Reporting</Tab>
            <Tab>Opinion and Writing from Experience</Tab>
            <Tab>Inclusive Reporting</Tab>
          </TabList>

          <TabPanel>Text for tab 1</TabPanel>
          <TabPanel>Text for tab 2</TabPanel>
          <TabPanel>Text for tab 3</TabPanel>
          <TabPanel>Text for tab 4</TabPanel>
          <TabPanel>Text for tab 5</TabPanel>
          <TabPanel>Text for tab 6</TabPanel>
        </Tabs>
    )
  }
}

export default Main;