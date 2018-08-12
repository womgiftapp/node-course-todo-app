const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo',{
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    createdAt: {
        type: Number
    }
});

const newTodo = new Todo ({
    text: 'eat breakfast'
});

newTodo.save().then();