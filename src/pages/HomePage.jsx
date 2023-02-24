import { useState, useEffect } from "react";
import './HomePage.css';

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";


function HomePage() {
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

    return (
        <div id="project-list" className="page-container">
            <h1>Home Page</h1>
            <p>Be the change you want to see.</p>
            {projectList.map((project, key) => {
                return <ProjectCard key={key} projectData={project} />;
            })}
        </div>
    );
}

export default HomePage;