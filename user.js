const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
