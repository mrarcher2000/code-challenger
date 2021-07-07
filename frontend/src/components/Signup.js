import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form } from "semantic-ui-react";
import Auth from "../utils/auth";
//import { ADD_USER } from "../utils/mutations";
import gql from "graphql-tag";


function Signup(props) {

  const context = useContext(Auth);


/*

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

*/

  /*

  const { handleChange, handleFormSubmit, values } = useState(addUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  */
  

  const [formState, setFormState] = useState({username:'', email:'', password:'', confirmPassword:''});
  const [addUser, {error}] = useMutation(ADD_USER);

  const handleChange = event => {
    const { name, value } = event.target;

    
    setFormState({
      ...formState, 
      [name]: value
    });
  };



  const handleFormSubmit = async event => {
    const { name, value } = event.target;

    try {   
      const { data } = await addUser ({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch(e) {
      console.error(e);
    }
      
      // clear form values
      setFormState({
        email: '',
        password: ''
      });
    };
   

  

  /*function registerUser() {
    addUser();
  }*/

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
