const jwt = require('jsonwebtoken');

// JWT authentication middleware
function jwtMiddleware(req, res, next) {
  // Check for JWT token in request header
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    // Verify token
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

module.exports = jwtMiddleware;
