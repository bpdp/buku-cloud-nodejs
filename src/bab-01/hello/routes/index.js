
/*
 * GET home page.
 */

exports.index = function(req, res){
	var nv = process.version;
  res.render('index', { title: 'Express app at CloudFoundry with Node.js ' + nv});
};
