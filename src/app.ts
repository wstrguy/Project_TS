// importing express
import express, { Express, Request, Response} from 'express';
import redisClient from './database/redis';
import session from 'express-session'
import connectRedis from 'connect-redis'
import { router as userRouter } from './routes/user.routes'

declare module 'express-session' {
    export interface SessionData {
        user: any
    }
};

  
const RedisStore = connectRedis(session);

const store = new RedisStore({ client: redisClient });

const app: Express = express();
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        resave: false,
        saveUninitialized: false,
        store,
        cookie: {
            maxAge: 600000,
            secure: false,
            httpOnly: true,
        }
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', userRouter);

app.all('*', (req: Request, res: Response ) => {
    return res
    .status(404)
    .json({ message: 'Page does not Exist'})
})









// exporting app
export default app;