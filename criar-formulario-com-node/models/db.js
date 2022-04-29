const Sequelize = require("sequelize");
// const chalk = require ("chalk");

const sequelize = new Sequelize('dbNode', 'root', '123',{
    host: 'localhost',
    dialect: 'mysql'
});

// console.log(chalk.blue('Hello world!'));
console.log("\n--------------------------------------------\n        SERVIDOR INICIADO COM SUCESSO!   \n--------------------------------------------\n   Rodando na porta http://localhost:8080  \n--------------------------------------------\n")
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}