import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Button, Form } from "semantic-ui-react";
import Auth from "../utils/auth";
//import { ADD_USER } from "../utils/mutations";
import gql from "graphql-tag";

function Signup(props) {

  const context = useContext(Auth);


  const [addUser, { loading }] = useMutation(ADD_USER, {
    update(
      _,
      {
        data: { register: userData }
      }
    ) {
      context.login(userData);
      props.history.push('/');
    },
   
    variables: values
  });


  const { handleChange, handleFormSubmit, values } = useState(addUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  /*function registerUser() {
    addUser();
  }*/

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
            value={values.username}
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
            value={values.email}
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
            value={values.password}
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
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </Form.field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}
const ADD_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Signup;
