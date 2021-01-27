const { Client } = require('pg');

require('dotenv').config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

client.connect();


client.query("notify create_contract, 'hello i am the event';");


// notify create_contract, 'hello i am the event';