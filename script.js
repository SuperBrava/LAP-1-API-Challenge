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
      return data;
    })
    .then((data) => {
      const wordDef = data[0].meanings[0].definitions[0].definition;
      console.log(wordDef);
      const wordphoentics = data[0].phonetics[1].text;
      document.getElementById("wordname").innerHTML = word;
      document.getElementById("worddescription").innerHTML = wordDef;
      document.getElementById("wordphonetics").innerHTML = wordphoentics;
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
