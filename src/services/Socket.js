// this lib is available by "externals" from WebPack
import io from 'socket.io-client';

/**
 * This class do the connection with the Socket,
 * using the singleton pattern to avoid multiple connections across the app.
 */
class Socket {

  instance;

  constructor(){

    // behold, the "singleton" trick...
    if(this.instance) {
      return this.instance;
    }

    this.instance = this;
    this.url = process.env.REACT_APP_SOCKET_IO_URL || "http://185.13.90.140:8081/";
    this.io = io.connect(this.url);
    this.ignore = ["echoBot2000"];
  }

  listenMessages(callback) {
    const { io, ignore } = this;
    io.on("message", message => {
      // only calls the callback fn when the user is not on the ignored list
      return ignore.indexOf(message.user) === -1 ? callback(message) : null
    });
  };

  removeAllMessageListeners(){
    this.io.removeAllListeners("message");
  }

  sendMessage(messageObj, callback) {
    this.io.emit("message", messageObj);
    return callback(messageObj);
  }

}
export default Socket;

