const{ObjectID} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const id = '5b6fec252c84379c3a5bad141';

// // Remove all
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// // Remove One 
// Todo.findOneAndRemove({
//     _id: id
// }).then((todo) => {
//     console.log('Removed:', todo);
// });

// Remove by ID
Todo.findByIdAndRemove(id).then((todo) => {   
    console.log('Removed: ', todo);
}).catch((err)=>{
    console.log(err);
});