const { allgames } = require("./api.js");
const { fetchWords } = require("./server.model");

exports.getWords = (req, res) => {
  const word = req.params.word;
  allgames(word).then((data) => {
    console.log(data[0]);
    res.send(data);
  });
};
