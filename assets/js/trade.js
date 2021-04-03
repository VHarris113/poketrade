var cardInput;
var tradeInput = $('#tradeSearchInput');
var searchForm = $('#tradeSearch');
var mySearchInput = $('#mySearchInput');
var mySearch = $('#mySearch');

var pokeName;

var myCardImg = $('#img-holder');
var tradeImg = $('#trade-img-holder');

var button = $('#matchBtn');

var currencies = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XCD', 'XDR', 'XOF', 'XPF',  'YER', 'ZAR', 'ZMK', 'ZMW', 'ZWL'];

function addCurrencies() {
    for(i=0; i<currencies.length; i++) {
        var code = currencies[i];
        console.log(code);
        var currencyItem = $(`<option value=${code}>`);
        var currencyItemText = currencyItem.text(`${code}`);
        $("#currency").append(currencyItemText);
    }
}
addCurrencies();



var countryCode = 'EUR';
var valueUSD = 10.50;
function currencyConvert(x) {
    
    var currencyUrl = `https://free.currconv.com/api/v7/convert?q=USD_${x}&compact=ultra&apiKey=53972c8322e6040cface`;

    fetch(currencyUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var exchangeRate = data.USD_EUR;
        console.log(exchangeRate);
        console.log(typeof exchangeRate);
        var newValue = valueUSD * exchangeRate;
        console.log(newValue);
        
    })
}

currencyConvert(countryCode);


// function convertCurrency() {
//     var currencyUrl = "'https://api.fastforex.io/fetch-one?from=usd&to=eur&api_key=154fe46305-15630ffeea-qqz1pl";

//     fetch(curencyUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
// })};


//uncomment to test
//echo convertCurrency(10, 'USD', 'PHP');

// var getCardHistory =  || [];
function getMyCard() {
    imgUrl = JSON.parse(localStorage.getItem("storedCard"));
    var imgEl = $('<img>');
    imgEl.attr('src', imgUrl);
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
    var tradeCardApi = 'https://api.pokemontcg.io/v2/cards?q=name:' + tradeInput.val() +'&orderBy=name';
    
    fetch(tradeCardApi).then(function(response){
        return response.json();
    }).then(function (data) {
        console.log(data);
        for (var i = 0; i < data.data.length; i++) {
            imgUrl = data.data[i].images.small;
            var imgEl = $('<img>');
            imgEl.attr('src', imgUrl);
            tradeImg.append(imgEl);
        }
    // button.on('click', function(event) {
    //     event.preventDefault();
    //     localStorage.setItem("storedCard", JSON.stringify(data.data[0].images.small)); 
    // })
    
    }) 
}
mySearch.on('submit', function (event) {
    event.preventDefault();
    myCardImg.empty();
    getMyCard();
})

searchForm.on('submit', function (event) {
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

