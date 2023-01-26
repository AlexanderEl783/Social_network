const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 3, message: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;