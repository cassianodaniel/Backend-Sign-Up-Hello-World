    //Conexão com o banco de dados MySql
        const Sequelize = require('sequelize')
        const sequelize = new Sequelize('cadastros', 'root', 'borborema', {
            host: "localhost",
            dialect: 'mysql'
        })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
