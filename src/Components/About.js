import React, { Component } from 'react'
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About component-wrapper d-flex align-items-center justify-content-center">
                <div className="row d-flex justify-content-center align-items-center p-5">
                    <div className="col-lg-6 col-xs-12">
                        <div className="photo-wrap mb-5">
                            <picture>
                                <source srcSet='./images/profile_pic.JPG' media="(min-width: 800px)"/>
                                <img src="./images/profile_pic.webp" className="rounded-circle profile-pic" alt="profile pic" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <h2 className="sub-heading my-2 brand">Who am I?</h2>
                        <p className='text-justify text-start'>Hi, my name's Roberto. <br/> I have 2 years experience programming websites and web apps, 4 years of experience working in hospitality and over 10 years experience in business and project management in a wide range of different industries (from public sector to tourism). <br/>Having lived and learned the pains of working with the wrong tools, I decided to learn to build the solutions to these problems. My main stack is MERN.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
