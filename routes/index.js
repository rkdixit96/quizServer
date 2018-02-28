const postUser = require('./postUser');
const postQuestions = require('./postQuestions');
const getQuestions = require('./getQuestions');
const postAnswers = require('./postAnswers');
const getAnswers = require('./getAnswers');

module.exports = [].concat(postUser, postQuestions, getQuestions, postAnswers);
