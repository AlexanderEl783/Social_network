
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
}

export default state;