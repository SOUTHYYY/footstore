const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        reqiured: true
    },
    surname: {
        type: String,
        reqiured: true
    },
    email: {
        type: String,
        reqired: true,
    },
    username: {
        type: String,
        reqiured: true
    },
    password: {
        type: String,
        reqiured: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        reqiured: true
    }
})

module.exports = mongoose.model('User', UserSchema)