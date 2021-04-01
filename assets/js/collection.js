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
        // console.log(data.data.images.small)
        // showCard()
        for (var i = 0; i < data.data.length; i++){
                var imgUrl = data.data[i].images.small;
                var imageEl = $("<img>");
                imageEl.attr("src", imgUrl);
                cardDisplay.append(imageEl);
                }
    })
}

// function showCard(imgUrl){
// }


// getApi();
searchForm.on("submit", function(event) {
    event.preventDefault();
    getApi();
})