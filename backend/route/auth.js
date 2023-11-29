// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.js');

router.post('/login', adminController.adminLogin);
router.post('/create', adminController.createAdmin);

module.exports = router;
