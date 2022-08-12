import React, { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";

import { workData } from "../Resourse";

import WorkCard from "../Work/Card";
import "./allwork.css";

const AllWork = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(workData);
  }, []);
  return (
    <div id="workCard">
      <div className="content-wrapper-allworks">
        <h2 className="text-center allworks-h2">
          My Recent <h2 className="project-taitle-shortName"> Projects </h2>
        </h2>

        <p className="text-center allworks-p">
          {" "}
          <ReactTypingEffect text={["Here my few projects I've worked on recently"]} />{" "}
        </p>
      </div>
      <div className="container">
        <div className="row">
          {projectData.map((x) => (
            <WorkCard key={x.id} data={x}></WorkCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWork;