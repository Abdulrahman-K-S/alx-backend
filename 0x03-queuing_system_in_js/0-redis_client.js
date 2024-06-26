import redis from "redis";

// Creates a client which listens on local host by default
// with the port 6379
const client = redis.getClient();

// Executes when the connection is executed correctly
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

// Executes when there's an error in the conection
client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});