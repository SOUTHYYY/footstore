const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/user')
const { registerValidation, loginValidation} = require('../validation')


// Get back all users
router.get('/user', async (req, res) => {
    try {
        const posts = await User.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// Add new User in Database
router.post('/register', async (req, res) => {
    //Validate user data
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Checking is email exists in DB
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('This email already exists')

    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
        city: req.body.city,
    })
    try {
        const savedPost = await user.save()
        res.json(savedPost)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    //Validate user data
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Checking is email exists in DB
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email or Password is wrong')

    //Check correct password
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Wrong password is wrong')

    // Create TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)

})

module.exports = router