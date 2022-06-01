// function displayWordSearch(dataFromApi) {
//   const wordDef = dataFromApi[0].meanings[0].definitions[0].definition;
//   console.log(wordDef);
//   // const wordDiv = document.getElementById("wordDiv");
// }

const form = document.querySelector("#form");
form.addEventListener("submit", getDefinition);

function getDefinition(e) {
  e.preventDefault();
  const word = document.getElementById("searchbox").value;
  console.log(word);
  fetch(`http://localhost:3000/${word}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const wordDef = data[0].meanings[0].definitions[0].definition;
      return wordDef;
    })
    .then((wordDef) => {
      console.log(wordDef);
      document.getElementById("worddescription").innerHTML = wordDef;
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
