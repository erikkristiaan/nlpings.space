import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';

import { connectToDatabase, getDb } from './db/conn.js';
import pings from './routes/pings.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectToDatabase();

const app = express();
// const router = express.Router();
app.use(cors());
app.use('/api/pings', pings);
app.use(express.static(path.join(__dirname, '../app/build')));

// app.use((req, res, next) => {
//     res.redirect('/');
// });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/build', 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});