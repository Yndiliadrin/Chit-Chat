var con = require('./modules/test_db');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let vmi = [];

con.query('SELECT * FROM user', function(err, result) {
        if (err) throw err;
        console.log("lekérdezés");
        vmi.push(result);
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(String(vmi));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});