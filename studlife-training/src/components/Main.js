import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Main.css';
import jsonData from '../data/data.json';

const modules = ['Welcome to Student Life', 'Reporting 101', 'Washington University 101', 'News & Writing from Reporting', 'Opinion & Writing from Experience' 'Inclusive Reporting'];
const studLifeData = Object.values(jsonData);
const reportingData = Object.values(jsonData);
const washUData = Object.values(jsonData);
const newsData = Object.values(jsonData);
const opinionData = Object.values(jsonData);
const inclusiveReportingData = Object.values(jsonData);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectWelcome: null,
        studLifeData: null,
        reportingData: null,
        washUData: null,
        newsData: null,
        opinionData: null,
        inclusiveReportingData: null,
    };
    this.selectWelcome = this.selectWelcome.bind(this);
    this.selectReporting = this.selectReporting.bind(this);
    this.selectWashU = this.selectWashU.bind(this);
    this.selectNews = this.selectNews.bind(this);
    this.selectOpinion = this.selectWashU.bind(this);
    this.selectInclusive = this.selectNews.bind(this);
  }

  selectWelcome(){

  }

  selectReporting(){
    this.setState({}); 
  }

  selectWashU(){
    this.setState({}); 
  }

  selectNews(){
    this.setState({}); 
  }

  selectOpinion(){
    this.setState({}); 
  }

  selectInclusive(){
    this.setState({}); 
  }

  render() {
    return (
      <Container fluid={true} className="housing-container px-5">
        <Row>
          {/* <Header /> */}
          <Col md="6" className="listings">
            <Row>
            </Row>
          </Col>
          <Col md="6" className="side-map pl-0" id="side-map-container">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;