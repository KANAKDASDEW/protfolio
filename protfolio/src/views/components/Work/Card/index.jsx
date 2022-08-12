import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";


const WorkCard = (props) => {
  const { img, title, description, technology, gitLink, liveLink } = props.data;

  return (
    <>
     
        <div className="col-md-4 p-4">
          <Card className="card-container">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <div className="technology-useses">
              {technology.map((x) => (
                <span className="skill">{x}</span>
              ))}
            </div>
            <Card.Footer>
              <small className="icon-Container">
                <a rel="noReferrer" target="_blank" href={gitLink}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a rel="noReferrer" target="_blank" href={liveLink}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </small>
            </Card.Footer>
          </Card>
        </div>
     
    </>
  );
};

export default WorkCard;
