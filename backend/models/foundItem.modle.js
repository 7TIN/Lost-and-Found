import mongoose from "mongoose";

import Item from './item.modle.js';

const foundItemSchema = new mongoose.Schema({
    imageurl : {
        type : String,
        required : [true, "imageUrl is required"],
    }
})

const FoundItem = Item.discriminator('FoundItem', foundItemSchema);
export default FoundItem;