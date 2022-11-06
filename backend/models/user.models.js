const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash
        next()
    })
})
const User = mongoose.model('users', UserSchema)

module.exports = User