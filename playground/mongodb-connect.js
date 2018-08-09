//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, null, 2));
    // })

    //Insert new doc into Users collection (name,age, location)
    db.collection('Users').insertOne({
        name: 'Ron',
        age: '5',
        location: 'Haifa'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err);
        }
        // print all the documents from the Users collection
        console.log(JSON.stringify(result.ops, null, 2));
        // print a creation object Timestamp from objectId
        console.log(`TimeStamp of object id: ${result.ops[0]._id.getTimestamp()}`);
    }
    );


    client.close();
});