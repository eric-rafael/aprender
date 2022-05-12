const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = User;
// agora importar
// const User = require('../models/User')
// no ../migrations/index.js