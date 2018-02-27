const https = require('https');

const getDataFromURL = (url) => {
  const urlPromise = new Promise((resolve, reject) => {
    https.get(url, (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        // console.log(data);
        resolve(data);
      });
    });
  });
  return urlPromise;
};

module.exports = { getDataFromURL };
