console.log('fuck'+process.env.NODE_ENV);
module.exports = require('./env/' + process.env.NODE_ENV + '.js');