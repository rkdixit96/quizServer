const helpers = require('../helpers');

describe('Testing helpers', () => {
  test('Get data from https url', (done) => {
    helpers.getDataFromURL('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/23').then((data) => {
      const dataJSON = JSON.parse(data);
      expect(dataJSON.answer).toBe('Kabul');
    });
    done();
  });
});
