import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


class App extends Component {
  render(){
    return (
      <div> 
        {/* <Navbar />
        <Home />
        <About />
        <Services /> */}
        <Experience />
        {/* <Portfolio />
        <Contact />
        <Footer />  */}
    </div>
    );
  }
}

export default App;
