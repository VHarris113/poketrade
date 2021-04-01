var cardInput;
var tradeInput = $('#tradeSearchInput');
var searchForm = $('#tradeSearch');
var pokeName;

var tradeImg = $('#trade-img-holder');

// function getMyCard() {
//     var tradeCardApi = 'https://api.pokemontcg.io/v2/cards?q=name:' + tradeInput.val() +'&orderBy=name';
    
//     fetch(tradeCardApi).then(function(response){
//         return response.json();
//     // })
//     //     url: tradeCardApi,
//     //     method: "GET",
//     }).then(function (data) {
//         console.log(data);
//         for (var i = 0; i < data.data.length; i++) {
//             imgUrl = data.data[i].images.imgUrl;
//             var imgEl = $('<img>');
//             imgEl.attr('src', imgUrl);

//             tradeImg.append(imgEl);
//         }
//     });
// };

function getTradeCard() {
    var tradeCardApi = 'https://api.pokemontcg.io/v2/cards?q=name:' + tradeInput.val() +'&orderBy=name';
    
    fetch(tradeCardApi).then(function(response){
        return response.json();
    // })
    //     url: tradeCardApi,
    //     method: "GET",
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

searchForm.on('submit', function (event) {
    event.preventDefault();
    // if(tradeInput.val() === '') {
    //     alert('Please enter a valid Pokemon name.');
    // } else {
    //     pokeName = tradeInput.val();
    // }
    // console.log(pokeName);
    getTradeCard();
});