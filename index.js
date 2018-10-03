var express = require("express");
var app = express();
var bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
var port = process.env.port || 3000;
var router = express.Router();
 
app.use('/api/employee', router);
app.listen(port);