const { Client } = require('pg')


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Postgres2019!',
    port: 5432,
})

client.connect();

client.query('LISTEN "myEvent"');
client.on('notification', function (data) {
    console.log(data.payload);
});

