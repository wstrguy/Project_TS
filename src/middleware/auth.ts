import { Response, NextFunction, Request } from 'express';
import { IGetUserAuth } from '../models/user.model';



export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.session.user)
      return res.status(403).json({ error: 'Unauthorized 🔓🔓🔓🔓' });
    (req as IGetUserAuth).user = req.session.user; // No need for type assertion
    next();
  };