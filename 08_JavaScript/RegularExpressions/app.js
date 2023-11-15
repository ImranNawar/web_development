var url = "http://www.ora.com:80/goodparts?q#fragment";
var parse_url = /^(https?):\/\/([^:\/\s]+)(:([^\/]*))?((\/\w+)*\/)([\w\-\.]*[^#?\s]+)?(.*?)?(#(.*))?$/;
var result = parse_url.exec(url);
var names = ['url', 'scheme', 'slash', 'host', 'port',
 'path', 'query', 'hash'];
var blanks = ' ';
var i;
for (i = 0; i < names.length; i += 1) {
 document.writeln(names[i] + ':' +
 blanks.substring(names[i].length), result[i]);
}
