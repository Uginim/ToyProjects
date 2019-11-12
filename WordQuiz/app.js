var express = require('express');
var nunjucks = require('nunjucks');
var app = express();
const fs = require('fs');


nunjucks.configure('views',{ 
    autoescape: true,
    noCache: true,
    express:app
});

app.get('/',function(req, res, next){
    try{        
        console.log("word.html");
        // fs.open('./views/word.html','r',(err, fd)=>{
        //     console.log(fd);
        //     var buffer=new Int8Array(1024);;
        //     fs.read(fd,buffer,0,1000,null,(err,byteread,buffer)=>{
        //         console.log(buffer);
        //     });
        // });
        fs.readFile('./datas/problems.json', 'utf8', (err,data) => {
            const json = JSON.parse(data);        
            json.problems.map((item,index)=>{                
                item.answers=item.wrongAnswers.slice();
                item.answers.push(item.correctAnswer);
                for(let i = 0;i<item.answers.length;i++){
                    let tmp = item.answers[i];
                    const targetIdx = Math.floor(Math.random()*item.answers.length);
                    item.answers[i] = item.answers[targetIdx];
                    item.answers[targetIdx] = tmp;
                }
            });
            console.log(json);
            res.render('word.html',json); 
            
        });
        
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