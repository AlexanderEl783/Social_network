import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar data={props.appState.friendsPage} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile data={props.appState.profilePage} />} />
          <Route path='/dialogs/*' element={<Dialogs data={props.appState.dialogsPage} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
