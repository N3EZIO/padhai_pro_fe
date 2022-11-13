//make a register page using bootstrap and react

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  // const baseUrl = 'http://localhost:8000/'
  const baseUrl = "https://wyc8ch.deta.dev/";

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(baseUrl + "/api/users/register", {
        name: name,
        email: email,
        password: password,
        password2: password2,
      });
      if (res.data.success) {
        window.location.href = "/login";
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleClick}>
            <Form.Group id="name" onChange={(e) => setName(e.target.value)}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" required />
            </Form.Group>
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
            <Form.Group
              id="password-confirm"
              onChange={(e) => setPassword2(e.target.value)}
            >
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

// Path: src\components\NewCard\CardModal.js
// Compare this snippet from src\components\NewCard\CardModal.js:
// import Form from 'react-bootstrap/Form
