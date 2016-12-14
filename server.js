var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname+'/portal'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var PORT = process.env.PORT || 3000;
app.listen(3000,function(){
    console.log('server started at port '+PORT);
});