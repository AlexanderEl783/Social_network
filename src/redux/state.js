
const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';



let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscibe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) { //{ 'ADD-POST' }
    if (action.type === ADD_NEW_POST) {
      let newPost = {
        id: 4, message: this._state.profilePage.newPostText, likes: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === ADD_NEW_MESSAGE) {
      let newMessage = {
        id: 3, message: this._state.dialogsPage.newMessageText
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default store;
window.store = store;