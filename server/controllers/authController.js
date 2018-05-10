const User = require('../models/user'),
mongoose = require('mongoose'),
_ = require('lodash');

module.exports = async (req, res) => {
    const user = new User(_.pick(req.body, ['username', 'email', 'password']));
    user.save()
        .then((user) => {
            res.send(user);
        })
        .catch(err => res.status(401).send(err.errmsg));
}
