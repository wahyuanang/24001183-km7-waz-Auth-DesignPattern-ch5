"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Car, {
        foreignKey: "createBy",
        as: "userCreate",
      });
      User.hasMany(models.Car, {
        foreignKey: "updateBy",
        as: "userUpdate",
      });
      User.hasMany(models.Car, {
        foreignKey: "deleteBy",
        as: "userDelete",
      });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
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
            args: [3, 255],
            msg: "Password must be at least 6 characters long",
          },
        },
      },
      phone: DataTypes.STRING,
      photo: DataTypes.TEXT,
      role: {
        type: DataTypes.ENUM("superadmin", "admin", "member"),
        defaultValue: "member",
        validate: {
          isIn: {
            args: [["superadmin", "admin", "member"]],
            msg: "Role tidak ditemukan brok",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
