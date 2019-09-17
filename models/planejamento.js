const db = require ('./db')

const Planejamento = db.sequelize.define('planejamentos', {
     mes: {
        type: db.Sequelize.STRING
     },
     situacao:{
         type: db.Sequelize.STRING
     },
    codPlanejamento:{
        type: db.Sequelize.INTEGER
    },
     id_cliente:{
         type: db.Sequelize.INTEGER,
         allowNull: false,
         references:{
             model:'clientes',
             key:'id',
                     }
     
        
     }
})
Planejamento.sync({force: true})


module.exports = Planejamento