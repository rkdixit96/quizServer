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

const getAnswerFromURL = (url) => {
  const answerPromise = new Promise((resolve, reject) => {
    getDataFromURL(url).then((data) => {
      const jsonAnswer = JSON.parse(data);
      resolve(jsonAnswer.answer);
    });
  });
  return answerPromise;
};

const combineDataFromURLs = (questionsUrl, answerUrl) => {
  const combinedDataPromise = new Promise((resolve, reject) => {
    getDataFromURL(questionsUrl).then((data) => {
      const jsonQuestionsData = JSON.parse(data);
      const questionArray = jsonQuestionsData.allQuestions;
      const questionArrayCopy = questionArray.slice();
      const promiseArray = [];
      for (let question = 0; question < questionArray.length; question += 1) {
        promiseArray.push(getAnswerFromURL(`${answerUrl}/${questionArray[question].questionId}`));
      }
      Promise.all(promiseArray).then((values) => {
        for (let answerInd = 0; answerInd < values.length; answerInd += 1) {
          questionArrayCopy[answerInd].answer = values[answerInd];
        }
        resolve(questionArrayCopy);
      });
    });
  });
  return combinedDataPromise;
};

// combineDataFromURLs('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions', 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById');


module.exports = { getDataFromURL, combineDataFromURLs };
