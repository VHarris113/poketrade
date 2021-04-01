var searchForm = $("#search-section");
var pokemonSearchInput = $("#pokemon-search-term");
var cardDisplay = $("#card-display")


function getApi() {
    var requestUrl = "https://api.pokemontcg.io/v2/cards?q=name:" + pokemonSearchInput.val() + "&orderBy=name"
    var i = 0
    fetch(requestUrl).then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
        // console.log(data.data[0].tcgplayer.prices.normal.mid)
        // console.log(data.data.images.small)
        // showCard()
        for (var i = 0; i < data.data.length; i++){
            if (data.data[i].tcgplayer.prices.normal) {
                var imgUrl = data.data[i].images.small;
                var priceTag = data.data[i].tcgplayer.prices.normal.mid;
                console.log(priceTag);
                var imageEl = $("<img>");
                var priceEl = $("<p>")
                priceEl.text("$" + priceTag);
                imageEl.attr("src", imgUrl);
                priceEl.append(imageEl);
                cardDisplay.append(priceEl);
            } else if (data.data[i].tcgplayer.prices.holofoil){
                var imgUrl = data.data[i].images.small;
                var priceTag = data.data[i].tcgplayer.prices.holofoil.mid;
                console.log(priceTag);
                var imageEl = $("<img>");
                var priceEl = $("<p>")
                priceEl.text("$" + priceTag);
                imageEl.attr("src", imgUrl);
                priceEl.append(imageEl);
                cardDisplay.append(priceEl);
            } else if (data.data[i].) {
                return
            }
            // imageEl.append($("<p>").text("$" + priceTag));
            // cardDisplay.append(imageEl);
        }
        
    })
}


// getApi();
searchForm.on("submit", function(event) {
    event.preventDefault();
    getApi();
    
})