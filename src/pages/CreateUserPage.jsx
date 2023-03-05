// Components
import CreateUserForm from "../components/CreateUserForm/CreateUserForm";

function CreateUser() {
    return (
        <div className="page-container">
            <h1>Sign Up!</h1>
            <CreateUserForm />
            <p>Already have an account? <a href="/login">Log in here!</a></p>
        </div>
    )
}

export default CreateUser;