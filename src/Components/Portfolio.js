import React, { Component } from "react";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { Element } from 'react-scroll';
import "react-popupbox/dist/react-popupbox.css";
import "./Portfolio.css"

class Portfolio extends Component {
    openAerostatika(){
        const content = (
            <div className="container d-flex flex-column">
                <p>Built on vanilla JS, HTML, CSS</p>
                <div className="container d-flex justify-content-center">
                    <a className="btn btn-primary btn-sm mx-2" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">Live site</a>
                    <a className="btn btn-primary btn-sm mx-2" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">Remote repository</a>
                </div>
          </div>
        )
        PopupboxManager.open({ content })
    }
    render() {
        return (
          <Element className="Portfolio">
              <h2 className="section-heading sub-heading py-5 brand">Portfolio</h2>
              <div className="row mx-auto">
              <div className="col col-md-6 col-lg-4">
                      <div className="card">
                          <div className="card-body">
                                <img src="./images/bacilongas_logo.png"  alt="" className="card-img-top mx-auto d-block" />
                              <h5 className="card-title brand text-center py-3">
                                  Cell Culture Calculator
                              </h5>
                              <button className="btn btn-primary" onClick={this.openAerostatika}>Click!</button>
                          </div>
                      </div>
                  </div>
                  <div className="col col-md-6 col-lg-4">
                      <div className="card">
                        <div className="card-body">
                        <img src="./images/bacilongas_logo.png"  alt="" className="card-img-top mx-auto d-block" />
                        <h5 className="card-title brand text-center py-3">
                            Frogger
                        </h5>
                        <button className="btn btn-primary" onClick={this.openAerostatika}>Click!</button>
                        </div>
                      </div>
                  </div>
                  <div className="col col-md-6 col-lg-4">
                      <div className="card text-right">
                          <div className="card-body">
                            <img src="./images/bacilongas_logo.png"  alt="" className="card-img-top mx-auto d-block" />
                            <h5 className="card-title brand text-center py-3">
                                Discover Guatemala
                            </h5>
                            <button className="btn btn-primary" onClick={this.openAerostatika}>Click!</button>
                          </div>
                      </div>
                  </div>
              </div>
            <PopupboxContainer className="container w-50 h-50" />
          </Element>
        )
      }
}

export default Portfolio;

