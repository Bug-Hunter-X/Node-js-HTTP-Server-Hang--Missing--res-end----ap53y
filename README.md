# Node.js HTTP Server Hang: Missing `res.end()`

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` in the response handler.  This can lead to the server hanging and not responding to requests.

## Bug

The `bug.js` file contains a simple HTTP server that omits the crucial `res.end()` call.  This causes the server to remain unresponsive after receiving a request.

## Solution

The `bugSolution.js` file corrects this issue by adding `res.end()` to properly complete the response and close the connection.