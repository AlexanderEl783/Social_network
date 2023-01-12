import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Dialogs from './Components/Dialogs/Dialogs';


const App = () => {
  return (
    <div class='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        <Dialogs />
        {/* <Content /> */}
      </div>
    </div >
  );
}

export default App;
