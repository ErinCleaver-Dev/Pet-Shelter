const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    "id" : mongoose.Types.ObjectId,
    "breed" : {type: String,
        required: true, 
        maxlength: 50},
})

module.exports = mongoose.model('Breed', breedSchema);