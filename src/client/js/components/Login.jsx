import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { throws } from 'assert';
import { resolve } from 'dns';

const Login = (props) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     username: '',
  //     password: '',
  //   };

  //   this.updateUsername = this.updateUsername.bind(this);
  //   this.updatePassword = this.updatePassword.bind(this);
  //   this.validateUser = this.validateUser.bind(this);
  // }

  // updateUsername(event) {
  //   this.setState({ username: event.target.value });
  // }

  // updatePassword(event) {
  //   this.setState({ password: event.target.value });
  // }

  // validateUser() {
  //   const { username, password } = this.state;
  //   const { updateLoggedInStatus } = this.props;
  //   fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then(response => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       this.props.updateLoggedInStatus(data.username, data.email);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // redirectToSignup() {

  // }


  const { updateUsername, updatePassword, username, password, validateUser, redirectToSignup } = props;
  const userInfo = {
    username,
    password,
  };
  console.log('login ', userInfo)

  if (props.isLoggedIn) {
    return <Redirect to="/" />;   // todo: recognize user identity
  }

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <p className="loginText">Username: </p>
      <input id="username" className="loginInput" type="text" onChange={updateUsername} />
      <p className="loginText">Password: </p>
      <input id="password" className="loginInput" type="password" onChange={updatePassword} />
      <br />
      <br />
      <button className="loginButton" onClick={() =>validateUser(userInfo)}>Login</button>
      <button className="loginButton" onClick={redirectToSignup}>Sign up</button>
    </div>
  );
}

export default Login;
