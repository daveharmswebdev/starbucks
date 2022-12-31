const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello GCP World from Dave Harms!');
});

const port = 3000;
const server = app.listen(port, () => {
  console.log('listening on port %s.\n', server.address().port);
});

module.exports = app;