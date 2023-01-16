import { rerenderFull } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'This is text for post #1', likes: '15' },
      { id: 2, message: 'Second post', likes: '7' },
      { id: 3, message: 'post number three', likes: '9' },
    ]
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

export let addNewPost = (text) => {

  let newPost = {
    id: 4, message: text, likes: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderFull(state);
}

export default state;