import LostItem from '../models/lostItem.model.js';

// Create a new lost item
export const createLostItem = async (req, res, next) => {
    try {
        const newLostItem = new LostItem(req.body);
        const savedLostItem = await newLostItem.save();
        res.status(201).json(savedLostItem);
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
};

// Get all lost items
export const getLostItems = async (req, res, next) => {
    try {
        const lostItems = await LostItem.find();
        res.json(lostItems);
    } catch (error) {
        next(error);
    }
};

// Get a specific lost item by ID
export const getLostItemById = async (req, res, next) => {
    try {
        const lostItem = await LostItem.findById(req.params.id);
        if (!lostItem) {
            return res.status(404).json({ message: 'Lost item not found' });
        }
        res.json(lostItem);
    } catch (error) {
        next(error);
    }
};

// Update a lost item
export const updateLostItem = async (req, res, next) => {
    try {
        const updatedLostItem = await LostItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLostItem) {
            return res.status(404).json({ message: 'Lost item not found' });
        }
        res.json(updatedLostItem);
    } catch (error) {
        next(error);
    }
};

// Delete a lost item
export const deleteLostItem = async (req, res, next) => {
    try {
        const deletedLostItem = await LostItem.findByIdAndDelete(req.params.id);
        if (!deletedLostItem) {
            return res.status(404).json({ message: 'Lost item not found' });
        }
        res.json({ message: 'Lost item deleted successfully' });
    } catch (error) {
        next(error);
    }
};
