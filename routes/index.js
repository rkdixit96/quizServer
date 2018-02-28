const postUser = require('./postUser');
const postQuestions = require('./postQuestions');
const getQuestions = require('./getQuestions');

module.exports = [].concat(postUser, postQuestions, getQuestions);
