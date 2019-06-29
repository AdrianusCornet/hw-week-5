const Sequelize = require("sequelize")
const db = require('../db')

const Test = db.define(
  'test',
  {
    number: {
      type: Sequelize.INTEGER,
      field: 'num'
    },
    text: {
      type: Sequelize.STRING,
      field: 'txt'
    }
  },
  { tableName: 'test_table' }
)

module.exports = Test