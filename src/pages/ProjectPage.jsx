import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProjectPage.css';
// import datepicker from 'react-datepicker';

function ProjectPage() {
    // Set state
    const [project, setProject] = useState({ pledges: [] });

    // Hooks
    const { id } = useParams();

    //Effects
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL
            }projects/${id}`).then((results) => {
                return results.json();
            })
            .then((data) => {
                setProject(data);
            });
    }, []);

    // trying to get date to work
    const date = project.date_created;

    return (
        <div id="project-page" className="page-container">
            <h2>{project.title}</h2>
            <h3>Date created: {date}</h3>
            <h3>{`Project Status: ${project.is_open}`}</h3>
            <a href="" className="btn" id="donate-btn">Donate!</a>
            <p>{project.description}</p>
            <img src={project.image} alt="" />
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            ${pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;