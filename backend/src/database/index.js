const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    database: 'techtraining_api',
    username: 'root',
    password: 'sl1ckw1r2',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize
