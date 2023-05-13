"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing express
const express_1 = __importDefault(require("express"));
const redis_1 = __importDefault(require("./database/redis"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const user_routes_1 = require("./routes/user.routes");
redis_1.default.connect();
;
const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
const store = new RedisStore({ client: redis_1.default });
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({
    secret: String(process.env.SESSION_SECRET),
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
        maxAge: 600000,
        secure: false,
        httpOnly: true,
    }
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api', user_routes_1.router);
app.all('*', (req, res) => {
    return res
        .status(404)
        .json({ message: 'Page does not Exist' });
});
// exporting app
exports.default = app;
