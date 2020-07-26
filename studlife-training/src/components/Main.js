import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Main.css'

const modules = ['One', 'Two', 'Three','Four','Five'];

class Main extends React.Component{
  constructor(props){
    super(props);
    this.onLocationSelection = this.onLocationSelection.bind(this);
    this.onStyleSelection = this.onStyleSelection.bind(this);
    this.state = {
      selectedLocation: 'All',
      selectedStyle: 'All'
    };
  }
  
  onLocationSelection(location) {
    this.setState({selectedLocation: location});
  }
  onStyleSelection(style){
    this.setState({selectedStyle: style});
  }
  
  render(){
    return(
      <Container>
      </Container>
    );
  }
}

export default Main;