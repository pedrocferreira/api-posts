const db = require('./db')


const Post = db.sequelize.define('posts', {
    data_post:{
        type: db.Sequelize.DATE
    },

    descricao:{
         type: db.Sequelize.TEXT
        },
    
    codPost:{
        type: db.Sequelize.INTEGER
    },
    id_planejamento:{
        type: db.Sequelize.INTEGER
    },
    p_id_cliente:{
        type: db.Sequelize.INTEGER
    },
    situacao:{
        type: db.Sequelize.STRING
    },
    obs:{
        type: db.Sequelize.TEXT
    }


})   
 Post.sync({ force: true })