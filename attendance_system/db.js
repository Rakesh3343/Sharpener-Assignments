const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'3343',
    database:'attendance_system'
});

module.exports=connection;