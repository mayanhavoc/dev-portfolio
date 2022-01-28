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
        <div className="Contact">
            <h2 className="section-heading highlight sub-heading py-5">Contact me</h2>
            <div className="text-center">
                <p>Please fill out the form. I'll get back to you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form className="row d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>  
                   
                        <div className="col-lg-4 col-md-4 col-sm">
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
                        <div className="col-lg-4 col-md-6 col-sm">
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
                            <button 
                            className="btn contact-btn brand"
                            data-sitekey="reCAPTCHA_site_key"
                            data-callback ="onSubmit"
                            data-action="submit" 
                            id="contact-submit" 
                            type="submit">
                            Submit</button>
                        </div>
                </form>  
            </div>              
        </div>
        )
    }

    export default Contact;