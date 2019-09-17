const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Planejamento = require('./models/planejamento')
const Sequelize = require('sequelize')
const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))

app.set('view engine', 'handlebars')
//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rotas

app.get('/form', function(req, res){
    res.render('formulario')
})
app.post('/addPlanejamento', function (req, res) {
    Planejamento.create({
        mes: req.body.mes,
        situacao: req.body.situacao,
        codPlanejamento: req.body.codPlanejamento,
        id_cliente: req.body.id_cliente,

    }).then(function(){
        res.send("Post Criado com seucesso!")
    }).catch(function(erro){
        res.send("Houve um erro:" + erro)
    })
})

app.listen(3000, function(){
    console.log("Sv na porta 3000")
})