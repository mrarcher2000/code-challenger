import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { loginUser } from "../utils/API";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [userLogin, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  }

  return (
    <>
      <Form onSubmit={(e) => {
          this.handleFormSubmit(event);
      }}
      >
          <Form.field onChange={handleInputChange}>
              <label>Email</label>
              <input placeholder='Email Address'></input>
          </Form.field>
          <Form.field>
              <label>Password</label>
              <input placeholder='Password'></input>
          </Form.field>
          <Button type='submit'>Login</Button>
      </Form>
    </>
  );
};

export default LoginForm;