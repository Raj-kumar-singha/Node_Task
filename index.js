const express = require('express');
const jwt = require('jsonwebtoken');
const generateRequestId = require('./handlers/auth.js');
const apicontroller = require('./controller/api');

const app = express();
app.use(express.json());

// Secret key for JWT
const secretKey = 'mysecretkey';

// Mock user data
const users = [
  { id: 1, username: 'myuser', password: 'mypassword' },
  { id: 2, username: 'anotheruser', password: 'anotherpassword' }
];


// Login API that generates JWT token
app.post('/api/login', generateRequestId, (req, res) => {
  const { username, password } = req.body;

  // Find user by username and password
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey,{expiresIn:"1800s"});

  res.json({ token });
});

// GET API with JWT authentication and query parameters
app.get('/api/os', apicontroller.getJsonData);

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});