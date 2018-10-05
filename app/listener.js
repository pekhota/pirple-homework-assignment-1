const url = require('url');
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

// processing request payload
const processRequestPayload = function (req, cb) {
    let buffer = '';
    req.on('data', function (data) {
        buffer += decoder.write(data);
    });

    req.on('end', function () {
        buffer += decoder.end();

        cb(buffer);


    });
};

// method to process each requests
const listenerMethod = function listenerMethod(router, req, res) {
    let parsedUrl = url.parse(req.url, true);

    let method = req.method.toLowerCase();
    let trimmedPath = parsedUrl.pathname.replace(/^\/|\/$/g, '');
    let query = parsedUrl.query;
    let headers = [];

    let options = {
        method: method,
        route: trimmedPath,
        query: query,
        headers: headers
    };

    // get chosen router or default one if not passed
    let chosenHandler = typeof router[trimmedPath] !== 'undefined' ? router[trimmedPath] : router['notFound'];

    // process request payload and convert it to buffer
    processRequestPayload(req, function (buffer) {

        // Route the request to the handler specified in the router
        chosenHandler(options, function (statusCode, payload) {

            // validate handler status code
            statusCode = typeof statusCode === 'number' ? statusCode : 200;

            // validate handler payload
            payload = typeof payload === "object" ? payload : {};

            // Convert the payload to a string
            let payloadString = JSON.stringify(payload);

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
};

module.exports = listenerMethod;