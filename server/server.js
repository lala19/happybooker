var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
// var createdata = require('./insert/createdata.js');
// app.use('/createdata', createdata);//服务

var getdata = require('./router/getdata.js');
app.use('/getdata', getdata);//获取数据


app.set('jsonp callback name', 'JSON_CALLBACK');
app.listen(9000);
console.log("开启服务器");