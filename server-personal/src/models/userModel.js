const {Schema, model} = require('mongoose');


const UserSchema = new Schema({
    name: String,
    lastname: String,
    email: {
        type:String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: String,
    role: {
        type: String,
        default: "admin"
    },
    active: {
        type: Boolean,
        default: false
    }
})


module.exports = model("User", UserSchema)