const { Client } = require('pg');

require('dotenv').config();

const events = require("./events");

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

client.connect();

events((eventListener) => client.query('LISTEN ' + eventListener));

client.on('notification', function (data) {
    events(function (eventListener, func) {
        if (eventListener == data.channel)
            func(data.payload)
    });
});