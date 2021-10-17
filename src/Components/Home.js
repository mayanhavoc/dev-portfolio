import React, { Component } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <>
            <section className="Home-wrapper">
                <section className="Home-main">
                    <h1 className="Home-title">Roberto M</h1>
                    <Typed
                        strings={["Full Stack Web Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                    />
                    <Link 
                    href="#" 
                    to="contact"
                    className="Home-btn"
                    smooth={true}
                    >Contact me
                    </Link>
                </section>
            </section>
            </>
        )
    }
}

export default Home
