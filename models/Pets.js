const mongoose = require('mongoose');
const default_image = "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg";

//values, validation, required, default, value
const petSchema = new mongoose.Schema({
    "id" : mongoose.Types.ObjectId,
    "name" : {type: String,
             required: true},
    "img" : {type: String, 
            required: true, 
            validate: /^https?/, 
            default: default_image, 
            set(value){return default_image}},
    "breed" : {type: String,
              required: true, 
              maxlength: 50},
    "description" :  {type: String,
                     required: true, 
                     maxlength: 100},

})

module.exports = mongoose.model('Pet', petSchema);