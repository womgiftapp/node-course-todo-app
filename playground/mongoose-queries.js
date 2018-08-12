const{ObjectID} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const id = '5b6fec252c84379c3a5bad141';

if (!ObjectID.isValid(id)){
    console.log('ID is not valid');
}

// // Find by ID
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// // Find One by ID
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Find by ID
Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log('Id not found');
    }
    console.log('Todo by id:', todo);
}).catch((err)=>{
    console.log(err);
});