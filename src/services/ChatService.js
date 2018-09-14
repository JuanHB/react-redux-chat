import ChatBot from './ChatBot';
import Socket from './Socket';


/**
 * Basic chat service, defines which Chat Bot to start, internal or ws
 */
class ChatService {

  instance = null;

  constructor () {

    let botInstance = null;
    const useInternalBot = process.env.REACT_APP_USE_INTERNAL_BOT;
    const hasSocketUrl = !!process.env.REACT_APP_SOCKET_IO_URL;

    // behold, the "singleton" trick...
    if(this.instance) {
      return this.instance;
    }
    if(useInternalBot === 'true' || !hasSocketUrl ) {
      console.log('ChatBot');
      botInstance = new ChatBot();
    } else {
      console.log('Socket');
      botInstance = new Socket();
    }
    this.instance = botInstance;
    return botInstance;

 }


}

export default new ChatService();