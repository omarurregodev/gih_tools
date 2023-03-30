const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      servicios: {
        type: Array,
        required: true
      },
      rol: {
        type: Object,
        required: true
      },
      enabled: {
        type: Boolean,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      phone: {
        type: Number,
        required: true
      }
});

module.exports = mongoose.model('User', userSchema);