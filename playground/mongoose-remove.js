const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Toodo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove({})

Todo.findByIdAndRemove('5a20126e67627438c0bdbcdc').then((todo) => {
    console.log(todo);
});