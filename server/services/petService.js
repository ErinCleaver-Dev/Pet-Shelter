const Pet = require('../models/Pet')

async function getAll() {
    return await Pet.find({}).lean();
}

async function create(data) {
    let pet = new Pet(data);

    return await pet.save().then(result => {
        console.log('pet saved!!')
    })
}

module.exports = {
    getAll,
    create
}