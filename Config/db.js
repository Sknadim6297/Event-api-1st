const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const dbName = 'event-api';
async function connectToDB() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to database');
    return client.db(dbName);
}

module.exports = { connectToDB };
