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
    this.url = process.env.REACT_APP_SOCKET_IO_URL;
    this.io = io.connect(this.url);
  }

  listenMessagesFromSocket(callback) {
    this.io.on("message", message => callback(message));
  };

  sendMessageToSocket(messageObj) {
    this.io.emit("message", messageObj);
  }

}
export default Socket;

