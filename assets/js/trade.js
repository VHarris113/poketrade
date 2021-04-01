var cardInput;
var tradeInput = $('#tradeSearchInput');
var searchForm = $('#tradeSearch');
var mySearchInput = $('#mySearchInput');
var mySearch = $('#mySearch');

var pokeName;

var myCardImg = $('#img-holder');
var tradeImg = $('#trade-img-holder');

function getMyCard() {
    var tradeCardApi = 'https://api.pokemontcg.io/v2/cards?q=name:' + mySearchInput.val() +'&orderBy=name';
    
    fetch(tradeCardApi).then(function(response){
        return response.json();
    }).then(function (data) {
        console.log(data);
        for (var i = 0; i < data.data.length; i++) {
            imgUrl = data.data[i].images.small;
            var imgEl = $('<img>');
            imgEl.attr('src', imgUrl);
            myCardImg.append(imgEl);
        }
    })
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