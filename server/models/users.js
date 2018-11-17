let mongoose = require('mongoose')

let Users = mongoose.model('Users', {
  email: {
    required: true,
    trim: true,
    type: String,
    minlength: 3
  }
})

module.exports = {Users}
