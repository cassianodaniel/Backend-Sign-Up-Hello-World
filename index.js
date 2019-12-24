//express
const express = require("express"); //abertura do servidor
const app = express();
//handlebars
const handlebars = require('express-handlebars'); //enviando .handlebars para enderecos específicos
//bodyparser
const bodyParser = require('body-parser'); //enviar partes do corpo handlebars para enderecos do express
//constantes para models
const Cadastros = require("./models/Cadastros");

//Config
    //TEMPLATE ENGINE
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())
//Rotas
    app.get('/cad', function(req,res){
        res.render('formulario') //nome do arquivo handlebars que será enviado para o host /cad
    })
    app.post('/add', function(req,res){
        Cadastros.create({
            login: req.body.login, //req.body.login -> "login" se refere ao formulario.handlebars.name=login
            senha: req.body.senha //req.body.senha -> "senha" se refere ao formulario.handlebars.name=senha
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: "+ erro);
        })
    })
    app.get('/', function(req,res){
        Cadastros.findAll({order: [['id', 'ASC']]}).then(function(cadastros){ //"DESC" P/ ORDEM ANTIGO->NOVO/ "ASC": O CONTRÁRIO
            res.render('home', {varcadastros: cadastros}) //renderize home.handlebars para a localhost:8080/
        }) //retornam tudo o que há dentro de CADASTROS.js
    })

app.listen(8080, function(){ //abrindo servidor
    console.log("Servidor: http://localhost:8080");
});
