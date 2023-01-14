import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Lucy' },
  { id: 4, name: 'Tom' },
  { id: 5, name: 'Dwain' },
]

const messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Yo' },
]

const posts = [
  { id: 1, message: 'This is text for post #1', likes: '15' },
  { id: 2, message: 'Second post', likes: '7' },
  { id: 3, message: 'post number three', likes: '9' },
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
