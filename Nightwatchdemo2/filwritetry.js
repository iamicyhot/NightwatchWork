var fs = require('fs');
var stream = fs.createWriteStream("my_file.xls");
stream.once('open', function(fd) {
  stream.write("My first row \t column 2");
  stream.write("\n")
  stream.write("My second row \t column 2");
  stream.end();
});