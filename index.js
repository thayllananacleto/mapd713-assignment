var express = require("express");
var app = express();
var bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
var port = process.env.port || 3000;
var router = express.Router();
 
app.use('/api/product', router);
app.listen(port);

var products= []

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

// Get specific product based on Id
router.get("/:Id",function(req,res){
    var productId = parseInt(req.params.Id);
    var currentProduct = products.filter(p=>p.Id==productId)[0];
 
    if(currentProduct){
        res.json(currentProduct);
    }else{
        res.sendStatus(404);
    }
});

// Creating a product
router.post("/", function (req,res) {
    var product = req.body;
    var isValid =isValidProduct(product);
    if(isValid){
        products.push(product);
        res.send(product);
    } else{
        res.sendStatus(500);
    }
});

// Updating a product by Id
router.put("/:Id",function (req,res) {  
    var productId = parseInt(req.params.Id);
    var currentProduct = products.filter(p=>p.Id==productId)[0];
    if(currentProduct){
        let product = req.body;
        var isValid = isValidProduct(product);
        if(isValid){
            currentProduct.Id = product.Id;
            currentProduct.Product = product.Product;
            currentProduct.Price = product.Price;
            currentProduct.Brand = product.Brand;
            res.sendStatus(204);
        }else{
            res.sendStatus(500);
        }
    }else{
        res.sendStatus(404);
    }
});

// Delete product
router.delete("/sendDelete", function(req,res){
    products = []
    Response.send(200)
});