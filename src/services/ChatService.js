import ChatBot from './ChatBot';
import Socket from './Socket';


/**
 * Basic chat service, defines which Chat Bot to start, internal or ws
 */
class ChatService {

  instance = null;

  constructor () {

    // behold, the "singleton" trick...
    if(this.instance) {
      return this.instance;
    }

    let botInstance = null;
    if(process.env.REACT_APP_USE_INTERNAL_BOT) {
      botInstance = new ChatBot();
    } else {
      botInstance = new Socket();
    }
    this.instance = botInstance;
    return botInstance;

 }


}

export default new ChatService();