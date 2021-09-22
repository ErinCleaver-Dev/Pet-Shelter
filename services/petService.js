const Pet = require('../models/Pets')

async function getAll(){
    return await Pet.find({}).lean();
}

async function create(data){
    let pet = new Pet(data);
    return await pet.save(pet).then(result => {console.log(`pet saved!! ${result}`)})
}

async function getId(id) {
    return await Pet.find({_id: id}).lean();
}



module.exports = {
    getAll: getAll,
    create: create,
    getId: getId,
}