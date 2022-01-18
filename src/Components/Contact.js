import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import './Contact.css'
init(process.env.REACT_APP_EMAILJS_USERID);


const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, formState: {errors}  } = useForm();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USERID;

    const onSubmit = (data, r) => {
      sendEmail(
        serviceID,
        templateID,
        {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description,
        },
        userID
        )
        r.target.reset();
    }
    const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
          setSuccessMessage("Contact request sent. I'll get back to you ASAP.")
      }).catch(err => console.error(`Something went wrong ${err}`));
    };

    return (
        <div className="Contact component-wrapper d-flex flex-column justify-content-center align-items-center">
            <h2 className="section-heading highlight">Contact me</h2>
            <div className="text-center">
                <p>Please fill out the form and write a short description of your project. I'll get back to you assoon     as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>  
                    <div className="row">
                        <div className="col-md-6 col-xs-12 d-flex flex-column justify-content-center">
                            <input
                            id="name" 
                            type="text" 
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            {
                                ...register("name", {
                                    required: true,
                                    maxLength: {
                                        value: 20,
                                    }
                                })
                            }
                            />
                            <span className="error-message">
                            {errors.name?.type === 'required' && "This field is required."}
                            </span>
                            <input 
                            id="phone"
                            type="text" 
                            className="form-control"
                            placeholder="Phone number"
                            name="phone"
                            {
                                ...register("phone", {
                                    required: true,
                                    maxLength: {
                                        value: 20,
                                    }
                                })
                            }
                            />
                            <span className="error-message">
                            {errors.phone?.type === 'required' && "This field is required."}
                            </span>
                            <input 
                            id="email"
                            type="email" 
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            {
                                ...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid Email"
                                      }
                                })
                            }
                            />
                            <span className="error-message">
                            {errors.email?.type === 'required' && "This field is required."}
                            </span>
                            <input 
                            id="subject"
                            type="text" 
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            {
                                ...register("subject", {
                                    required: true,
                                    maxLength: {
                                        value: 20,
                                    }
                                })
                            }
                            />
                            <span className="error-message">
                            {errors.subject?.type === 'required' && "This field is required."}
                        </span>
                        </div>
                        <div className="col-md-6 col-xs-12 d-flex flex-column">
                            <div>
                                <textarea 
                                id="description"
                                name="description"
                                type="text"
                                className="form-control"
                                rows="8"
                                {
                                    ...register("description", {
                                        required: true,
                                        maxLength: {
                                            value: 20,
                                        }
                                    })
                                }
                                ></textarea>
                                <span className="error-message">
                                {errors.description?.type === 'required' && "This field is required."}
                                </span>
                            </div>
                        </div>
                        <div className="container p-0 d-flex px-2 justify-content-end">
                            <button 
                            className="btn contact-btn g-recaptcha"
                            data-sitekey="reCAPTCHA_site_key"
                            data-callback = "onSubmit"
                            data-action="submit" 
                            id="contact-submit" 
                            type="submit"
                            
                            >
                            Submit</button>
                        </div>
                    </div>
                </form>  
            </div>              
        </div>
        )
    }

    export default Contact;