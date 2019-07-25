const express = require('express');
const app = express();
const router = express.Router();

const port = 8080;


app.use('/user',require('./routers/users'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});
 
app.listen(8080, function () {
  console.log(`Example app listening on port ${port}!`);
});
