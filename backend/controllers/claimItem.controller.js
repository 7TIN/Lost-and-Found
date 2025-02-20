import ClaimItem from '../models/clamItem.modle.js';

// Create a new claim for an item
export const createClaimItem = async (req, res, next) => {
    try {
        const newClaimItem = new ClaimItem(req.body);
        const savedClaimItem = await newClaimItem.save();
        res.status(201).json(savedClaimItem);
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
};

// Get all claims
export const getClaims = async (req, res, next) => {
    try {
        const claims = await ClaimItem.find().populate('itemId');
        res.status(200).json(claims); // Added a status code for consistency
    } catch (error) {
        next(error);
    }
};

// Get a specific claim by ID
export const getClaimById = async (req, res, next) => {
    try {
        const claim = await ClaimItem.findById(req.params.id);

        if (!claim) {
            return res.status(404).json({ message: 'Claim not found' });
        }

        res.status(200).json(claim); // Added a status code for consistency
    } catch (error) {
        next(error);
    }
};

// Update a claim
export const updateClaimItem = async (req, res, next) => {
    try {
        const updatedClaimItem = await ClaimItem.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedClaimItem) {
            return res.status(404).json({ message: 'Claim not found' });
        }

        res.status(200).json(updatedClaimItem); // Added a status code for consistency
    } catch (error) {
        next(error);
    }
};

// Delete a claim
export const deleteClaimItem = async (req, res, next) => {
    try {
        const deletedClaimItem = await ClaimItem.findByIdAndDelete(req.params.id);

        if (!deletedClaimItem) {
            return res.status(404).json({ message: 'Claim not found' });
        }

        res.status(200).json({ message: 'Claim deleted successfully' }); // Added a status code for consistency
    } catch (error) {
        next(error);
    }
};
