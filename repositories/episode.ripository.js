const fetch = require('node-fetch');

let url = "http://stapi.co/api/v1/rest/episode/search";
let settings = { method: "Get" };

episodes = fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        return json;
    })
    .catch(function(){
        console.log('promis not handled');
    });

module.exports = {episodes};
