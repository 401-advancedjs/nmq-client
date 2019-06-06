![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Socket.io

### Author: Melissa Stock

### Links and Resources
* [submission PR](https://github.com/401-advancedjs/socket-io/pull/1)
* [travis](https://www.travis-ci.com/401-advancedjs/socket-io)

#### Documentation
* [jsdoc](https://jsdoc.app/)

### Modules
#### `read-write.js`
#### `constants.js`
#### `events.js`
#### `app.js`
#### `server.js`
#### `logger.js`

##### Exported Values and Methods

###### `read(file) -> buffer`

###### `upperCase(buffer) -> buffer`

###### `write(file, buffer) -> success message`

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `SERVER_URL` - http://localhost:`PORT`

#### Running the app
* `node server.js`
* `node logger.js`
* `node app.js <file name>`
  
#### Tests
* How do you run tests? `npm run test`
* What assertions were made? No assertions were made
* What assertions need to be / should be made?
    * Tests around modules
    * Test for event handlers

#### UML
![socket.io UML](assets/socket-io.jpeg)
