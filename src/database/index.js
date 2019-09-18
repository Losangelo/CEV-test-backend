import Sequelize from "sequelize";

import Survivor from "../app/models/survivor";

import databaseConfig from "../config/database";

const models = [Survivor];

class Database {
  constructor() {
    this.conection = new Sequelize(databaseConfig);
    this.init();
  }
  init() {
    models.map(model => model.init(this.conection));
  }
}

export default new Database();
