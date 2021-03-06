var cardInput;
var tradeInput = $("#tradeSearchInput");
var searchForm = $("#tradeSearch");
var mySearchInput = $("#mySearchInput");
var mySearch = $("#mySearch");
var partnerTradeButton = $("#partner-add-to-trade");
var partnerTradeDisplay = $("#trade-img-holder");
var myTradeButton = $("#collection-to-trade");
var myTradeDisplay = $("#my-trade-display")
var pokeName;
var myCardImg = $("#img-holder");
var tradeImg = $("#trade-img-holder");
var searchResultImg = $("#searchResults");
var button = $("#matchBtn");
var partnerCollectionPrices = [];
var partnerPriceTotal = 0;
var myCollectionPrices = [];
var myPriceTotal = 0;
var convertedPrice1El = $("#convertedPrice1");
var convertedPrice2El = $("#convertedPrice2");
var matchBut = $("#matchBtn");
var currencySelection = $("#currency");
var myCollectionTotalEl = $("#myCollectionTotal");
var tradeCollectionTotalEl = $("tradeCollectionTotal");
var goodTradeEl = $("#goodTrade");
var badTradeEl = $('#badTrade');
var tradeEvalEl = $('#tradeEval');

//array of currencies
var currencies = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTC",
  "BTN",
  "BWP",
  "BYN",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "STD",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XAG",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMK",
  "ZMW",
  "ZWL",
];

var storedItemList = [];
var collectionResultsEl = $('#collectionResults')

function currencyConvert(x, y) {
  var currencyUrl = `https://free.currconv.com/api/v7/convert?q=USD_${x}&compact=ultra&apiKey=53972c8322e6040cface`;
  if (x == "USD") {
    convertedPrice1El.text(y);
    evaluateCards();
  } else {
    fetch(currencyUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(Object.values(data));
        var lookupValue = Object.values(data);
        var exchangeRate = lookupValue[0];
        var yNum = parseInt(y, 10);
        console.log(exchangeRate);
        console.log(typeof exchangeRate);
        var newValue = yNum * exchangeRate;
        var newValue1 = newValue.toFixed(2);
        console.log(newValue1);
        convertedPrice1El.text("Converted Price = " + newValue1);
        evaluateCards();
      });
  } 
}

function currencyConvertTradeCard(x, y) {
  var currencyUrl = `https://free.currconv.com/api/v7/convert?q=USD_${x}&compact=ultra&apiKey=53972c8322e6040cface`;

  if (x == "USD") {
    convertedPrice2El.text(y);
    evaluateCards();
  } else {
    fetch(currencyUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(Object.values(data));
        var lookupValue = Object.values(data);
        var exchangeRate = lookupValue[0];
        var yNum = parseInt(y, 10);
        console.log(exchangeRate);
        console.log(typeof exchangeRate);
        var newValue = yNum * exchangeRate;
        var newValue1 = newValue.toFixed(2);
        console.log(newValue1);
        convertedPrice2El.text("Converted Price = " + newValue1);
        evaluateCards();
      });
  } 
}

function evaluateCards() {
  var price1Text = convertedPrice1El.text();
  var price2Text = convertedPrice2El.text();
  var price1 = price1Text.slice(18);
  var price2 = price2Text.slice(18);
  var price1Num = parseInt(price1, 10);
  var price2Num = parseInt(price2, 10);
  
  if (price1Num < price2Num) {
    console.log("yay");
    goodTradeEl.removeClass("hidden");
  } else if (price2Num < price1Num) {
    console.log("boo");
    badTradeEl.removeClass("hidden");
  }
  // tradeEvalEl.removeClass("blank");
  // tradeEvalEl.addClass("shown");
}

matchBut.on("click", function (event) {
  event.preventDefault;
  var countryCode = currencySelection.val();
  var cardVal = parseInt(myCollectionTotalEl.text());
  var tradeCardVal = tradeCollectionTotalEl;
    
  //cuts price to 2 digits past dollar
  // var cardValUs = cardVal.substring(1);
  // var tradeCardValUs = tradeCardVal.substring(1);
  // var tradeCVal = tradeCardValUs.split(" ");
  // var tradeCardValFinal = tradeCVal[0];
  currencyConvert(countryCode, cardVal);
  currencyConvertTradeCard(countryCode, tradeCardVal);
  // currencySymbol(countryCode);
});

// function to add the list of currencies to the drop-down menu
function addCurrencies() {
  for (i = 0; i < currencies.length; i++) {
    var code = currencies[i];
    var currencyItem = $(`<option value=${code}>`);
    var currencyItemText = currencyItem.text(`${code}`);
    $("#currency").append(currencyItemText);
  }
}
// calls function to add currency list
addCurrencies();

