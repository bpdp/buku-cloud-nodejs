i/*
 * GET employees listing.
 */

var databaseUrl = "localhost/mydb";
var collections = ["employees"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.list = function(req, res){

	// mencari dan menampilkan semua pegawai
	db.employees.find(function(err, employees) {
  	res.render('employee', {listOfEmployee: employees, title: 'Daftar pegawai'});
	});

};
