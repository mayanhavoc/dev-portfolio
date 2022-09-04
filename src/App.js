import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, } from 'react';
import Header from './modules/header';
import Footer from './modules/footer';
import Home from './modules/home';
import Work from './modules/work';
import About from './modules/about';
import Blog from './modules/blog';

class App extends Component {
  render(){
    return (
      <main> 
       {/* <Header />
       <Home /> */}
       <Work />
       {/* <About />
       <Blog />
       <Footer /> */}
    </main>
    );
  }
}

export default App;
