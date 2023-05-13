"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    if (!req.session.user)
        return res.status(403).json({ error: 'Unauthorized 🔓🔓🔓🔓' });
    req.user = req.session.user; // No need for type assertion
    next();
};
exports.authMiddleware = authMiddleware;
