const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todos')
const {Users} = require('./../server/models/users')

// let id = '5bf0468911957921030ef0f21'
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not found');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => console.log('Todos', todos))
//
// Todo.findOne({
//   _id: id
// }).then((todo) => console.log('Todo', todo))
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo)
// }).catch((e) => console.log(e))

let id = '5bef5d54fa42171c76d2a1b1'

if (!ObjectID.isValid(id)) {
  console.log('Id not found');
}

Users.findById(id).then((user) => {
  if (!user) {
    console.log('Unable to find user');
  }
  console.log('User', user);
}).catch((e) => console.log(e))
