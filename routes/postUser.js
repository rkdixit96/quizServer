module.exports = [{
  method: 'POST',
  path: '/users',
  handler: (request, response) => {
    response({
      statusCode: 201,
    });
  },
}];
