var searchForm = $("#search-section");
var pokemonSearchInput = $("#pokemon-search-term");
var cardDisplay = $("#card-display");
var imageCollectionBox = $("#sortable");

var addButton = $("#cardAddButton");
var removeButton = $("#cardRemoveButton");

var sortableEl = $('#sortable');
var savedCards = [];
var cardIndex = [];

var calledIndex = [];

var storedCard;

var requestUrl = '';

var cardNormal = false;

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

function getStorage() {

};


// localstorage only pulling from first getApi()
function getApi() {
    requestUrl = "https://api.pokemontcg.io/v2/cards?q=name:" + pokemonSearchInput.val() + "&orderBy=name";
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
                var cardId = data.data[i].id;
                var cardName = data.data[i].name;
                // console.log(priceTag);
                cardNormal = true;
                var aTag = $("<a>");
                var imageEl = $("<img>")
                imageEl.addClass("hover-shadow");
                var priceEl = $("<p>")
                var pageBreak = $("<hr size='3' />")
                priceEl.text("$" + priceTag + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                imageEl.attr("data-name", cardName);
                imageEl.attr("data-price", priceTag);
                imageEl.attr("data-id", cardId);
                imageEl.attr("data-img", imgUrl);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag, pageBreak);
            } else if (data.data[i].tcgplayer && data.data[i]?.tcgplayer.prices.holofoil){
                var imgUrl = data.data[i].images.small;
                var priceTag = data.data[i].tcgplayer.prices.holofoil.mid;
                var cardId = data.data[i].id;
                var cardName = data.data[i].name;
                // console.log(priceTag);
                var aTag = $("<a>");
                var imageEl = $("<img>");
                imageEl.addClass("over-shadow");
                var priceEl = $("<p>")
                var pageBreak = $("<hr size='3' />")
                priceEl.text("$" + priceTag + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                imageEl.attr("data-name", cardName);
                imageEl.attr("data-price", priceTag);
                imageEl.attr("data-id", cardId);
                imageEl.attr("data-img", imgUrl);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag, pageBreak);
            } else if (!data.data[i].tcgplayer) {
                // console.log("next");
                var imgUrl = data.data[i].images.small;
                var cardId = data.data[i].id;
                var cardName = data.data[i].name;
                // var priceTag = data.data[i].tcgplayer.prices.holofoil.mid;
                // console.log(priceTag);
                var aTag = $("<a>");
                var imageEl = $("<img>");
                imageEl.addClass("hover-shadow");
                var priceEl = $("<p>")
                var pageBreak = $("<hr size='3' />")
                priceEl.text("$0.00" + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                imageEl.attr("data-name", cardName);
                imageEl.attr("data-price", priceTag);
                imageEl.attr("data-id", cardId);
                imageEl.attr("data-img", imgUrl);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag, pageBreak);
            }

 
            imageEl.on('click', function (event) {
                var chosenCard = event.target
                cardIndex = $(this).attr("data-index");
                
                if (chosenCard.matches("img")){
                    
                    cardImg = $(this).attr("data-img");
                    cardPrice = $(this).attr("data-price");
                    cardId = $(this).attr("data-id");
                    cardNm = $(this).attr("data-name")
                    console.log(cardIndex);
                    console.log(cardImg);
                    console.log(cardPrice);
                    console.log(cardId);
                    console.log(cardNm);
                
                    addButton.on("click", function() {
                        // calledIndex = cardIndex;
                        console.log(requestUrl);
                        console.log('Card added to collection.');
                        // if (cardIndex = data.data.length) {
                                // storedCard = JSON.parse(localStorage.getItem("storedCard"));
                                var storedItem = {
                                    image: cardImg,
                                    price: cardPrice,
                                    id: cardId,
                                    index: cardIndex,
                                    name: cardNm
                                }
                                // storedCard.push(storedItem);
                                localStorage.setItem("storedCard", JSON.stringify(storedItem)); 
                            
                            
                        // }
                        // get card to collection storage
                        addToCollection();
                    }); 
                
                }



            
            }); 

            // imageEl.append($("<p>").text("$" + priceTag));
            // cardDisplay.append(imageEl); 
            // put if it doesn't exist first
        }
    
    });
 
    function addToCollection() {
        var getMyCard = JSON.parse(localStorage.getItem("storedCard"));
        
        var collectionImg = $('<img>');
        var collectionPrice = $('<p>');
        var collectionDisplay = $('<div>')
        collectionImg.attr('src', getMyCard.image);
        collectionPrice.text("$" + getMyCard.price)
        collectionDisplay.append(collectionImg, collectionPrice);
        sortableEl.append(collectionDisplay);
        indexReset();
    }

    function indexReset() {
        savedCards = [];
        cardIndex = [];
        calledIndex = [];
        requestUrl = '';
    }

    // select card

    // aTag.on('click', function() {
    //     cardIndex === data.data.length;
    //     console.log(cardIndex);
    // });

    // add card to local storage
        
// $(document).ready(function() {
//     searchButton.on("click", function (event) {
//   event.preventDefault();
//   console.log("the button is working");
//     // cardDisplay.empty();
//     // console.log(pokemonSearchInput.val());
//     // if (!s) {
//     //   alert("You must enter the name of a Pokemon card.");
//     //   return;
//     // }
//     // getApi();
// })

// })

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