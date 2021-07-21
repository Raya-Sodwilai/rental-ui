import React, { Component } from 'react';

export class Signin extends Component {
  render() {
    return (
      <div className="Signin">
        <div className="create-account">
          <h2>Create Account</h2>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <button> Create </button>
        </div>
        <div className="login">
          <h2>Login</h2>
          <input type="text" placeholder="Username..." />
          <input type="password" placeholder="Password..." />
          <button> Login </button>
        </div>
      </div>
    );
  }
}