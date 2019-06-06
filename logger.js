'use strict';

/**
 * console logs either successful message saved or error
 * @module logger.js
 * */

const QClient = require('@nmq/q/client');
const events = require('./util/events');

const database = new QClient('database');
const files = new QClient('files');

database.subscribe(events.READ, payload => {
  console.log(events.READ, payload);
});

database.subscribe(events.DELETE, payload => {
  console.log(events.DELETE, payload);
});

database.subscribe(events.CREATE, payload => {
  console.log(events.CREATE, payload);
});

database.subscribe(events.UPDATE, payload => {
  console.log(events.UPDATE, payload);
});

database.subscribe(events.DB_ERROR, payload => {
  console.log(payload);
});

files.subscribe(events.FILE_SAVED_EVENT, payload => {
  console.log(events.FILE_SAVED_EVENT, payload);
});

files.subscribe(events.FILE_ERROR_EVENT, payload => {
  console.log(events.FILE_ERROR_EVENT, payload);
});

