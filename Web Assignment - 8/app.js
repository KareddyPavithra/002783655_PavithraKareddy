const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dotenv = require('dotenv');


/* app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/users', (req, res) => {
    res.send('Users');
}); */

const connectdB = require('./config/database');

//loading configuration
dotenv.config({ path: './config/config.env'});


connectdB();

//define routes
app.use('/', require('./routes/routes'));

app.listen(3000);