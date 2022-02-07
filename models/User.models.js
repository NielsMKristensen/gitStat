const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type:String,
        unique: true,
        required: [true, 'Username is required']
    },
    password: {
        type: String
    },
    gitusernames: [{
        type: String,
    }],
});

const User = model("User", userSchema);

module.exports = User;