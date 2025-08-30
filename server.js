const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello from Node.js App inside Docker!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
