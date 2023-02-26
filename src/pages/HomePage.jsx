import { useState, useEffect } from "react";
import './HomePage.css';

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";


function HomePage() {
    // const { handleProjectCreate } = props
    //state
    const [projectList, setProjectList] = useState([]);

    // Effects
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    function handleProjectCreate() {
        const newProject = {
            id: 1000,
            title: "",
            description: "",
            goal: "",
            img: "",
            is_open: true,
            date_created: new Date(),
            owner: "",
        };

        setProjectList(...projectList, newProject);
    }

    return (
        <div id="project-list" className="page-container">
            <h1>Home Page</h1>
            <p>Be the change you want to see.</p>
            <button
                className="btn create-project-btn"
                onClick={handleProjectCreate}
            >
                Create a Project!
            </button>
            {projectList.map((project, key) => {
                return (
                    <ProjectCard
                        key={key}
                        projectData={project}
                        handleProjectCreate={handleProjectCreate}
                    />
                );
            })}
        </div>
    );
}

export default HomePage;