import React, { Component } from 'react';
import Typed from 'react-typed';
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
                    <a href="" className="Home-btn">Contact me</a>
                </section>
            </section>
            </>
        )
    }
}

export default Home
