import 'dotenv/config';
import express from 'express';
import cors from 'cors'

import { connectToDatabase, getDb } from './db/conn.js';
import pings from './routes/pings.js'

connectToDatabase();

const app = express();
// const router = express.Router();
app.use(cors());
app.use('/api/pings', pings);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});