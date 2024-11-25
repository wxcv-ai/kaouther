const http = require('http');
const { Client } = require('pg');
const url = require('url');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'databiz232',
    database: 'data',
});

client.connect();

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        return res.end();
    }

    const queryObject = url.parse(req.url, true).query;
    const symbol = queryObject.symbol;

    if (req.method === 'GET' && symbol) {
        try {
            const result = await client.query('SELECT date, open, high, low, close FROM symbols WHERE symbol = $1 ORDER BY date ASC ', [symbol]);
            const candles = result.rows.map(row => ({
                x: new Date(row.date).getTime(),
                y: [parseFloat(row.open), parseFloat(row.high), parseFloat(row.low), parseFloat(row.close)],
            }));

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(candles));
        } catch (error) {
            console.error('Error fetching data:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error fetching data from database');
        }
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad request: missing symbol query parameter');
    }
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
