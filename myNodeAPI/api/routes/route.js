module.exports = function(app) {
    var emp = require('../controllers/controller');
  
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      next();
    })

    app.route('/employee')
      .get(emp.list_employees)
      .post(emp.create_employee);
  
  
    app.route('/employee/:empId')
      .get(emp.read_emp)
      .put(emp.update_emp)
      .delete(emp.delete_emp);
      
  };
  