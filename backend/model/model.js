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
    color: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    images: {
        type: Array,
        require: true
    }
})

module.exports = mongoose.model('Item', ItemSchema)