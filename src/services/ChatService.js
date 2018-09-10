import {Socket, ChatBot} from './';

/**
 * Basic chat service, defines which Chat Bot to start, internal or ws
 */
class ChatService {

  instance;

  constructor () {

    // behold, the "singleton" trick...
    if(this.instance) {
      return this.instance;
    }

    console.log(process.env.REACT_APP_USE_INTERNAL_BOT);

    let botInstance = null;
    if(process.env.REACT_APP_USE_INTERNAL_BOT) {
      botInstance = new ChatBot();
    } else {
      botInstance = new Socket();
    }
    this.instance = botInstance.instance;
  }

}

export default ChatService;