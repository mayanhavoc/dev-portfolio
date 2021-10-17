import React, { Component } from 'react';
import VideoEmbed from './VideoEmbed';
import './Experience.css';


class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <div className="d-flex justify-content-center my-5">
                    <h1>Experience</h1>
                </div>
                <div className="container experience-wrapper">
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3 className="year">2012-2013</h3>
                            <h3 className="block-heading">Espacios Extremos</h3>
                            <span>Operations Director</span>
                            <p>Espacios Extremos was an initiative of Guatemala City's local government to promote safe spaces for  marginalized youths to practice urban sports.</p>
                            <VideoEmbed 
                            embedId="NN4U6OBAYMc"
                            />
                            <p>Negotiating the relationship between the local government and communities like skaters was a challenge.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3 className="year">2013</h3>
                            <h3 className="block-heading">Bacilongas</h3>
                            <span>Co-founder</span>
                            <p>Bacilongas is an Etsy style platform for Latinamerica.</p>
                            <VideoEmbed 
                            embedId="fFx0gZ9ZnbM"
                            />
                            <p>Bacilongas was an incredible experience. We participated in a bootcamp program which allowed us to find  our "persona" and develop a marketing strategy. I learned about communication and strategy alignment in this project.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3 className="year">2013-2015</h3>
                            <h3 className="block-heading">Aerostatika</h3>
                            <span>Operations Coordinator</span>
                            <p>I was in charge of operations for the first ever hot air ballon company in Guatemala.</p>
                            <VideoEmbed
                            embedId="YhRCShVE4eA"
                            autoplay="0"
                            preload="none"
                            />
                            <p>Flying hot air ballons in Guatemala was extremely challening and involved all sorts of responsibilities. We spent months planning and doing risk assessments to make sure that every passenger was safe, we worked with aeronautical authorities to develop regulation to be able to use the air space, among many, many other obstacles we had to sort through in order to provide this service. It was so much fun.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3 className="year">2012-2016</h3>
                            <h3 className="cme-header block-heading">CME</h3>
                            <span>Program Director</span>
                            <p>In 2012 I founded a startup incubator in my home town of Guatemala</p>
                            <VideoEmbed
                            embedId="CLEZCx5qtYc"
                            autoplay="0"
                            preload="none"
                            />
                            <p>Working with small businesses and entrepreneurs in Guatemala made me realize just how       important technology   is    for business. Over the course of 4 years, I helped entrepreneurs implement     technology into their    businesses to     build competitive advantages with very few resources.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3 className="year">2012-2013</h3>
                            <h3 className="block-heading">BlogJob!®</h3>
                            <span>Producer, Director</span>
                            <p>BlogJob!® was a opinion blog platform.</p>
                            <VideoEmbed
                            embedId="9OpcYd4ysS4"
                            autoplay="0"
                            preload="none"
                            />
                            <p>BlogJob!® Opinión de boca en boca</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience
