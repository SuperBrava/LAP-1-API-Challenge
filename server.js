const express = require("express");
const { getWords } = require("./server.controller");
const app = express();

app.use(express.json());

app.get("/:word", getWords);

const port = 3000;
app.listen(port, () => {
  console.log("test " + port);
});
