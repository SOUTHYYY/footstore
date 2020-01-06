const mongoose = require('mongoose')

const SneakerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    description: String,
    coloring: String,
    starting_price: {
        type: Number,
        required: true
    },
    brands: {
        type: String,
        required: true
    },
    // images: [{
    //     type: String,
    // }]
})

module.exports = mongoose.model('Post', SneakerSchema)
