import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Element } from 'react-scroll';
import 'reactjs-popup/dist/index.css';
import './Portfolio.css';

class Portfolio extends Component {
    // Discover Guatemala
    openDiscover() {
        const content = (
            <Popup trigger={<button className="button">Open</button>} modal>
                {close => (
                    <Element className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header">Discover Guatemala</div>
                        <div className="content">
                            <a href="https://github.com/mayanhavoc/yelp_camp">
                            <img className="portfolio-image-popupbox" src="./images/discover_guatemala.png"     alt="Discover   Guatemala website" /></a>
                            <p>A platform to crowdsource lodgings. Built with NodeJS, Express and Mongo.</p>
                            <b>GitHub:</b> 
                            <a 
                            className="hyper-link" 
                            href="https://github.com/mayanhavoc/yelp_camp"     
                            onClick={() => window.open("https://github.com/mayanhavoc/yelp_camp")}>https:// github.com/ mayanhavoc/yelp_camp</a>
                        </div>
                    </Element>
                )}
            </Popup>
        );
    }

    // // Turkeys of Sacramento
    // openTurkeys() {
    //     const content = (
    //         <>
    //         <a href="https://github.com/mayanhavoc/turkeys_of_sacramento">
    //         <img className="portfolio-image-popupbox" src="./images/tos_iphone.png" alt="Turkeys of Sacramento game" /></a>
    //         <p>A platform to crowdsource lodgings. Built with NodeJS, Express and Mongo.</p>
    //         <b>GitHub:</b> <a href="https://github.com/mayanhavoc/turkeys_of_sacramento" className="hyper-link" onClick={() => window.open("https://github.com/mayanhavoc/turkeys_of_sacramento")}>https://github.com/mayanhavoc/turkeys_of_sacramento</a>
    //         </>
    //     )
    //     PopupboxManager.open({
    //         content,
    //         config: {
    //             titleBar: {
    //                 enable: true,
    //                 text: 'Turkeys of Sacramento, a frogger style game'
    //             },
    //             fadeIn: true,
    //             fadeInSpeed: 500
    //         }
    //     })
    // }

    // // Recipe finder web app
    // openRecipe() {
    //     const content = (
    //         <>
    //         <a href="https://github.com/mayanhavoc/recipe_finder">
    //         <img className="portfolio-image-popupbox" src="./images/recipe_finder_desktop.png" alt="Recipe finder web app"/></a>
    //         <p>A platform to crowdsource lodgings. Built with NodeJS, Express and Mongo.</p>
    //         <b>GitHub:</b> <a href="https://github.com/mayanhavoc/recipe_finder" className="hyper-link" onClick={() => window.open("https://github.com/mayanhavoc/recipe_finder")}>https://github.com/mayanhavoc/recipe_finder</a>
    //         </>
    //     )
    //     PopupboxManager.open({
    //         content,
    //         config: {
    //             titleBar: {
    //                 enable: true,
    //                 text: 'Recipe finder, a simple web app'
    //             },
    //             fadeIn: true,
    //             fadeInSpeed: 500
    //         }
    //     })
    // }

    // // Github explorer web app
    // openExplorer() {
    //     const content = (
    //         <>
    //         <img className="portfolio-image-popupbox" src="./images/github_explorer_desktop.png" alt="Github explorer web app"/>
    //         <p>A platform to crowdsource lodgings. Built with NodeJS, Express and Mongo.</p>
    //         <b>GitHub:</b> <a href="https://github.com/mayanhavoc/Github-finder" className="hyper-link" onClick={() => window.open("https://github.com/mayanhavoc/Github-finder")}>https://github.com/mayanhavoc/Github-finder</a>
    //         </>
    //     )
    //     PopupboxManager.open({
    //         content,
    //         config: {
    //             titleBar: {
    //                 enable: true,
    //                 text: 'Github explorer, a simple web app'
    //             },
    //             fadeIn: true,
    //             fadeInSpeed: 500
    //         }
    //     })
    // }
   
    render() {
        return (
            <Element className="Portfolio">
                <h2 className="section-heading sub-heading py-5 brand">Portfolio</h2>
                    <div className="row container justify-content-center align-items-center">
                       <div className="col-lg-3 portfolio-image-box" onClick={this.openDiscover}>
                            <p>Turkeys of Sacramento</p>
                            <img className="portfolio-image" src="./images/tos_screenshot.png" alt="TurkeysofSacramento   game" />
                            <div className="overflow"></div>
                            
                       </div>
                        <div className="col-lg-4 portfolio-image-box" onClick={this.openDiscover}>
                            <p>Discover Guatemala</p>
                            <img className="portfolio-image" src="./images/discover_guatemala_desktop.png"alt="Discover    Guatemala project" />
                            <div className="overflow"></div>
                            
                        </div>     
                        <div className="col-sm col-lg-3 portfolio-image-box mobile">
                            <p>Mobile</p>
                            <img className="portfolio-image" src="./images/discover_guatemala_mobile.png"alt="Discover  Guatemala project" />
                            <div className="overflow"></div>
                        </div>     
                       <div className="col-lg-3 col-md-6 col-sm  portfolio-image-box mobile">
                            <p>Recipe Finder <i className="fas fa-utensils"></i></p>
                            <img className="portfolio-image" src="./images/recipe_finder_mobile.png" alt="Recipe finder"/>
                            <div className="overflow"></div>
                            
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm portfolio-image-box" onClick={this.openRecipe}>
                           <p>Desktop view</p>
                            <img className="portfolio-image" src="./images/recipe_finder_desktop.png" alt="Recipefinder"/>
                            <div className="overflow"></div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm portfolio-image-box" onClick={this.openExplorer}>
                            <p>Github explorer</p>
                            <img className="portfolio-image img-fluid" src="./images/github_explorer_desktop.png"   alt="Githubexplorer"   />
                            <div className="overflow"></div>
                            
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm portfolio-image-box mobile">
                            <p>Mobile</p>
                            <img className="portfolio-image img-fluid" src="./images/github_explorer_mobile.png"   alt="Githubexplorer"   />
                            <div className="overflow"></div>
                       </div>
                    </div>
               </Element>                 
        )
    }
}

export default Portfolio
