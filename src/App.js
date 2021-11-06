import './App.css';
import React from "react";
// import Nav from '/components/Nav';
import Portfolio from './components/Portfolio';
// import Footer from '/components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PortfolioData from './components/PortfolioData';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Nav /> */}
      <Portfolio data={PortfolioData}/>
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
