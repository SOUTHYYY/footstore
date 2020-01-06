const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
    },
    starting_price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Item', ItemSchema)