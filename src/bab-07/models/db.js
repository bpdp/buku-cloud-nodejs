var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
 
var employeeSchema = new Schema({
    name: String,
		address: String,
    phone: String,
    email: String
});
 
module.exports = mongoose.model('Employee', employeeSchema);
