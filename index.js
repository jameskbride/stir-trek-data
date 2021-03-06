const glob = require('glob');
const fs = require('fs');
const path = require('path');
const express = require('express');

let loadExpectation = (jsonFile) => {
  const jsonFiles = glob.sync(path.resolve(__dirname, './src/data/') + jsonFile);
  const jsonExpectation = JSON.parse(fs.readFileSync(jsonFiles[0]));

  return jsonExpectation;
};

var app = express();

app.get('/api/v2/m4qufajl/view/speakers', function(req, res) {
  var data = loadExpectation('/speakers.json');
  console.log(data);
  res.json(data);
});

app.get('/api/v2/m4qufajl/view/gridtable', function(req, res) {
  var data = loadExpectation('/gridtable.json');
  console.log(data);
  res.json(data);
});

app.listen(8181);
