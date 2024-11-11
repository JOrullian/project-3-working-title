import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      return;
    }

    setIsSubmitting(true);
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      if (data.addUser) {
        const { token, user } = data.addUser;
        Auth.login(token);
      }

      setShowAlert(false);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }

    setUserFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <>
      {showAlert && (
        <p className="alert alert-danger">
          Failed to create account. Please try again.
        </p>
      )}
      <form
        id="signup-form"
        className="signup-form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="signup-input-line">
          <input
            className="signup-input"
            id="signup-first-name"
            name="firstName"
            type="firstName"
            placeholder="First Name"
            required
            value={userFormData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="signup-input-line">
          <input
            className="signup-input"
            id="signup-last-name"
            name="lastName"
            type="lastName"
            placeholder="Last Name"
            required
            value={userFormData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="signup-input-line">
          <input
            className="signup-input"
            id="signup-email"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={userFormData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="signup-input-line">
          <input
            className="signup-input"
            id="signup-password"
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleInputChange}
            value={userFormData.password}
          />
        </div>
        <button className="signup-btn" id="signup-btn" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Create Account"}
        </button>
      </form>
    </>
  );
};

export default SignupForm;
