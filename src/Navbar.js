import React, { Component } from 'react'
import './Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-light navbar-1 white">
                    <a class="navbar-brand" href="#"><img src="./images/logo.png" width="50px" alt="micochango logo" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span                    class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent15">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </>
        )
    }
}

export default Navbar


  





