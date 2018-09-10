/**
 * Simple ChatBot, it will only loops a return message, for demo purposes
 */
class ChatBot {

  instance;

  constructor () {
    // behold, the "singleton" trick...
    if(this.instance) {
      return this.instance;
    }
    this.instance = this;
    this.botInterval = null;
  }

  listenMessages(callback) {
    const botMsg = { message : "Hi my friend o/ Good luck!", user : "chatBot2000"};
    this.botInterval = setInterval(() => callback(botMsg), 5000);
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