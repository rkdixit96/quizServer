const models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/questions',
    handler: (request, response) => {
      models.questions.findAll().then((result) => {
        // console.log(result);
        response({
          statusCode: 200,
          result,
        });
      });
    },
  },
];
