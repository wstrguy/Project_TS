"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
    }
});
redisClient.on('connect', () => {
    console.log('Redis Connected Successfully');
});
redisClient.on('error', (err) => {
    console.error(err);
});
exports.default = redisClient;
