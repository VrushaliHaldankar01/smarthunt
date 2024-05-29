const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('welcome');
});
app.listen(4000, () => {
  console.log('server running on port 4000');
});
