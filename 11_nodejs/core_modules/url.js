const url = require('url');

const adr = 'http://localhost:8000/default.htm?year=2023&month=fabruary';

var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8000
console.log(q.pathname); //return default.htm
console.log(q.search); // returns ?year=2023&month=fabruary