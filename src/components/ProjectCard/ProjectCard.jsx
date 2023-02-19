import { Link } from "react-router-dom";
import { useState } from 'react';

// CSS
import "./ProjectCard.css";

function ProjectCard(props) {

    const { projectData } = props;
    const [project, setProject] = useState({ pledges: [] });

    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>
                <p>{projectData.description}</p>
            </Link>
        </div >
    );
}

export default ProjectCard;