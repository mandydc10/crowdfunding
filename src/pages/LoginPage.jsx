// Components
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <div className="page-container">
            <h1>Sign In</h1>
            <LoginForm />
            <p>New to Communitarian? <a href="/signup">Create an account here!</a></p>
        </div>
    )
}

export default LoginPage;