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
        showCard(data.data[i].images.small)
    })
}

function showCard(imgUrl){
    for (var i = 0; i < imgUrl.length; i++){
            var imageEl = $("<img>");
            imageEl.attr("src", imgUrl);
            cardDisplay.append(imageEl);
            }
}


// getApi();
searchForm.on("submit", function(event) {
    event.preventDefault();
    getApi();
})