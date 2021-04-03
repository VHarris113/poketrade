var cardInput;
var tradeInput = $('#tradeSearchInput');
var searchForm = $('#tradeSearch');
var mySearchInput = $('#mySearchInput');
var mySearch = $('#mySearch');

var pokeName;

var myCardImg = $('#img-holder');
var tradeImg = $('#trade-img-holder');

var button = $('#matchBtn');

// var getCardHistory =  || [];



//uncomment to test
//echo convertCurrency(10, 'USD', 'PHP');

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

