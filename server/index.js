const express = require('express'), mongoose = require('mongoose'),
cors = require('cors'),
morgan = require('morgan'), bodyParser = require('body-parser'),
config = require('./config/config'), app = express(),
auth = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// created just for testing
app.get('/', (req, res) => {
    res.status(200).send('Hello world!');
});

app.use('/auth', auth);

mongoose
    .connect(`mongodb://AleksBartov:${config.db.pass}@ds119150.mlab.com:19150/aleksandrbartov`)
    .then(() => {
        app.listen(config.port);
        console
            .log(`Successfully connected to the database! App listening on port: ${config.port}...`);
    })
    .catch(err => console.error(err));
