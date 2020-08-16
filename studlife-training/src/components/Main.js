import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import firebase from './firebase.js'; 
import './Main.css';
import { GoogleSpreadsheet } from "google-spreadsheet";

const { GoogleSpreadsheet } = require('google-spreadsheet');
const private_sheet_key =  "\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDfQfHa3BAu3Vqu\nPebFgCc7TixQQy1XFSuYgWmGoxW01ITcWAoFF611M9UmOBw5n5NcdHbYC63VMKPB\nwOfNkaohgl2LYEuLc35upJA579OaR4Q2Fuj7up2HoUOU0j6VVSPs5pZMMVUWdYxw\nK+cQvOexXywvzHzOACZaqzndvR3DDtXbvuRNs8Af8rpRm+lqiSFFsSJmeGb1bKBT\nRVWrzHG2H1rSKaQqypUoChuSLO/Ye9A1g5t0ZWES8MLY6OyA+9DqVqlQixxc/7qg\naGxHBHvPFzs5F5DLzRpjtbR82mhCTgnZf+RShEMmJP6ub2IgHGIzAzGwZ7Ai6Zb2\nPOKKeI/JAgMBAAECggEAFoIq2hU5ucqDVpx9ubJpQidoJvy+2NAU7HPk/w1OJkRk\nKLrk4mKNZbWWFcZZF3jT0zcYDEFmgzSQ2KXpjjt+BZGD0Nt316q14n3LigEjOk4K\nMacu/MIcbmIp0sU8811Ow+xI1uGvtxX0KhL4YXhKJlh2t1L3JOW1ot/ZyQCaEYzV\nwvNVgxAAq+n8GBJDnslhtOTSd5JHa+gqrpIW1XDJxKQ62YmTGEdBmGOm+NsHoNyV\nl5CcZLpsQ6Y/Ao1uI/wS6O2vPj+P0hwN3KAmzYFpCg3jR4VjY+N0C21qZubuhSKu\n72AcCpmiP2P0uGppr9owmA74fYeUKFuZl4WfsQZPaQKBgQD6FZnV1gyRLE3+xjS6\nhatPsXKH7VUPgRApFdgyA0D7Wyn4tKYX48vz1ZT9IDaZgafwz+j7e+tUYRq+MI/x\n2nTQTt1YEDb0hiREAuTjr4W5757PBSWbCFdoezTf25dFCDXRGxABpi87uYBH//qg\noZ5Jpni70/a7NzHQvwT/CbguWwKBgQDkieSRM/Im6/+M14kitpeYC5V+e/NPrCtx\nlJkf9QQRH87j/zmL8n3SSJFmzQM1JueqpX/QqOOajLLdLzbUuqP5hFVHLiOeXAqA\nK/2t7eNKvYuxFpo016BD4/PHun9/pMbuqVhgg8QXKrEbjwDGkoP3wuDDOmHBSg7Z\nSU3FcAobqwKBgQCcAqW5VJL6bZ0qdxOl2IWKbbR5P4F07praRppceNMs+y4vzOJg\nvOca8f7D+jiVguD1xX4ehKvGM92vEDR8OD/vQ4Op0FO4L4aoNvX7ZCAUYnu7wgY3\ntPhyYYoWrLKtifWowS03GikVJR/1yqbbVneckpF2+0BMgp49Dy1avQF9SQKBgEIq\nYhBf97WpEd2W8U8pig4tHGT4QeNJN3K00PhdmYXTrbR4yhJobGEbPW2D4W/cCapw\nK+cfXnX6UjaTWs6QErVEyOPIyespPqkJE3LtsqaK5gypPJAb9XxyXLvwlMVB0Y57\nXOjkfTsv0wLljhXviWGL/ELJfk/VvyLNhESrQWHtAoGBANSglqDFZqqZM6o6kF+2\nYQ1LWZ9ZiN5TEG5efumfHaA5Y0yCfBeBBY2p9nsQdLjEM2nYq8QY+bDQEd9mOu3d\nWvnMr9c+72k4JwZmnfHCioN1c0/cRf7exK641dD/KqFRp91cy/KkMOUenxKXTU1y\ngQjZ8SOAKxdIb5qsRbdXVgRa\n-----END PRIVATE KEY-----\n",

const modules = ['Welcome to Student Life', 'Reporting 101', 'Washington University 101', 'News & Writing from Reporting', 'Opinion & Writing from Experience', 'Inclusive Reporting'];
const doc = new GoogleSpreadsheet('1vFolZ0BmiI2VclYyigkHfgRs1lAMdLMUvyMgKFMDuIU');

const appendSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: 'studlife-training-sheets@studlife-training-286617.iam.gserviceaccount.com',
      private_key: private_sheet_key,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsById[0];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};
const newRow = {userName: "",	welcomeInput: "",	reportingInput: "",	washuInput: "",	newsInput: "",	opinionInput: "",	inclusiveInput: ""}; 
appendSpreadsheet(newRow);

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
    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }



  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      welcomeInput: this.state.welcomeInput,
      reportingInput: this.state.reportingInput,
      washuInput: this.state.washuInput,
      newsInput: this.state.newsInput,
      opinionInput: this.state.opinionInput,
      inclusiveInput: this.state.inclusiveInput
    }
    itemsRef.push(item);
    this.setState({
      welcomeInput: '',
      reportingInput: '',
      washuInput: '',
      newsInput: '',
      opinionInput: '',
      inclusiveInput: ''
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          welcomeInput: items[item].welcomeInput,
          reportingInput: items[item].reportingInput,
          washuInput: items[item].washuInput,
          newsInput: items[item].newsInput,
          opinionInput: items[item].opinionInput,
          inclusiveInput: items[item].inclusiveInput
        });
      }
      this.setState({
        items: newState
      });
    });
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
              <form onSubmit={this.handleSubmit}>
              <input type="text" name="welcomeInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.welcomeInput}/>
                <button>Submit</button>
              </form>
            </form>
        </TabPanel>
        <TabPanel>
          Text for tab 2
            <form>
              <input type="text" name="reportingInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.reportingInput}/>
              <button>Submit</button>
            </form>
        </TabPanel>
        <TabPanel>
          Text for tab 3
            <form>
              <input type="text" name="washuInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.washuInput}/>
              <button>Submit</button>
            </form>
        </TabPanel>
        <TabPanel>
          Text for tab 4
            <form>
              <input type="text" name="newsInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.newsInput}/>
              <button>Submit</button>
            </form>
            </TabPanel>
        <TabPanel>
          Text for tab 5
            <form>
              <input type="text" name="opinionInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.opinionInput}/>
              <button>Submit</button>
            </form>
            </TabPanel>
        <TabPanel>
          Text for tab 6
            <form>
              <input type="text" name="inclusiveInput" placeholder="Filler text" onChange={this.handleChange} value={this.state.inclusiveInput}/>
              <button>Submit</button>
            </form>
            </TabPanel>
      </Tabs>
      </>
  )
}
}
export default Main;