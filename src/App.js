import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <div> 
        <Navbar />
        <Home />
        <About />
        <Services />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer /> 
    </div>
    );
  }
}

export default App;
