import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import firebase from './firebase.js'; 
import './Main.css';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { gapi } from 'gapi-script';

//To the person reading this: 
// I broke all of the edit/submission functions by their module type for functionality/testing purposes, but that certainly clutters this Main.js quite a bit. 
// I was writing with each module in it's own file, but that made testing a bit of a pain. Happy to break this apart because this code looks not nice as is

const client_email =  "studlife-training-sheets@studlife-training-sheets.iam.gserviceaccount.com";

const modules = ['Welcome to Student Life', 'Reporting 101', 'Washington University 101', 'News & Writing from Reporting', 'Opinion & Writing from Experience', 'Inclusive Reporting'];
var module_tracker = []; 
var sendWelcomeInput = "";
var sendReportingInput = ""; 
var sendWashuInput = "";
var sendNewsInput = ""; 
var sendOpinionInput = "";
var sendInclusiveInput = ""; 

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
    this.handleWelcomeSubmit = this.handleWelcomeSubmit.bind(this); 
    this.handleReportingSubmit = this.handleReportingSubmit.bind(this); 
    this.handleWashUSubmit = this.handleWashUSubmit.bind(this); 
    this.handleNewsSubmit = this.handleNewsSubmit.bind(this); 
    this.handleOpinionSubmit = this.handleOpinionSubmit.bind(this); 
    this.handleInclusiveSubmit = this.handleInclusiveSubmit.bind(this); 

    this.handleWelcomeChange = this.handleWelcomeChange.bind(this);
    this.handleReportingChange = this.handleReportingChange.bind(this);
    this.handleWashUChange = this.handleWashUChange.bind(this);
    this.handleNewsChange = this.handleNewsChange.bind(this);
    this.handleOpinionChange = this.handleOpinionChange.bind(this);
    this.handleInclusiveChange = this.handleInclusiveChange.bind(this);
  }


  handleWelcomeChange = async function(e) {
    await this.setState({welcomeInput: e.target.value});
    sendWelcomeInput = this.state.welcomeInput;
    // console.log(sendWelcomeInput);
  }

  handleReportingChange = async function(e) {
    await this.setState({reportingInput: e.target.value});
    sendReportingInput = this.state.reportingInput;
    console.log(sendReportingInput);
    module_tracker.push(sendWelcomeInput); 
  }

  handleWashUChange = async function(e) {
    await this.setState({washuInput: e.target.value});
    sendWashuInput = this.state.washuInput;
    console.log(sendWashuInput);
  }  
  
  handleNewsChange = async function(e) {
    await this.setState({newsInput: e.target.value});
    sendNewsInput = this.state.newsInput;
    console.log(sendNewsInput);  
  }

  handleOpinionChange = async function(e) {
    await this.setState({opinionInput: e.target.value});
    sendOpinionInput = this.state.opinionInput;
    console.log(sendOpinionInput); 
  }

  handleInclusiveChange = async function(e) {
    await this.setState({inclusiveInput: e.target.value});
    sendInclusiveInput = this.state.inclusiveInput;
    console.log(sendInclusiveInput);
  }


  handleWelcomeSubmit = async function(e) {
    e.preventDefault();
    // console.log(sendWelcomeInput); 
    // console.log(sendWelcomeInput.length); 
    if((sendWelcomeInput.legnth >= 1) == true){
      console.log("*confusion (cont.)*")
      console.log(sendWelcomeInput); 
      module_tracker.push(sendWelcomeInput);
    }
    else if (sendWelcomeInput === "" || (sendWelcomeInput.replace(/\s/g, '').length === 0)){
      alert("Please complete this module before submitting.");
    }
  }

  handleReportingSubmit = async function(e) {
    e.preventDefault();
    if(sendReportingInput.legnth >= 1){
      console.log(sendReportingInput); 
      module_tracker.push(sendReportingInput);
      console.log("SUCESSFUL SUBMIT 2"); 
    }
    else if (sendReportingInput === "" || (sendReportingInput.replace(/\s/g, '').length === 0)){
      alert("Please complete this module before submitting.");
    }
  }

  handleWashUSubmit = async function(e) {
    e.preventDefault();
    if(sendWashuInput.legnth >= 1){
      console.log(sendWashuInput); 
      module_tracker.push(sendWashuInput); 
      console.log("SUCESSFUL SUBMIT 3"); 
    }
    else if (sendWashuInput === "" || (sendWashuInput.replace(/\s/g, '').length === 0)){
      alert("Please complete this module before submitting.");
    }
  }

  handleNewsSubmit = async function(e) {
    e.preventDefault();
    if(sendNewsInput.legnth >= 1){
      console.log(sendNewsInput); 
      module_tracker.push(sendNewsInput); 
      console.log("SUCESSFUL SUBMIT 4"); 

    }
    else if (sendNewsInput === "" || (sendNewsInput.replace(/\s/g, '').length === 0)){
      alert("Please complete this module before submitting.");
    }
  }

  handleOpinionSubmit = async function(e) {
    e.preventDefault();
    if(sendOpinionInput.legnth >= 1 && sendOpinionInput != ""){
      console.log(sendOpinionInput); 
      module_tracker.push(sendOpinionInput); 
      console.log("SUCESSFUL SUBMIT 5"); 

    }
    else if (sendOpinionInput === "" || (sendOpinionInput.replace(/\s/g, '').length === 0)){
      alert("Please complete this module before submitting.");
    }
  }

  handleInclusiveSubmit = async function(e) {
    e.preventDefault();
    if(sendInclusiveInput.legnth >= 1){
      console.log(sendInclusiveInput); 
      module_tracker.push(sendInclusiveInput);
      console.log("SUCESSFUL SUBMIT 6"); 

    }
    else if (sendInclusiveInput == "" || (sendInclusiveInput.replace(/\s/g, '').length === 0)){
      alert("Please complete this module before submitting.");
    }
  }


  submitToGoogleSheets() {
    var values = [
      [
        //[USER INPUT]
      ],
    ];
    var body = {
      values: values
    };
    gapi.client.sheets.spreadsheets.values.update({
       spreadsheetId: '1vFolZ0BmiI2VclYyigkHfgRs1lAMdLMUvyMgKFMDuIU',
       //I've been manually updating this for testing. When the interface is set we can establish a ticker: 
       range: "A2",
       valueInputOption: "USER_ENTERED",
       resource: body
    }).then((response) => {
      var result = response.result;
      console.log(`${result.updatedCells} cells updated.`);
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
          <Tab>Submit</Tab>
        </TabList>
        <TabPanel>
          Text for tab 1
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>              
            <input type="text" name="welcomeInput" placeholder="Filler text" onChange={this.handleWelcomeChange} value={this.state.welcomeInput}/>
            <button onClick = {this.handleWelcomeSubmit}>Submit</button>
            </form>
        </TabPanel>
        <TabPanel>
          Text for tab 2
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>              
            <input type="text" name="reportingInput" placeholder="Filler text" onChange={this.handleReportingChange} value={this.state.reportingInput}/>
              <button onClick = {this.handleReportingSubmit}>Submit</button>
            </form>
        </TabPanel>
        <TabPanel>
          Text for tab 3
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>              
              <input type="text" name="washuInput" placeholder="Filler text" onChange={this.handleWashUChange} value={this.state.washuInput}/>
              <button onClick = {this.handleWashUSubmit}>Submit</button>
            </form>
        </TabPanel>
        <TabPanel>
          Text for tab 4
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>              
              <input type="text" name="newsInput" placeholder="Filler text" onChange={this.handleNewsChange} value={this.state.newsInput}/>
              <button onClick = {this.handleNewsSubmit}>Submit</button>
            </form>
            </TabPanel>
        <TabPanel>
          Text for tab 5
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>
            <input type="text" name="opinionInput" placeholder="Filler text" onChange={this.handleOpinionChange} value={this.state.opinionInput}/>
            <button onClick = {this.handleOpinionSubmit}>Submit</button>
            </form>
            </TabPanel>
        <TabPanel>
          Text for tab 6
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>
              <input type="text" name="inclusiveInput" placeholder="Filler text" onChange={this.handleInclusiveChange} value={this.state.inclusiveInput}/>
              <button onClick = {this.handleInclusiveSubmit}>Submit</button>
            </form>
        </TabPanel>
        <TabPanel>
          Text for tab 6
          <form onSubmit={this.handleSubmit}>
              <input type="text" name="inclusiveInput" placeholder="Filler text" onChange={this.handleInclusiveChange} value={this.state.inclusiveInput}/>
              <button onClick = {this.handleSubmit}>Submit</button>
          </form>
        </TabPanel>
      </Tabs>
      </>
  )
}
}



export default Main;