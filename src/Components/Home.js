import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Typed from 'react-typed';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import Button from './Button';
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    render() {
        return (
            <Element className="/">
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
            <section className="Home component-wrapper">
                <section className="Home-main">
                  <div className="container d-flex flex-column justify-content-center">
                    <img 
                      src="./images/Roberto-M-logo.svg" 
                      alt="Roberto M, Full Stack Web Developer" 
                      className='d-block brand-img'
                      />
                    <Typed
                        strings={["Full Stack Web Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        className="pt-3 typed"
                    />
                    <Link 
                    activeClass="active"
                    href="#"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <Button
                      label="Contact me"
                    ></Button>
                    </Link>
                  </div>
                </section>
            </section>
            </Element>
        )
    }
}

export default Home
