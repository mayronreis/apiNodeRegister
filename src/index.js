const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.get('/', (req, res) => {
//  res.send('OK3');
//});

require('./controller/authController')(app);

app.listen(3000);

