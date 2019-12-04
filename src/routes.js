const express = require('express');

const ClassController = require('./controllers/ClassController');
const UserController = require('./controllers/UserController');
const ExerciseController = require('./controllers/ExerciseController');
const AssignmentController = require('./controllers/AssignmentController');


const routes = express.Router();

routes.post('/user', UserController.store);
routes.get('/user', UserController.type);
routes.post('/user/login', UserController.select);

routes.post('/classes', ClassController.store);
routes.get('/classes', ClassController.index);
routes.get('/classes/:id', ClassController.show);

routes.post('/classes/:classId/assignments', ExerciseController.store);
routes.get('/classes/:classId/assignments', ExerciseController.index);


routes.post('/classes/:classId/assignments/:assignmentId', AssignmentController.store);
routes.get('/classes/:classId/assignments/:assignmentId', AssignmentController.index);



module.exports = routes;