//make a login page using bootstrap and react

import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  //make onclick function to login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const baseUrl = 'http://localhost:8000/'
  const baseUrl = "https://wyc8ch.deta.dev/";

  const handleLogin = (event) => {
    event.preventDefault();
    //make a post request to the backend
    axios
      .post(baseUrl + "api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        //if the user is authenticated, redirect to the home page
        if (res.data.success) {
          window.location.href = "/";
          sessionStorage.setItem("jwt", res.data.token);
        }
        //if the user is not authenticated, display an error message
        else {
          // document.getElementById('error').innerHTML = "Invalid email or password"
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group id="email" onChange={(e) => setEmail(e.target.value)}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
    </>
  );
}
