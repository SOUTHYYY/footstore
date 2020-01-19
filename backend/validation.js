const Joi = require('@hapi/joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        username: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
        phone: Joi.string().required(),
        city: Joi.string().required(),
        category: Joi.string().required()
    })
    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
    })
    return schema.validate(data)
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation 