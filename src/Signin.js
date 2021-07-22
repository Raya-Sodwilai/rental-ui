import React, { useEffect, useState } from 'react';
import Axios from "axios";

export default function Signin() {
  const [firstNameReg, setFirstNameReq] = useState("");
  const [lastNameReg, setLastNameReq] = useState("");
  const [emailReg, setEmailReq] = useState("");
  const [passwordReg, setPasswordReq] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

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
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedId == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="Signin">
      <div className="create-account">
        <h2>Create Account</h2>
        <label>First Name</label>
        <input 
          type="text" 
          onChange={(e) => {
            setFirstNameReq(e.target.value);
          }} 
        />
        <label>Last Name</label>
        <input 
          type="text" 
          onChange={(e) => {
            setLastNameReq(e.target.value);
          }} 
        />
        <label>Email</label>
        <input 
          type="text" 
          onChange={(e) => {
            setEmailReq(e.target.value);
          }} 
        />
        <label>Password</label>
        <input 
          type="text"
          onChange={(e) => {
            setPasswordReq(e.target.value);
          }} 
        />
        <button onClick={register}> Create </button>
      </div>

      <div className="login">
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder="Email..." 
          onChange={(e) => {
            setEmail(e.target.value);
          }} 
        />
        <input 
          type="password" 
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }} 
        />
        <button onClick={login}> Login </button>
      </div>

      <h2>{loginStatus}</h2>
    </div>
  );
}