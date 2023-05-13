"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const validate_1 = require("../middleware/validate");
exports.router = (0, express_1.Router)();
exports.router.post('/signup', validate_1.signUpMiddleware, user_controller_1.userSignup);
exports.router.post('/login', validate_1.loginMiddleware, user_controller_1.userLogin);
