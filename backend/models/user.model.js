import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Username is required"],
        trim : true,
        minLength : 2,
        maxLength : 50,
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        lowercase : true,
        unique : true,
        trim : true,
        match : [/\S+@\S+\.\S+/, 'Please Enter the valid Email Address']
    },

    password : {
        type : String,
        required : [true, "Password is required"],
        minlength : 6,

    }
}, {timestamp : true});

const User = mongoose.model('User', userSchema);

export default User;