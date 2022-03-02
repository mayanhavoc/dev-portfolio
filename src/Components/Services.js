import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import './Services.css';


class Services extends Component {
    render() {
        return (
            <Element className="Services">
                <h2 className="section-heading sub-heading py-5 brand">Services</h2>
                    <div className="row container">
                        <div className="col-lg-3 col-md-6 col-sm my-2">
                            <div className="box">
                                <div 
                                className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={faEye} 
                                    size="2x"/>             
                                </div>
                                <h3 className="secondary-heading pt-3">Progressive Web Apps</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 my-2">
                            <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faDesktop } 
                                    size="2x"/> 
                                    </div>
                                    <h3 className="secondary-heading pt-3">Single page apps (SPAs)</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 my-2">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faBriefcase } 
                                    size="2x" />
                                    </div>
                                    <h3 className="secondary-heading pt-3">Static websites</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 my-2">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faStore } 
                                    size="2x" />
                                    </div>
                                    <h3 className="secondary-heading pt-3">E-commerce apps</h3>
                                </div>
                            </div>
                        </div>
                    </Element >
                // </div>
            // </div>                
        )
    }
}

export default Services
