const models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/users',
  handler: (request, response) => {
    // console.log(request.payload);
    models.users.count({
      where: {
        userName: request.payload,
      },
    }).then((count) => {
      if (count !== 0) {
        response({
          message: 'User already exists',
        });
      } else {
        models.users.create({
          userName: request.payload,
        }).then(() => {
          response({
            message: 'User added',
          });
        });
      }
    });
  },
}];
