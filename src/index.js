import reportWebVitals from './reportWebVitals';
import state, { subscibe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addNewMessage, addNewPost, updateNewMessageText, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderFull = () => {
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

rerenderFull(state);

subscibe(rerenderFull);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
