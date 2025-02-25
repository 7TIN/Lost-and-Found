import { Router } from "express";

import { createFoundItem, getFoundItems, getFoundItemById, updateFoundItem, deleteFoundItem } from "../controllers/foundItem.controller.js";

const foundItemRouter = Router();

foundItemRouter.post('/', createFoundItem);
foundItemRouter.get('/', getFoundItems);
foundItemRouter.get('/:id', getFoundItemById);
foundItemRouter.put('/:id', updateFoundItem);
foundItemRouter.delete('/:id', deleteFoundItem);

export default foundItemRouter;

