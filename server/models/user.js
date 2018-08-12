const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }
});

module.exports = {User};

// const newUser = new User({
//     name: "rita",
//     email: "123       "
// });

// newUser.save().then((doc) => {
//     console.log(`Saved user: ${JSON.stringify(doc,undefined,2)}`);
// }, (err) => {
//     console.log('Unable to save user', err);
// });