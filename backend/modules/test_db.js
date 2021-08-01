var mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'Yndiliadrin',
    password : 'A`^K#$%[b99d![{n',
    database : 'ccdb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;