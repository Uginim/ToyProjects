var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

nunjucks.configure('views',{ 
    autoescape: true,
    express:app
});

app.get('/',function(req, res, next){
    try{        
        console.log("word.html");        
        res.render('word.html',
        {
            word:"unary",
            meanings:["단항의","이항의","삼항의"]
        })
    } catch(error){
        console.error(error);
        next(error);
    }   
    
});
app.all('/',function(req,res,next){
    res.state(404).send("notfinded");
})
app.listen(8002, function(){
    console.log("service started")
});