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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addNewPost() {
    let newPost = {
      id: 4, message: this._state.profilePage.newPostText, likes: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addNewMessage() {
    let newMessage = {
      id: 3, message: this._state.dialogsPage.newMessageText
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscibe(observer) {
    this._callSubscriber = observer;
  },
}


export default store;

window.store = store;
