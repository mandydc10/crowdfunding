//Not finished / won't work as backend isn't set up properly??

import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function CreateUserForm() {
    const [, setLoggedIn] = useOutletContext();

    // State
    const [newUserData, setNewUserData] = useState({
        username: "",
        password: "",
    });

    //Hooks
    const navigate = useNavigate();

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;

        setNewUserData((prevNewUserData) => ({
            ...prevNewUserData,
            [id]: value,
        }));
    }

    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUserData),
            }
        );
        return response.json();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newUserData.username && newUserData.password && newUserData.email) {
            const { token } = await postData();
            if (token != undefined) {
                window.localStorage.setItem("token", token);
                setLoggedIn(true);
                navigate("/");
            } else {
                setLoggedIn(false);
            }
        }
    };
    return (
        <div className="form-container">
            <form >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        // onChange={handleChange}
                        placeholder="Enter username"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        // onChange={handleChange}
                        placeholder="youremail@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        // onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn">
                    Sign up!
                </button>
            </form>
        </div>
    );
}

export default CreateUserForm;