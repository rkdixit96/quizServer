module.exports = [{
  method: 'POST',
  path: '/users',
  handler: (request, response) => {
    response({
      message: 'Added or already exists',
    });
  },
}];
