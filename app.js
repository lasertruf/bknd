const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;

app.set('port',port);

const server = http.createServer(app);
console.log("Running")



server.listen(port);
