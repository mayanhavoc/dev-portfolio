import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="navbar">
                    <div className="container nav-content">
                        <Link
                        exact activeClass="active" 
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="logo" 
                        >
                        <img src="./images/logo.png" alt="micochango logo" />
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
                        className="collapse navbar-collapse" 
                        id="navbarSupportedContent">
                            <ul 
                            className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                    className="nav-link" 
                                    exact activeClass="active"
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
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
                                    exact activeClassName="active-link" 
                                    className="nav-link"
                                    aria-current="page"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500} 
                                    >
                                    About
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    exact activeClassName="active-link" 
                                    className="nav-link" 
                                    to="Services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    arria-current="page"
                                    >
                                    Services
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    exact activeClass="active-link" 
                                    className="nav-link" 
                                    to="Experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    aria-current="page"
                                    >
                                    Experience
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    exact activeClass="active-link"
                                    className="nav-link" 
                                    to="Portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    aria-current="page"
                                    >
                                    Portfolio
                                    </Link>
                                </li>
                                <li 
                                className="nav-item">
                                    <Link
                                    exact activeClassName="active-link" 
                                    className="nav-link" 
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    aria-current="page"
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



  





