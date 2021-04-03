var searchForm = $("#search-section");
var cardDisplay = $("#card-display");
var imageCollectionBox = $("#sortable");

var addButton = $("#cardAddButton");
var removeButton = $("#cardRemoveButton");

var sortableEl = $('#sortable');
var savedCards = [];
var cardIndex = [];

var calledIndex = [];

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

function getStorage() {
    
};



function getApi() {
    var pokemonSearchInput = $("#pokemon-search-term").val();
    var requestUrl = "https://api.pokemontcg.io/v2/cards?q=name:" + pokemonSearchInput + "&orderBy=name";
    // console.log(pokemonSearchInput)
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
                // console.log(priceTag);
                var aTag = $("<a>");
                var imageEl = $("<img>")
                imageEl.addClass("hover-shadow");
                var priceEl = $("<p>")
                var pageBreak = $("<hr size='3' />")
                priceEl.text("$" + priceTag + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                imageEl.attr("data-price", priceTag);
                imageEl.attr("data-id", cardId);
                imageEl.attr("data-img", imgUrl);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag, pageBreak);
            } else if (data.data[i].tcgplayer && data.data[i].tcgplayer.prices.holofoil){
                var imgUrl = data.data[i].images.small;
                var priceTag = data.data[i].tcgplayer.prices.holofoil.mid;
                var cardId = data.data[i].id;
                // console.log(priceTag);
                var aTag = $("<a>");
                var imageEl = $("<img>");
                imageEl.addClass("over-shadow");
                var priceEl = $("<p>")
                var pageBreak = $("<hr size='3' />")
                priceEl.text("$" + priceTag + " - " + i);
                imageEl.attr("src", imgUrl);
                imageEl.attr("data-index", i);
                imageEl.attr("data-price", priceTag);
                imageEl.attr("data-id", cardId);
                imageEl.attr("data-img", imgUrl);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag, pageBreak);
            } else {
                var imgUrl = data.data[i].images.small;
                var cardId = data.data[i].id;
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
                imageEl.attr("data-price", priceTag);
                imageEl.attr("data-id", cardId);
                imageEl.attr("data-img", imgUrl);
                aTag.append(imageEl, priceEl);
                cardDisplay.append(aTag, pageBreak);
            }

        }; 
        
    });  
    // save card info into an array of objects (card worth, name, and image, id) similar to weather and code quiz
    
    // function addToCollection() {
        //     // var getMyCard = JSON.parse(localStorage.getItem("storedCard"));
        //     var myCardCollection = JSON.parse(localStorage.getItem("savedCards")) || [];
        // }
        // imageEl.append($("<p>").text("$" + priceTag));
        // cardDisplay.append(imageEl); 
        // put if it doesn't exist first
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

cardDisplay.on("click", function(event){
    var chosenCard = event.target;
    
    if (chosenCard.matches("img")){
        cardIndex = $(this).attr("data-index");
        cardImg = $(this).attr("data-img");
        cardPrice = $(this).attr("data-price");
        cardId = $(this).attr("data-id");
        console.log(cardIndex);
        console.log(cardImg);
        console.log(cardPrice);
        console.log(cardId);
        
    }
})
// addButton.on("click", function() {
// var myCardCollection = JSON.parse(localStorage.getItem("savedCards")) || [];
//     // calledIndex = cardIndex;
//     // console.log(calledIndex);
//     // if (cardIndex = data.data.length) {
//     //     localStorage.setItem("savedCards", JSON.stringify(myCardCollection)); 
//     // }
//     // get card to collection storage
//     // addToCollection();
//     console.log('Card added to collection.');
//     // cardIndex = "";
//     var collectionImg = $('<img>');
//     collectionImg.attr('src', myCardCollection);
//     sortableEl.append(collectionImg);
//     var cardData = {
//         id: cardId,
//         image: imgUrl,
//         name: pokemonSearchInput,
//         price: priceTag
//     };
//     myCardCollection.push(cardData);
//     console.log(myCardCollection);
//     localStorage.setItem("savedCards", JSON.stringify(myCardCollection));



// getApi();
searchForm.on("submit", function(event) {
    event.preventDefault();
    cardDisplay.empty();
    getApi();

})
    
//     // addButton.on("click", function() {
//     //     console.log('Card added to collection.');
//     //     button.on('click', function(event) {
//     //         event.preventDefault();
//     //         localStorage.setItem("storedCard", JSON.stringify(data.data[0].images.small)); 
//     //     })
//         // if () {

//         // } else {
//         //     return;
//         // }
    
// // remove card from local storage
// removeButton.on("click", function() {
//     console.log("Card has been removed from collection.");
// })

