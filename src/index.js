import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Navbar from './navbar/Navbar';
import Search from './Search';
import BaseLogin from './BaseLogin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <Router>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/login" component={BaseLogin} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
  );

