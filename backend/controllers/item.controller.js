import Item from "../models/item.model.js";

export const getItems = async(req, res, next) => {

    try {
        const items = await Item.find();
        res.status(200).json({success : true, data : items })
    }catch (error){
        next(error);
    }
}