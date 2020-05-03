const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./app/controller/authController')(app);
require('./app/controller/projectController')(app);

app.listen(3000);

