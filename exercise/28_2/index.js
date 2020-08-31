const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./controllers/productController');


const app = express();
app.use(bodyParser.json());
app.use(({ method, path }, _, next) => {
  console.log(`METHOD ${method}, PATH ${path}, Date ${new Date().toDateString()}`)
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productsController);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
