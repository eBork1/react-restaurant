import React from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Accordion from './Accordion';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <a id="home">
      <Header />
      </a>
      <a id="nav">
      <Nav />
      </a>
      <a id="about">
      <About />
      </a>
      <a id='menu'>
      <Accordion />
      </a>
      <a id="footer">
      <Footer />
      </a>
    </div>
  );
}

export default App;