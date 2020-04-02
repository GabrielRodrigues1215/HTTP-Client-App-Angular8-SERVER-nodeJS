const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const departments_controller = require('./departments_controller')
const products_controller = require('./products_controller')
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
        'mongodb://localhost:27017/http_app',
        {useNewUrlParser: true,
        useUnifiedTopology: true 
    });

app.use('/departments', departments_controller);
app.use('/products', products_controller);

app.listen(3000);