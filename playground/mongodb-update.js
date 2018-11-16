// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5beef6c10dd7bc1be696575b')
// }, {
//   $set: {completed: true}
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5becb2bd50b2201723c58a3f')
}, {
  $set: {name: 'Amir'},
  $inc: {age: 1}
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

  // db.close()
})
