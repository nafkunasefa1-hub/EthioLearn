const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.sendFile(__dirname + '/package.json');
});
app.listen(3001, () => console.log('listening'));
