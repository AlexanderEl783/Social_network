import { rerenderFull } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'This is text for post #1', likes: '15' },
      { id: 2, message: 'Second post', likes: '7' },
      { id: 3, message: 'post number three', likes: '9' },
    ],
    newPostText: ''
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Lucy' },
      { id: 4, name: 'Tom' },
      { id: 5, name: 'Dwain' },
    ],
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you' },
      { id: 3, message: 'Yo' },
    ],
    newMessageText: ''
  },

  friendsPage: {
    friends: [
      { id: 1, name: 'Lucy' },
      { id: 2, name: 'Tom' },
      { id: 3, name: 'Dwain' },
      { id: 4, name: 'Lucy' },
    ]
  }
}

window.state = state;

export let addNewPost = () => {
  let newPost = {
    id: 4, message: state.profilePage.newPostText, likes: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderFull(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderFull(state);
}

export let addNewMessage = () => {
  let newMessage = {
    id: 3, message: state.dialogsPage.newMessageText
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderFull(state);
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderFull(state);
}

export default state;