import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/home/home';
import "./styles/app.css";
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <Profile/>
    {/*  <Home/>*/}

    {/*}  <div style={{ height: "100vh", display: "flex", alineItem: "center" }}>*/}
       {/* <Register />*/}
        {/* <Login/>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
