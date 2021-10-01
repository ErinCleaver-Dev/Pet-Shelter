const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const config = require('../config/index')

//values, validation, required, default value
//fullName, email, passowrd
const userScheme = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userScheme.methods = {
    comparePasswords(password) {
        return bcrypt.compare(password, this.password)
    }
}

userScheme.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
        return;
    }

    const salt = bcrypt.genSaltSync(config.saltRounds);
    await bcrypt.hash(this.password, salt).then(hash => {
        this.password = hash;
        next();
    })


})

module.exports = mongoose.model('User', userScheme)