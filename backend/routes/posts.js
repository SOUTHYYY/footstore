const express = require('express')
const router = express.Router()
const Item = require('../model/model')


// Get back all sneackers
router.get('/', async (req, res) => {
    try {
        const posts = await Item.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// Submits a sneacker post 
router.post('/', async (req, res) => {
    const post = new Item({
        name: req.body.name,
        description: req.body.description,
        starting_price: req.body.starting_price,
        brand: req.body.brand
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

//Specific post
router.get('/:postId', async (req, res) => {
    console.log('postId Is:', req.params.postId)
    try {
        const post = await Item.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
})

//Delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Item.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

//Update post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Item.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        )
        res.json(updatePost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router