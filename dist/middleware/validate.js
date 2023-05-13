"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginMiddleware = exports.signUpMiddleware = void 0;
const signUpMiddleware = (req, res, next) => {
    const { lastname, firstname, middlename, email, password, phoneNum } = req.body;
    switch (true) {
        case !lastname:
            return res.status(400).json({ message: 'Lastname is Required!' });
        case !firstname:
            return res.status(400).json({ message: 'Firstname is Required!' });
        case !middlename:
            return res.status(400).json({ message: 'Middlename is Required!' });
        case !email:
            return res.status(400).json({ message: 'Email is Required!' });
        case !password || password.length < 5:
            return res.status(400).json({ message: 'Password is Required and must be greater than 5 characters!' });
        case !phoneNum:
            return res.status(400).json({ message: 'Phone Number is Required!' });
        default:
            next();
    }
};
exports.signUpMiddleware = signUpMiddleware;
const loginMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    switch (true) {
        case !email:
            return res.status(400).json({ message: 'Email is Required!' });
        case !password:
            return res.status(400).json({ message: 'Password is Invalid!' });
        default:
            next();
    }
};
exports.loginMiddleware = loginMiddleware;
