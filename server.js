var express = require('express');
var app = express();
var fs=require('fs');
var path=require('path');



app.get('/', function (req, res) {
  
  var fileName=path.join(__dirname, 'index.html');
  
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
  
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});