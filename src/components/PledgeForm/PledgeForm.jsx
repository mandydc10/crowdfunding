import { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
// Form styling globally

function PledgeForm(props) {
    const projectTitle = props.title;
    console.log(projectTitle);
    const id = props.id;

    const [, setLoggedIn] = useOutletContext();

    // const id = useParams();

    // State
    const [pledges, setPledges] = useState({
        project: id,
        amount: null,
        comment: "",
        anonymous: false,
    });

    //Hooks
    const navigate = useNavigate();



    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target; //project ID

        setPledges((prevPledges) => ({
            ...prevPledges,
            [id]: value,
        }));
    }

    const authToken = window.localStorage.getItem("token");

    const postData = async () => {
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
        return response.json();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (authToken) {
            const postPledges = await postData();
            navigate("/");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    {projectTitle}
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="text"
                        id="amount"
                        onChange={handleChange}
                        placeholder="Enter a whole dollar amount"
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <input
                        type="text"
                        id="comment"
                        onChange={handleChange}
                        placeholder="Comment"
                    />
                </div>
                <div>
                    <label htmlFor="anonymous">Check this box if you would you like to donate anonymously:</label>
                    <input
                        type="checkbox"
                        id="anonymous"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn">
                    Confirm My Donation!
                </button>
            </form>
        </div>
    );
}

export default PledgeForm;