const User = require('../models/User')

async function create(data){
    let user = new User(data);
    return await user.save(user).then(result => {console.log(`user saved!! ${result}`)})
}

async function findUser(userid) {
    return await User.find({username: userid}).lean();
}

module.exports = {
    create: create,
    findUser: findUser,
}