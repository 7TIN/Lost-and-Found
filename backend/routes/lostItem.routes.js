import { Router } from "express";

import { createLostItem, getLostItems, getLostItemById, updateLostItem, deleteLostItem } from "../controllers/lostItem.controller";

const lostItemRouter = Router();

lostItemRouter.post('/', createLostItem);
lostItemRouter.get('/', getLostItems);
lostItemRouter.get('/:id', getLostItemById);
lostItemRouter.put('/:id', updateLostItem);
lostItemRouter.delete('/:id', deleteLostItem);


export default lostItemRouter;