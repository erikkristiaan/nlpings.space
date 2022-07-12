import 'dotenv/config';
import { MongoClient, Db } from 'mongodb';

const connectionURI = process.env.DB_URI;
const dbName = process.env.DB_NAME;

// Create new MongoClient
const client = new MongoClient(connectionURI);

let _db;

async function connectToDatabase() {
  const conn = await client.connect();
  _db = conn.db(dbName);

  return client;
}

function getDb() {
  return _db;
}

export { connectToDatabase, getDb };
