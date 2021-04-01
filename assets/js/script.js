var cardDisplay = $("cardSelector");

function init() {
    getApiInfo();
}


function getApiInfo() {
    var requestUrl = "https://api.pokemontcg.io/v2/cards"
    fetch(requestUrl).then(function (response){
        return response.json();
    }).then(function (data){
        // generateRandomCards();
        console.log(data.data[0].images.small)
        generateRandomCards();
        function generateRandomCards(cardIndex) {
            var number = Math.floor(Math.random() * cardIndex);
            for (var i = 0; i < 3; i++) {
                console.log(data.data[number].images.small)
                var imgUrl = data.data[number].images.small;
                var imageEl = $("<img>");
                imageEl.attr("src", imgUrl);
                card.append(priceEl);
            }
        }
    })
};


init();