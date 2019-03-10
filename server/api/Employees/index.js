'use strict';
//import all required modules
var express = require('express');
var controller = require('./controller');
var router = express.Router();


//Routes for employee table

//to get all employees
router.get('/', controller.getemployee)
// //create new employee
router.post('/', controller.createemployee)
// //update employee
router.put('/:id', controller.updateemployee)
// //delete employee
router.delete('/:id', controller.deleteemployee)
// //get employees who are getting more salary in their respective department
router.get('/highsalary', controller.getwithhighsalary)

//Exporting the router.
module.exports = router;

