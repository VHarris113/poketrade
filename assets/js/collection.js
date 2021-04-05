var searchForm = $("#search-section");
var pokemonSearchInput = $("#pokemon-search-term");
var cardDisplay = $("#card-display");
var imageCollectionBox = $("#sortable");

var addButton = $("#cardAddButton");
var removeButton = $("#cardRemoveButton");

var sortableEl = $("#sortable");
var savedCards = [];
var cardIndex = [];

var calledIndex = [];

var storedCard;

var requestUrl = "";

var cardNormal = false;

var cardIndex;
var cardImg;
var cardPrice;
var cardDataId;
var cardNm;
var storedItemList = [];
var deleteId = [];
// gets items from local storage and prints to collection box
function reloadCollection() {
  sortableEl.html("");
  storedItemList = JSON.parse(localStorage.getItem("storedCards")) || [];
  for (var i = 0; i < storedItemList.length; i++) {
    var getMyCard = storedItemList[i];
    var collectionImg = $("<img>");
    var collectionPrice = $("<p id='collectionPrice'>");
    var deleteButton = $("<button>");
    var collectionDisplay = $("<div>");
    var footerDisplay = $("<div>");
    deleteButton.id = getMyCard.id;
    console.log(deleteButton.id)
    deleteButton.on("click", cardDeleteButton);
    deleteButton.text("X");
    // adding price and delete button underneath each card in a box for styling
    collectionImg.attr("src", getMyCard.image);
    collectionPrice.text("$" + getMyCard.price);
    footerDisplay.addClass("collectionFooter");
    // append to sortableEl
    footerDisplay.append(collectionPrice, deleteButton);
    collectionDisplay.append(collectionImg, footerDisplay);
    sortableEl.append(collectionDisplay);
    // indexReset();
    
  }
    

}

function cardDeleteButton() {
    
    // console.log(getDelete);
    // //   var i = getDelete.data;
    // console.log(i);
    // console.log(deleteId);
    
    //   console.log($(this));
    //   console.log(getDelete)
    console.log("Card has been removed from collection.");
    var id = $(this).attr('data-id');

    var filteredList = storedItemList.filter((item) => item.key !== id);
    
    localStorage.setItem("storedCards", JSON.stringify(filteredList));

    reloadCollection();
}

addButton.on("click", function () {
  console.log(requestUrl);
  console.log("Card added to collection.");

  var storedItem = {
    image: cardImg,
    price: cardPrice,
    id: cardDataId,
    index: cardIndex,
    name: cardNm,
  };
  console.log(storedItem);
  storedItemList.push(storedItem);
  localStorage.setItem("storedCards", JSON.stringify(storedItemList));

  reloadCollection();
});

// Initial function
$(function () {
    // makes our stored cards sortable in collection page
  $("#sortable").sortable();
  $("#sortable").disableSelection();
  // gets local storage upon reload
  reloadCollection();
});

function getStorage() {}

function getApi() {
  requestUrl =
    "https://api.pokemontcg.io/v2/cards?q=name:" +
    pokemonSearchInput.val() +
    "&orderBy=name";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].tcgplayer && data.data[i].tcgplayer.prices.normal) {
          var imgUrl = data.data[i].images.small;
          var priceTag = data.data[i].tcgplayer.prices.normal.mid;
          var cardId = data.data[i].id;
          var cardName = data.data[i].name;
          var aTag = $("<a>");
          var imageEl = $("<img>");
          imageEl.addClass("hover-shadow");
          var priceEl = $("<p>");
          var pageBreak = $("<hr size='3' />");
          priceEl.text("$" + priceTag + " - " + i);
          imageEl.attr("src", imgUrl);
          imageEl.attr("data-index", i);
          imageEl.attr("data-name", cardName);
          imageEl.attr("data-price", priceTag);
          imageEl.attr("data-id", cardId);
          imageEl.attr("data-img", imgUrl);
          aTag.append(imageEl, priceEl);
          cardDisplay.append(aTag, pageBreak);
        } else if (
          data.data[i].tcgplayer &&
          data.data[i]?.tcgplayer.prices.holofoil
        ) {
          var imgUrl = data.data[i].images.small;
          var priceTag = data.data[i].tcgplayer.prices.holofoil.mid;
          var cardId = data.data[i].id;
          var cardName = data.data[i].name;
          var aTag = $("<a>");
          var imageEl = $("<img>");
          imageEl.addClass("over-shadow");
          var priceEl = $("<p>");
          var pageBreak = $("<hr size='3' />");
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
          var imgUrl = data.data[i].images.small;
          var cardId = data.data[i].id;
          var cardName = data.data[i].name;
          var aTag = $("<a>");
          var imageEl = $("<img>");
          imageEl.addClass("hover-shadow");
          var priceEl = $("<p>");
          var pageBreak = $("<hr size='3' />");
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

        imageEl.on("click", function (event) {
          var chosenCard = event.target;
          console.log(chosenCard);
          if (chosenCard.matches("img")) {
            cardIndex = $(this).attr("data-index");
            cardImg = $(this).attr("data-img");
            cardPrice = $(this).attr("data-price");
            cardDataId = $(this).attr("data-id");
            cardNm = $(this).attr("data-name");
            console.log(cardIndex);
            console.log(cardImg);
            console.log(cardPrice);
            console.log(cardDataId);
            console.log(cardNm);
          }
        });
      }
    });

  // function indexReset() {
  //     savedCards = [];
  //     cardIndex = [];
  //     calledIndex = [];
  //     requestUrl = '';
  // }
}

searchForm.on("submit", function (event) {
  event.preventDefault();
  cardDisplay.empty();
  getApi();
});

// function cardDeleteButton() {
    
// }

