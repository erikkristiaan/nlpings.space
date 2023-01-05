import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';

import { connectToDatabase, getDb } from './db/conn.js';
import pings from './routes/pings.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(cors()); // enable cors when react app is being run in an seperate development enviroment

connectToDatabase();

app.use('/api/pings', pings);

app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.listen(process.env.ENV_SERVER_PORT, () => {
  console.log(`Server is listening on port ${process.env.ENV_SERVER_PORT}`);
});
