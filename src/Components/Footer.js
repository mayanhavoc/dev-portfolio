import React, { Component } from 'react';
import { Link } from 'react-scroll';

import {
    TwitterShareButton, 
    LinkedinShareButton,
} from 'react-share';
import {
    TwitterIcon, 
    LinkedinIcon,
} from 'react-share';

import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col">
                            <div className="container contact-info">
                                <div>
                                    <span>Sacramento, CA</span>    
                                </div>    
                                <div>
                                    <span>info@micochango.com</ span>    
                                </div>    
                            </div>
                            </div>
                        <div className="col-lg-6 col-md-6 col">
                            <div className="row">
                                <div className="container d-flex flex-column justify-content-center col-lg-4 col">
                                    <Link
                                    href="#"
                                    to="home"
                                    smooth={true}
                                    >Home
                                    </Link>     
                                    <Link className="footer-nav"
                                    href="#"
                                    to="about"
                                    smooth={true}
                                    >About
                                    </Link>    
                                    <Link className="footer-nav"
                                    href="#"
                                    to="Services"
                                    smooth={true}
                                    >Services
                                    </Link>    
                                </div>    
                                <div className="footer-nav container d-flex flex-column justify-content-center col-lg-4 col">
                                    <Link className="footer-nav"
                                    href="#"
                                    to="experience"
                                    smooth={true}
                                    >Experience
                                    </Link>    
                                    <Link 
                                    href="#"
                                    to="portfolio"
                                    smooth={true}
                                    >Portfolio
                                    </Link>    
                                    <Link 
                                    href="#"
                                    to="contact"
                                    smooth={true}
                                    >Contact
                                    </Link>    
                                </div>    
                            </div>    
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm">
                                <div className="row contact-info">
                                    <div className="container d-flex justify-content-center icons col">
                                    <TwitterShareButton
                                        url={"www.micochango.com"}
                                        title={"Roberto M, Full Stack Web Dev"}
                                        quote={"Full Stack Web Developer"}
                                        hashtags={["FullStackDev"]}
                                    >
                                        <TwitterIcon
                                        round={true} 
                                        className="mx-3 icon"></TwitterIcon>    
                                    </TwitterShareButton>  
                                    <LinkedinShareButton
                                        url={"www.micochango.com"}
                                        title={"Roberto M, Full Stack Web Dev"}
                                        summary={"Experienced, driven and effective software developer. "}
                                    >
                                        <LinkedinIcon
                                        round={true}
                                        className="mx-3 icon"
                                        ></LinkedinIcon>
                                    </LinkedinShareButton>
                                   
                                </div>
                                </div>
                            </div>    
                        </div>    
            </div>                
        )
    }
}

export default Footer
