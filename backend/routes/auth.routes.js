import { Router } from 'express';

import { signUp, signIn, logOut} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', signIn);
authRouter.post('/logout', logOut);

export default authRouter;