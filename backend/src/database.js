const mongoose = require('mongoose');

const URI = 'mongodb://localhost/app';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Base de datos conectado'))
.catch(e => console.log(e));


