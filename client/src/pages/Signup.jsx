import Logo from '../assets/logo.svg';
import SignupForm from '../components/SignupForm';

export default function Signup(props) {
    return (
        <>
            <div className="signup-main-container">
                <header className="signup-header">
                    <div className="signup-logo-container">
                        <img className="signup-logo" src={Logo}></img>
                    </div>
                    <div className="signup-header-title">
                        <h1>Create an<br />account</h1>
                    </div>
                    <div className="signup-header-subtext">
                        <p>Enter your information</p>
                    </div>
                </header>
                <SignupForm />
            </div>
        </>
    )
}