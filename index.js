var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3000;
var cget = 0;
var cpost = 0;

app.listen(port, (err) => {

    console.log('Server http://127.0.0.1/ listening at 3000')
    console.log('Resources:')
    console.log(' /products')
    console.log(' /products/:id')

});

var products = []

// Get all the products
app.get("/sendGet", function (req, res) {
    console.log("sendGet: received request")
    cget = cget + 1
    res.json(products);
    console.log("sendGet: sending response")
    cpost = cpost + 1
});

// Creating a product
app.post("/sendPost", function (req, res) {
    console.log("sendPost: received request")
    cget = cget + 1
    var product = req.body;
    products.push(product);
    res.send(200);
    console.log("sendPost: sending response")
    cpost = cpost + 1
});

// Delete all products
app.delete("/sendDelete", function (req, res) {
    console.log("sendDelete: received request")
    cget = cget + 1
    products = []
    res.send(200)
    console.log("sendDelete: sending response")
    cpost = cpost + 1
});