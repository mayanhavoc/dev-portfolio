import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import './Services.css';


class Services extends Component {
    render() {
        return (
            <div className="Services">
                <h2 className="section-heading sub-heading py-5 brand">Services</h2>
                {/* <div className="py-5"> */}
                    {/* <div className="container"> */}
                        <div className="row container">
                            <div className="col-lg-3 col-md-6 col-sm col-xs">
                                <div className="box">
                                    <div className="circle">
                                        <FontAwesomeIcon 
                                        className="icon"
                                        icon={faEye} 
                                        size="2x" />                                   
                                    </div>
                                    <h3 className="secondary-heading">Web Design</h3>
                                    <p className="secondary-text">I use a six step framework to break projects down into distinct phases in order to monitor progress and results along the way.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faDesktop } 
                                    size="2x"/> 
                                    </div>
                                    <h3 className="secondary-heading">Web Development</h3>
                                    <p>I emphasize adherence to the agreed technical and design specifications and perform regular functional tests to correct any problems.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faBriefcase } 
                                    size="2x" />
                                    </div>
                                    <h3 className="secondary-heading">Business consulting</h3>
                                    <p>
                                        Explore innovation processes and business opportunities. Identify key resources and determine their best use.  
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faStore } 
                                    size="2x" />
                                    </div>
                                    <h3 className="secondary-heading">Market analysis</h3>
                                    <p>
                                        Evaluate marketing processes, analize and identify customers and marketplace to develop a successful marketing strategy.  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                // </div>
            // </div>                
        )
    }
}

export default Services
