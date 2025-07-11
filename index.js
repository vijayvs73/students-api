const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Students API!');
});

// /students route
app.get('/students', (req, res) => {
  res.json([{ id: 1, name: "John" }]);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
