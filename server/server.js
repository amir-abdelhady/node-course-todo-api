const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todos')
const {Users} = require('./models/users')

let app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  }, (err) => {
    res.status(400).send(err)
  })
})

app.listen(3000, () => {
  console.log('Started listening on port 3000');
})
