const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="test.pdf"');
  // test sendFile
  res.sendFile(__dirname + '/package.json', (err) => {
     if(err) console.error("sendFile error:", err);
  });
});
app.listen(3002, () => console.log('listening'));
