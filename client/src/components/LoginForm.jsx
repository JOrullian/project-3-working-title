import { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setValidated(true);

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      return;
    }

    setIsSubmitting(true);
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      if (data.login) {
        const { token, user } = data.login;
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
    });
  };

  return (
    <>
    {showAlert && <p className="alert alert-danger">Login failed. Please try again.</p>}
    <form id="login-form" className="login-form" onSubmit={handleFormSubmit} noValidate>
      <div className="login-input-line">
        <input
          className="login-input"
          id="login-email"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={userFormData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="login-input-line">
        <input
          className="login-input"
          id="login-password"
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleInputChange}
          value={userFormData.password}
        />
      </div>
      <div className="login-selections-container">
        <div className="remember-me-container">
          <input type="checkbox" id="remember-me" name="rememberMe" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
      </div>
      <button className="login-btn" id="login-btn" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Log In"}
      </button>
      <div className="login-signup-subtext">
        <p>
          Don't have an account?{" "}
          <a className="signup-link" href="/">
            Sign up
          </a>
        </p>
      </div>
    </form>
    </>
  );
};

export default LoginForm;
