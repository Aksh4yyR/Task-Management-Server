const express = require('express');
const userController = require('../Controllers/userController');
const taskController = require('../Controllers/taskController');
const middleware = require('../middlewares/jwtMiddleware');
const router = express.Router();

// Registration
router.post('/register', userController.registerController);

// Login
router.post('/login', userController.loginController);

// Inside your `taskController.js`
router.post('/addtask', middleware, taskController.addTaskController);
router.get('/view-task', middleware, taskController.userTaskController);  // Ensure this route is for fetching tasks


// Edit task
router.put('/task/:id/edit', middleware, taskController.taskEditController);

// Delete task
router.delete('/task/:id/delete', middleware, taskController.taskDeleteController);

module.exports = router;
