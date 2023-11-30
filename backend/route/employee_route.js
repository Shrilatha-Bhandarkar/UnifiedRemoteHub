
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/employee.js');

router.post('/login', EmployeeController.employeeLogin);
router.get('/profile/:id', EmployeeController.getUserProfile);
router.post('/create', EmployeeController.createemployee);
router.post('/createcompany',EmployeeController.createCompany)
router.get('/getcompany',EmployeeController.getAllCompanies)
router.post('/storeEmailDetails', EmployeeController.storeEmailDetails);
router.get('/getDetails', EmployeeController.getAllData);

module.exports = router;
