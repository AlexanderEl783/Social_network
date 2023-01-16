import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addNewMessage, addNewPost, updateNewMessageText, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderFull = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state}
          addNewPost={addNewPost}
          addNewMessage={addNewMessage}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}