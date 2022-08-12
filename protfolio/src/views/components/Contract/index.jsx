import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactTypingEffect from 'react-typing-effect';

import "../css/style.css";
import "../css/styles.css";
import "../css/bootstrap.min.css";
import "../css/slick.css";


const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <section class="Contacr_part py_20" ID="Contact">
                <div class="container ">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 text-center space">
                            <div class="servic_cont">
                                <h2> Contact <span style={{ color:'#20c997'}}> With me </span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-12 text-center">
                            <div class="paragraph py_20">
                                <p>
                                    I am here to answer any enquiries or
                                    questions you have about me. Reach
                                    out to me and I’ll respond as soon as I
                                    can. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <br />
                        <div class="col-sm-6 col-md-6 mt_80">
                            <div class="icon">
                                <div class="email">
                                    <i style={{ color:'green'}} class="bi bi-telephone-fill"></i>
                                    <Link style={{ color:'white'}}>01863254004</Link>
                                </div>
                                <div class="email">
                                    <i style={{ color:'#4285F4'}} class="bi bi-envelope-fill"></i>
                                    <Link style={{ color:'white'}}>kanakdas231@gmail.com</Link>
                                </div>
                                <div class="email">
                                    <i style={{ color:'red'}} class="bi bi-geo-alt-fill"></i>
                                    <p>
                                        Ka 62/1, Shahjadpur, Gulshan - 2, Dhaka
                                        - 1212, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 last">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                                id="Form"
                                method=""
                                action=""
                            >   <span className="ReactTypingEffect">
                                  <ReactTypingEffect text={["Get in touch"]} />
                                  </span>
                                <div class="row mt_70">
                              
                                    <div class="col-12 mb-2">
                                        <input
                                            name="name"
                                            onChange={handleChange}
                                            value={inputs.name}
                                            type="text"
                                            id=""
                                            placeholder="Your name*"
                                        />
                                    </div>

                                    <div class="col-12 col-md-6 mb-2">
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={inputs.email}
                                            placeholder="Your email*"
                                        />
                                    </div>

                                    <div class="col-12 col-md-6 mb-2">
                                        <input
                                            name="phone"
                                            onChange={handleChange}
                                            value={inputs.phone}
                                            type="phone"
                                            id=""
                                            placeholder="Phone  number*"
                                        />

                                        <label
                                            id="phone-error"
                                            class="name"
                                            for="phone"
                                        ></label>
                                    </div>

                                    <div class="col-12 mb-2">
                                        <textarea
                                            onChange={handleChange}
                                            value={inputs.message}
                                            name="message"
                                            id=""
                                            placeholder="Message*"
                                        ></textarea>
                                    </div>

                                    <div class="col-12 mb-2">
                                    <button type="submit" class="btn btn-success">Submit</button>
                                        <br />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;