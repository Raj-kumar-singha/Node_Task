const { v4: uuidv4 } = require('uuid');


// Middleware for generating request ID
const generateRequestId = (req, res, next) => {
    const requestId = req.headers['request-id'] || uuidv4();
    req.headers['request-id'] = requestId;
    console.log("Request Id: ", requestId);
    next();
  };

module.exports = generateRequestId;