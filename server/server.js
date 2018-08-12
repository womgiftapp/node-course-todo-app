const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

const app = express();

app.use(bodyParser.json());

// Create todos
app.post('/todos', (req, res) => {
    //console.log(req.body);
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
        //console.log(`Saved todo: ${JSON.stringify(doc,undefined,2)}`);
    }, (err)=>{
        res.status(400).send(err);
        //console.log('Unable to save todo', err);
    });
});

// Read all todos
app.get('/todos', (req, res) => {

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});