import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="project-details-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="modal-links">
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-icon"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
