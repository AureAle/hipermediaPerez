const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
});
//create new collection users
mongoose.model('users', userSchema);
