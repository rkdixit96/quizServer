module.exports = [{
  method: 'POST',
  path: '/questions',
  handler: (request, response) => {
    response({
      message: 'Added questions to database',
    });
  },
}];
