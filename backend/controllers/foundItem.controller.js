// controllers/foundItemController.js
import FoundItem from '../models/foundItem.model.js';

// Create a new found item
export const createFoundItem = async (req, res, next) => {
    try {
        const newFoundItem = new FoundItem(req.body);
        const savedFoundItem = await newFoundItem.save();
        res.status(201).json(savedFoundItem);
    } catch (error) {
        next(error);
    }
};

// Get all found items
export const getFoundItems = async (req, res, next) => {
    try {
        const foundItems = await FoundItem.find();
        res.json(foundItems);
    } catch (error) {
        next(error);
    }
};

// Get a specific found item by ID
export const getFoundItemById = async (req, res, next) => {
    try {
        const foundItem = await FoundItem.findById(req.params.id);
        if (!foundItem) {
            return res.status(404).json({ message: 'Found item not found' });
        }
        res.json(foundItem);
    } catch (error) {
        next(error);
    }
};

// Update a found item
export const updateFoundItem = async (req, res, next) => {
    try {
        const updatedFoundItem = await FoundItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFoundItem) {
            return res.status(404).json({ message: 'Found item not found' });
        }
        res.json(updatedFoundItem);
    } catch (error) {
        next(error);
    }
};

// Delete a found item
export const deleteFoundItem = async (req, res, next) => {
    try {
        const deletedFoundItem = await FoundItem.findByIdAndDelete(req.params.id);
        if (!deletedFoundItem) {
            return res.status(404).json({ message: 'Found item not found' });
        }
        res.json({ message: 'Found item deleted successfully' });
    } catch (error) {
        next(error);
    }
};
