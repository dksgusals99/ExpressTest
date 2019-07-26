const cluster = require('cluster');
const express = require('express');
const app = express();

const port = 8080;
var doLog = (process.env.doLog==="true")?true:false;

if (doLog) {
    console.log("Product web.js");
}

app.use('/',require('./routers/index'));
app.use('/user',require('./routers/user'));
app.use('/media',require('./routers/media'));
app.use('/w',require('./routers/w'));
app.use(require('./routers/error'));

app.listen(8080, function () {
    if (doLog) {
        console.log(`Example app listening on port ${port}!`);
    }
});
