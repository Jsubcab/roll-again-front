import React from "react";
import "../../styles/UserPanel.css";
import Login from '../login/Login';
import useToken from '../hook/useToken';

function UserPanel() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <h2>Dashboard</h2>
    </div>
  );
};

export default UserPanel;
