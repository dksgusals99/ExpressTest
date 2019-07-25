const express = require('express');
const app = express();

const port = 8080;

app.use('/',require('./routers/index'));
app.use('/user',require('./routers/users'));
app.use(require('./routers/error'));

app.listen(8080, function () {
  console.log(`Example app listening on port ${port}!`);
});
