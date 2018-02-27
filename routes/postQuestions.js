const helpers = require('../helpers');
const models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/questions',
  handler: (request, response) => {
    const promiseArray = [];
    models.questions.destroy({ where: {}, truncate: true }).then(() => {
      helpers.combineDataFromURLs('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions', 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById').then((data) => {
        data.forEach((element) => {
          const promise = new Promise((resolve, reject) => {
            const options = [];
            const keyArray = Object.keys(element);
            keyArray.forEach((key) => {
              if (/^option/.test(key)) {
                const optionObj = {};
                optionObj[key] = element[key];
                options.push(optionObj);
              }
            });
            const optionsString = (JSON.stringify(options));
            models.questions.create({
              question: element.question,
              questionId: element.questionId,
              options: optionsString,
              answer: element.answer,
            }).then(() => {
              resolve('Added');
            });
          });
          promiseArray.push(promise);
        });
      });
    });
    Promise.all(promiseArray).then(() => {
      response({
        message: 'Added questions to database',
      });
    });
  },
}];
