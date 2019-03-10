'use strict';
//require modules
var express = require('express');
var controller = require('./controller');
var router = express.Router();


//Routes for Department table

//route for to get all departments
router.get('/', controller.getdepartment)
//route for to create new department
router.post('/', controller.createdepartment) 
//route for to update department
router.put('/:id', controller.updatedepartment)
//route for to delete department
router.delete('/:id', controller.deletedepartment)



//Exporting the router.
module.exports = router;

