const server = require('../server');

describe('Post questions testing', () => {
  test('Responds with 200 for post questions', (done) => {
    const options = {
      method: 'POST',
      url: '/questions',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
