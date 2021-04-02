var cardDisplay = $("card-display");
var imageOne = $("#image-one");
var imageTwo = $("#image-two");
var imageThree = $("#image-three");

function init() {
    getApiInfo();
}


function getApiInfo() {
    var requestUrl = "https://api.pokemontcg.io/v2/cards"
    fetch(requestUrl).then(function (response){
        return response.json();
    }).then(function (data){
        // generateRandomCards();
        console.log(data.data[0].images.small)
        var ranNum1 = Math.floor(Math.random() * data.data.length)
        var ranNum2 = Math.floor(Math.random() * data.data.length)
        var ranNum3 = Math.floor(Math.random() * data.data.length)
        console.log(ranNum1);
        console.log(ranNum2);
        console.log(ranNum3);
        var imageEl1 = $("<img>");
        var imageEl2 = $("<img>");
        var imageEl3 = $("<img>");
        imageEl1.attr("src", data.data[ranNum1].images.small);
        imageOne.append(imageEl1);
        imageEl2.attr("src", data.data[ranNum2].images.small);
        imageTwo.append(imageEl2);
        imageEl3.attr("src", data.data[ranNum3].images.small);
        imageThree.append(imageEl3);

        // generateRandomCards();
        // function generateRandomCards(cardIndex) {
        //     var number = Math.floor(Math.random() * cardIndex);
        //     for (var i = 0; i < 3; i++) {
        //         console.log(data.data[number].images.small)
        //         var imgUrl = data.data[number].images.small;
        //         var imageEl = $("<img>");
        //         imageEl.attr("src", imgUrl);
        //         card.append(priceEl);
            })
        };


init();