function reloadCollection() {
  collectionResultsEl.html("");
  storedItemList = JSON.parse(localStorage.getItem("storedCards")) || [];
  for (var i = 0; i < storedItemList.length; i++) {
    var getMyCard = storedItemList[i];
    var collectionImg = $("<img>");
    var collectionPrice = $("<p id='collectionPrice'>");
    var cardBreak = $("<hr />");
    // divs for styling
    var collectionDisplay = $("<div>");
    var footerDisplay = $("<div>");
    // deleteButton.id = getMyCard.id;
    // console.log(getMyCard.id)
    // deleteButton.on("click", cardDeleteButton);
    // deleteButton.text("X");
    // adding price and delete button underneath each card in a box for styling
    collectionImg.attr("src", getMyCard.image);
    collectionImg.attr("data-price", storedItemList[i].price);
    collectionImg.attr("data-img", storedItemList[i].image)
    collectionPrice.text("$" + getMyCard.price);
    footerDisplay.addClass("collectionFooter");
    // append to sortableEl
    footerDisplay.append(collectionPrice, cardBreak);
    collectionDisplay.append(collectionImg, footerDisplay);
    collectionResultsEl.append(collectionDisplay);
    // indexReset();
    // deleteButton.on('click', function() {
            
    //     var getDelete = storedItemList;
    //     console.log(deleteButton.id);
    //     // console.log(getDelete);
    //     // //   var i = getDelete.data;
    //     // console.log(i);
    //     // console.log(deleteId);
        
    //     //   console.log($(this));
    //     //   console.log(getDelete)
    //     console.log("Card has been removed from collection.");
    //     var id = $(this).attr('data-id');
    //     //   console.log(getDelete.id);
    //     //   console.log(cardDataId);
    //     var filteredList = storedItemList.filter((item) => item.id !== cardDataId);
    //     //   console.log(filteredList);
    //     localStorage.setItem("storedCards", JSON.stringify(filteredList));

    //     reloadCollection();
    collectionImg.on("click", function (event) {
      var chosenCard = event.target;
      // console.log(chosenCard);
      if (chosenCard.matches("img")) {
        // cardIndex = $(this).attr("data-index");
        cardImg = $(this).attr("data-img");
        cardPrice = $(this).attr("data-price");
        // cardDataId = $(this).attr("data-id");
        // cardNm = $(this).attr("data-name");
        // console.log(cardIndex);
        console.log(cardImg);
        console.log(cardPrice);
        // console.log(cardDataId);
        // console.log(cardNm);
      }
  })
  
}
}

$(function () {
  reloadCollection();
  
})

// function currencySymbol(x) {
//   var currencySymbolUrl = "https://free.currconv.com/api/v7/currencies?apiKey=53972c8322e6040cface";

//   fetch(currencySymbolUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then (function (data) {
//     console.log(Object.values(data));
//     var countryDataArray = Object.values(data);
//     var country = Object.values(x);
//     console.log(country);
//     // var countryData = data.results
//   })
// }
//converts currency with x=country code & y=truncated card value


//uncomment to test
//echo convertCurrency(10, 'USD', 'PHP');

// var getCardHistory =  || [];
function getMyCard() {
  imgUrl = JSON.parse(localStorage.getItem("storedCard"));
  var imgEl = $("<img>");
  imgEl.attr("src", imgUrl);
  myCardImg.append(imgEl);
  // var tradeCardApi = 'https://api.pokemontcg.io/v2/cards?q=name:' + mySearchInput.val() +'&orderBy=name';

  // fetch(tradeCardApi).then(function(response){
  //     return response.json();
  // }).then(function (data) {
  //     console.log(data);
  //     for (var i = 0; i < data.data.length; i++) {
  //         imgUrl = data.data[i].images.small;
  //         var imgEl = $('<img>');
  //         imgEl.attr('src', imgUrl);
  //         myCardImg.append(imgEl);
  //     }
  // })
}

