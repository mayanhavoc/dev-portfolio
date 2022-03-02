import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './Experience.css';


class Experience extends Component {
    render() {
        return (
            <Element className="Experience container">
                <h2 className="section-heading sub-heading py-5 brand">Experience</h2>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 my-1">
                        <div className="card h-100">
                            <img src="../images/cme-logo.png" className="xp-img card-img-top" alt="CME logo" loading="lazy" />
                            <div className="card-body">
                                <h5 className="card-title brand sub-heading experience-heading">Centro Municipal de Emprendimiento</h5>
                                <span className="job-title">Program Director</span>
                                <p className="card-text"> 
                                Working with small businesses and entrepreneurs in Guatemala made me realize just how       important technology   is    for business. Over the course of 4 years, I helped entrepreneurs implement     technology into their    businesses to     build competitive advantages with very few resources.</p>
                            </div>
                            <div className="card-footer">
                                <small className="year">2012-2016</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-1">
                        <div className="card h-100">
                            <img src="../images/aerostatika-logo.png" className="xp-img card-img-top" alt="CME logo" loading="lazy" />
                            <div className="card-body">
                                <h5 className="card-title brand sub-heading experience-heading">Aerostatika</h5>
                                <span className="job-title">Operations Coordinator</span>
                                <p className="card-text">Flying hot air ballons in Guatemala was extremely challening. We spent months planning and doing risk assessments to make sure that every passenger was safe, we worked with aeronautical authorities to develop regulation to be able to use the air space, among many, many other obstacles we had to sort through in order to provide this service. It was so much fun.</p>
                            </div>
                            <div className="card-footer">
                                <small className="year">2013-2015</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 my-1">
                            <div className="card h-100">
                                <img src="../images/espacios-extremos-logo.png" className="xp-img card-img-top" alt="espacios extremos logo" loading="lazy" />
                                <div className="card-body">
                                    <h5 className="card-title brand sub-heading experience-heading">Espacios Extremos</h5>
                                    <span className="job-title">Operations Director</span>
                                    <p className="card-text"> 
                                    Working with small businesses and entrepreneurs in Guatemala made me realize just how       important technology   is    for business. Over the course of 4 years, I helped entrepreneurs implement     technology into their    businesses to     build competitive advantages with very few resources.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="year">2013-2014</small>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="row my-2">
                        <div className="col-sm-6 col-lg-4 my-1">
                            <div className="card">
                                <img src="../images/bacilongas-logo.png" className="xp-img card-img-top" alt="Bacilongas logo" loading="lazy" />
                                <div className="card-body">
                                    <h5 className="card-title brand sub-heading experience-heading">Bacilongas</h5>
                                    <span className="job-title">Co-founder</span>
                                    <p className="card-text"> 
                                    Bacilongas was an incredible experience. We participated in a bootcamp program which allowed us to find  our "persona" and develop a marketing strategy. I learned about communication and strategy alignment in this project.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="year">2013</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 my-1">
                            <div className="card">
                                <img src="../images/blogjob-logo.png" className="xp-img card-img-top" alt="Bacilongas logo" loading="lazy" />
                                <div className="card-body">
                                    <h5 className="card-title brand sub-heading experience-heading">Blogjob!</h5>
                                    <span className="job-title">Producer, Director</span>
                                    <p className="card-text"> 
                                    Bacilongas was an incredible experience. We participated in a bootcamp program which allowed us to find  our "persona" and develop a marketing strategy. I learned about communication and strategy alignment in this project.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="year">2012</small>
                                </div>
                            </div>
                        </div>
                </div>
                {/* <div className="row mx-auto">
                    <div className="timeline-content">
                        <h3 className="year">2012-2016</h3>
                        <h3 className="brand sub-heading experience-heading">Centro Municipal de Emprendimiento</h3>
                        <span className="job-title">Program Director</span>
                        <p className="job-description">In 2012 I founded a startup incubator in my home town of Guatemala</p>
                        <picture>
                            <source srcset="../images/cme-logo.webp"  type="image/webp" loading="lazy" media="(max-width: 960px)"/>
                                <img src="../images/cme-logo.png" className="xp-img d-block rounded-circle thumbnail" alt="CME logo" loading="lazy" />
                        </picture>
                        <p>Working with small businesses and entrepreneurs in Guatemala made me realize just how       important technology   is    for business. Over the course of 4 years, I helped entrepreneurs implement     technology into their    businesses to     build competitive advantages with very few resources.</p>
                    </div>
                </div>     */}
                {/* <div className="row mx-auto">       
                    <div className="timeline-content">
                        <h3 className="year">2013-2015</h3>
                        <h3 className="brand sub-heading experience-heading">Aerostatika</h3>
                        <span className="job-title">Operations Coordinator</span>
                        <p className="job-description">I was in charge of operations for the first ever hot air ballon company in Guatemala.</p>
                        <picture>
                            <source srcset="../images/aerostatika-logo.webp"  type="image/webp" loading="lazy" media="(max-width: 960px)"/>
                            <img src="../images/aerostatika-logo.png" className="xp-img d-block rounded-circle thumbnail" alt="CME logo" loading="lazy" />
                        </picture>
                        <p>Flying hot air ballons in Guatemala was extremely challening and involved all sorts of responsibilities. We spent months planning and doing risk assessments to make sure that every passenger was safe, we worked with aeronautical authorities to develop regulation to be able to use the air space, among many, many other obstacles we had to sort through in order to provide this service. It was so much fun.</p>
                    </div>
                </div> */}
                {/* <div className="row mx-auto">
                    <div className="timeline-content">
                        <h3 className="year">2013-2014</h3>
                        <h3 className="sub-heading brand experience-heading">Espacios Extremos</h3>
                        <span className="job-title">Operations Director</span>
                        <p className="job-description">Espacios Extremos was an initiative of Guatemala City's local government to promote safe spaces for  marginalized youths to practice urban sports.</p>
                        <picture>
                            <source srcset="../images/espacios-extremos-logo.webp"  type="image/webp" loading="lazy" media="(max-width: 960px)"/>
                            <img src="../images/espacios-extremos-logo.png" className="xp-img d-block rounded-circle thumbnail" alt="CME logo" loading="lazy" />
                        </picture>
                        <p>Negotiating the relationship between the local government and communities like skaters was a challenge.</p>
                    </div>
                </div> */}
                {/* <div className="row mx-auto">
                    <div className="timeline-content">
                        <h3 className="year">2013</h3>
                        <h3 className="sub-heading brand experience-heading">Bacilongas</h3>
                        <span className="job-title">Co-founder</span>
                        <p className="job-description">Bacilongas is an Etsy style platform for Latinamerica.</p>
                        <picture>
                            <source srcset="../images/bacilongas-logo.webp"  type="image/webp" loading="lazy" media="(max-width: 960px)"/>
                            <img src="../images/bacilongas-logo.png" className="xp-img d-block rounded-circle thumbnail" alt="CME logo" loading="lazy" />
                        </picture>
                        <p>Bacilongas was an incredible experience. We participated in a bootcamp program which allowed us to find  our "persona" and develop a marketing strategy. I learned about communication and strategy alignment in this project.</p>
                    </div>
                </div>     */}
                {/* <div className="row mx-auto">
                    <div className="timeline-content">
                        <h3 className="year">2012</h3>
                        <h3 className="sub-heading brand experience-heading">BlogJob!®</h3>
                        <span className="job-title">Producer, Director</span>
                        <p className="job-description">BlogJob!® was a opinion blog platform.</p>
                        <picture>
                            <source srcset="../images/blogjob-logo.webp"  type="image/webp" loading="lazy" media="(max-width: 960px)"/>
                            <img src="../images/blogjob-logo.png" className="xp-img d-block rounded-circle thumbnail" alt="CME logo" loading="lazy" />
                        </picture>
                        <p>BlogJob!® Opinión de boca en boca</p>
                    </div>
                </div> */}
            </Element>
        )
    }
}

export default Experience
