"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.Users, {
        foreignKey: "createBy",
        as: "userCreate",
      });
      Car.belongsTo(models.Users, {
        foreignKey: "updateBy",
        as: "userUpdate",
      });
      Car.belongsTo(models.Users, {
        foreignKey: "deleteBy",
        as: "userDelete",
      });
    }
  }
  Car.init(
    {
      id: DataTypes.STRING,
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
