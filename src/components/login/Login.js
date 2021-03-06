import React, { useState } from 'react';
import '../../styles/Login.css';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      body: new URLSearchParams({
        'user': credentials.user,
        'password': credentials.password
      })
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [user, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          user,
          password
        });
        setToken(token);
      }

  return(
    <div className="wrapper">
      <div className="login-base">
        <div className="login-wrapper">
          <div className="fadeIn first">
            <h3>Login</h3>
          </div>
        <Form onSubmit={handleSubmit}>
            <input type="text" name="user" id="login" className="fadeIn second" placeholder="login" onChange={e => setUserName(e.target.value)}/>
            <input type="password" name="password" id="password" className="fadeIn third" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <input type="submit" className="fadeIn fourth" value="Log In"/>
            <Form.Text className="text-muted">
            Don't you have an account? <Link to='/signin'>Register here.</Link>
            </Form.Text>
        </Form>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }