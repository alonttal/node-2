// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//         return console.log('Unable to connect to MongoSB server');
//     }
//     console.log('Connected to MongoDB server');

//     //deleteMany
//     // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     //     console.log(result);
//     // })

//     //deleteOne
//     // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//     //     console.log(result);
//     // })

//     //findOneAndDelete
//     // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     //     console.log(result);
//     // })
//     //db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoSB server');
    }

    //delete all users with the specified name
    // db.collection('Users').deleteMany({name: 'Alon'}).then((result) => {
    //     console.log(result);
    // });

    //find user with the specified id, remove it and print it
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a196920bb067f28a8d39949")}).then((result) => {
        console.log(result);
    })
});