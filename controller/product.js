var express = require('express');
var router = express.Router();

/// --- Code CONTROLLERs
router.use(function timeLog (req, res, next) {
    console.log('\n\t Product controller - Time: ', Date.now());
    next();
})

/// ..................................................
router.get('/', productPage);
function productPage(req, res) {
    res.send('PRODUCT: home page');
}

/// ..................................................
router.get('/list', listProductPage);
function listProductPage(req, res) {
    res.send('PRODUCT: list PRODUCT page');
}

/// --- EXports
module.exports = router;




/// ..................................................
app.get('/product', productPage);
function productPage(req, res) {
    
    if (session.user) 
    {
        MongoClient.connect(urldb, { useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydatabase");
            dbo.collection("Product").find({}).toArray(function(err, productlist) {
              if (err) throw err;
              
                res.render("Page/product",  {
                    title: "ATN-Shop PRODUCT page", 
                    username: session.user.username,
                    products : productlist 
                    , configHeader: configHeader , currpage: "Product"
                    });
                console.log('Found:', productlist);

              db.close();
            });
          });
                    

        
    } else {
        res.redirect('/login');
    }    
    console.log("\n\t ... connect PRODUCT from ", req.connection.remoteAddress, req.headers.host);
}

