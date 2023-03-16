const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      flag: {
        type: Number,
        required: true
      }
});

module.exports = mongoose.model('User', userSchema);