//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // DeleteMany
    // db.collection('Todos').deleteMany({text:'eat'}).then((result)=>{
    //     console.log(result);
    // });

    // DeleteOne
    // db.collection('Todos').deleteOne({text:'eat'}).then((result)=>{
    //         console.log(result);
    //     });

    // FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

     // FindOneAndDelete
     db.collection('Users').findOneAndDelete({
         _id: new ObjectID('5b6aee97f97e260382b57b26')
     }).then((result)=>{
        console.log(result);
    });

    //client.close();
});