import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
