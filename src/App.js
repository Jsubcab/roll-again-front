import React,  { useState, useEffect }  from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import UserPanel from './UserPanel';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';

function App(){

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      if (localStorage.getItem("token")) {
        setLoggedIn(true);
      }
    }, []);
  
    const handleLogin = (token) => {
      if (!token) return;
      localStorage.setItem("token", token);
  
      setLoggedIn(true);
    };
  
    const handleLogout = () => () => {
      setLoggedIn(false);
      localStorage.clear();
    };
    
        return (
            <div className="App">
                <Navbar isLoggedIn={isLoggedIn} logout={handleLogout} />
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/login' component={UserPanel} />
                </Switch>
            </div>
        );
    

}

export default App;