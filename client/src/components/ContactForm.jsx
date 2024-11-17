import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "../assets/back-arrow.svg"

const ContactForm = () => {
  const navigate = useNavigate()

  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setContactFormData({
      firstName: "",
      email: "",
      message: "",
    });

    navigate(-1)
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-form-container">

          <form id="contact-form" onSubmit={handleFormSubmit}>
            <img
              className="contact-form-backarrow"
              src={BackArrow}
              alt="Back"
              onClick={() => navigate(-1)}
            />
            <div className="contact-body">
              <input
                id="contact-input-name" type="text" className="contact-input-name" placeholder="Enter your name"
                required
                onChange={handleInputChange}></input>
              <input
                id="contact-input-email" type="email" className="contact-input-email" placeholder="Enter your contact email"
                required
                onChange={handleInputChange}></input>
              <textarea
                name="contact-input-message" id="input-message" className="contact-input-message" placeholder="Enter your message..."
                onChange={handleInputChange}
                required>
              </textarea>
            </div>
            <footer className="contact-footer">
              <button id="contact-form-btn" className="contact-form-btn">Send message</button>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;