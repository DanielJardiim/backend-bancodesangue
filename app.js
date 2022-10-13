const uri = require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');
const mongoose = require('mongoose');

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Welcome to API !' });
});

mongoose
    .connect(uri)
    .then(() => {
        console.log('REST server running on port 7000...');
        app.listen(7000);
    })
    .catch(error => console.log(error));
