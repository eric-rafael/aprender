const btcDiv = document.querySelector('.btc');

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcDiv.innerText = btcJson.BRL;
        console.log(btcJson.BRL.buy)
    })
}

setInterval(fetchBtc, 1000);

fetchBtc();

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s