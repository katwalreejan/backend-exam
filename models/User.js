
 
 const mongoose = require("mongoose");

 const Schema = mongoose.Schema;

 const userSchema = new Schema(
 {
     name: {
     type: String,
     required: true,
     minlength: [2],
     trim: true
     },
     email: {
     type: String,
     required: true,
     unique: true,
     lowercase: true
     },
     age: {
     type: Number,
     required: true,
     min: 16
     },
     role: {
     type: String,
     enum: {
        values: ["student", "admin"]
     },
     default: "student"
     },
 },
 { timestamps: true  }
 );

 module.exports = mongoose.model("User", userSchema);