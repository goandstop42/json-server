const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Assuming you have a db.json file
const middlewares = jsonServer.defaults();

// Use the cors middleware
server.use(cors());

// Use default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Use the JSON Server router
server.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});