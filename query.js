var
express = require('express'),
app = express();

app.get('/search', function (req, res) {
  res.send(JSON.stringify(req.query));
});

app.listen(process.argv[2]);
