var cardInput;
var tradeInput = $("#tradeSearchInput");
var searchForm = $("#tradeSearch");
var mySearchInput = $("#mySearchInput");
var mySearch = $("#mySearch");

var pokeName;

var myCardImg = $("#img-holder");
var tradeImg = $("#trade-img-holder");

var button = $("#matchBtn");

var convertedPriceEl = $(".convertedPrice");
var matchBut = $("#matchBtn");
var currencySelection = $("#currency");
var cardValueUSEl = $("#cardValueUS");
var cardVal = cardValueUSEl.text();
console.log(cardVal);
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

function addCurrencies() {
  for (i = 0; i < currencies.length; i++) {
    var code = currencies[i];
    var currencyItem = $(`<option value=${code}>`);
    var currencyItemText = currencyItem.text(`${code}`);
    $("#currency").append(currencyItemText);
  }
}
addCurrencies();



// var countryCode = "EUR";


function currencyConvert(x, y) {
  var currencyUrl = `https://free.currconv.com/api/v7/convert?q=USD_${x}&compact=ultra&apiKey=53972c8322e6040cface`;

  fetch(currencyUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lookup = `data.USD_${x}`;
      console.log(lookup);
    var exchangeRate = lookup;
      console.log(exchangeRate);
      console.log(typeof exchangeRate);
      var newValue = y * exchangeRate;
      var newValue1 = newValue.toFixed(2);
      console.log(newValue1);
      convertedPriceEl.text("Converted Price = " + newValue1);
    });
}

matchBut.on("click", function (event) {
    event.preventDefault;
    console.log("the button is working");
    var countryCode = currencySelection.val();
    console.log(countryCode);
    console.log(cardVal);
    var cardValUs = cardVal.substring(1);
    console.log(cardValUs);
    currencyConvert(countryCode, cardValUs);
});

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
        imgUrl = data.data[i].images.small;
        var imgEl = $("<img>");
        imgEl.attr("src", imgUrl);
        tradeImg.append(imgEl);
      }
      // button.on('click', function(event) {
      //     event.preventDefault();
      //     localStorage.setItem("storedCard", JSON.stringify(data.data[0].images.small));
      // })
    });
}
mySearch.on("submit", function (event) {
  event.preventDefault();
  myCardImg.empty();
  getMyCard();
});

searchForm.on("submit", function (event) {
  event.preventDefault();
  tradeImg.empty();
  // if(tradeInput.val() === '') {
  //     alert('Please enter a valid Pokemon name.');
  // } else {
  //     pokeName = tradeInput.val();
  // }
  // console.log(pokeName);
  getTradeCard();
});
