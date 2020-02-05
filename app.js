var express = require('express');
var connectDB = require('./config/db');
var cors = require('cors');

connectDB();
var app = express();

// enable cors
app.use(cors({origin:true, credentials:true}));

// init middleware
app.use(express.json({extended:false}));

app.get('/', (req, res) => res.send('Hello world!'));

var books = require('./routes/api/books');
app.use('/api/books', books);
var port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`))
module.exports = app;