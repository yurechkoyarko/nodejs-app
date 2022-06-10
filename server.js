'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('CI/CD training: NodeJS App running on Docker - version 1!\n');
});

app.listen(PORT, HOST);
console.log(`Logs from NodeJS App`);
console.log(`Running on http://${HOST}:${PORT}`);