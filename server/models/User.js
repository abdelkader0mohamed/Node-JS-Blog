const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('user', userSchema);


