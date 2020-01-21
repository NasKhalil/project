import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import HomeScreen from './components/HomeScreen'
import Login from './components/Login'
import Signup from './components/Signup'
import MainScreen from './components/MainScreen';
import pdfReader from './components/pdfReader'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeScreen}/>
        <Route path="/login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/home" component={MainScreen}/>
        <Route path="/pdfViewer" component={pdfReader}/>
      </Router>

    </div>
  );
}

export default App;