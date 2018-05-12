import { combineReducers } from 'redux';
import conversationReducer from './ConversationReducer';

export default combineReducers({
  conversation: conversationReducer,
});