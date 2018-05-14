import { combineReducers } from 'redux';
import conversationReducer from './ConversationReducer';
import configReducer from './ConfigReducer';

export default combineReducers({
  config: configReducer,
  conversation: conversationReducer,
});