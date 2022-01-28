import React, { Component } from 'react';
import VideoEmbed from './VideoEmbed';
import { Element } from 'react-scroll';
import './Experience.css';


class Experience extends Component {
    render() {
        return (
            <Element className="Experience container">
                <h2 className="section-heading sub-heading py-5 brand">Experience</h2>
                <div className="row mx-auto">
                    {/*  */}
                    <div className="col-lg-4 col-md col-sm">
                        {/* <div className="marker"></div> */}
                        <div className="timeline-content">
                            <h3 className="year">2012-2016</h3>
                            <h3 className="brand sub-heading">Centro Municipal de Emprendimiento</h3>
                            <span className="job-title">Program Director</span>
                            <p className="job-description">In 2012 I founded a startup incubator in my home town of Guatemala</p>
                            <VideoEmbed
                            embedId="CLEZCx5qtYc"
                            autoplay="0"
                            preload="none"
                            />
                            <p>Working with small businesses and entrepreneurs in Guatemala made me realize just how       important technology   is    for business. Over the course of 4 years, I helped entrepreneurs implement     technology into their    businesses to     build competitive advantages with very few resources.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-4 col-md col-sm">
                        {/* <div className="marker"></div> */}
                        <div className="timeline-content">
                            <h3 className="year">2013-2015</h3>
                            <h3 className="brand sub-heading">Aerostatika</h3>
                            <span className="job-title">Operations Coordinator</span>
                            <p className="job-description">I was in charge of operations for the first ever hot air ballon company in Guatemala.</p>
                            <VideoEmbed
                            embedId="YhRCShVE4eA"
                            autoplay="0"
                            preload="none"
                            />
                            <p>Flying hot air ballons in Guatemala was extremely challening and involved all sorts of responsibilities. We spent months planning and doing risk assessments to make sure that every passenger was safe, we worked with aeronautical authorities to develop regulation to be able to use the air space, among many, many other obstacles we had to sort through in order to provide this service. It was so much fun.</p>
                        </div>
                    </div>
                {/* </div> */}
                    {/*  */}
                {/* <div className="row"> */}
                    <div className="col-lg-4 col-md col-sm">
                        {/* <div className="marker"></div> */}
                        <div className="timeline-content">
                            <h3 className="year">2013-2014</h3>
                            <h3 className="sub-heading brand">Espacios Extremos</h3>
                            <span className="job-title">Operations Director</span>
                            <p className="job-description">Espacios Extremos was an initiative of Guatemala City's local government to promote safe spaces for  marginalized youths to practice urban sports.</p>
                            <VideoEmbed 
                            embedId="NN4U6OBAYMc"
                            autoplay="0"
                            preload="none"
                            />
                            <p>Negotiating the relationship between the local government and communities like skaters was a challenge.</p>
                        </div>
                    </div>
                    
                    {/*  */}
                    <div className="col-lg-4 col-md col-sm">
                        {/* <div className="marker"></div> */}
                        <div className="timeline-content">
                            <h3 className="year">2013</h3>
                            <h3 className="sub-heading brand">Bacilongas</h3>
                            <span className="job-title">Co-founder</span>
                            <p className="job-description">Bacilongas is an Etsy style platform for Latinamerica.</p>
                            <VideoEmbed 
                            embedId="fFx0gZ9ZnbM"
                            autoplay="0"
                            preload="none"
                            />
                            <p>Bacilongas was an incredible experience. We participated in a bootcamp program which allowed us to find  our "persona" and develop a marketing strategy. I learned about communication and strategy alignment in this project.</p>
                        </div>
                    </div>
                {/* </div> */}
                    {/*  */}
                {/* <div className="row"> */}
                    <div className="col-lg-4 col-md-6 col-sm">
                        {/* <div className="marker"></div> */}
                        <div className="timeline-content">
                            <h3 className="year">2012</h3>
                            <h3 className="sub-heading brand">BlogJob!®</h3>
                            <span className="job-title">Producer, Director</span>
                            <p className="job-description">BlogJob!® was a opinion blog platform.</p>
                            <VideoEmbed
                            embedId="9OpcYd4ysS4"
                            autoplay="0"
                            preload="none"
                            />
                            <p>BlogJob!® Opinión de boca en boca</p>
                        </div>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Experience
