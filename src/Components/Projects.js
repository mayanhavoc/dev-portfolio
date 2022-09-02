import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './Projects.css';


class Projects extends Component {
    render() {
        return (
            <Element className="Projects">
                <h2 className="section-heading sub-heading py-5 brand">Projects</h2>
                <div className="row mx-auto my-5">
                    <div className="col-lg-6">
                        <div style={{width:"100%", height:"0", paddingBottom:"52%", position:"relative"}}>
                            <picture>
                                <source srcSet='./images/journalling.jpg' media="(min-width: 1200px)"/>
                                <img className="rounded" src="./images/journalling.webp" alt="Journalling app" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Journalling</h3>
                            <p className="project-description text-justify">This is a simple, silly CMS based on Brad Traversy's Storybooks app with Colt Steele's local authentication strategy. You'd think it's not much but it turns out it's quite a bit of work. I mean, you try chasing those routes... </p>
                            <a href="https://github.com/mayanhavoc/journalling-app" className="btn portfolio-btn dark me-2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                                Github repository</a>
                            <a href="https://murmuring-ocean-47944.herokuapp.com/" className="btn portfolio-btn red my-1">Live site
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto my-5">
                    <div className="col-lg-6">
                        <div style={{width:"100%", height:"0", paddingBottom:"52%", position:"relative"}}>
                            <picture>
                                <source srcSet='./images/cell-culture-calculator.jpg' media="(min-width:1200px)"/>
                                <img className="d-block img-fluid rounded" src="./images/cell-culture-calculator.webp" alt="Cell culture calculator app" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Cell Culture Calculator</h3>
                            <p className="project-description text-justify">Researchers use cell calculators in order to plan their experiments. Traditionally, they use excel spreadsheets, but the UI is not necessarily user friendly. It's also difficult to understand. The idea with this cell culture calculator is to give the researcher a 'single finger experience' (think Tinder, Reddit, etc.) to input the values and select the options they need to model and the app performs the calculations and shows its process in order to facilitate the validation of the results.</p>
                            <a href="https://github.com/mayanhavoc/cell_culture_calculator" className="btn portfolio-btn dark me-2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Github repository
                            </a>
                            <a href="https://cell-culture-calculator.netlify.app/" className="btn portfolio-btn red my-1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Live site
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto my-5">
                    <div className="col-lg-6">
                        <div style={{width:"100%", height:"0", paddingBottom:"52%", position:"relative"}}>
                            <picture>
                                <source srcSet="./images/pet-shelter.jpg" media="(min-width: 1200px)"/>
                                <img className="rounded img-fluid d-block" src="./images/pet-shelter.webp" alt="Pet Shelter App" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Pet Shelter</h3>
                            <p className="project-description text-justify">Pet adoption websites don't always have the best UI. I'm studying how to make a simple, light, easy to use template specifically design to make it easier for adoption agencies to create their own profile and register their pets for adoption.</p>
                            <a href="https://github.com/mayanhavoc/pet-shelter" className="btn portfolio-btn dark me-2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Github repository
                            </a>
                            <a href="https://desolate-escarpment-13593.herokuapp.com/" className="btn portfolio-btn red my-1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Live site
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto my-5">
                    <div className="col-lg-6">
                        <div style={{width:"100%", height:"0", paddingBottom:"52%", position:"relative"}}>
                            <picture>
                                <source srcSet='./images/turkeys-of-sacramento.jpg' media="(min-width: 800px)"/>
                                <img className="rounded img-fluid d-block" src="./images/turkeys-of-sacramento.webp" alt="Turkeys of Sacramento 2D frogger style game" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Turkeys of Sacramento</h3>
                            <p className="project-description text-justify">ToS is set up as 5 different canvases, each with different elements. I created classes for different elements which have width and height properties in relation to the sprite, to the canvas and X and Y properties in relation to the grid. These properties are updated as the sprite moves along the canvas.Finally utilities.js handles the game logic.</p>
                            <a href="https://turkeys-of-sacramento.netlify.app/" className="btn portfolio-btn dark me-2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Github repository
                            </a>
                            <a href="https://desolate-escarpment-13593.herokuapp.com/" className="btn portfolio-btn red my-1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Live site
                            </a>
                        </div>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Projects;
