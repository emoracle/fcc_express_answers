var
fs = require('fs'),
express = require('express'),
app = express();

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], 'utf8', function(err, data){
    if (err) console.log(err);
    res.json(JSON.parse(data));
  });
});

app.listen(process.argv[2]);
