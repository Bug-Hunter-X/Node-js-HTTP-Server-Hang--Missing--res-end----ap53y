const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: missing res.end()
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // The response will hang indefinitely without this line
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});