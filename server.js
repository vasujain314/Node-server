const express = require('express');
const hbs =require('hbs');
var app=express();

app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'));

app.get('/about',(req,res)=>{

    res.render('about.hbs',{
        pageTitle: 'about page'
    });
});

app.get('/',(req,res)=>{
	
    res.render('home.hbs',{
        pageTitle: 'home page'
    });
});

app.listen(3000); 