import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Button, Form } from "semantic-ui-react";
import { ADD_USER } from "../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <Form onSubmit={handleFormSubmit}>
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
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default Signup;
