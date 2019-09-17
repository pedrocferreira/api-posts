const db = require('./db')


const Situacao = db.sequelize.define('situacao', {
    resp: {
        type: db.Sequelize.STRING
    },
    obs: {
        type: db.Sequelize.TEXT
    },
    id_post:{
       type: db.sequelize.INTEGER
    }
})
 //Situacao.sync({force: true})