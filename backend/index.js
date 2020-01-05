const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv/config')

mongoose.connect(
    'mongodb+srv://southyyy:LehaS30072002@foot-store-cluster-rkttp.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to DB!')
)

app.listen(4000)

