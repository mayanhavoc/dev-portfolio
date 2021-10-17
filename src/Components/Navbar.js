import React, { Component } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="logo" href="#"><img src="./images/logo.png" alt="micochango logo" /></Link>
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
                        className="collapse navbar-collapse" 
                        id="navbarSupportedContent">
                            <ul 
                            className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link 
                                    className="nav-link" 
                                    aria-current="page" 
                                    to="home"
                                    href="#"
                                    smooth={true}
                                    >
                                    <span 
                                    className="sr-only">
                                    (current)
                                    </span>
                                    Home
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link 
                                    className="nav-link"
                                    aria-current="page"
                                    to="about" 
                                    href="#"
                                    smooth={true}
                                    >
                                    About
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link 
                                    className="nav-link" 
                                    href="#"
                                    arria-current="page"
                                    to="services"
                                    smooth={true}
                                    >
                                    Services
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    className="nav-link" 
                                    href="#"
                                    to="portfolio"
                                    aria-current="page"
                                    smooth={true}
                                    >
                                    Portfolio
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link 
                                    className="nav-link" 
                                    href="#"
                                    to="experience"
                                    aria-current="page"
                                    smooth={true}
                                    >
                                    Experience
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link 
                                    className="nav-link" 
                                    aria-current="page"
                                    href="#"
                                    to="contact"
                                    smooth={true}
                                    >
                                    Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>                
            </div>
        )
    }
}

export default Navbar



  





