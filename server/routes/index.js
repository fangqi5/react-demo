var express = require('express');
var router = express.Router();
var connection = require('../connection.js')
import { renderToString } from 'react-dom/server'//引入renderToString方法
import Canvas from'../canvas'
const content = renderToString(<Canvas/>)
/* GET home page. */
router.get('/', function(req, res, next) {
	res.send(
		`
	<html>
	   <head>
		   <title>ssr demo</title>
	   </head>
	   <body>
		   ${content}
		   Hello world+
	   </body>
	   <script src="./index.js"></script>
	</html>
	`
	)
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

router.get('/findUser', function(req, res, next) {
	var userId = req.query.userId
	var password = req.query.password
	connection.query(`SELECT * FROM user_info WHERE userId=?`,userId,function(error,result,fields){
		if(result.length>0){
			if(password === result[0].password){
				res.send({
					code:200,
					success:true,
					data:result
				})
			}else{
				res.send({
					code:404,
					success:false,
					data:result
				})
			}
		}else{
			res.send({
				code:404,
				success:false,
				data:result
			})
		}
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
