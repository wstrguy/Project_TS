"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userSignup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_services_1 = __importDefault(require("../services/user.services"));
// Creating User controllers
const userSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { lastname, firstname, middlename, dob, email, password, phoneNum } = req.body;
    try {
        // check if user already Exist 
        const userExist = yield user_services_1.default.findByEmail(email);
        if (userExist)
            return res.status(400).json({ message: 'User already exist' });
        // creating Hashed password 
        password = yield bcrypt_1.default.hash(password, 10);
        // Creating user
        const user = yield user_services_1.default.createUser(lastname, firstname, middlename, dob, email, password, phoneNum);
        return res.status(201).json({
            message: 'User created Successfully',
            data: user
        });
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});
exports.userSignup = userSignup;
// User login
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    try {
        const userExist = yield user_services_1.default.findByEmail(email);
        if (!userExist)
            return res.status(400).json({
                message: 'User does not Exist'
            });
        console.log(userExist.password);
        const checkPwd = yield bcrypt_1.default.compare(password, userExist.password);
        console.log(checkPwd);
        if (!checkPwd)
            return res.status(400).json({
                message: 'Incorrect password'
            });
        req.session.user = userExist;
        console.log(req.session.user);
        return res.status(200).json({
            message: 'User Logged In '
        });
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});
exports.userLogin = userLogin;
// Getting all users
// export const getProfile = async
