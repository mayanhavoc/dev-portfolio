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
                <h1 className="py-5">Services</h1>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                        <FontAwesomeIcon 
                                        className="icon"
                                        icon={faEye} 
                                        size="2x" />                                   
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>I build and improve websites so that they are easy to understand and navigate in order to convert visitors into customers. </p>
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
                                    <h3>Web Development</h3>
                                    <p>I build and mantain websites that look great, work fast and perform seamlessly.</p>
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
                                    <h3>Business analysis</h3>
                                    <p>
                                        I provide resource and capability analysis to develop competitive advantages in the external business environment. 
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
                                    <h3>Market analysis</h3>
                                    <p>
                                        I can provide market trends and forces analysis and help you craft an effective marketing strategy.  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        )
    }
}

export default Services
