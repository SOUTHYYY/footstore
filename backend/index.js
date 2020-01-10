const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts')
const authRoute = require('./routes/auth')
const cors = require('cors');

dotenv.config()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

app.use('/auth', authRoute)
app.use('/posts', postsRoute)


mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!')
)


// How do we start listening to the server? 
app.listen(4000)