
//require moddules
const pool = require('../../dbconnection')

//API for get all employees
exports.getemployee = (request, response) => {
 pool.query('SELECT * FROM employees', (error, results) => {
  	 if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


//API for create new employee
exports.createemployee = (request, response) => {
  if(request.body.name == '' ||request.body.name == undefined || request.body.name == null ){
      response.status(400).json({status :'error', message :'name is required'})
  }else if(request.body.email_address == '' ||request.body.email_address == undefined || request.body.email_address == null ){
      response.status(400).json({status :'error', message :'email_address is required'})
  }else if(request.body.phone_number == '' ||request.body.phone_number == undefined || request.body.phone_number == null ){
      response.status(400).json({status :'error', message :'phone_number is required'})
  }else if(request.body.salary == '' ||request.body.salary == undefined || request.body.salary == null ){
      response.status(400).json({status :'error', message :'salary is required'})
  }else if(request.body.dept_id == '' ||request.body.dept_id == undefined || request.body.dept_id == null ){
      response.status(400).json({status :'error', message :'dept_id is required'})
  }else {
    const { name, email_address,phone_number,salary,dept_id } = request.body
    pool.query('INSERT INTO employees (name, email_address,phone_number,salary,dept_id) VALUES ($1, $2,$3,$4,$5)', [name, email_address,phone_number,salary,dept_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).json({status :'success', message :'Employee added successfully'})
    })
  }
}

  


//API for update employee
exports.updateemployee = (request, response) => {
  if(request.body.name == '' ||request.body.name == undefined || request.body.name == null ){
      response.status(400).json({status :'error', message :'name is required'})
  }else if(request.body.email_address == '' ||request.body.email_address == undefined || request.body.email_address == null ){
      response.status(400).json({status :'error', message :'email_address is required'})
  }else if(request.body.phone_number == '' ||request.body.phone_number == undefined || request.body.phone_number == null ){
      response.status(400).json({status :'error', message :'phone_number is required'})
  }else if(request.body.salary == '' ||request.body.salary == undefined || request.body.salary == null ){
      response.status(400).json({status :'error', message :'salary is required'})
  }else if(request.body.dept_id == '' ||request.body.dept_id == undefined || request.body.dept_id == null ){
      response.status(400).json({status :'error', message :'dept_id is required'})
  }else {
    const id = parseInt(request.params.id)
    const { name, email_address,phone_number,salary,dept_id } = request.body
    pool.query(
      'UPDATE employees SET name = $1, email_address = $2,phone_number =$3,salary = $4,dept_id = $5 WHERE employee_id = $6',
      [name, email_address,phone_number,salary,dept_id,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json({status :'success', message :`Employee modified with ID: ${id}`})
        
      }
    )
  }
}


//API for delete employee
exports.deleteemployee = (request, response) => {
   const id = parseInt(request.params.id)
pool.query('DELETE FROM employees WHERE employee_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    if(results.rowCount == 0){
       response.status(200).json({status : 'error', message :`no id found in employees data`})
    }else{
      response.status(200).json({status : 'success', message :`Employee deleted with employee_id: ${id}`})
    }
    
  })
}

//API for get employees who are getting more salary in their respective department
exports.getwithhighsalary = (request, response) => {
 pool.query('SELECT dept_id,name,Max(salary) FROM employees GROUP BY dept_id,name', (error, results) => {
     if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}




