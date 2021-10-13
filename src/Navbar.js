import React, { Component } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="logo" href="#"><img src="./images/logo.png" alt="micochango logo" /></a>
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
                                    <a 
                                    className="nav-link" 
                                    aria-current="page" 
                                    href="#">Home
                                    </a>
                                </li>
                                <li 
                                className="nav-item">
                                    <a 
                                    className="nav-link" 
                                    href="#">About
                                    </a>
                                </li>
                                <li 
                                className="nav-item">
                                    <a 
                                    className="nav-link" 
                                    href="#">Services
                                    </a>
                                </li>
                                <li 
                                className="nav-item">
                                    <a 
                                    className="nav-link" 
                                    href="#">Work
                                    </a>
                                </li>
                                <li 
                                className="nav-item">
                                    <a 
                                    className="nav-link" 
                                    href="#">Contact
                                    </a>
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



  





