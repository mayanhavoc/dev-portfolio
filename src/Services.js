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
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                        <FontAwesomeIcon 
                                        className="icon"
                                        icon={faEye} 
                                        size="2x" />                                   
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>I build and improve websites so that the user interface is easy to understand and navigate. </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faDesktop } 
                                    size="2x"/> 
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>I build and mantain websites that look great, work fast and perform with seamlessly.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faBriefcase } 
                                    size="2x" />
                                    </div>
                                    <h3>Business analysis</h3>
                                    <p>
                                        Resource and capability analysis to develop competitive advantages in the externalbusiness environment. 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon 
                                    className="icon"
                                    icon={ faStore } 
                                    size="2x" />
                                    </div>
                                    <h3>Market analysis</h3>
                                    <p>
                                        Market trends and forces analysis. Crafting a marketing strategy.  
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
