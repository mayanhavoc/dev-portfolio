import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";
import Navigation from './Navbar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <> 
      <Navigation />
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 10,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "rgb(255, 179,64)",
            },
            links: {
              color: "rgb(17, 46, 81)",
              distance:  150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none", 
              enable: true,
              outMode: "bouce",
              random: true,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area:900,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      {/* <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Work' component={Work}/>
        <Route path='/Contact' component={Contact}/>
      </Switch> */}
      <Home />
      <About />
      {/* <Work />
      <Contact />  */}
  </>
  );
}

export default App;
