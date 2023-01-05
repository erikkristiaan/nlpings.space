import 'dotenv/config';
import { MongoClient, Db } from 'mongodb';

const db_name = process.env.ENV_DATABASE_NAME;
const db_user = process.env.ENV_DATABASE_USERNAME;
const db_pass = process.env.ENV_DATABASE_PASSWORD;

const client = new MongoClient(`mongodb://${db_user}:${db_pass}@mongo_db:27017/?authMechanism=DEFAULT`);

let _db;

async function connectToDatabase() {
  const conn = await client.connect();
  _db = conn.db(db_name);

  return client;
}

function getDb() {
  return _db;
}

export { connectToDatabase, getDb };