import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

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
  dispatch(action) {
    this._state.profileReducer = profileReducer(this._state.profilePage, action);
    this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsReducer = friendsReducer(this._state.friendsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;