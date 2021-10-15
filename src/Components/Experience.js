import React, { Component } from 'react';
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
                            <iframe
                            height="150"
                            width="300"
                            src="https://www.youtube.com/embed/NN4U6OBAYMc"></iframe>
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
                            <iframe
                            height="150"
                            width="300"
                            src="https://www.youtube.com/embed/fFx0gZ9ZnbM"></iframe>
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
                            <iframe 
                            height="150"
                            width="300"
                            src="https://www.youtube.com/embed/YhRCShVE4eA"></iframe>
                            <p>Flying hot air ballons in Guatemala was extremely challening and involved all sorts of responsibilities. We spent months planning and doing risk assessments to make sure that every passenger was safe, we worked with aeronautical authorities to develop regulation to be able to use the air space, among many, many other obstacles we had to sort through in order to provide this service. It was so much fun.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3 className="year">2012-2016</h3>
                            <h3 class="cme-header block-heading">CME</h3>
                            <span>Program Director</span>
                            <p>In 2012 I founded a startup incubator in my home town of Guatemala</p>
                            <iframe 
                            height="150"
                            width="300"
                            src="https://www.youtube.com/embed/CLEZCx5qtYc">
                            </iframe>
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
                            <iframe 
                            height="150"
                            width="300"
                            src="https://www.youtube.com/embed/9OpcYd4ysS4"></iframe>
                            <p>BlogJob!® Opinión de boca en boca</p>
                        </div>
                    </div>
                </div>
                    {/* <section>
                    <div class="d-inline-flex my-4">
                        <img class="mx-1" src="https://imgr.search.brave.com/TrLae7CP_05ypk30whohlRiuhLaaD7vORNg9VlS-9AE/fit/900/900/ce/1/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd2VuYk5R/VEJCbXpDV2Vtb1Fu/aU9yNUpSVWRnOUg1/UlE2U1JRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v" width="50px" alt="CME logo" />
                        <h3 class="cme-header">CME</h3>
                    </div>
                    <div className="flex">
                        <h4>Program Director</h4>
                        <p class="my-2">In 2012 I founded a startup incubator in my home town of Guatemala</p>
                        <iframe 
                        height="150"
                        width="300"
                        src="https://www.youtube.com/embed/CLEZCx5qtYc">
                        </iframe>
                        <p class="mt-4">Working with small businesses and entrepreneurs in Guatemala made me realize just how important technology   is    for business. Over the course of 4 years, I helped entrepreneurs implement technology into their    businesses to     build competitive advantages with very few resources.</p>
                    </div>
                </section>
                <section>
                    <div className="d-inline-flex my-4">
                        <img class="mx-1" src="./images/aerostatika_logo.png" 
                        width="50px"
                        alt="Aerostatika logo" />
                        <h3 class="aerostatika-header">Aerostatika</h3>
                    </div>
                    <div className="flex">
                        <h4>Operations Coordinator</h4>
                        <p class="my-2">I was in charge of operations for the first ever hot air ballon company in Guatemala.</p>
                        <iframe 
                        height="150"
                        width="300"
                        src="https://www.youtube.com/embed/YhRCShVE4eA"></iframe>
                        <p class="mt-4">Flying hot air ballons in Guatemala was extremely challening and involved all sorts of responsibilities.     We spent months planning and doing risk assessments to make sure that every passenger was safe, we worked   with aeronautical authorities to develop regulation to be able to use the air space, among many, many other   obstacles we had to sort through in order to provide this service. It was so much fun.</p>
                    </div>
                </section>
                <section>
                    <div className="d-inline-flex my-4">
                        <img class="mx-1" src="./images/bacilongas_logo.png" width="300px" height="150px" alt="Bacilongas logo" />
                    </div>
                    <div className="flex">
                        <h4>Co-founder</h4>
                        <p class="my-2 align-self-center">Bacilongas is an Etsy style platform for Latinamerica.</p>
                        <iframe
                        height="150"
                        width="300"
                        src="https://www.youtube.com/embed/fFx0gZ9ZnbM"></iframe>
                        <p class="my-4">Bacilongas was an incredible experience. We participated in a bootcamp program which allowed us to find  our "persona" and develop a marketing strategy. I learned about communication and strategy alignment in this project.</p>
                    </div>
                </section>
                <section>
                    <div className="d-inline-flex my-4">
                        <img src="./images/espacios_extremos.png" width="200px" height="100px" alt="Logo espacios extremos" />
                        <h3 className="h5">Espacios Extremos</h3>
                    </div>
                    <div className="flex">
                        <h4>Operations Director</h4>
                        <p className="my-2 align-self-center">Espacios Extremos was as initiative of Guatemala City's local government to promote safe spaces for  marginalized youths to practice urban sports.</p>
                        <iframe
                        height="150"
                        width="300"
                        src="https://www.youtube.com/embed/NN4U6OBAYMc"></iframe>
                        <p className="mt-4">Negotiating the relationship between the local government and communities like skaters was a challenge.</p>
                    </div>
                </section>
                <section>
                    <div className="d-flex flex-column my-4">
                        <img src="./images/blogjob_logo.png" width="300px" height="150px" alt="logo Blogjob" />
                    </div>
                    <div className="flex">
                        <h4>Creative Director</h4>
                        <p className="my-2 align-self-center">Blogjob was a opinion blog platform.</p>
                        <iframe 
                        height="150"
                        width="300"
                        src="https://www.youtube.com/embed/9OpcYd4ysS4"></iframe>
                        <p className="mt-4">Blogjob! Opinión de boca en boca</p>
                    </div>
                </section> */}
                
            </div>
        )
    }
}

export default Experience
