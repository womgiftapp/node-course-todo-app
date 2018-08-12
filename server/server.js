const express = require('express');
const bodyParser = require('body-parser');

const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./db/mongoose.js');
const {
    Todo
} = require('./models/todo.js');
const {
    User
} = require('./models/user.js');

const app = express();

app.use(bodyParser.json());

// Create todos
app.post('/todos', (req, res) => {
    //console.log(req.body);
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        //console.log(`Saved todo: ${JSON.stringify(doc,undefined,2)}`);
    }, (err) => {
        res.status(400).send(err);
        //console.log('Unable to save todo', err);
    });
});

// Read all todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
            res.send({
                todos
            });
        },
        (err) => {
            res.status(400).send(err);
        });
});

// Read todo by ID
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;

    //Valid id using isValid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send("Id is not valid");
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send("Id is not found");
        }
        // Successfully Found todo
        res.send({
            todo
        });
    }).catch((err) => {
        res.status(400).send(err);
    });
});

//Delete route for todo
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    //Valid id using isValid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send("Id is not valid");
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send("Id is not found");
        }
        // Successfully Deleted todo
        res.send({
            message: "Successfully deleted",
            todo
        });
    }).catch((err) => {
        res.status(400).send(err);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});