var express = require('express');
var app = express();
var fs=require('fs');
var path=require('path');
var moment=require('moment');


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

app.get('/:datetime', function(req, res) {
  
       var date = req.params.datetime;
       
       if(moment(date,'X',true).isValid())
       {
         res.json({
         unix: moment.unix(date).format('X'),
      natural: moment.unix(date).format('MMMM D, YYYY')
       });
       }
       else if(moment(date,'MMMM D, YYYY',true).isValid())
       {
          res.json({
         unix: moment(date).format('X'),
      natural: moment(date).format('MMMM D, YYYY')
       });
       }
       else
       {
        res.json({
          unix: null,
      natural: null
       });
       }
       
       
       
       
       });


app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});