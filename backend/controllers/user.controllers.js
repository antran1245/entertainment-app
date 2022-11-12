const User = require('../models/user.models')
const bcrypt = require('bcrypt')

module.exports.register = (req, res) => {
    const {email, password} = req.body
    User.create({
        email,
        password
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

module.exports.login = async(req, res) => {
    const {email, password} = req.body
    try {
        let user = await User.findOne({email: email})
        const validPassword = await bcrypt.compare(password, user.password)
        if(validPassword) {
            res.json({message: 'ok', user: {_id: user._id, bookmark: user.bookmark}})
        } else {
            res.status(400).json({message: 'Invalid Email/Password'})
        }
    } catch (err) {
        res.status(400).json(err)
    }
}