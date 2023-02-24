// Components
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <div className="page-container">
            <h2>Sign In</h2>
            <LoginForm />
            <p>New to Communitarian? <a href="/signup">Create an account here!</a></p>
        </div>
    )
}

export default LoginPage;