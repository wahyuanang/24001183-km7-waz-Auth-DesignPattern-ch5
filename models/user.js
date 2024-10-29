"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // define association here
      User.hasMany(models.Cars, {
        foreignKey: "createBy",
        as: "userCreate",
      });
      User.hasMany(models.Cars, {
        foreignKey: "updateBy",
        as: "userUpdate",
      });
      User.hasMany(models.Cars, {
        foreignKey: "deleteBy",
        as: "userDelete",
      });
    }
  }
  User.init(
    {
      firstName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 255],
            msg: "Password must be at least 6 characters long",
          },
        },
      },      
      phone: DataTypes.STRING,
      photo: DataTypes.TEXT,
      role:{
        type: DataTypes.ENUM('superadmin', 'admin', 'member'),
        defaultValue: 'member',
        validate: {
          isIn: {
            args: [['superadmin', 'admin', 'member']],
            msg: "Role tidak ditemukan brok",
          }
        }
      } 
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
