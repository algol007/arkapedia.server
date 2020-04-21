'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_role = sequelize.define('user_role', {
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  user_role.associate = function(models) {
    // associations can be defined here
  };
  return user_role;
};