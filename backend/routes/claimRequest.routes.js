import { Router } from "express";

import { createClaimRequest } from "../controllers/claimRequest.controller";

const claimRequestRouter = Router();

claimRequestRouter.post('/claims', createClaimRequest);

export default claimRequestRouter;