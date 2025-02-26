import mongoose from "mongoose"
const itemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "The Item name is required"],
        trim : true,
        minLength : 2,
        maxLength : 50,
    },
    description : {
        type : String,
        required : [true, "Description is required"],
    },
    location : {
        type : String,
        required : [true, "Location is required"],
    },
    date : {
        type : Date,
        required : [true , "Date is required"],
    },
    // imageUrl : {
    //     type : String,
    // },
    contactName : {
        type : String,
        required : [true, "Founder name is required"],
    },
    contactEmail : {
        type : String,
        required : [true, "Email is required"],
        match : [/\S+@\S+\.\S+/, "Enter the Valid Email"],
    },
    contactPhone : {
        type : String,
        required : [true, "Enter the contact Number"],
        minLength : 10,
        maxLength : 10,
    },
}, {timestamps : true,
    discriminatorKey : 'itemType'});

const Item = mongoose.model('Item',itemSchema);

export default Item;