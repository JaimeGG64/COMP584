
const categories = ["animal", "career", "celebrity", "dev", "fashion", "food", "history", "money", "movie", "music", "sport", "travel"];

var templateFacts = '';

categories.forEach((element) => {
    const promise = fetch(`https://api.chucknorris.io/jokes/random?category=${element}`);
    promise
        .then(function (response) {
            // console.log("OG Response from API", response);
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processedResponse) {
            // console.log("Response after .json()", processedResponse)
            let getContainer = document.querySelector(".cn-facts-wrapper")
            getContainer.innerHTML += `
            <div class="fact-box">
                <div class="fact-box__image"></div>
                <h2 class="fact-box__date">April 4, 2020</h2>
                <p class="fact-box__fact">${processedResponse.value}</p>
            </div>
            `
        })
        .catch((err) => console.log(err));
})
