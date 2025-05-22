const express = require('express');
const homeRouteController = require('../../controllers/Home');
const router = express.Router();

router.get('/home', homeRouteController.retrieveEmployeeDetails);

router.post('/updateDetails', homeRouteController.updateEmployeeDetails);

module.exports = router;
