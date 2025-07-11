const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/students", (req, res) => {
  res.json([{ id: 1, name: "John" }]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
