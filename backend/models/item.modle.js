import mongoose from "mongoose"
export const itemSchema = new mongoose.Schema({
    itamName : {
        type : String,
        required : [true, "The Item name is required"],
    },
    founderName : {
        type : String,
        required : [true, "Founder name is required"],
    },
    location : {
        type : String,
        required : [true, "Location is required"],
    },
    date : {
        type : Date,
        required : [true , "Date is required"],
    },
    description : {
        type : String,
        required : [true, "Description is required"],
    }

})