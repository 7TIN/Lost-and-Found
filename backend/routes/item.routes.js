import { Router } from "express";
import { getItems } from "../controllers/item.controller.js";

const itemRouter = Router();

itemRouter.get('/',getItems);

export default itemRouter;
