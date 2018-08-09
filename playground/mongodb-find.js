//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // find() - fetch all the data from collection Todos 
    // find() returns Cursor
    // find({completed: false}) - fetch only docs where completed = false
    
    // find by _id
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b6be1c7e2f323d59b5f50ca')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, null, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // count of the records in the Todos collection
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // find by name in Users
    const name = 'Mat';
    db.collection('Users').find({
        name: name
    }).toArray().then((docs) => {
        console.log(`Users with name ${name}`);
        console.log(JSON.stringify(docs, null, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });

    //client.close();
});