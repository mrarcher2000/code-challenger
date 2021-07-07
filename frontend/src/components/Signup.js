import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Button, Form } from "semantic-ui-react";
import { ADD_USER } from "../utils/mutations";
import gql from "graphql-tag";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormState({ ...values, [event.target.name]: event.target.value });
  };

  const [addUser, { loading }] = useMutation(ADD_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: values,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    addUser();
  };

  return (
    <div>
      <h1>Signup</h1>
      <Form onSubmit={handleFormSubmit} noValidate className={loading ? 'loading' : '' }>
        <Form.field>
          <input
            className="form-input"
            placeholder="Username"
            type="username"
            name="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </Form.field>
        <Form.field>
          <input
            className="form-input"
            placeholder="Email Address"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </Form.field>
        <Form.field>
          <input
            className="form-input"
            placeholder="Password"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </Form.field>

        <Form.field>
          <input
            className="form-input"
            placeholder="Confirm Password"
            name="confirmPassWord"
            type="password"
            id="password"
            value={formState.confirmPassword}
            onChange={handleChange}
          />
        </Form.field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}
export default Signup;
