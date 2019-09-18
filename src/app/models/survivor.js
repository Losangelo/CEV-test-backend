import express from "express";
import Sequelize, { Model } from "sequelize";

class Survivor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        gender: Sequelize.STRING,
        latitude: Sequelize.DECIMAL(14, 11),
        longitude: Sequelize.DECIMAL(14, 11),
        infections: Sequelize.INTEGER,
        infected: Sequelize.BOOLEAN,
        water: Sequelize.INTEGER,
        ammunition: Sequelize.INTEGER,
        medication: Sequelize.INTEGER,
        food: Sequelize.INTEGER,
        infection_attested_for: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Survivor;
