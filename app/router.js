// Define the handlers
const handlers = {};

// Predefined constants
const HTTP_STATUS_CODES = {
    HTTP_OK: 200,
    HTTP_NOT_FOUND: 404
};

// home work assignment
handlers.hello = function (data, cb) {
    cb(HTTP_STATUS_CODES.HTTP_OK, {
        "message": "Hello Pirple!"
    });
};

// ping handler
handlers.ping = function (data, cb) {
    cb(HTTP_STATUS_CODES.HTTP_OK, {
        "message": "pong"
    });
};

handlers.notFound = function (data, cb) {
    cb(HTTP_STATUS_CODES.HTTP_NOT_FOUND, {
        "message": "not found"
    });
};

const router = {
    hello: handlers.hello,
    ping: handlers.ping,
    notFound: handlers.notFound
};

module.exports = router;