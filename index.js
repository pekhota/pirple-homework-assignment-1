const http = require('http');
const https = require('https');
const config = require('./config');
const router = require('./app/router');
const listener = require('./app/listener');

const fs = require('fs');

// Setup https server options
const httpsServerOptions = {
    'key': fs.readFileSync('./https/key.pem'),
    'cert': fs.readFileSync('./https/cert.pem')
};

// Http server
const httpServer = http.createServer(function (req, res) {
    listener(router, req, res);
});

// Https server
const httpsServer = https.createServer(httpsServerOptions, function (req, res) {
    listener(router, req, res);
});

function infoMessage(port) {
    console.log('The server is listening on port ' + port)
}

// starting to lister http server
httpServer.listen(config.httpPort, function () {
    infoMessage(config.httpPort)
});

// starting to lister https server
httpsServer.listen(config.httpsPort, function () {
    infoMessage(config.httpsPort);
});