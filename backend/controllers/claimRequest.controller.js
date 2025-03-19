import ClaimRequest from "../models/claimRequest.model.js";

export const createClaimRequest = async (req, res, next) => {
    const { itemId, claimantName, claimantEmail, claimantPhone, description, profImageUrl } = req.body;
    
    if (!itemId) {
        return res.status(400).json({ success: false, message: "Item ID is required" });
    }

    const newClaim = new ClaimRequest({
        item: itemId,
        claimantName,
        claimantEmail,
        claimantPhone,
        description,
        profImageUrl,
    });

    await newClaim.save();
    res.status(201).json({ success: true, data: newClaim });
};

export const getClaims = async(req, res, next) => {
    try{
        const claims = await ClaimRequest.find({item: req.query.item});
        res.status(200).json({success: true, data : claims});
    }catch(error){
        res.status(500).json({message : error});
    }

};
