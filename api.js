const axios = require("axios");

const options = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
})

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

exports.allgames = (word) => {
    return options.get(`/${word}`).then(({data}) => {
        console.log(data);
     });
}

