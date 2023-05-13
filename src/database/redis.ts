import { createClient } from 'redis';


const redisClient = createClient({
    password: process.env.REDIS_PASSWORD,
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
});

redisClient.on('connect', () => {
    console.log('Redis Connected Successfully');
    
});
redisClient.on('error', (err) => {
    console.error(err);
    
});

export default redisClient;