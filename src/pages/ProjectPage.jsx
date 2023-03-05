import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PledgeForm from "../components/PledgeForm/PledgeForm";
import './ProjectPage.css';
// import datepicker from 'react-datepicker';

function ProjectPage() {
    // Set state
    const [project, setProject] = useState({ pledges: [] });
    // const [user, setUser] = useState();

    // Hooks
    const { id } = useParams();

    const getUser = async (id) => {
        const userList = await fetch(`${import.meta.env.VITE_API_URL
            }users/`);

        // const matchUserList = await userList.map(match_id(id) => )

        // .json();
        // console.log(parsedUserList);
    }

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

    getUser();

    return (
        <div id="project-page" className="page-container">
            <h2>{project.title}</h2>
            <h3>Date created: {date}</h3>
            <h3>{`Project Status: ${project.is_open}`}</h3>
            <a href="" className="btn" id="donate-btn">Donate!</a>
            <p>{project.description}</p>
            <div className="pledge-container">
                <h2>Donate today!</h2>
                <PledgeForm project={project} />
            </div>
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