
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/employee.js');

router.post('/login', EmployeeController.employeeLogin);
router.get('/profile/:id', EmployeeController.getUserProfile);
router.post('/create', EmployeeController.createemployee);

module.exports = router;
