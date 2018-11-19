const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
mongoose.connect('mongodb://localhost/mean_belt_exam', { useNewUrlParser: true });

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(2222);