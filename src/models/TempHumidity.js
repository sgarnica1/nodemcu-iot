const { DataTypes } = require("sequelize");
const sequelize = require("../sql/config");

const TempHumidity = sequelize.define(
  "TempHumidity",
  {
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

sequelize.sync();

module.exports = TempHumidity;