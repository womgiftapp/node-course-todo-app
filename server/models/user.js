const mongoose = require('mongoose');
const validator = require('validator');

// {
//     email: 'rita@test.com',
//     password: 'efwfwefffewfw',
//     tokens:[{
//         access:'auth',
//         token:'leh23irilrf4nh'
//     }]
// }

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {
    User
};

// const newUser = new User({
//     name: "rita",
//     email: "123       "
// });

// newUser.save().then((doc) => {
//     console.log(`Saved user: ${JSON.stringify(doc,undefined,2)}`);
// }, (err) => {
//     console.log('Unable to save user', err);
// });