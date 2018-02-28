const models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/user/answers',
  handler: (request, response) => {
    const data = JSON.parse(request.payload);
    console.log(data.questionId, data.optionId, data.userName);
    models.users.findAll({ where: { userName: data.userName } }).then((res) => {
      const answersArray = [];
      let updated = false;
      if (res[0].answers === null) {
        const answerObj = [data.questionId, data.optionId];
        // console.log(answerObj);
        answersArray.push(answerObj);
      } else {
        const currAnswers = JSON.parse(res[0].answers);
        currAnswers.forEach((element) => {
          if (element[0] === data.questionId) {
            answersArray.push([data.questionId, data.optionId]);
            updated = true;
          } else {
            answersArray.push(element);
          }
        }, this);
        if (!updated) {
          answersArray.push([data.questionId, data.optionId]);
        }
      }
      models.users.update({
        answers: JSON.stringify(answersArray),
      }, {
        where: {
          userName: data.userName,
        },
      });
    });
    //       if(data[0].answers===null){
    //           const answers = [];
    //           models.users.update({
    //               answers:
    //           })

    //     });
    // }
    // models.users.upsert({
    //   where: {
    //     userName: request.payload,
    //   },
    // }).then((count) => {
    //   if (count !== 0) {
    //     response({
    //       message: 'User already exists',
    //     });
    //   } else {
    //     models.users.create({
    //       userName: request.payload,
    //     }).then(() => {
    //       response({
    //         message: 'User added',
    //       });
    //     });
    //   }
    // });
  },
}];
