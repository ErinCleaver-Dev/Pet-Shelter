const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const config = require('../config/')

const userSchema = new mongoose.Schema({
    "id" : mongoose.Types.ObjectId,
    "username" : {type: String,
             unique: true,
             required: true},
    "password" : {type: String,
                required: true,
            }
})

userSchema.methods = {
    comparePasswords(password) {
        return bcrypt.compare(password, this.password)
    }
}

userSchema.pre('save',  async function (next) {
    if(!this.isModified('password'))  {
        next();
        return ;
    }
    const salt = bcrypt.genSaltSync(config.saltRound);
    await bcrypt.hash(this.password, salt).then(hash => { 
       this.password = hash;
       next();
    });

})

module.exports = mongoose.model('user', userSchema);