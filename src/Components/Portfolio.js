import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './Portfolio.css';


class Portfolio extends Component {
    render() {
        return (
            <Element className="Portfolio">
                <h2 className="section-heading sub-heading py-5 brand">Portfolio</h2>
                <div className="row mx-auto my-5">
                    <div className="col-lg-6">
                            <div style={{width:"100%", height:"0", paddingBottom:"52%", position:"relative"}}>
                                <img src="./images/journalling.png" alt="" className="img-fluid giphy-embed" />
                                {/* <iframe src="https://giphy.com/embed/jswJw3WHcddZJTrkvd" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen>
                                </iframe> */}
                            </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Journalling</h3>
                            <p className="project-description">This is a simple, silly CMS based on Brad Traversy's Storybooks app with Colt Steele's local authentication strategy. You'd think it's not much but it turns out it's quite a bit of work. I mean, you try chasing those routes... </p>
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
                                <img src="./images/cell_culture_calculator.png" alt="" className="img-fluid giphy-embed" />
                                {/* <iframe src="https://giphy.com/embed/jswJw3WHcddZJTrkvd" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen>
                                </iframe> */}
                            </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Cell Culture Calculator</h3>
                            <p className="project-description">Researchers use cell calculators in order to plan their experiments. Traditionally, they use excel spreadsheets, but the UI is not necessarily user friendly. It's also difficult to understand. The idea with this cell culture calculator is to give the researcher a 'single finger experience' (think Tinder, Reddit, etc.) to input the values and select the options they need to model and the app performs the calculations and shows its process in order to facilitate the validation of the results.</p>
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
                                <img src="./images/pet-shelter-desktop.png" alt="" className="img-fluid giphy-embed" />
                                {/* <iframe src="https://giphy.com/embed/jswJw3WHcddZJTrkvd" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen>
                                </iframe> */}
                            </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Pet Shelter</h3>
                            <p className="project-description">Pet adoption websites don't always have the best UI. I'm studying how to make a simple, light, easy to use template specifically design to make it easier for adoption agencies to create their own profile and register their pets for adoption.</p>
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
                            <img src="./images/tos_desktop.png" alt="" className="img-fluid giphy-embed" />
                                {/* <iframe src="https://giphy.com/embed/jswJw3WHcddZJTrkvd" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen>
                                </iframe> */}
                            </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Portfolio-content">
                            <h3 className="brand sub-heading experience-heading">Turkeys of Sacramento</h3>
                            <p className="project-description">ToS is set up as 5 different canvases, each with different elements. I created classes for different elements which have width and height properties in relation to the sprite, to the canvas and X and Y properties in relation to the grid. These properties are updated as the sprite moves along the canvas.Finally utilities.js handles the game logic.</p>
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

export default Portfolio;
