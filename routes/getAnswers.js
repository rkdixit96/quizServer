const models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/user/answers',
    handler: (request, response) => {
      const data = JSON.parse(request.payload);
      models.users.findAll({ where: { userName: data.userName } }).then((result) => {
        // console.log(result);
        response({
          statusCode: 200,
          result: result[0].answers,
        });
      });
    },
  },
];
