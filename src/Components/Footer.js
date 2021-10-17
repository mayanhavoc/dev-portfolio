import React, { Component } from 'react';
import {
    TwitterShareButton, 
    LinkedinShareButton,
    RedditShareButton,
    WhatsappShareButton,
} from 'react-share';
import {
    TwitterIcon, 
    LinkedinIcon,
    RedditIcon,
    WhatsappIcon,
} from 'react-share';

import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="d-flex flex-column justify-content-center align-items-around">
                                <div>
                                    <span>Sacramento, CA</span>    
                                </div>    
                                <div>
                                    <span>info@micochango.com</ span>    
                                </div>    
                            </div>
                        </div>   
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="row">
                                <div className="col d-flex flex-column justify-content-center">
                                    <div>
                                    <a className="footer-nav"
                                    href="#Home"
                                    >Home</a>     
                                    </div>
                                    <a className="footer-nav">About</a>    
                                    <a className="footer-nav">Services</a>    
                                </div>    
                                <div className="col d-flex flex-column justify-content-center">
                                    <a className="footer-nav">Experience</a>    
                                    <a className="footer-nav">Portfolio</a>    
                                    <a className="footer-nav">Contact</a>    
                                </div>    
                            </div>    
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-6 mt-2">
                            <div className="d-flex justify-content-center">
                                <div className="row">
                                    <div className="d-flex icons col-6">
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
                                <div className="d-flex icons col-6">
                                    <RedditShareButton
                                    url={"www.micochango.com"}
                                    title={"Roberto M, Full Stack Web Dev"}>
                                        <RedditIcon
                                        round={true}
                                        className="mx-3 icon"
                                        ></RedditIcon>
                                    </RedditShareButton>
                                    <WhatsappShareButton
                                    url={"www.micochango.com"}
                                    title={"Roberto M, Full Stack Web Dev"}
                                    >
                                        <WhatsappIcon
                                        round={true}
                                        className="mx-3 icon"
                                        ></WhatsappIcon>
                                    </WhatsappShareButton>
                                </div>
                                </div>
                            </div>    
                        </div> 
                    </div>    
                </div>    
            </div>                
        )
    }
}

export default Footer
