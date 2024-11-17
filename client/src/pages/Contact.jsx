import ContactForm from '../components/ContactForm';

export default function Contact(props) {
    return (
        <>
            <div className="contact-main-container">
                <header className="contact-header">
                    <div className="contact-header-title">
                        <h1>Send a message!</h1>
                    </div>
                </header>
                <ContactForm />
            </div>
        </>
    )
}