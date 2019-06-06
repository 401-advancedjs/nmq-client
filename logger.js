'use strict';

/**
 * console logs either successful message saved or error
 * @module logger.js
 * */
const socketIOClient = require('socket.io-client');
const events = require('./util/events.js');
const constants = require('./util/constants.js');

const socket = socketIOClient.connect(constants.SERVER_URL + constants.PORT);

socket.on(events.RECEIVED_SAVE_EVENT, message => {
    console.log({message});
});

socket.on(events.FILE_ERROR_EVENT, error => {
    console.log({error});
});
