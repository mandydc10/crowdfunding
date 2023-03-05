import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import './ProjectPage.css';
import PledgeForm from "../components/PledgeForm/PledgeForm";

function ProjectPage() {
    // const pledgeForm = useRef();
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
            <h1>{project.title}</h1>
            {/* {loggedIn && <div className="edit-delete-btns">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>} */}
            <h3>{`Date created: ${date} Status: ${project.is_open}`}</h3>
            <h3></h3>
            <a className="btn" id="donate-btn">Donate!</a>
            <p>{project.description}</p>
            <img src={project.image} alt="" />
            <div className="pledge-container">
                <h2>Thank you to our Wonderful sponsors!</h2>
                <ul>
                    {project.pledges.map((pledgeData, key) => {
                        return (
                            <li key={key}>
                                ${pledgeData.amount} from {pledgeData.supporter}
                                <p>"{pledgeData.comment}"</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <h2>Donate to this project</h2>
            <PledgeForm />
            {/* href={pledgeForm} to go inside link element above
            <div ref={pledgeForm}>
                
            </div> */}
        </div>
    );
}

export default ProjectPage;