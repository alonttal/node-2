// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     db.collection('Todos').findOneAndUpdate({
//         _id: new ObjectID('5a1edc352fbcea1ef1d135e6')
//     }, {
//             $set: {
//                 completed: true
//             }
//         }, {
//             returnOriginal: false
//         }).then((result) => {
//             console.log(result);
//         })
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    db.collection('Users').findOneAndUpdate({
        name: 'Oren'
    }, {
            $set: {
                name: 'Alon'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })
});