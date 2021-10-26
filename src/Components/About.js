import React, { Component } from 'react'
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About component-wrapper container d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <div className="photo-wrap mb-5">
                            <img className="profile-pic" src="./images/profile_pic.JPG" alt="Roberto Mayen profile pic" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <h2 className="sub-heading my-2">Who am I?</h2>
                        <p>Hello, I am Roberto. I'm a driven, dedicated and efficient Full Stack Web Developer. </p>
                        <p> I have 2 years experience programming websites and web apps, 4 years of experience working in hospitality and over 10 years experience in business and project management in a wide range of different industries (from public sector to tourism). </p>
                        <p>
                        Having lived and learned the pains of working with the wrong tools, I decided to learn to build the solutions to these problems. My main stack is MERN and am currently learning to code on the blockchain. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
