const express = require('express');
const app = express();
var cors = require('cors')
const port = 6070;
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = {
  api: app,
};
