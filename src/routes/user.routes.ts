import { Router } from 'express';
import { userSignup, userLogin, getProfile } from '../controller/user.controller';
import { authMiddleware } from '../middleware/auth';
import { signUpMiddleware, loginMiddleware } from '../middleware/validate';

export const router: Router = Router()

router.post('/signup', signUpMiddleware, userSignup);
router.post('/login', loginMiddleware, userLogin);

router.get('/profile', authMiddleware, getProfile)
