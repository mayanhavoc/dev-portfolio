import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import '../App.css';

function Projectss() {
  return (
    <Element className='Projects'>
        <section id="Projects" className="bg-dark-red">
            <div className="d-flex flex-column align-items-center pb-5">
                <h1 className="title-text txt-light-yellow mt-5 pt-5 text-center">
                    Projects
                </h1>
            </div>
            <div className="h-100 container container-sm text-center">
                <div className="row">
                    <div className="container col-sm-4">
                        <h1 class="title-text">Project No.1</h1>
                        <img src="https://knetic.org.uk/wp-content/uploads/2020/07/Photo-Placeholder-300x200.png" alt="placeholder image" />
                        <div className="container text-start py-2">
                            <h4>Project details</h4>
                            <ul>
                                <li>
                                    Description:
                                </li>
                                <li>
                                    Tech:
                                </li>
                                <li>
                                    Links
                                    <ul>
                                        <li>
                                            <Link>Github repository</Link>
                                        </li>
                                        <li>
                                            <Link>Website</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container col-sm-4">
                    <h1 class="title-text">Project No.2</h1>
                        <img src="https://knetic.org.uk/wp-content/uploads/2020/07/Photo-Placeholder-300x200.png" alt="placeholder image" />
                        <div className="container text-start py-2">
                            <h4>Project details</h4>
                            <ul>
                                <li>
                                    Description:
                                </li>
                                <li>
                                    Tech:
                                </li>
                                <li>
                                    Links
                                    <ul>
                                        <li>
                                            <Link>Github repository</Link>
                                        </li>
                                        <li>
                                            <Link>Website</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container col-sm-4">
                    <h1 class="title-text">Project No.3</h1>
                        <img src="https://knetic.org.uk/wp-content/uploads/2020/07/Photo-Placeholder-300x200.png" alt="placeholder image" />
                        <div className="container text-start py-2">
                            <h4>Project details</h4>
                            <ul>
                                <li>
                                    Description:
                                </li>
                                <li>
                                    Tech:
                                </li>
                                <li>
                                    Links
                                    <ul>
                                        <li>
                                            <Link>Github repository</Link>
                                        </li>
                                        <li>
                                            <Link>Website</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Element>
  )
}

export default Projectss