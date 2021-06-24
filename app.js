//express server

const express = require("express");
const app = express();
const path = require("path");
const port = 80;

app.use(express.static(path.join(__dirname, "build")));

if (process.env.NODE_ENV === "production") {
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(port, () => {
  console.log(`server listening at port http://localhost:${port}`);
});
