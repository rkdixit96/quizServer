const server = require('../server');

describe('Post user testing', () => {
  test('Responds with 200 for successful post request', (done) => {
    const options = {
      method: 'POST',
      url: '/users',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
