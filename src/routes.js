const express = require('express');

const ClassController = require('./controllers/ClassController');
const UserController = require('./controllers/UserController');
const AssignmentsController = require('./controllers/ExerciseController');


const routes = express.Router();

routes.post('/user', UserController.store);

routes.post('/classes', ClassController.store);

routes.post('/classes/:classId/assignments', AssignmentsController.store);
routes.post('/classes/:classId/assignments/:assignmentId', AssignmentController.store);


module.exports = routes;