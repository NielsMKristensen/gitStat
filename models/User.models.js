const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type:String,
        unique: true,
        required: [true, 'Username is required']
    },
    password: {
        String,
        required: [true, 'Password is required']
    },
    gitUsernames: [{
        type: String,
    }],
});

const User = model("User", userSchema);

module.exports = User;