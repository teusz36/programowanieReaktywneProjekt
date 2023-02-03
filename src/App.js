import React from 'react';
import './App.css';
import Logo from './components/logo.jsx';
import Search from './components/search.jsx';
import LogIn from './components/login.jsx';
import { Outlet } from "react-router-dom";
import { isExpired } from "react-jwt";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Search />
        <LogIn />
      </header>
      <div className="bodyDiv">
        <Outlet  />
      </div>
    </div>
  );
}

export default App;
