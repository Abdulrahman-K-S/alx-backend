import redis from "redis";

// Creates a client which listens on local host by default
// with the port 6379
const client = redis.createClient();

// Executes when the connection is executed correctly
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

// Executes when there's an error in the conection
client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, redis.print());
}

function displaySchoolValue(schoolName) {
    client.get(schoolName, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(result);
    })
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
