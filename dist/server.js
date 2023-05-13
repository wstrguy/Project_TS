"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./database/db"));
const port = 3345;
app_1.default.listen(port, () => {
    console.log(`Server running on ${port}`);
    (0, db_1.default)();
});
