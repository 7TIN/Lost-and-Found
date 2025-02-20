import { Router } from "express";

import { createFoundItem, getFoundItems, getFoundItemById, updateFoundItem, deleteFoundItem } from "../controllers/foundItem.controller";

const foundItemRouter = Router();

foundItemRouter.post('/', createFoundItem);
foundItemRouter.get('/', getFoundItems);
foundItemRouter.get('/:id', getFoundItemById);
foundItemRouter.put('/:id', updateFoundItem);
foundItemRouter.delete('/:id', deleteFoundItem);

export default foundItemRouter;

