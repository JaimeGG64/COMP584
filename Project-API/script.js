
const queryCollection = [
    {
        category: "animal",
        imageLocation: "images/cn-beard.jpg"
    },
    {
        category: "career",
        imageLocation: "images/cn-cowboy-1.jpg"
    },
    {
        category: "celebrity",
        imageLocation: "images/cn-cowboy-2.jpg"
    },
    {
        category: "movie",
        imageLocation: "images/cn-delta.jpg"
    },
    {
        category: "food",
        imageLocation: "images/cn-regular.jpg"
    },
    {
        category: "dev",
        imageLocation: "images/cn-young.jpg"
    }
];

var templateFacts = '';

queryCollection.forEach((element) => {
    const promise = fetch(`https://api.chucknorris.io/jokes/random?category=${element.category
        }`);
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
                <img class="fact-box__image" src="${element.imageLocation}" />
                <p class="fact-box__fact">${processedResponse.value}</p>
            </div>
            `
        })
        .catch((err) => console.log(err));
})
