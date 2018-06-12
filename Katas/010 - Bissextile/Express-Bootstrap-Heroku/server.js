var express = require('express')
var app = express()
var moment = require('moment')
var {nearBissex} = require('./utils/utils.js'); // require de nos fonctions persos

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'))

var phrase
var bissec 
var this_year 
var your_input

app.get('/' , function(req,res){
	res.render('index.ejs' , {phrase : "" , bissec : "" , this_year :"" , your_input :""})
});

app.post('/check' , function(req,res){
	your_input = moment(req.body.date).format('DD/MM/YYYY')
	this_date = moment(req.body.date).dayOfYear() // le positionnement du jour choisi (1 à 366)
	this_year = moment(req.body.date).year() // l'année du jour choisi 
	bissec = nearBissex(this_year,this_date) // l'output du kata
	phrase = "L'année bissextile la plus proche : " // phrase à afficher dans l'ejs
	res.render('index.ejs' , {phrase : phrase , bissec : bissec , this_year:this_year , your_input:your_input })
})

const PORT = process.env.PORT || 8080; 

app.listen(PORT , function(req,res){
	console.log('Connecté')
});
