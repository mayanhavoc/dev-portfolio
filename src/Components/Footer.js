import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'

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
    constructor(props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    render() {
        return (
            <div className="Footer">
                <div className="Footer-wrapper container d-flex">
                    <div className="container d-flex flex-column">
                        <Link
                            className='mt-1'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            href="#"
                            to="Home"
                            >Home
                        </Link>     
                        <Link 
                            className="mt-1"
                            href="#"
                            to="About"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            >About
                        </Link>
                    </div>
                    <div className="container d-flex flex-column">
                        <Link 
                            className="mt-1"
                            href="#"
                            to="Services"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Services
                        </Link>    
                        <Link 
                            className='mt-1'
                            href="#"
                            to="Experience"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Experience
                        </Link> 
                    </div>
                    <div className="container d-flex flex-column">
                        <Link
                            className='mt-1' 
                            href="#"
                            to="Portfolio"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Portfolio
                        </Link>    
                        <Link
                            className='mt-1' 
                            href="#"
                            to="Contact"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            >Contact
                        </Link>  
                    </div>
                    <div className="container d-flex justify-content-center icons">
                        <TwitterShareButton
                            url={"www.micochango.com"}
                            title={"Roberto M, Full Stack Web Dev"}
                            quote={"Full Stack Web Developer"}
                            hashtags={["FullStackDev"]}>
                            <TwitterIcon
                                round={true} 
                                className="mx-3 icon">
                            </TwitterIcon>    
                        </TwitterShareButton>  
                        <LinkedinShareButton
                            url={"www.micochango.com"}
                            title={"Roberto M, Full Stack Web Dev"}
                            summary={"Experienced, driven and effective software developer. "}>
                                <LinkedinIcon
                                round={true}
                                className="mx-3 icon">
                                </LinkedinIcon>
                        </LinkedinShareButton>
                    </div>
                </div>    
            </div>                
        )
    }
}

export default Footer 
