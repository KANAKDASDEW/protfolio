import React from "react";

import "./Intro.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCode, faFileDownload, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";



const Intro = () => {
  const history = useHistory();


  return (
    <div id="my-background" className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="top-container">
    
          <div className="introContant">
            <p className="hellow">Hello, I&apos;m</p>
            <h1 className="typewriter">Kanak Das</h1>
            <ul>
            <FontAwesomeIcon icon= {faCode} />
           

              <li>
                <ReactTypingEffect text={["Web Developer", "React Developer"]} />
              </li>

              <FontAwesomeIcon icon={faLaptopCode} />
              <li>Programmer </li>
            </ul>
            <div className="intro-text">
              <p>
                I love programming.I am familiar with React. My main focus is
                coding the website mobile-friendly, SEO-friendly, browser compatible, and the maximum optimized way so that it performs
                well.I assure that I will give my best and work to my full potential so that I can contribute as much as I can towards the growth and welfare of the company.
              </p>
            </div>

            <div className="btnContainer">
              <button onClick={() => history.push("/about")} className="btn btn-outline-success" type="button">
                About Me
              </button>
              <a rel="noReferrer" href="https://drive.google.com/file/d/1jubZ-UAl-1pQ2maK9odWDZ2ZEhPKcV-l/view" target="_blank">
                <button className="btn btn-success " type="button">
                  <FontAwesomeIcon icon={faFileDownload} /> Resume
                </button>
              </a>
            </div>
          </div>
       

        <div className="intro-img">
    
            <img src="https://i.ibb.co/0BJfy8T/a.png" alt="background Img " srcset="" />
      
        </div>
      </div>
    </div>
  );
};

export default Intro;