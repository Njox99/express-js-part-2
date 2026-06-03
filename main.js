const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("GET: Sema dunia!");
});

app.post("/", (req, res) => {
  res.send("POST: post endpoint");
});

app.put("/", (req, res) => {
  res.send("UPDATE: update request");
});

app.delete("/", (req, res) => {
  res.send("DELETE: delete request");
});

app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});

// APP.GET(PATH, HANDLER)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// nodemon
