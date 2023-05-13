import 'dotenv/config'
import app from './app'
import connDb from './database/db'
const port: number = 3345

app.listen(port, () => {
    console.log(`Server running on ${port}`);
    connDb();
})

