var express = require('express');
var router = express.Router();
var connection = require('../connection.js')
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.json({
    a:1,
    b:2
  })
});

router.get('/getStuInfo', function(req, res, next) {
  connection.query("SELECT * FROM stu",function(error,result,fields){
    res.json(result)
  })
});

router.get('/getSeatInfo', function(req, res, next) {
	connection.query("SELECT * FROM seat_info",function(error,result,fields){
		result.forEach( item=>{
			item.isSold = item.isSold === 1 ? true : false
		} )
	  res.json(result)
	})
});

router.post('/addStuIndo', function (req, res,next) {
	var params = req.body
	var addSql = `INSERT INTO stu(id,name,age)  VALUES(?,?,?)`;
	var addParams = [ params.id,params.name,params.age ]
	connection.query(addSql,addParams,function(error,result,fields){
		res.json()
	})
})

router.post('/updateStuIndo', function (req, res,next) {
	var params = req.body
	var addSql = `UPDATE  stu SET name = ? ,age = ? WHERE id = ?`;
	var addParams = [ params.name,params.age,params.id ]
	connection.query(addSql,addParams,function(error,result,fields){
		res.json()
	})
})

router.post('/delStuIndo', function (req, res,next) {
	var params = req.body
	var addSql = `DELETE FROM stu  where id= ? `;
	var addParams = [ params.id]
	connection.query(addSql,addParams,function(error,result,fields){
		res.json()
	})
})


module.exports = router;