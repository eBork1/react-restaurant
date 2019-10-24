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
      <Header />
      <Nav />
      <About />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;