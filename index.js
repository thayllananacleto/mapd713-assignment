var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3000;
//var router = express.Router();

//app.use('/api/product', router);
app.listen(port, (err) => {

    console.log('Server %s listening at %s', app.name, app.url)
    console.log('Resources:')
    console.log(' /products')
    console.log(' /products/:id')

});

var products = []

// Get all the products
app.get("/sendGet", function (req, res) {
    res.json(products);
});

// Creating a product
app.post("/sendPost", function (req, res) {
    var product = req.body;
    products.push(product);
    res.send(200);
});

// Delete product
app.delete("/sendDelete", function (req, res) {
    products = []
    Response.send(200)
});