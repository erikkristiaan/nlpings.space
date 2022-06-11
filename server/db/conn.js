import { MongoClient, Db } from 'mongodb';

const connectionURI = 'mongodb://localhost:27017';
const dbName = 'user_pinger_db';

// Create new MongoClient
const client = new MongoClient(connectionURI);

let _db;

async function connectToDatabase() {
    const conn = await client.connect();
    _db = conn.db(dbName);

    return client;
}

function getDb () {
    return _db;
}

export { connectToDatabase, getDb };