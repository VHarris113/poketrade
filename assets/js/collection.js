var searchForm = $("#search-section");
var pokemonSearchInput = $("#pokemon-search-term");
var cardDisplay = $("#card-display");
var imageCollectionBox = $("#sortable");

var addButton = $("#cardAddButton");
var removeButton = $("#cardRemoveButton");

var cardIndex = [];

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

function getStorage() {

}



function getApi() {
    var requestUrl = "https://api.pokemontcg.io/v2/cards?q=name:" + pokemonSearchInput.val() + "&orderBy=name";
    // var i = 0
    fetch(requestUrl).then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
        // console.log(data.data[0].tcgplayer.prices.normal.mid)
        // console.log(data.data.images.small)
        // showCard()
        for (var i = 0; i < data.data.length; i++){
            if (data.data[i].tcgplayer && data.data[i].tcgplayer.prices.normal) {
                var imgUrl = data.data[i].images.small;
                var priceTag = data.data[i].tcgplayer.prices.normal.mid;
                // console.log(priceTag);
                var aTag = $("<a>");
                var imageEl = $("<img>");
                var priceEl = $("<p>")
                priceEl.text("$" + priceTag + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag);
            } else if (data.data[i].tcgplayer && data.data[i]?.tcgplayer.prices.holofoil){
                var imgUrl = data.data[i].images.small;
                var priceTag = data.data[i].tcgplayer.prices.holofoil.mid;
                // console.log(priceTag);
                var aTag = $("<a>");
                var imageEl = $("<img>");
                var priceEl = $("<p>")
                priceEl.text("$" + priceTag + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag);
            } else if (!data.data[i].tcgplayer) {
                // console.log("next");
                var imgUrl = data.data[i].images.small;
                // var priceTag = data.data[i].tcgplayer.prices.holofoil.mid;
                // console.log(priceTag);
                var aTag = $("<a>");
                var imageEl = $("<img>");
                var priceEl = $("<p>")
                priceEl.text("$0.00" + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag);
            }

        imageEl.on('click', function () {
            cardIndex = $(this).attr("data-index");
            console.log(cardIndex);
            
            addButton.on("click", function() {
                console.log('Card added to collection.');
                if (cardIndex = data.data.length) {
                    localStorage.setItem("storedCard", JSON.stringify(data.data[0].images.small)); 
                }
                // get card to collection storage
                addToCollection();
            }); 
        
        });  
        

        function addToCollection() {
            var getMyCard = JSON.parse(localStorage.getItem("storedCard"));
            var collectionImg = $('<img>');
            collectionImg.attr('src', getMyCard);
            sortableEl.append(collectionImg);
        }




            // imageEl.append($("<p>").text("$" + priceTag));
            // cardDisplay.append(imageEl); 
            // put if it doesn't exist first
        }
    
    });
    // select card

    // aTag.on('click', function() {
    //     cardIndex === data.data.length;
    //     console.log(cardIndex);
    // });

    // add card to local storage
        

}

// getApi();
searchForm.on("submit", function(event) {
    event.preventDefault();
    cardDisplay.empty();
    getApi();

})
    
    // addButton.on("click", function() {
    //     console.log('Card added to collection.');
    //     button.on('click', function(event) {
    //         event.preventDefault();
    //         localStorage.setItem("storedCard", JSON.stringify(data.data[0].images.small)); 
    //     })
        // if () {

        // } else {
        //     return;
        // }
    
// remove card from local storage
removeButton.on("click", function() {
    console.log("Card has been removed from collection.");
})