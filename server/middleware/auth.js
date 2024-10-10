const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];  // Extract the token

  if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    
    req.user = user;  // Attach the user data to the request object
    next();  // Move to the next middleware or route handler
  });
};

module.exports = authenticateToken;
