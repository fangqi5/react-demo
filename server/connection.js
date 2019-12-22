var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port:'3306',
  user     : 'root',
  password : '13141fqj',
  database : 'seat-info'
});
 
connection.connect();

module.exports = connection