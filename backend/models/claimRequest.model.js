import mongoose from "mongoose";

const claimRequestSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    claimantName: { 
        type: String, 
        required: [true,'Name is Required'],
    },
    claimantEmail: { 
        type: String, 
        required: [true,'Email is required'],
    },
    claimantPhone: { 
        type: String, 
        required: [true,'Contact No'],
    },
    description: { 
        type: String, 
        required: [true,'Description is required'], 
    },
    imageUrl : {
        type : String,
        required: [true, 'Proof is Required'],
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
},{timestamps : true});


const ClaimRequest = mongoose.model('ClaimRequest', claimRequestSchema);
export default ClaimRequest;