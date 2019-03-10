
Required Softwares:
===================================

--> Node js
--> postgresql



How to run?
==========================

--> go to the root directory and run the command "node app.js".



Below i mentioned the list of services which i have created in this task:
==========================================================================
//get all employee
1)http://localhost:3000/api/Employees/ --->get method

//create employee
2)http://localhost:3000/api/Employees  --->post method
   
   request:
   -------
   {
	"name" : "balaji",
	"email_address" : "balaji@gmail.com",
	"phone_number" : "9700006844",
	"salary" : "20000",
	"dept_id" : 16
	}

// update employee
3)http://localhost:3000/api/Employees/:id  -->put method
  request:
  -------
  {
	"name" : "ramana",
	"email_address" : "ramana@gmail.com",
	"phone_number" : "9700009844",
	"salary" : "30000",
	"dept_id" : 16
	}


//delete employee
4)http://localhost:3000/api/Employees/:id -->delete method

//get by high salary
5)http://localhost:3000/api/Employees/highsalary --> get method

//get departments
6)http://localhost:3000/api/Department  -- >get method

//create departments
7)http://localhost:3000/api/Department  -- >post method

request:
--------
{
	"name" : "node js",
	"description" : "This is node js department"
}

//update department
8)http://localhost:3000/api/Department/:id  -->put method
request:
--------
{
	"name" : "node",
	"description" : "This is node js department"
}


//delete department
9)http://localhost:3000/api/Department/:id -->delete method
