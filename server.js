const express = require("express");
const app = express();
const {allgames} = require("./api.js");

// app.get("/", (req, res) => {
//  console.log("Here")
// })

const port = 3000;
app.listen(port, () => {
    console.log("test " + port);
})

allgames("hello");