import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import Accordion from './Accordion';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Accordion />
    </div>
  );
}

export default App;
