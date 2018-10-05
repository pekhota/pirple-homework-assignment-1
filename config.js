
// container for all the environments
const config  = {};

// Staging environment
config.staging = {
    httpPort: 3000,
    httpsPort : 3001,
    envName : 'staging'
};

// Production (default) environment
config.production = {
    httpPort : 5000,
    httpsPort : 5001,
    envName : 'production'

};

// Determine which environment was passed as a command-line argument
let currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environment above, if not, default to production
module.exports = typeof config[currentEnv] === 'object' ? config[currentEnv] : config.production;