const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;

const dotenv = require('dotenv');
dotenv.config();

app.get("/write",function (req,res) {
    res.sendFile(__dirname+"/write.html")
});

var db;

MongoClient.connect(process.env.DB_URL, function(error, client){
  if (error) return console.log(error);
  db = client.db('todoapp');

  app.post('/add', function(req, res){
   db.collection('post').insertOne( {date: req.body.date  , title : req.body.title} , function(error, result){
     console.log('save the data in db.')
     app.listen(process.env.PORT, function(){
     console.log('listening on 3000')
     });
   });
   app.listen(process.env.PORT, function(){
    console.log('listening on 3000')
   })
  })
});



