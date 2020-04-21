'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_id = sequelize.define('user_id', {
    email: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.STRING,
    seller_id: DataTypes.STRING,
    wishlist: DataTypes.STRING,
    bank_account: DataTypes.STRING,
    favorite_shop: DataTypes.STRING,
    history: DataTypes.STRING
  }, {});
  user_id.associate = function(models) {
    // associations can be defined here
  };
  return user_id;
};