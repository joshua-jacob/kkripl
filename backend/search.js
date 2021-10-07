const express = require('express')
const cors=require('cors')
var mysql = require('mysql')
const bodyParser = require('body-parser');
const app = express()
// const port = 3001

app.use(cors({
    origin:"*",
    methods:['get','post'],
    credentials:true
}));
app.use(express.json());
// app.use(express.static('search.html'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
var connector=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"ipl",
    multipleStatements:true

});
// connector.connect(function(err)
// {
//     if(err)throw err;
//     console.log("connected");
// })
var search="";
app.get('/go/show',function(req,res)

{ 
     var sql='select * from player where name="'+search+'";';
    
connector.query(sql, function (err, result) {
    if (err) throw err; 
    res.send(result)
    // res.render('search.ejs',{player:result})
    
});
    
});
app.post('/go',function(req,res){
    
    search=req.body.search;
    console.log(search);
    
 

})

 app.get('/details1',function(req,res){
     var sql='SELECT name as batsman FROM player WHERE Runs = (SELECT Max(Runs) FROM player)';
     
    connector.query(sql,function(err,result)
     {
        if (err) throw err; 
      res.send(result);
     
     })   
 })
 
 app.get('/details2',function(req,res){
    var sql='select max((select sum(score)from matches)/(select sum(oversA)from matches)-(select sum(scoreB)from matches)/(select sum(oversB) from matches))as RunRate from matches';
    
   connector.query(sql,function(err,result)
    {
       if (err) throw err; 
      console.log(result);
    
    res.send(result);
    
    })   
})

app.get('/details3',function(req,res){
    var sql='select name as bowler from player where wickets=(select max(wickets)from player)';
    
   connector.query(sql,function(err,result)
    {
       if (err) throw err; 
       res.send(result);
    
    })   
})
app.listen(9000,() => console.log('you got it'));