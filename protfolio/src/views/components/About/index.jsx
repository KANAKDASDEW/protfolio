import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTypingEffect from "react-typing-effect";
import React from "react";
import imge from "../image/kanakdass.jpg"
// import resume from "../../Resourse/SULTANMAHMUD.pdf";
import { FaGraduationCap } from "react-icons/fa";
import { FcWorkflow } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { VscFileCode } from "react-icons/vsc";
import Skill from "../Skill";
import "./About.css";
const About = () => {
  const setSkills = [
    "HTML5",
    "CSS3",
    "SASS",
    "JavaScript",
    "React.Js",
    "Node.Js",
    "PHP",
    "MySql",
    "React-Bootstrap",
    "Metarial UI",
    "C/C++",
    "Git",
    "VS Code",
  ];
  const workWith = [
    "JavaScript",
    "React.Js",
    "Redux.Js",
    "Node.Js",
    "Express.Js",
    "Mongo DB",
  ];
  const taitle1 = "My Skills Set";
  const taitle2 = "I want to work with";
  const taitle3 = "Education";
  const taitle4 = "Work Experience";
  const icon1 = <GiSkills className="metarialui" />;
  const icon2 = <VscFileCode className="metarialui" />;
  const icon3 = <FaGraduationCap className="metarialui" />;
  const icon4 = <FaGraduationCap className="metarialui" />;

  const work = ``;
  const edu = ``;

  return (
    <div id="about-conatiner">
      <div className="container about-contant-conatiner">
        <div className="row">
          <div className="col-md-6 py-5 about-img-wrapper-left">
            <div className="about-img-container d-flex justify-content-center img ">
              <img
                src={imge}
                alt="profileImage"
                srcset=""
              />
            </div>
            <div className="about-contant">
              <h1>
                <span>I'M  <ReactTypingEffect text={["Kanak Das"]} /></span> &nbsp; 
              </h1>
              <p>
                JavaScript is the most popular programming language in the
                world, so it’s no wonder that JavaScript is one of the most
                sought-after skills in the web development industry today. I am
                a self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. I am familiar with new JavaScript
                technology. I Like to actively seek out new technologies and
                stay up-to-date on industry trends and advancements.
              </p>

              <a
                rel="noReferrer"
                href="https://drive.google.com/file/d/1jubZ-UAl-1pQ2maK9odWDZ2ZEhPKcV-l/view"
                target="_blank"
              >
                <button className="btn btn-outline-success " type="button">
                  <FontAwesomeIcon icon={faFileDownload} /> Resume
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <Skill icon={icon1} taitle={taitle1} skills={setSkills}></Skill>
              <Skill icon={icon2} taitle={taitle2} skills={workWith}></Skill>
              <Skill icon={icon3} taitle={taitle3} skills={false}></Skill>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
