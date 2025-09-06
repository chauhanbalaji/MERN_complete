const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://onlysoftware200:GL1KR2kg7Cqlc5ez@cluster0.bnwus6f.mongodb.net/coursera-app")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema ({
   email: {type: String, unique: true},
   password: String,
   firstName: String,
   lastName: String,
});

const adminSchema = new Schema ({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,

});

const courseSchema = new Schema ({
    title: String,
    description: String,
    price: Number,
    ImageUrl: String,
    creatorId: ObjectId

});

const purchaseSchema = new Schema ({
    userId: ObjectId,
    courseId: ObjectId

});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const  courseModel = mongoose.model("course", courseSchema);
const purchseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchseModel
}