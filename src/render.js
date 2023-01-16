import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addNewMessage, addNewPost } from './redux/state';


export let rerenderFull = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App appState={state} addNewPost={addNewPost} addNewMessage={addNewMessage} />
      </BrowserRouter>
    </React.StrictMode>
  );
}