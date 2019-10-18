const express = require('express');

const ClassController = require('./controllers/ClassController');
const UserController = require('./controllers/UserController');


const routes = express.Router();

routes.post('/user', UserController.store);

routes.post('/class', ClassController.store);


module.exports = routes;