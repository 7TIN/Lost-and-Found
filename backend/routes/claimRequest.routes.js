import { Router } from "express";

import { createClaimRequest, getClaims } from "../controllers/claimRequest.controller.js";

const claimRequestRouter = Router();

claimRequestRouter.post('/', createClaimRequest);
claimRequestRouter.get('/', getClaims);

export default claimRequestRouter;