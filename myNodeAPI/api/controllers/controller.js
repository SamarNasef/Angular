var mongoose = require('mongoose'),
  Employee = mongoose.model('employees');

exports.list_employees = function(req, res) {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  
  Employee.find({}, function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};




exports.create_employee = function(req, res) {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  var new_emp = new Employee(req.body);
  new_emp.save(function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};



exports.read_emp = function(req, res) {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    Employee.findById(req.params.empId, function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};


exports.update_emp = function(req, res) {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  Employee.findOneAndUpdate({_id: req.params.empId}, req.body, {new: true}, function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};


exports.delete_emp = function(req, res) {
  Employee.remove({
    _id: req.params.empId
  }, function(err, emp) {
    if (err)
      res.send(err);
    res.json({ message: 'emp successfully deleted' });
  });
};
