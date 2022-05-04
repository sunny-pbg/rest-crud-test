'use strict';
const uuid = require('uuid');


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var userObject = body;
    userObject['id'] = uuid.v4();
    global.users.set(userObject['id'],userObject);
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * body User Update user object
 * id String The Id that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.deleteUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    global.users.delete(id);
    resolve();
  });
}


/**
 * get for user
 * Returns a list of user
 *
 * returns List
 **/
exports.getUser = function() {
  return new Promise(function(resolve, reject) {
    console.log(JSON.stringify(Array.from(global.users.values())));
    resolve(Array.from(global.users.values()));
  });
}


/**
 * Get user by user name
 * 
 *
 * id String The Id that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve(global.users.get(id));
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update user object
 * id String The Id that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.patchUser = function(body,id) {
  return new Promise(function(resolve, reject) { 
    global.users.set(id, body);
    resolve(global.users.get(id));
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update user object
 * id String The Id that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.updateUser = exports.patchUser;

