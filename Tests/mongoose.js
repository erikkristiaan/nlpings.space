import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'user_pinger_db';
const nPerPage = 2;
const pN = 2;

async function main() {
    // connect
    await client.connect();
    console.log('Connected to database.');

    const db = client.db(dbName);
    const collection = db.collection('userpings');

    const result = await collection
                            .find()
                            .sort({ 'time' : -1 })
                            .skip(pN > 0 ? ((pN - 1) * nPerPage) : 0 )
                            .limit(nPerPage)
                            .toArray();
    console.log(result);

    return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// import mongoose from 'mongoose';
// const { schema } = mongoose;

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/user_pinger_db')
// }

// const pings = await userpings.find();
// console.log(pings);