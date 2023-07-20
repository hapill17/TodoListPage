const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();
app.set('view engine','ejs');

app.get("/add",function (req,res) {
    res.sendFile(__dirname+"/add.html")
});

app.get("/list",function (req,res) {
  res.render('list.ejs')
});

var db;

MongoClient.connect(process.env.DB_URL, function(error, client){
  if (error) return console.log(error);
  db = client.db('todoapp');

  app.post('/add', function(req, res){
    res.send('Post data to the page.');
   db.collection('post').insertOne( {date: req.body.date  , title : req.body.title} , function(error, result){
     console.log('Save the data in db.')
   });
   })
  });

  app.listen(process.env.PORT, function(){
    console.log('listening on 3000')
    });

    
