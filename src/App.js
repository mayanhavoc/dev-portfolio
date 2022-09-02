import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Projectss from './Components/Projectss';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';

class App extends Component {
  render(){
    return (
      <main> 
        <Navbar />
        <Home />
        {/* <Projects /> */}
        <Projectss />
        {/* <About />
        <Contact /> */}
        {/* <Footer />  */}
    </main>
    );
  }
}

export default App;
