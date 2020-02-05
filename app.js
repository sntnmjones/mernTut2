const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

connectDB();
const app = express();

// enable cors
app.use(cors({origin:true, credentials:true}));

// init middleware
// app.use(express.json({extended:false}));

app.get('/', (req, res) => res.send('Hello world!'));

const books = require('./routes/api/books');
app.use('/api/books', books);
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`))