import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProjectPage.css';

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

    // convert ISO date to desired format
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };

    const date = new Date(project.date_created).toLocaleDateString(undefined, options);

    return (
        <div id="project-page" className="page-container">
            <h2>{project.title}</h2>
            {/* {loggedIn && <div className="edit-delete-btns">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>} */}
            <h3>{`Date created: ${date}`}</h3>
            <h3>{`Project Status: ${project.is_open}`}</h3>
            <a href="" className="btn" id="donate-btn">Donate!</a>
            <p>{project.description}</p>
            <img src={project.image} alt="" />
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            ${pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;