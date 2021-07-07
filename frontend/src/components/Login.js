import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Form, Button } from "semantic-ui-react";
import Footer from './Footer'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState.email, formState.password);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
    } catch (e) {
      console.log(e);
    }
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <main>
      <h1>Login</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            className="form-input"
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            className="form-input"
            placeholder="Password"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
      <Footer />
    </main>
  );
};

export default Login;
