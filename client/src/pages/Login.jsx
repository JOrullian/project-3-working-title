import Logo from '../assets/logo.svg';
import LoginForm from '../components/LoginForm';

export default function Login(props) {
    return (
        <>
            <div className="login-main-container">
                <header className="login-header">
                    <div className="login-logo-container">
                        <img className="login-logo" src={Logo}></img>
                    </div>
                    <div className="login-header-title">
                        <h1>Sign in to your<br/>account</h1>
                    </div>
                    <div className="login-header-subtext">
                        <p>Enter your email and password to log in</p>
                    </div>
                </header>
                <LoginForm />
            </div>
        </>
    )
}