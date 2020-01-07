const express = require('express')
const router = express.Router()
const User = require('../model/user')


// Get back all users
router.get('/user', async (req, res) => {
    try {
        const posts = await User.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})


router.post('/user', async (req, res) => {
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email:  req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        city: req.body.city,
    })
    try {
        const savedPost = await user.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router