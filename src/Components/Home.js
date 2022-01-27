import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Typed from 'react-typed';
import { NavLink } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="/">
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
                    <h1 className="Home heading brand">Roberto M</h1>
                    <Typed
                        strings={["Full Stack Web Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                    />
                    <NavLink 
                    activeClassName="link-active"
                    to="contact"
                    className="Home-btn"
                    >Contact me
                    </NavLink>
                </section>
            </section>
            </div>
        )
    }
}

export default Home
