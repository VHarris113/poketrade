var cardInput
var tradeInput = $('#tradeSearchInput');
var pokeName;

$('#tradeSearchBtn').on('click', function (event) {
    event.preventDefault();
    if(tradeInput.val() === '') {
        alert('Please enter a valid Pokemon name.');
    } else {
        pokeName = tradeInput.val();
    }
    console.log(pokeName);
});

function getMyCard() {
    
};

function getTradeCard(pokeName) {
    
    var tradeCardSelection = pokeName;
    var tradeCardApi = "https://api.pokemontcg.io/v2/cards" ;
};