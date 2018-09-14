#### React Redux Web Chat
This is a simple implementation of a online chat system using React, Redux and React Router. 
There is an internal bot made with setInterval(), the bot will kick in the second the project is loaded.
WebSockets are supported, in order to enable it, disable the bot and provide an WS server url.

Boilerplate made with Create React App, and ejected for custom settings.
UI was built with Material-UI v0.20.0 with custom SCSS styling.

##
##### .env variables

|**param**|**default**|**values**|**description**|
|:-------:|:---------:|:--------:|:-------------|
|`REACT_APP_USE_INTERNAL_BOT`|`true`|`true` `false`|*Enables the internal bot*|
|`REACT_APP_SOCKET_IO_URL`|`empty`|`string`|*WebSocket server url*|

##### expected WS object structure
`
{ 
    user : "User Name",
    message : "The message" 
}
`

To run the project:

##### Development mode
`$ npm install `

`$ npm start` 

##### Production mode (build)
`$ npm install`

`$ npm run build`

