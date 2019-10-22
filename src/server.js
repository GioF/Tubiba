const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config()

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).catch(error => console.log(error));

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);