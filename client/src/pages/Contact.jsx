import Logo from '../assets/logo.svg';
import ContactForm from '../components/ContactForm';

export default function Contact(props) {
    return (
        <>
            <div className="login-main-container">
                <header className="login-header">
                    <div className="login-logo-container">
                        <img className="login-logo" src={Logo}></img>
                    </div>
                    <div className="login-header-title">
                        <h1>Send a message!</h1>
                    </div>
                </header>
                <ContactForm />
            </div>
        </>
    )
}