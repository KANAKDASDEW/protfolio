import React from "react";
import "./Skill.css"
const Skill = (props) => {
  const { icon, taitle, skills } = props;
  return (
    <div className="col-10 skill-container mx-auto">
      <h3 className="d-inline">
        {" "}
        <span className="icon-color">{icon} &nbsp; </span>
        {taitle}
      </h3>
      <div className="set-skill-container">
        {skills && skills !== "work" ? (
          <>
            {skills.map((skill) => (
              <>
              
                  <span className="skill"> {skill}</span>
            
              </>
            ))}
          </>
        ) : (
          <><div className="education-container p-2">
          <div className="mt-3">
            <h5>Computer Science and Engineering </h5>
            <h6>University of Information Technology and Science</h6>
            <p>
              CGPA: 3.75
            </p>
            <p>
              Passing Year: 2022
            </p>
          </div>
          <div className="mt-4">
            <h5>HSC</h5>
            <h6>Sitakunda Degree College.</h6>
            <h5>SSC</h5>
            <h6>Jafar Nagar Aparnacharan High School. </h6>
          </div>
          </div>
            
          </>
        )}
       
      </div>

    
    </div>
  );
};

export default Skill;
