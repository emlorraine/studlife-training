import React from 'react';
import logo from './logo.svg';
import Main from './components/Main.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

import './App.css';

function App() {
  return (
    <div className="root">
      {/* <Main /> */}
    <Router>
      <Navigation />
    </Router>
    </div>
  );
}

export default App;