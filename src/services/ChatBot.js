/**
 * Simple ChatBot, it will only loops a return message, for demo purposes
 */
class ChatBot {

  constructor () {
    // behold, the "singleton" trick...
    if(this.instance) {
      return this.instance;
    }
    this.instance = this;
    this.botInterval = null;
    this.botMsg = { message : "Self Bot Interval Message, no Sockets, only setInterval().", user : "chatBot2001"};
  }

  listenMessages(callback) {
    this.botInterval = setInterval(() => callback(this.botMsg), 5000);
  }

  removeAllMessageListeners(){
    if(this.botInterval) {
      clearInterval(this.botInterval)
    }
  }

  sendMessage(messageObj, callback) {
    return callback(messageObj);
  }

}

export default ChatBot;