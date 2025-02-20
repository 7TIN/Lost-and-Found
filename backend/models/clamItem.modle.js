import mongoose from 'mongoose';
import Item from './item.modle.js';

const claimItemSchema = new mongoose.Schema({
    imageUrl : {
        type : String,
        required : [true, 'Proof is Required'],
    },
    claimBy : {
        type : String,
        required : [true , 'Claim By is required'],
    }
});

const ClaimItem = Item.discriminator('ClaimItem', claimItemSchema);

export default ClaimItem;