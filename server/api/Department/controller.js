//require moddules
const pool = require('../../dbconnection')

//API to get all departments
exports.getdepartment = (request, response) => {
 pool.query('select * from department', (error, results) => {
  	 if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//API to create new department
exports.createdepartment = (request, response) => {
 if(request.body.name == '' ||request.body.name == undefined || request.body.name == null ){
      response.status(400).json({status :'error', message :'name is required'})
  }else if(request.body.description == '' ||request.body.description == undefined || request.body.description == null ){
      response.status(400).json({status :'error', message :'description is required'})
  }else {
   const { name, description } = request.body
    pool.query('call createDepartment($1,$2)', [name, description], (error, results) => {
	    if (error) {
	    	      throw error
	    }
	   response.status(201).json({status :'success', message :'Department added successfully'})
	})
  
  }
}


//API to update department
exports.updatedepartment = (request, response) => {
  if(request.body.name == '' ||request.body.name == undefined || request.body.name == null ){
      response.status(400).json({status :'error', message :'name is required'})
  }else if(request.body.description == '' ||request.body.description == undefined || request.body.description == null ){
      response.status(400).json({status :'error', message :'description is required'})
  }else {
	  const id = parseInt(request.params.id)
	  const { name, description } = request.body

	  pool.query('call updateDepartment($1,$2,$3)',[name,description,id],
	    (error, results) => {
	      if (error) {
	        throw error
	      }
	      response.status(200).json({status : "success",message :`Department modified with ID: ${id}`})
	    }
	  )
   }
}


//API to delete department
exports.deletedepartment = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('call deleteDepartments($1)', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send({status : 'success' , message : `Department deleted with employee_id: ${id}`})
  })
}
