const express = require('express');
const app = express();

require('./config/db.config')
let port = 8000 || process.env.PORT

app.use(require('./router/routes'))

app.listen(port , __ => console.log("App is Running!"))