const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId; // Correct way to define ObjectId

// User schema
const User = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

// Todo schema
const Todo = new Schema({
  title: String, // "String" should be capitalized (Mongoose uses JS types)
  done: Boolean,
  userId: { type: ObjectId, ref: 'User' }, // Linking to the User
});

// Models
const Usermodel = mongoose.model("User", User);
const Todomodel = mongoose.model("Todo", Todo);

// Exporting the models
module.exports = {
  Usermodel,
  Todomodel,
};
