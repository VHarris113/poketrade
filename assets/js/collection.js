
function getApi() {
    var requestUrl = "https://api.pokemontcg.io/v2/cards?q=name:pikachu" 
    
    fetch(requestUrl).then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
    })
}

getApi();