const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const students = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

app.get("/", (req, res) => {
  res.send("Welcome to the Students API!");
});

