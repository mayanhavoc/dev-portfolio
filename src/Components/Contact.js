import{ init } from 'emailjs-com';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
init("user_D0piwkUGGDTNSJ3HF96uD");

export const Contact = () => {
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_D0piwkUGGDTNSJ3HF96uD";
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Please fill out the form and write a short description of your project. I'll get back to you assoon     as possible.</p>
            </div>
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>  
                    <div className="row">
                        <div className="col-md-6 col-xs-12 d-flex flex-column justify-content-center">
                            <input
                            id="name" 
                            type="text" 
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            />
                            <input 
                            id="phone"
                            type="text" 
                            className="form-control"
                            placeholder="Phone number"
                            name="phone"
                            />
                            <input 
                            id="email"
                            type="email" 
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            />
                            <input 
                            id="subject"
                            type="text" 
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            />
                        </div>
                        <div className="col-md-6 col-xs-12 d-flex flex-column">
                            <div>
                                <textarea 
                                id="description"
                                name="description"
                                type="text"
                                className="form-control"
                                rows="8"
                                ></textarea>
                            </div>
                        </div>
                        <div className="container p-0 d-flex px-2 justify-content-end">
                            <button className="btn contact-btn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>  
            </div>              
        </div>
        )
    }

    export default Contact;