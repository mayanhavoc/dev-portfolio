import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import ArcadeButton from './ArcadeButton';
import '../App.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    render() {
        return (
            <Element className="/">
            <section id="Home" className="vh-100 bg-dark-blue">
              <div className="d-flex flex-column align-items-center my-3 pb-5">
                <h1 className="title-text txt-light-yellow mt-5 pt-5 text-center">Full Stack Developer</h1>
                <p className="paragraph-text txt-white fw-bolder">Roberto M</p>
                <Link 
                  activeClass="active"
                  href="#"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <ArcadeButton>
                    <h1 class='fw-bolder cta'>Contact</h1>
                  </ArcadeButton>
                </Link>
              </div>
            </section>
            </Element>
        )
    }
}

export default Home
