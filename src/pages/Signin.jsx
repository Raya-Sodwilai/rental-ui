import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Form, Col, Row, Button } from "react-bootstrap";

export default function Signin(props) {
  const [firstNameReg, setFirstNameReq] = useState("");
  const [lastNameReg, setLastNameReq] = useState("");
  const [emailReg, setEmailReq] = useState("");
  const [passwordReg, setPasswordReq] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setLoggedUser} = props;
  let history = useHistory();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      firstName: firstNameReg,
      lastName: lastNameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message){
        setLoggedUser(response.data.message);
      } else {
        setLoggedUser(response.data[0]);
        history.push('/')
      }
    });
  };

  return (
    <div className="Signin">
      <div className="create-account">
      <h2 className="header">Create Account</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" onChange={(e) => {setFirstNameReq(e.target.value)}} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" onChange={(e) => {setLastNameReq(e.target.value)}} />
             </Form.Group>
          </Row>
  
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Ex.johndoe@luxury.com" onChange={(e) => {setEmailReq(e.target.value)}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" onChange={(e) => {setPasswordReq(e.target.value)}} />
          </Form.Group>

          <div className="text-center">
            <Button className="butn" onClick={register}> Create </Button>
          </div>
        </Form>
      </div>

      <div className="login">
        <h2 className="header">Login</h2>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Ex.johndoe@luxury.com" onChange={(e) => {setEmail(e.target.value)}} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password"  onChange={(e) => {setPassword(e.target.value)}} />
              </Col>
            </Form.Group>

            <div className="text-center">
              <Button className="butn" onClick={login}> Login </Button>
            </div>
          </Form>
      </div>
    </div>
  );
}