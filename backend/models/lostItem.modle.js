import mongoose from "mongoose";
import Item from './item.modle.js';

const lostItemSchema = new mongoose.Schema({
    imageUrl : {
        type : String,
        requred : [true, 'Image is required'],
    },
});

const LostItem = Item.discriminator('LostItem', lostItemSchema);

export default LostItem;

