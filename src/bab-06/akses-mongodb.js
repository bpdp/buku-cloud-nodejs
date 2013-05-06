var databaseUrl = "localhost/mydb";
var collections = ["employees"];
var db = require("mongojs").connect(databaseUrl, collections);

// mencari pegawai bernama Aditya
db.employees.find({name: "Aditya"}, function(err, employees) {
  if( err || !employees) console.log("Tidak ada pegawai dengan nama Aditya");
  else employees.forEach( function(emps) {
    console.log(emps);
  });
});

// menyimpan data pegawai baru: Bambang
db.employees.save({name : "Bambang", address : "Yogyakarta", password: "ealhadalah", 
  sex: "male"}, function(err, saved) {
  if( err || !saved ) console.log("Pegawai 'Bambang' gagal disimpan");
  else console.log("Data pegawai 'Bambang' tersimpan");
});

// mengupdate data pegawai: Ahmad
db.employees.update({name : "Ahmad"}, {$set: {address: "Finlandia"}}, 
    function(err, updated) {
  if( err || !updated ) console.log("Data 'Ahmad' gagal diperbaharui");
  else console.log("Data 'Ahmad' berhasil diperbaharui");
});

// Hasil:
//{ _id: 50c74b79a7f83cba11e6b220,
//  name: 'Aditya',
//  address: 'Kalasan',
//  phone: '08787878787' }
//Data pegawai 'Bambang' tersimpan
//Data 'Ahmad' berhasil diperbaharui
//
// Hasil di db:
//> db.employees.find()
//{ "_id" : ObjectId("50c74b63a7f83cba11e6b21e"), "name" : 
//"Zaky", "address" : "Griya Purwa Asri" }
//{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "address" :
//"Finlandia", "email" : "zakyahmadaditya@gmail.com", "name" : "Ahmad" }
//{ "_id" : ObjectId("50c74b79a7f83cba11e6b220"), "name" :
//"Aditya", "address" : "Kalasan", "phone" : "08787878787" }
//{ "name" : "Bambang", "address" : "Yogyakarta", "password" : 
//"ealhadalah", "sex" : "male", "_id" : 
//ObjectId("50c75d43c111384846000001") }
//> 
//  
