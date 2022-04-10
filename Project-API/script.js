
const CN_FACTS_URL = `https://api.chucknorris.io/jokes/random`;


const promise = fetch(CN_FACTS_URL);

var storeFacts = [];

promise
    .then(function (response) {
        console.log("OG Response from API", response);
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processedResponse) {
        console.log("Response after .json()", processedResponse)
        storeFacts.push(processedResponse);
        console.log(storeFacts);
    })

