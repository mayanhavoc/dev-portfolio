import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                            offset={-70}
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
                            offset={-70}
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
                        <a
                            className='btn btn-floating m-1'
                            href='https://github.com/mayanhavoc'
                            role='button'
                            target='_blank'
                            rel='noreferrer'
                            >
                            <FontAwesomeIcon className='no-border' icon={faGithub} size='3x'/>
                        </a>
                        <a
                            className='btn btn-floating m-1'
                            href='https://www.linkedin.com/in/roberto-mayen-hess/'
                            role='button'
                            target='_blank'
                            rel='noreferrer'
                            >
                            <FontAwesomeIcon className='no-border' icon={faLinkedin} size='3x'/>
                        </a>
                    </div>
                </div>    
            </div>                
        )
    }
}

export default Footer 
