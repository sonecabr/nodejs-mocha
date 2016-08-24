var express = require("express");
var app = express();
var calc = require("./calc");

app.get("/sum", function(req, res){
  var a = parseInt(req.query.numberA);
  var b = parseInt(req.query.numberB);
  res.send(JSON.stringify(calc.sum(a, b)));
});

app.listen(3000);
