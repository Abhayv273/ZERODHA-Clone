const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { 
      type: String,
       required: true,
       set:(val)=>val?val.toUpperCase():val
     },
    lastName: { type: String,
       required: true,
       set:(val)=>val?val.toUpperCase():val

     },
    gender: { type: String, required: true },
    occupation: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String,
       required: true,
       unique: true,
       maxlength:10
       },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = UserSchema;