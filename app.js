const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;

app.get("/write",function (req,res) {
    res.sendFile(__dirname+"/write.html")
});

var db;

MongoClient.connect('mongodb+srv://Claire:fa8072@clustertest0702.b5u47xr.mongodb.net/?retryWrites=true&w=majority', function(error, client){
  if (error) return console.log(error);
  db = client.db('todoapp');
  db.collection('post').insertOne( {date: '0617'  , title : 'dancing'} , function(error, result){
    console.log('save the data in db.')
    app.listen('3000', function(){
      console.log('listening on 3000')
    });
  });
})
