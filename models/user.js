const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, type) =>{
    return sequelize.define('users', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrementer: true
        },
        username: type.STRING,
        password: type.STRING,
        confirmPassword: type.STRING
    })
}