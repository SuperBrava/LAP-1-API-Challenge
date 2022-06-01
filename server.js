const express = require("express");
const cors = require("cors");
const { getWords } = require("./server.controller");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/:word", getWords);

const port = 3000;
app.listen(port, () => {
  console.log("test " + port);
});
