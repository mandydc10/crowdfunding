import { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
// Form styling globally

function PledgeForm() {
    const authToken = window.localStorage.getItem("token");
    const [loggedIn, setLoggedIn] = useOutletContext();

    const [pledges, setPledges] = useState({
        "project": null,
        "amount": null,
        "comment": "",
        "anonymous": false,
    })

    //Hooks
    const navigate = useNavigate();

    const { id } = useParams();

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;

        setPledges((prevPledges) => ({
            ...prevPledges,
            [id]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (loggedIn) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}pledges/`,
                    {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Token ${authToken}`,
                        },
                        body: JSON.stringify(pledges),
                    }
                );
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                location.reload();
            } catch (err) {
                console.error(err);
                alert(`Error: ${err.message}`);
            }
        } else {
            navigate(`/login`);
        }
    };

    return (
        <>
            {loggedIn ?
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="project">Choose a project:</label>
                            <select id="project" name="project">
                                {/* {project.title.map((projectTitle, key) => {
                                    return (
                                        <option key={key}>
                                            ${projectTitle.amount}
                                        </option>
                                    );
                                })} */}
                                <option value="volvo">Volvo</option>
                            </select>
                            <label htmlFor="amount">Amount:</label>
                            <input
                                type="number"
                                id="amount"
                                onChange={handleChange}
                                placeholder="Enter whole dollar amount"
                            />
                        </div>
                        <div>
                            <label htmlFor="comment">Comment:</label>
                            <input
                                type="text"
                                id="comment"
                                onChange={handleChange}
                                placeholder="Leave a message of support!"
                            />
                        </div>
                        <div>
                            <label htmlFor="anonymous">Check if you wish to remain anonymous:</label>
                            <input
                                type="checkbox"
                                id="anonymous"
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn">
                            Confirm Donation!
                        </button>
                    </form>
                </div>
                : (<p><span> <a href="/login">Login to</a></span> donate</p>)}
        </>
    );
}

export default PledgeForm;