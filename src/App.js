import './App.css';
import Nav from './Navbar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Work' component={Work}/>
        <Route path='/Contact' component={Contact}/>
      </Switch>
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
