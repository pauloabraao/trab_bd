const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydatabase',
});

connection.query("SELECT * FROM employees", function (err, rows, fields){

})