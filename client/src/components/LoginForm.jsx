import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
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
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={isSubmitting || !(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;