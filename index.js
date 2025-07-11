const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

app.get("/students", (req, res) => {
  res.json({ students });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});