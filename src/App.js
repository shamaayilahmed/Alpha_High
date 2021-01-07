import React, { useEffect, useState } from 'react';
import './App.css';
import ReactLoading from 'react-loading'

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'

function App() {

  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
