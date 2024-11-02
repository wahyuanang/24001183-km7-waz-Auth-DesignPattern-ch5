"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.User, {
        // Perhatikan di sini
        foreignKey: "createBy",
        as: "userCreate",
      });
      Car.belongsTo(models.User, {
        foreignKey: "updateBy",
        as: "userUpdate",
      });
      Car.belongsTo(models.User, {
        foreignKey: "deleteBy",
        as: "userDelete",
      });
    }
  }
  Car.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tahun: DataTypes.STRING,
      noPlat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga: DataTypes.STRING,
      fotoMobil: DataTypes.STRING,
      createBy: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      updateBy: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      delete: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
