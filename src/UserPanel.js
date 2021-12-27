import React from "react";
import "./UserPanel.css";
import UserDashboard from './components/user/UserDashboard';
import Login from './components/login/Login';
import useToken from './components/hook/useToken';

function UserPanel() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <UserDashboard/>
    </div>
  );
};

export default UserPanel;
