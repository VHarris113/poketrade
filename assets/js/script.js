var tradeButton = $('#tradeBtn');

function init() {
    getApiInfo();
}

// randomization of homepage cards
function getApiInfo() {
    var requestUrl = "https://api.pokemontcg.io/v2/cards"
    fetch(requestUrl).then(function (response){
        return response.json();
    }).then(function (data){
        var ranNum1 = Math.floor(Math.random() * data.data.length)
        var ranNum2 = Math.floor(Math.random() * data.data.length)
        var ranNum3 = Math.floor(Math.random() * data.data.length)
        var imageEl1 = $("#image-one");
        var imageEl2 = $("#image-two");
        var imageEl3 = $("#image-three");
        imageEl1.attr("src", data.data[ranNum1].images.small);
        imageEl2.attr("src", data.data[ranNum2].images.small);
        imageEl3.attr("src", data.data[ranNum3].images.small);
    })
};

// Trade Now button sends user to trade.html
tradeButton.on("click", function() {
    window.location.replace('./trade.html');
})

init();