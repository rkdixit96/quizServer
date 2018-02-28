const server = require('../server');

describe('Get questions testing', () => {
  test('Responds with 200 for successful get request', (done) => {
    const options = {
      method: 'GET',
      url: '/questions',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  }, 10000);
});
