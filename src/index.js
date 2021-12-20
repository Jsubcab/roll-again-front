import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import NavbarWeb from './navbar/Navbar';
import Search from './Search';
import BaseLogin from './BaseLogin';

ReactDOM.render(
  <div>
    <NavbarWeb />
    <Search />
  </div>,
  document.getElementById('root')
  );

