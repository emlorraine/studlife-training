import React from 'react';
import logo from './logo.svg';
import Main from './components/Main.js';
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Navigation from './Navigation';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="root">
      <BrowserRouter>
      <Nav />
     </BrowserRouter>
    </div>
  );
}

export default App;