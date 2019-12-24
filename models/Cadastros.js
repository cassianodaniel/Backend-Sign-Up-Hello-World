const db = require('./Db')
const Cadastros = db.sequelize.define('cadastros', {
    login: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

//Cadastros.sync({force:true}) só execute uma vez(na hora de criar o table ou module)

module.exports = Cadastros;
