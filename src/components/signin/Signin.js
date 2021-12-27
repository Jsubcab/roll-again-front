import React from "react";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../../styles/Login.css";

class Signin extends React.Component {
  state = {
    username: "",
    password: "",
    password2: "",
    email: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, password2, email } = this.state;
    if (password !== password2) {
      alert("Passwords do not match, please enter again your password");
    } else {
      axios("http://localhost:8080/api/users/signup", {
        method: "POST",
        data: {
            username,
          password,
          email
        }
      })
        .then((response) => {
          this.setState((state) => ({
            loggedIn: !state.loggedIn
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { username, email, password, password2 } = this.state;

    return (
      <div className="wrapper">
        <div className="login-base">
            <div className="login-wrapper">
            <div className="fadeIn first">
            <h3>Sign in</h3>
          </div>
        <Form onSubmit={this.handleSubmit}>
 
            <input
            className="fadeIn first"
              value={username}
              onChange={this.handleChange}
              name="username"
              placeholder="Username"
              type="text"
              required
            />

            <input
            className="fadeIn second"
              value={email}
              onChange={this.handleChange}
              name="email"
              placeholder="Email"
              type="text"
              required
            />

            <input
            className="fadeIn third"
              value={password}
              onChange={this.handleChange}
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            <input
            className="fadeIn fourth"
              value={password2}
              onChange={this.handleChange}
              name="password2"
              placeholder="Confirm Password"
              type="password"
              required
            />

          <input type="submit" className="button-login fadeIn" value="Register"/>
        </Form>
        </div>
        </div>
      </div>
    );
  }
}

export default Signin;
