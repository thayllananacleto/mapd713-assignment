var express = require("express");
var app = express();
var bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
var port = process.env.port || 3000;
var router = express.Router();
 
app.use('/api/product', router);
app.listen(port);

var products= [
    {
        Id: 1,
        Product: "Test",
        Price: 99,
        Brand: "Brand Test"
    }
];

//Validating the product
function isValidProduct(product){
    if(!product.Id){
        return false;
    }
    if(!product.Product){
        return false;
    }
    if(!product.Price){
        return false;
    }
    if(!product.Brand){
        return false;
    }
    return true;
}

// Get all the products
router.get("/",function (req,res){
    res.json(products);
});