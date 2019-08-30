const express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Bye forever World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Port 3000');
});

