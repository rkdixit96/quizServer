'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    userName: DataTypes.STRING,
    answers: DataTypes.STRING,
    score: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};