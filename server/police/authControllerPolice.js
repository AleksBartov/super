const Joi = require('joi');

module.exports = async (req, res, next) => {
    const schema = {
        username: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().regex(new RegExp('^[a-zA-Z0-9]{6,15}$'))
    }

    Joi
        .validate(req.body, schema)
        .then(() => {
            next();
        })
        .catch(err => res.status(401).send({
            error: err.details[0].message
        }));
}
