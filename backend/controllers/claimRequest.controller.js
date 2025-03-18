import ClaimRequest from "../models/claimRequest.model";

export const createClaimRequest = async (req, res, next) => {
    const { itemId, claimantName, claimantEmail, claimantPhone, description, imageUrl } = req.body;

    const newClaim = new ClaimRequest({
        item: itemId,
        claimantName,
        claimantEmail,
        claimantPhone,
        description,
        imageUrl
    });

    await newClaim.save();
    res.status(201).json({ success: true, data: newClaim });
};