function getTradeCard() {
  var tradeCardApi =
    "https://api.pokemontcg.io/v2/cards?q=name:" +
    tradeInput.val() +
    "&orderBy=name";

  fetch(tradeCardApi)
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
          priceEl.attr("id", "tradePrice");
          imageEl.attr("src", imgUrl);
          imageEl.attr("data-index", i);
          imageEl.attr("data-name", cardName);
          imageEl.attr("data-price", priceTag);
          imageEl.attr("data-id", cardId);
          imageEl.attr("data-img", imgUrl);
          aTag.append(imageEl, priceEl);
          searchResultImg.append(aTag, pageBreak);
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
          var priceEl = $("<p>");
          var pageBreak = $("<hr size='3' />");
          priceEl.text("$" + priceTag + " - " + i);
          priceEl.attr("id", "tradePrice");
          imageEl.attr("src", imgUrl);
          imageEl.attr("data-index", i);
          imageEl.attr("data-name", cardName);
          imageEl.attr("data-price", priceTag);
          imageEl.attr("data-id", cardId);
          imageEl.attr("data-img", imgUrl);
          aTag.append(imageEl, priceEl);
          searchResultImg.append(aTag, pageBreak);
        } else if (!data.data[i].tcgplayer) {
          var imgUrl = data.data[i].images.small;
          var cardId = data.data[i].id;
          var cardName = data.data[i].name;
          var aTag = $("<a>");
          var imageEl = $("<img>");
          var priceEl = $("<p>");
          var pageBreak = $("<hr size='3' />");
          priceEl.text("$0.00" + " - " + i);
          priceEl.attr("id", "tradePrice");
          imageEl.attr("src", imgUrl);
          imageEl.attr("data-index", i);
          imageEl.attr("data-name", cardName);
          imageEl.attr("data-price", priceTag);
          imageEl.attr("data-id", cardId);
          imageEl.attr("data-img", imgUrl);
          aTag.append(imageEl, priceEl);
          searchResultImg.append(aTag, pageBreak);
        }

        imageEl.on("click", function (event) {
          var chosenCard = event.target;
          // console.log(chosenCard);
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
}

mySearch.on("submit", function (event) {
  event.preventDefault();
  myCardImg.empty();
  getMyCard();
});

partnerTradeButton.on("click", function () {
  var storedItem = {
    image: cardImg,
    price: cardPrice,
    id: cardDataId,
    index: cardIndex,
    name: cardNm,
  };
  console.log(storedItem);
  var partnerTradeDisplayCard = $("<img>");
  var partnerPriceDisplay = $("<div>");
  var partnerCollectionDisplay = $("<div>");
  var partnerDeleteButton = $("<button>")
  var partnerTradeItemDisplay = $("<div>")
  partnerDeleteButton.id = storedItem.id;
  partnerDeleteButton.text("X");
  partnerTradeDisplayCard.attr("src", storedItem.image);
  partnerPriceDisplay.text("$" + storedItem.price);
  partnerTradeItemDisplay.append(partnerPriceDisplay, partnerDeleteButton);
  partnerCollectionDisplay.append(partnerTradeDisplayCard, partnerTradeItemDisplay);
  partnerTradeDisplay.append(partnerCollectionDisplay);
  console.log(storedItem.price);
  console.log(partnerCollectionPrices);
  var priceVal = parseFloat(storedItem.price);
  partnerCollectionPrices.push(priceVal);
  console.log(partnerCollectionPrices);
  addPartnerTradeTotal();
  // console.log(partnerPriceTotal);
  // convertedPrice2El.text(partnerPriceTotal);

  
  // reloadCollection();
});

myTradeButton.on("click", function (){
  var storedItem = {
    image: cardImg,
    price: cardPrice,
    // id: cardDataId,
    // index: cardIndex,
    // name: cardNm,
  };
  console.log(storedItem);
  var myTradeDisplayCard = $("<img>");
  var myPriceDisplay = $("<div>");
  var myCollectionDisplay = $("<div>");
  var myDeleteButton = $("<button>")
  var myTradeItemDisplay = $("<div>")
  myDeleteButton.id = storedItem.id;
  myDeleteButton.text("X");
  myTradeDisplayCard.attr("src", storedItem.image);
  myPriceDisplay.text("$" + storedItem.price);
  myTradeItemDisplay.append(myPriceDisplay, myDeleteButton);
  myCollectionDisplay.append(myTradeDisplayCard, myTradeItemDisplay);
  myTradeDisplay.append(myCollectionDisplay);
  console.log(storedItem.price);
  console.log(myCollectionPrices);
  var priceVal = parseFloat(storedItem.price);
  myCollectionPrices.push(priceVal);
  console.log(myCollectionPrices);
  addMyTradeTotal();
  // addPartnerTradeTotal();
})

function addPartnerTradeTotal (){
  var sum = partnerCollectionPrices.reduce(function(a, b) {
    return a + b
  }, 0);
  console.log(sum);
  
  tradeCollectionTotalEl = sum;
  console.log(tradeCollectionTotalEl);
  console.log(typeof tradeCollectionTotalEl);
};

function addMyTradeTotal(){
  var sum = myCollectionPrices.reduce(function(a, b){
    return a + b
  }, 0);
  
  myCollectionTotalEl.text(sum);
}

searchForm.on("submit", function (event) {
  event.preventDefault();
  searchResultImg.empty();
  // if(tradeInput.val() === '') {
  //     alert('Please enter a valid Pokemon name.');
  // } else {
  //     pokeName = tradeInput.val();
  // }
  // console.log(pokeName);
  getTradeCard();
});