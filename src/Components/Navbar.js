import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
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
            <nav className="navbar navbar-expand-xl navbar-expand-lg bg-dark fixed-top" id="navbar">
                <Link
                className="nav-link"
                activeClass="active" 
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}>
                <img className="logo" src="./images/me_chilling.png" alt="me chilling" />
                <p className="brand nav-brand">Roberto</p>
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
                </button>
                        <div 
                        className="collapse navbar-collapse ms-5 me-5" 
                        id="navbarSupportedContent">
                            <ul 
                            className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                    className="nav-link" 
                                    activeClass="active"
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    aria-current="page" 
                                    >
                                    Home
                                    <span 
                                    className="sr-only">
                                    (current)
                                    </span>
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                   activeClass="active-link" 
                                    className="nav-link"
                                    aria-current="page"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200} 
                                    >
                                    About
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    activeClass="active-link" 
                                    className="nav-link" 
                                    to="Services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    arria-current="page"
                                    >
                                    Services
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    activeClass="active-link" 
                                    className="nav-link" 
                                    to="Experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    aria-current="page"
                                    >
                                    Experience
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    activeClass="active-link"
                                    className="nav-link" 
                                    to="Portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    aria-current="page"
                                    >
                                    Portfolio
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    activeClass="active-link" 
                                    className="nav-link" 
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    aria-current="page"
                                    >
                                    Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </nav>                
        )
    }
}

export default Navbar



  





