const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Other fields as needed
});

module.exports = mongoose.model('User', userSchema);
